// Root app — composes the Step 3 card, template bar, dialogs, and toasts.

const { useState, useEffect, useMemo, useCallback } = React;

function App() {
  const [templates, setTemplates] = useState(INITIAL_TEMPLATES);

  // Active template = the one currently applied. Defaults to the default template (auto-apply on new proposals).
  const defaultTpl = INITIAL_TEMPLATES.find(t => t.isDefault) || INITIAL_TEMPLATES[0];
  const [activeId, setActiveId] = useState(defaultTpl.id);

  // Working copy of step 3 fields — diverges from template when user edits.
  const [producers, setProducers] = useState(defaultTpl.producers);
  const [agency, setAgency] = useState(defaultTpl.agency);

  // Dialog state
  const [saveDialog, setSaveDialog] = useState(null); // { mode, initial, onSubmit }
  const [updateDialog, setUpdateDialog] = useState(false);
  const [manageOpen, setManageOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const [toast, setToast] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const showToast = useCallback((msg, undo) => {
    setToast({ msg, undo, id: Date.now() });
    setTimeout(() => setToast(t => t && t.id ? null : t), 4200);
  }, []);
  useEffect(() => {
    if (!toast) return;
    const id = toast.id;
    const t = setTimeout(() => setToast(curr => curr && curr.id === id ? null : curr), 4200);
    return () => clearTimeout(t);
  }, [toast]);

  const activeTpl = templates.find(t => t.id === activeId);
  const dirty = activeTpl && !isStateEqualToTemplate({ producers, agency }, activeTpl);

  /* Build a human-readable diff summary for the "save changes" dialog */
  const dirtySummary = useMemo(() => {
    if (!activeTpl) return [];
    const out = [];
    if (!deepEqualProducers(producers, activeTpl.producers)) {
      const before = activeTpl.producers.length;
      const after = producers.length;
      if (before !== after) {
        out.push(`Producer team: ${before} → ${after} member${after === 1 ? '' : 's'}`);
      } else {
        // count rows that differ
        let changed = 0;
        for (let i = 0; i < producers.length; i++) {
          const a = activeTpl.producers[i] || {};
          const b = producers[i];
          if (a.first !== b.first || a.last !== b.last || a.email !== b.email || a.bio !== b.bio || a.phone !== b.phone) {
            changed++;
          }
        }
        out.push(`Producer details: ${changed} row${changed === 1 ? '' : 's'} edited`);
      }
    }
    if (activeTpl.agency.agencyName !== agency.agencyName) out.push('Agency name updated');
    if (activeTpl.agency.aboutUs !== agency.aboutUs) out.push('About Us copy edited');
    if (activeTpl.agency.disclosures !== agency.disclosures) out.push('Disclosures edited');
    if ((activeTpl.agency.serviceSummary || '') !== (agency.serviceSummary || '')) out.push('Service Summary edited');
    if (activeTpl.agency.logoFile !== agency.logoFile) out.push('Agency logo changed');
    return out;
  }, [activeTpl, producers, agency]);

  // Per-field modified flags for the inline ● markers
  const modified = useMemo(() => {
    if (!activeTpl) return {};
    return {
      producers: !deepEqualProducers(producers, activeTpl.producers),
      agencyName: activeTpl.agency.agencyName !== agency.agencyName,
      aboutUs: activeTpl.agency.aboutUs !== agency.aboutUs,
      disclosures: activeTpl.agency.disclosures !== agency.disclosures,
      serviceSummary: (activeTpl.agency.serviceSummary || '') !== (agency.serviceSummary || ''),
      logoFile: activeTpl.agency.logoFile !== agency.logoFile,
    };
  }, [activeTpl, producers, agency]);

  /* ------------------ Template actions ------------------ */
  const applyTemplate = (id) => {
    const t = templates.find(x => x.id === id);
    if (!t) return;
    setActiveId(id);
    setProducers(t.producers);
    setAgency(t.agency);
    showToast(`Applied "${t.name}" to Step 3`);
  };

  const revertToTemplate = () => {
    if (!activeTpl) return;
    setProducers(activeTpl.producers);
    setAgency(activeTpl.agency);
    showToast('Reverted Step 3 to the saved template');
  };

  const setDefaultTemplate = (id) => {
    setTemplates(ts => ts.map(t => ({ ...t, isDefault: t.id === id })));
    const t = templates.find(x => x.id === id);
    showToast(`"${t.name}" is now the default for new proposals`);
  };

  const handleSaveAsNew = () => {
    setSaveDialog({
      mode: 'fork',
      initial: { name: '', description: '', isDefault: false, shared: true },
      onSubmit: (vals) => {
        const id = 'nt' + Date.now();
        const newTpl = {
          id,
          name: vals.name,
          description: vals.description,
          owner: { name: 'Avery Chen', initials: 'AC', isYou: true },
          updatedAt: new Date().toISOString(),
          isDefault: vals.isDefault,
          shared: vals.shared,
          usageCount: 1,
          producers,
          agency,
        };
        setTemplates(ts => {
          let next = [newTpl, ...ts];
          if (vals.isDefault) {
            next = next.map(t => ({ ...t, isDefault: t.id === id }));
          }
          return next;
        });
        setActiveId(id);
        setSaveDialog(null);
        showToast(`Saved new template "${vals.name}"`);
      },
    });
  };

  const handleSaveChanges = () => {
    if (!activeTpl) { handleSaveAsNew(); return; }
    setUpdateDialog(true);
  };

  const confirmUpdate = () => {
    setTemplates(ts => ts.map(t => t.id === activeId ? {
      ...t,
      producers,
      agency,
      updatedAt: new Date().toISOString(),
    } : t));
    setUpdateDialog(false);
    showToast(`Updated "${activeTpl.name}"`);
  };

  const editTemplateDetails = (id) => {
    const t = templates.find(x => x.id === id);
    if (!t) return;
    setSaveDialog({
      mode: 'edit',
      initial: { id: t.id, name: t.name, description: t.description, isDefault: t.isDefault, shared: t.shared },
      onSubmit: (vals) => {
        setTemplates(ts => ts.map(x => {
          if (x.id === id) return { ...x, name: vals.name, description: vals.description, shared: vals.shared, isDefault: vals.isDefault };
          if (vals.isDefault) return { ...x, isDefault: false };
          return x;
        }));
        setSaveDialog(null);
        showToast(`Updated "${vals.name}"`);
      },
    });
  };

  const duplicateTemplate = (id) => {
    const t = templates.find(x => x.id === id);
    if (!t) return;
    const newId = 'nt' + Date.now();
    const copy = { ...t, id: newId, name: t.name + ' (copy)', isDefault: false, owner: { name: 'Avery Chen', initials: 'AC', isYou: true }, updatedAt: new Date().toISOString(), usageCount: 0 };
    setTemplates(ts => [copy, ...ts]);
    showToast(`Duplicated "${t.name}"`);
  };

  const deleteTemplate = (id) => {
    const t = templates.find(x => x.id === id);
    if (!t) return;
    setDeleteTarget(t);
  };
  const confirmDelete = () => {
    const t = deleteTarget;
    const idx = templates.findIndex(x => x.id === t.id);
    setTemplates(ts => ts.filter(x => x.id !== t.id));
    if (activeId === t.id) {
      const next = templates.find(x => x.id !== t.id);
      if (next) {
        setActiveId(next.id);
        setProducers(next.producers);
        setAgency(next.agency);
      }
    }
    setDeleteTarget(null);
    showToast(`Deleted "${t.name}"`);
  };

  /* ------------------ Render ------------------ */
  return (
    <div className="stage">
      <div className="step-card" data-screen-label="01 Step 3 with templates">
        <div className="step-header">
          <div className="step-header-left">
            <h3 className="step-title">Step 3: Add Additional Information to the proposal</h3>
            <InfoTooltip>
              The <IconStar filled size={16} style={{ color: 'white', verticalAlign: '-1px' }} /> <strong>default template</strong> auto-applies whenever you start a new proposal. Click the pin in the picker to set any template as default.
            </InfoTooltip>
          </div>
          <button className="btn-hide" onClick={() => setCollapsed(c => !c)}>
            {collapsed ? <IconChevronDown size={16} /> : <IconChevronUp size={16} />}
            {collapsed ? 'Show' : 'Hide'}
          </button>
        </div>

        {!collapsed && (
        <>
        <div className={`tpl-bar ${dirty ? 'dirty' : ''}`}>
          <span className="tpl-bar-label">Template</span>
          <TemplatePicker
            templates={templates}
            activeId={activeId}
            isDirty={dirty}
            onApply={applyTemplate}
            onSaveAsNew={handleSaveAsNew}
            onManageOpen={() => setManageOpen(true)}
            onEdit={editTemplateDetails}
            onSetDefault={setDefaultTemplate}
            onDuplicate={duplicateTemplate}
            onDelete={deleteTemplate}
          />

          <div className="tpl-bar-actions">
            {dirty && (
              <>
                <button className="btn btn-text" onClick={revertToTemplate}>
                  <IconRevert size={16} /> Discard
                </button>
                <button className="btn btn-secondary" onClick={handleSaveAsNew}>
                  Save as new
                </button>
                <button className="btn btn-primary" onClick={handleSaveChanges}>
                  Save changes to template
                </button>
              </>
            )}
            {!dirty && (
              <button className="btn btn-text" onClick={handleSaveAsNew} title="Save the current Step 3 as a new template">
                <IconPlus size={16} /> Save as template
              </button>
            )}
          </div>
        </div>

        <Step3Body
          producers={producers}
          agency={agency}
          onProducersChange={setProducers}
          onAgencyChange={setAgency}
          modified={modified}
        />
        <div className="s3-body">
          <CollapsibleSection title="Accounts in proposal" defaultOpen>
            <AccountsTable />
          </CollapsibleSection>
        </div>
        </>
        )}
      </div>

      {/* Modals */}
      {saveDialog && (
        <SaveTemplateDialog
          mode={saveDialog.mode}
          initial={saveDialog.initial}
          templates={templates}
          onClose={() => setSaveDialog(null)}
          onSubmit={saveDialog.onSubmit}
        />
      )}
      {updateDialog && activeTpl && (
        <UpdateTemplateDialog
          template={activeTpl}
          summary={dirtySummary}
          onClose={() => setUpdateDialog(false)}
          onConfirm={confirmUpdate}
          onSaveAsNew={() => { setUpdateDialog(false); handleSaveAsNew(); }}
        />
      )}
      {manageOpen && (
        <ManageModal
          templates={templates}
          activeId={activeId}
          onClose={() => setManageOpen(false)}
          onApply={applyTemplate}
          onEdit={editTemplateDetails}
          onDuplicate={duplicateTemplate}
          onDelete={deleteTemplate}
          onSetDefault={setDefaultTemplate}
          onCreate={() => { setManageOpen(false); handleSaveAsNew(); }}
        />
      )}
      {deleteTarget && (
        <DeleteConfirm
          template={deleteTarget}
          onClose={() => setDeleteTarget(null)}
          onConfirm={confirmDelete}
        />
      )}

      {toast && (
        <div className="toast-wrap">
          <div className="toast">
            <IconCheck size={16} />
            <span>{toast.msg}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// helper from data.js — re-declared here so this file is self-contained for diff calc
function deepEqualProducers(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    const x = a[i], y = b[i];
    if (x.first !== y.first || x.last !== y.last || x.email !== y.email ||
        x.bio !== y.bio || x.phone !== y.phone) return false;
  }
  return true;
}

const { useState: _useState_app, useEffect: _useEffect_app, useMemo: _useMemo_app, useCallback: _useCallback_app } = React;
// (already destructured at top of other files; not needed here)

function InfoTooltip({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <span
      className="info-wrap"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <button
        type="button"
        className="info-btn"
        aria-label="About templates"
        onClick={() => setOpen(o => !o)}
      >
        <IconInfo size={16} />
      </button>
      {open && <div className="tooltip" role="tooltip">{children}</div>}
    </span>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
