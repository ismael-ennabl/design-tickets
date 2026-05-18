// Root app for the Accounts step — same step pattern as Step 3 but body is a mock accounts table.

const { useState: _useStateA, useEffect: _useEffectA, useMemo: _useMemoA, useCallback: _useCallbackA } = React;
const useState = _useStateA;
const useEffect = _useEffectA;
const useMemo = _useMemoA;
const useCallback = _useCallbackA;

function AccountsApp() {
  const [templates, setTemplates] = useState(INITIAL_TEMPLATES);
  const defaultTpl = INITIAL_TEMPLATES.find(t => t.isDefault) || INITIAL_TEMPLATES[0];
  const [activeId, setActiveId] = useState(defaultTpl.id);

  const [saveDialog, setSaveDialog] = useState(null);
  const [manageOpen, setManageOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [toast, setToast] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  const showToast = useCallback((msg) => {
    setToast({ msg, id: Date.now() });
    setTimeout(() => setToast(null), 4200);
  }, []);

  const activeTpl = templates.find(t => t.id === activeId) || null;
  const dirty = false; // body is read-only mock data

  const applyTemplate = (id) => {
    const t = templates.find(x => x.id === id);
    if (!t) return;
    setActiveId(id);
    showToast(`Applied "${t.name}"`);
  };

  const handleSaveAsNew = () => {
    setSaveDialog({
      mode: 'fork',
      initial: { name: '', description: '', isDefault: false, shared: true },
      onSubmit: (vals) => {
        const id = 'tpl' + Date.now();
        setTemplates(ts => {
          const next = vals.isDefault ? ts.map(t => ({ ...t, isDefault: false })) : ts;
          return [...next, {
            id, name: vals.name, description: vals.description,
            owner: { name: 'Avery Chen', initials: 'AC', isYou: true },
            updatedAt: new Date().toISOString(),
            isDefault: vals.isDefault, shared: vals.shared, usageCount: 0,
            producers: activeTpl?.producers || [], agency: activeTpl?.agency || {},
          }];
        });
        setActiveId(id);
        setSaveDialog(null);
        showToast(`Saved new template "${vals.name}"`);
      },
    });
  };

  const editTemplateDetails = (id) => {
    const t = templates.find(x => x.id === id);
    if (!t) return;
    setSaveDialog({
      mode: 'edit',
      initial: { id: t.id, name: t.name, description: t.description, isDefault: t.isDefault, shared: t.shared },
      onSubmit: (vals) => {
        setTemplates(ts => ts.map(x => {
          if (x.id === id) return { ...x, name: vals.name, description: vals.description, isDefault: vals.isDefault, shared: vals.shared, updatedAt: new Date().toISOString() };
          if (vals.isDefault) return { ...x, isDefault: false };
          return x;
        }));
        setSaveDialog(null);
        showToast(`Updated "${vals.name}"`);
      },
    });
  };

  const setDefaultTemplate = (id) => {
    setTemplates(ts => ts.map(t => ({ ...t, isDefault: t.id === id ? !t.isDefault : false })));
  };

  const duplicateTemplate = (id) => {
    const t = templates.find(x => x.id === id);
    if (!t) return;
    const newId = 'tpl' + Date.now();
    setTemplates(ts => [...ts, { ...t, id: newId, name: t.name + ' (copy)', isDefault: false, usageCount: 0, updatedAt: new Date().toISOString() }]);
    showToast(`Duplicated "${t.name}"`);
  };

  const deleteTemplate = (id) => {
    const t = templates.find(x => x.id === id);
    if (t) setDeleteTarget(t);
  };

  const confirmDelete = () => {
    const t = deleteTarget;
    setTemplates(ts => ts.filter(x => x.id !== t.id));
    if (activeId === t.id) {
      const next = templates.find(x => x.id !== t.id);
      if (next) setActiveId(next.id);
    }
    setDeleteTarget(null);
    showToast(`Deleted "${t.name}"`);
  };

  return (
    <div className="stage">
      <div className="step-card" data-screen-label="01 Accounts step">
        <div className="step-header">
          <div className="step-header-left">
            <h3 className="step-title">Step 4: Select Accounts to include in the proposal</h3>
            <InfoTooltipA>
              The <IconStar filled size={16} style={{ color: 'white', verticalAlign: '-1px' }} /> <strong>default template</strong> auto-applies whenever you start a new proposal. Click the pin in the picker to set any template as default.
            </InfoTooltipA>
          </div>
          <button className="btn-hide" onClick={() => setCollapsed(c => !c)}>
            {collapsed ? <IconChevronDown size={16} /> : <IconChevronUp size={16} />}
            {collapsed ? 'Show' : 'Hide'}
          </button>
        </div>

        {!collapsed && (
        <>
        <div className="tpl-bar">
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
            <button className="btn btn-text" onClick={handleSaveAsNew} title="Save the current selection as a new template">
              <IconPlus size={16} /> Save as template
            </button>
          </div>
        </div>

        <div className="s3-body">
          <CollapsibleSection title="Accounts in proposal" defaultOpen>
            <AccountsTable />
          </CollapsibleSection>
        </div>
        </>
        )}
      </div>

      {saveDialog && (
        <SaveTemplateDialog
          mode={saveDialog.mode}
          initial={saveDialog.initial}
          templates={templates}
          onClose={() => setSaveDialog(null)}
          onSubmit={saveDialog.onSubmit}
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

function InfoTooltipA({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <span
      className="info-wrap"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button type="button" className="info-btn" aria-label="About templates" onClick={() => setOpen(o => !o)}>
        <IconInfo size={16} />
      </button>
      {open && <div className="tooltip" role="tooltip">{children}</div>}
    </span>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AccountsApp />);
