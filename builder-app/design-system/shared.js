// === picker.jsx ===
// Template picker — trigger button + dropdown menu with search,
// per-row gear (edit), star (set default), and footer actions.

// @component TemplatePicker
// @description Dropdown picker for selecting and managing named templates. Includes search, default-star, and per-row actions.
// @example
// <TemplatePicker
//   templates={templates}
//   activeId={activeId}
//   isDirty={dirty}
//   onApply={id => applyTemplate(id)}
//   onSaveAsNew={() => openSaveDialog()}
//   onManageOpen={() => setManageOpen(true)}
//   onEdit={id => openEditDialog(id)}
//   onSetDefault={id => setDefault(id)}
//   onDuplicate={id => duplicate(id)}
//   onDelete={id => deleteTemplate(id)}
// />
// @props
// templates    array of { id, name, description, isDefault, shared, owner: { name, initials, isYou }, updatedAt, usageCount }
// activeId     string — id of the currently applied template
// isDirty      boolean — shows unsaved-changes indicator on the trigger
// onApply      (id) => void
// onSaveAsNew  () => void — opens save-as-new dialog
// onManageOpen () => void — opens ManageModal
// onEdit       (id) => void
// onSetDefault (id) => void
// onDuplicate  (id) => void
// onDelete     (id) => void
// @end
const { useState, useRef, useEffect, useMemo } = React;

function useClickOutside(ref, handler, enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) handler(e);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [enabled, handler]);
}

function TemplatePicker({
  templates, activeId, isDirty,
  onApply, onSaveAsNew, onManageOpen, onEdit, onSetDefault, onDuplicate, onDelete,
}) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const rootRef = useRef(null);
  const searchRef = useRef(null);
  useClickOutside(rootRef, () => setOpen(false), open);

  useEffect(() => {
    if (open && searchRef.current) {
      setTimeout(() => searchRef.current && searchRef.current.focus(), 30);
    } else { setQ(''); }
  }, [open]);

  const active = templates.find(t => t.id === activeId);
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return templates;
    return templates.filter(t =>
      t.name.toLowerCase().includes(s) ||
      (t.description || '').toLowerCase().includes(s) ||
      t.owner.name.toLowerCase().includes(s)
    );
  }, [q, templates]);

  return (
    <div ref={rootRef} style={{ position: 'relative', display: 'inline-flex' }}>
      <button
        className="tpl-trigger"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <span className="tpl-trigger-left">
          {active && active.isDefault && (
            <span className="star" title="Default template">
              <IconStar filled size={18} />
            </span>
          )}
          <span className="tpl-trigger-name">
            {active ? active.name : 'No template applied'}
          </span>
        </span>
        <IconChevronDown size={16} />
      </button>

      {open && (
        <div className="menu" role="menu">
          <div className="menu-search">
            <IconSearch size={16} />
            <input
              ref={searchRef}
              placeholder="Search templates…"
              value={q}
              onChange={e => setQ(e.target.value)}
            />
          </div>

          <div className="menu-list">
            {filtered.length === 0 && (
              <div className="menu-empty">No templates match "{q}".</div>
            )}
            {filtered.map(t => (
              <TemplateRow
                key={t.id}
                tpl={t}
                isActive={t.id === activeId}
                onApply={() => { onApply(t.id); setOpen(false); }}
                onSetDefault={(e) => { e.stopPropagation(); onSetDefault(t.id); }}
                onEdit={(e) => { e.stopPropagation(); onEdit(t.id); setOpen(false); }}
                onDuplicate={(e) => { e.stopPropagation(); onDuplicate(t.id); }}
                onDelete={(e) => { e.stopPropagation(); onDelete(t.id); }}
              />
            ))}
          </div>

          <div className="menu-footer">
            <button className="primary-action" onClick={() => { setOpen(false); onSaveAsNew(); }}>
              <IconPlus size={16} />
              Save current as new template…
              {isDirty && <span className="tag-default" style={{ marginLeft: 'auto' }}>Unsaved</span>}
            </button>
            <button onClick={() => { setOpen(false); onManageOpen(); }}>
              <IconGear size={16} />
              Manage templates
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function TemplateRow({ tpl, isActive, onApply, onSetDefault, onEdit, onDuplicate, onDelete }) {
  return (
    <div
      className={`menu-item ${isActive ? 'active' : ''}`}
      role="menuitem"
      onClick={onApply}
    >
      <button
        className={`menu-item-pin ${tpl.isDefault ? 'is-default' : ''}`}
        title={tpl.isDefault ? 'Default template — click to unpin' : 'Set as default'}
        onClick={(e) => { e.stopPropagation(); onSetDefault(); }}
      >
        <IconStar filled={tpl.isDefault} size={18} />
      </button>
      <div className="menu-item-body">
        <div className="menu-item-row1">
          <span className="menu-item-name" title={tpl.name}>{tpl.name}</span>
          {isActive && <IconCheck size={16} style={{ color: 'var(--en-primary)' }} />}
        </div>
        <div className="menu-item-meta">
          <span title={tpl.shared ? `Shared by ${tpl.owner.name}` : `Private · ${tpl.owner.name}`}>{tpl.shared ? `Shared by ${tpl.owner.name}` : `Private · ${tpl.owner.name}`}</span>
        </div>
      </div>
      <div className="menu-item-actions">
        <button className="btn-icon" title="Edit" onClick={(e) => { e.stopPropagation(); onEdit(); }}>
          <IconEdit size={16} />
        </button>
        <button className="btn-icon" title="Duplicate" onClick={(e) => { e.stopPropagation(); onDuplicate(); }}>
          <IconCopy size={16} />
        </button>
        <button className="btn-icon" title="Delete" onClick={(e) => { e.stopPropagation(); onDelete(); }}>
          <IconTrash size={16} />
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { TemplatePicker });


// === dialogs.jsx ===
// Modals — Save-as-template dialog, Save-changes confirm, Manage modal.

// @component SaveTemplateDialog
// @description Modal for creating, editing, or forking a named template.
// @example
// <SaveTemplateDialog
//   mode="create"
//   initial={{ name: '', description: '', isDefault: false, shared: true }}
//   templates={templates}
//   onClose={() => setDialog(null)}
//   onSubmit={vals => handleSave(vals)}
// />
// @props
// mode     'create'|'edit'|'fork'
// initial  { name, description, isDefault, shared }
// templates  array — used for duplicate-name warning
// onClose  () => void
// onSubmit ({ name, description, isDefault, shared }) => void
// @end

// @component UpdateTemplateDialog
// @description Confirmation modal for saving changes to an existing template.
// @example
// <UpdateTemplateDialog
//   template={activeTpl}
//   summary={['Producer team: 3 → 4 members', 'Agency name updated']}
//   onClose={() => setDialog(false)}
//   onConfirm={() => confirmUpdate()}
//   onSaveAsNew={() => { closeDialog(); openSaveAsNew(); }}
// />
// @props
// template   { name } — the template being updated
// summary    string[] — bullet list of changes shown in the dialog
// onClose    () => void
// onConfirm  () => void
// onSaveAsNew  () => void
// @end

// @component ManageModal
// @description Full-screen modal for browsing, applying, editing, duplicating, and deleting templates.
// @example
// <ManageModal
//   templates={templates}
//   activeId={activeId}
//   onClose={() => setManageOpen(false)}
//   onApply={id => applyTemplate(id)}
//   onEdit={id => openEditDialog(id)}
//   onDuplicate={id => duplicate(id)}
//   onDelete={id => confirmDelete(id)}
//   onSetDefault={id => setDefault(id)}
//   onCreate={() => { setManageOpen(false); openSaveDialog(); }}
// />
// @props
// templates  array of template objects
// activeId   string — currently applied template id
// onClose    () => void
// onApply    (id) => void
// onEdit     (id) => void
// onDuplicate  (id) => void
// onDelete   (id) => void
// onSetDefault  (id) => void
// onCreate   () => void — opens the save-as-new flow
// @end

// @component DeleteConfirm
// @description Destructive confirmation modal. CTA and copy are fully customisable.
// @example
// <DeleteConfirm
//   template={templateToDelete}
//   onClose={() => setDeleteTarget(null)}
//   onConfirm={() => confirmDelete()}
// />
//
// <DeleteConfirm
//   template={item}
//   confirmLabel="Remove forever"
//   title={`Delete "${item.name}"?`}
//   message="This cannot be undone."
//   onClose={handleClose}
//   onConfirm={handleConfirm}
// />
// @props
// template      { name, usageCount } — used in default title / message copy
// confirmLabel  string — CTA button text (default 'Delete template')
// title         string — overrides the default title
// message       string|ReactNode — overrides the default body copy
// onClose       () => void
// onConfirm     () => void
// @end

function Scrim({ onClose, children }) {
  return (
    <div className="scrim" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      {children}
    </div>
  );
}

/* ============================================================
   Save-as-new template dialog (also used in "Edit details")
   ============================================================ */
function SaveTemplateDialog({
  mode, // 'create' | 'edit' | 'fork'
  initial, // { name, description, isDefault, shared }
  templates, // for default-collision warning
  onClose, onSubmit,
}) {
  const [name, setName] = useState(initial?.name || '');
  const [description, setDescription] = useState(initial?.description || '');
  const [setDefault, setSetDefault] = useState(initial?.isDefault || false);
  const [shared, setShared] = useState(initial?.shared !== false);

  const title =
    mode === 'edit' ? 'Edit template details' :
    mode === 'fork' ? 'Save as new template' :
    'Save Step 3 as template';
  const submitLabel =
    mode === 'edit' ? 'Save changes' : 'Save template';

  const collidingDefault = setDefault && templates.find(t => t.isDefault && t.id !== initial?.id);

  return (
    <Scrim onClose={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-head">
          <div>
            <div className="dialog-title">{title}</div>
            <div className="dialog-sub">
              {mode === 'fork'
                ? 'Save the current Producer Team + Additional Information as a reusable template.'
                : mode === 'edit'
                ? 'Update the name, description, or sharing settings.'
                : 'Save the current Producer Team + Additional Information as a reusable template.'}
            </div>
          </div>
          <button className="btn-icon" onClick={onClose}><IconClose size={16} /></button>
        </div>

        <div className="dialog-body">
          <div className="form-row">
            <label htmlFor="t-name">Template name</label>
            <input
              id="t-name"
              className="input"
              autoFocus
              placeholder="e.g. Commercial Producers — Mid-Market"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label htmlFor="t-desc">Description <span className="muted" style={{ fontWeight: 400 }}>(optional)</span></label>
            <textarea
              id="t-desc"
              className="textarea"
              placeholder="Help teammates pick the right one."
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <div className="toggle-row">
            <div className="meta">
              Share with everyone in your organization
              <span className="help">Everyone can apply this template. Only owners and admins can edit.</span>
            </div>
            <div
              className={`toggle ${shared ? 'on' : ''}`}
              role="switch"
              aria-checked={shared}
              onClick={() => setShared(s => !s)}
            />
          </div>

          <div className="toggle-row">
            <div className="meta">
              Set as default for new proposals
              <span className="help">Auto-applied to Step 3 whenever you create a new proposal.</span>
            </div>
            <div
              className={`toggle ${setDefault ? 'on' : ''}`}
              role="switch"
              aria-checked={setDefault}
              onClick={() => setSetDefault(s => !s)}
            />
          </div>

          {collidingDefault && (
            <div style={{
              background: 'var(--en-bg-active)',
              border: '1px solid hsla(206, 100%, 80%, 1)',
              borderRadius: 8,
              padding: '8px 12px',
              font: '400 12px/16px var(--en-font-sans)',
              color: 'var(--en-text-tertiary)',
            }}>
              <strong style={{ fontWeight: 600 }}>{collidingDefault.name}</strong> is currently the default. Saving will move the default to this template.
            </div>
          )}
        </div>

        <div className="dialog-foot">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button
            className="btn btn-primary"
            disabled={!name.trim()}
            style={{ opacity: name.trim() ? 1 : 0.5, cursor: name.trim() ? 'pointer' : 'not-allowed' }}
            onClick={() => onSubmit({
              name: name.trim(),
              description: description.trim(),
              isDefault: setDefault,
              shared,
            })}
          >
            {submitLabel}
          </button>
        </div>
      </div>
    </Scrim>
  );
}

/* ============================================================
   Confirm overwrite — "Save changes to template?"
   ============================================================ */
function UpdateTemplateDialog({ template, summary, onClose, onConfirm, onSaveAsNew }) {
  return (
    <Scrim onClose={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 520 }}>
        <div className="dialog-head">
          <div>
            <div className="dialog-title">Save changes to "{template.name}"?</div>
            <ul className="dialog-sub" style={{ margin: '6px 0 0', paddingLeft: 18 }}>
              <li>This will be updated for everyone. Last updated {shortDate(template.updatedAt)} by {template.owner.name}.</li>
              {template.usageCount > 0 && (
                <li>Applied to {template.usageCount.toLocaleString()} proposal{template.usageCount === 1 ? '' : 's'}. Existing proposals won't be retroactively changed.</li>
              )}
            </ul>
          </div>
          <button className="btn-icon" onClick={onClose}><IconClose size={16} /></button>
        </div>

        <div className="dialog-body">
          <div style={{
            background: 'var(--en-bg-grey)',
            border: '1px solid var(--en-divider)',
            borderRadius: 8,
            padding: '10px 14px',
            font: '400 13px/20px var(--en-font-sans)',
            color: 'var(--en-fg)',
          }}>
            <div style={{ font: '500 12px/16px var(--en-font-sans)', letterSpacing: '0.4px', textTransform: 'uppercase', color: 'var(--en-fg-secondary)', marginBottom: 6 }}>
              Changes in this proposal
            </div>
            {summary.length === 0
              ? <div className="muted">No changes detected.</div>
              : (
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {summary.map((s, i) => <li key={i} style={{ marginBottom: 2 }}>{s}</li>)}
                </ul>
              )
            }
          </div>
        </div>

        <div className="dialog-foot">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-text" onClick={onSaveAsNew}>Save as new instead</button>
          <button className="btn btn-primary" onClick={onConfirm}>Update template</button>
        </div>
      </div>
    </Scrim>
  );
}

/* ============================================================
   Manage modal — full list table
   ============================================================ */
function ManageModal({
  templates, activeId,
  onClose, onApply, onEdit, onDuplicate, onDelete, onSetDefault, onCreate,
}) {
  const [q, setQ] = useState('');
  const [openMenu, setOpenMenu] = useState(null); // row id whose row-menu is open
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => setOpenMenu(null), !!openMenu);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return templates;
    return templates.filter(t =>
      t.name.toLowerCase().includes(s) ||
      (t.description || '').toLowerCase().includes(s) ||
      t.owner.name.toLowerCase().includes(s)
    );
  }, [q, templates]);

  return (
    <Scrim onClose={onClose}>
      <div className="dialog lg" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-head">
          <div>
            <div className="dialog-title">Step 3 templates</div>
            <div className="dialog-sub">
              Manage saved Producer Team + Additional Information sets shared across your organization.
            </div>
          </div>
          <button className="btn-icon" onClick={onClose}><IconClose size={16} /></button>
        </div>

        <div className="manage-toolbar">
          <div className="manage-search">
            <IconSearch size={16} />
            <input
              placeholder="Search by name, description, or owner…"
              value={q}
              onChange={e => setQ(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={onCreate}>
            <IconPlus size={16} />
            New template
          </button>
        </div>

        <div className="manage-table-wrap">
          <table className="manage-table">
            <thead>
              <tr>
                <th style={{ width: '32%' }}>Template</th>
                <th style={{ width: 100 }}>Team</th>
                <th>Owner</th>
                <th style={{ width: 90 }}>Usage</th>
                <th style={{ width: 110 }}>Updated</th>
                <th style={{ width: 56 }}></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(t => (
                <tr key={t.id} className={t.id === activeId ? 'applied' : ''}>
                  <td>
                    <div className="manage-name">
                      {t.isDefault && <span className="star"><IconStar filled size={16} /></span>}
                      <span>{t.name}</span>
                      {t.id === activeId && <IconCheck size={16} style={{ color: 'var(--en-primary)' }} />}
                      {!t.shared && <span className="tag-shared">Private</span>}
                    </div>
                    {t.description && <div className="manage-desc">{t.description}</div>}
                  </td>
                  <td>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      <IconUsers size={16} />
                      {totalProducers(t.producerTables)}
                    </span>
                  </td>
                  <td>
                    {t.owner.name}{t.owner.isYou ? ' (you)' : ''}
                  </td>
                  <td className="muted">{t.usageCount.toLocaleString()}</td>
                  <td className="muted">{shortDate(t.updatedAt)}</td>
                  <td>
                    <div className="row-menu-wrap" ref={openMenu === t.id ? menuRef : null}>
                      <button
                        className="btn-icon"
                        onClick={(e) => { e.stopPropagation(); setOpenMenu(openMenu === t.id ? null : t.id); }}
                      >
                        <IconMore size={16} />
                      </button>
                      {openMenu === t.id && (
                        <div className="row-menu">
                          <button onClick={() => { onApply(t.id); setOpenMenu(null); onClose(); }}>
                            <IconCheck size={16} /> Apply to this proposal
                          </button>
                          <button onClick={() => { onEdit(t.id); setOpenMenu(null); }}>
                            <IconEdit size={16} /> Edit details
                          </button>
                          <button onClick={() => { onSetDefault(t.id); setOpenMenu(null); }}>
                            <IconStar size={16} /> {t.isDefault ? 'Default template' : 'Set as default'}
                          </button>
                          <button onClick={() => { onDuplicate(t.id); setOpenMenu(null); }}>
                            <IconCopy size={16} /> Duplicate
                          </button>
                          <div className="sep" />
                          <button className="danger" onClick={() => { onDelete(t.id); setOpenMenu(null); }}>
                            <IconTrash size={16} /> Delete…
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={6} style={{ textAlign: 'center', padding: 40, color: 'var(--en-fg-secondary)' }}>
                  No templates match "{q}".
                </td></tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="dialog-foot" style={{ justifyContent: 'space-between' }}>
          <div style={{ font: '400 12px/16px var(--en-font-sans)', color: 'var(--en-fg-secondary)' }}>
            {templates.length} template{templates.length === 1 ? '' : 's'} · {templates.filter(t => t.shared).length} shared with your organization
          </div>
          <button className="btn btn-secondary" onClick={onClose}>Done</button>
        </div>
      </div>
    </Scrim>
  );
}

/* ============================================================
   Delete confirm
   ============================================================ */
function DeleteConfirm({ template, onClose, onConfirm, confirmLabel = 'Delete template', title, message }) {
  const resolvedTitle = title || `Delete "${template.name}"?`;
  const resolvedMessage = message || (
    <>
      This template will no longer be available to anyone in your organization.
      {template.usageCount > 0 && ` Existing proposals (${template.usageCount.toLocaleString()}) that used it won't be affected.`}
    </>
  );
  return (
    <Scrim onClose={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 440 }}>
        <div className="dialog-head">
          <div>
            <div className="dialog-title">{resolvedTitle}</div>
            <div className="dialog-sub">{resolvedMessage}</div>
          </div>
          <button className="btn-icon" onClick={onClose}><IconClose size={16} /></button>
        </div>
        <div className="dialog-foot">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" style={{ background: 'var(--en-error-dark)' }} onClick={onConfirm}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </Scrim>
  );
}

Object.assign(window, { Scrim, SaveTemplateDialog, UpdateTemplateDialog, ManageModal, DeleteConfirm });


// === step3.jsx ===
// Step 3 body — Producer Team table + Additional Information block.
// Mirrors the screenshot. Edits flow up via props so the parent can detect dirty state.

// @component CollapsibleSection
// @description Collapsible card section with an optional unsaved-changes amber dot.
// @example
// <CollapsibleSection title="Accounts in proposal" defaultOpen modified={false}>
//   {/* content */}
// </CollapsibleSection>
// @props
// title        string — section heading
// defaultOpen  boolean — initial open state (default true)
// modified     boolean — shows amber dot when true
// children     ReactNode
// @end

// @component EditableField
// @description Inline-editable label/textarea with unsaved-changes indicator.
// @example
// <EditableField
//   label="About Us"
//   value={agency.aboutUs}
//   multiline
//   modified={modified.aboutUs}
//   onChange={val => setAgency(a => ({ ...a, aboutUs: val }))}
// />
// @props
// label     string
// value     string
// multiline  boolean — textarea vs single-line input
// modified  boolean — shows amber dot when true
// onChange  (value: string) => void
// @end

// @component Step3Body
// @description The full Step 3 form body — producer tables + agency information fields.
// @example
// <Step3Body
//   producerTables={producerTables}
//   agency={agency}
//   onProducerTablesChange={setProducerTables}
//   onAgencyChange={setAgency}
//   modified={modified}
// />
// @props
// producerTables           array of producer table objects
// agency                   { agencyName, aboutUs, disclosures, serviceSummary, logoFile }
// onProducerTablesChange   (tables) => void
// onAgencyChange           (agency) => void
// modified                 { producers, tables: { [id]: bool }, agencyName, aboutUs, disclosures, serviceSummary, logoFile }
// @end

function CollapsibleSection({ title, modified, defaultOpen = true, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`s3-section ${open ? 'open' : 'closed'}`}>
      <button className="s3-section-head" onClick={() => setOpen(o => !o)} type="button">
        <span className={`s3-chevron ${open ? 'open' : ''}`}>
          <IconChevronDown size={18} />
        </span>
        <span className="s3-section-title">{title}</span>
        {modified && <span className="modified-mark" title="Modified" />}
      </button>
      {open && <div className="s3-section-body">{children}</div>}
    </div>
  );
}

function ProducerTableSection({ table, index, modified, canAddTable, onRename, onDelete, onProducersChange, onAddTable }) {
  const [open, setOpen] = useState(true);
  const [editingName, setEditingName] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [nameDraft, setNameDraft] = useState(table.name);
  const menuRef = useRef(null);

  useEffect(() => setNameDraft(table.name), [table.name]);

  useEffect(() => {
    if (!menuOpen) return;
    const onDoc = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [menuOpen]);

  const commitName = () => {
    const v = nameDraft.trim() || `Team ${index + 1}`;
    if (v !== table.name) onRename(v);
    setEditingName(false);
  };

  return (
    <div className={`s3-section ${open ? 'open' : 'closed'}`}>
      <div className="s3-section-head s3-section-head--row">
        <button
          className="s3-section-toggle"
          onClick={() => !editingName && setOpen(o => !o)}
          type="button"
        >
          <span className={`s3-chevron ${open ? 'open' : ''}`}>
            <IconChevronDown size={18} />
          </span>
          {editingName ? (
            <input
              autoFocus
              className="s3-section-title-input"
              value={nameDraft}
              onChange={(e) => setNameDraft(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              onBlur={commitName}
              onKeyDown={(e) => {
                if (e.key === 'Enter') commitName();
                if (e.key === 'Escape') { setNameDraft(table.name); setEditingName(false); }
              }}
            />
          ) : (
            <span className="s3-section-title">{table.name}</span>
          )}
          {modified && !editingName && <span className="modified-mark" title="Modified" />}
        </button>

        <div className="s3-section-menu" ref={menuRef}>
          <button
            className="btn-icon"
            title="Table actions"
            onClick={(e) => { e.stopPropagation(); setMenuOpen(o => !o); }}
          >
            <IconMore size={16} />
          </button>
          {menuOpen && (
            <div className="row-menu">
              <button onClick={() => { setMenuOpen(false); setOpen(true); setEditingName(true); }}>
                <IconEditFill size={16} /> Rename table
              </button>
              <button className="danger" onClick={() => { setMenuOpen(false); onDelete(); }}>
                <IconTrashFill size={16} /> Delete table
              </button>
            </div>
          )}
        </div>
      </div>
      {open && (
        <div className="s3-section-body">
          {table.producers.length === 0 ? (
            <div className="s3-empty-state">
              <button
                className="add-producer"
                onClick={() => {
                  const id = 'np' + Date.now();
                  onProducersChange([{
                    id, first: '', last: '', email: '', bio: '', phone: '',
                  }]);
                }}
              >
                <IconPlus size={16} />
                Add Member
              </button>
            </div>
          ) : (
            <>
              <ProducerTable
                producers={table.producers}
                onChange={(next) => onProducersChange(next)}
              />
              <div className="s3-table-actions">
                <button
                  className="add-producer"
                  onClick={() => {
                    const id = 'np' + Date.now();
                    onProducersChange([...table.producers, {
                      id, first: '', last: '', email: '', bio: '', phone: '',
                    }]);
                  }}
                >
                  <IconPlus size={16} />
                  Add Member
                </button>
                {canAddTable && (
                  <button className="add-producer add-producer--alt" onClick={onAddTable}>
                    <IconPlus size={16} />
                    Add Table
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function Step3Body({
  producerTables, agency,
  onProducerTablesChange, onAgencyChange,
  modified,
}) {
  const updateTable = (idx, patch) => {
    onProducerTablesChange(producerTables.map((t, i) => i === idx ? { ...t, ...patch } : t));
  };
  const renameTable = (idx, name) => updateTable(idx, { name });
  const setTableProducers = (idx, producers) => updateTable(idx, { producers });
  const deleteTable = (idx) => {
    if (producerTables.length === 1) {
      // keep at least one table — clear its rows instead
      onProducerTablesChange([{ ...producerTables[0], producers: [] }]);
      return;
    }
    onProducerTablesChange(producerTables.filter((_, i) => i !== idx));
  };
  const addTable = () => {
    const n = producerTables.length + 1;
    onProducerTablesChange([...producerTables, {
      id: 'tab-' + Date.now(),
      name: `Team ${n}`,
      producers: [],
    }]);
  };

  const totalMembers = producerTables.reduce((n, t) => n + t.producers.length, 0);

  return (
    <div className="s3-body">
      {producerTables.map((table, idx) => (
        <ProducerTableSection
          key={table.id}
          table={table}
          index={idx}
          modified={modified.tables && modified.tables[table.id]}
          canAddTable={totalMembers > 0}
          onRename={(name) => renameTable(idx, name)}
          onDelete={() => deleteTable(idx)}
          onProducersChange={(producers) => setTableProducers(idx, producers)}
          onAddTable={addTable}
        />
      ))}

      <CollapsibleSection title="Logo" modified={modified.logoFile}>
        {agency.logoFile ? (
          <div className="logo-card">
            <div className="logo-thumb">
              <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
                <path d="M10 24 Q 28 6, 60 22 T 110 22 T 160 22 T 195 22" stroke="#FA5F0C" strokeWidth="9" fill="none" strokeLinecap="round" />
              </svg>
            </div>
            <div className="logo-meta">
              <div className="logo-filename">{agency.logoFile}</div>
              <div className="logo-hint">PNG or SVG · displayed on the proposal cover.</div>
            </div>
            <button
              className="btn-icon logo-remove"
              title="Remove logo"
              onClick={() => onAgencyChange({ ...agency, logoFile: '' })}
            >
              <IconTrash size={16} />
            </button>
          </div>
        ) : (
          <div className="logo-dropzone">
            <div className="logo-dropzone-title">Add your logo in png, jpg, or svg format</div>
            <button
              className="logo-upload-btn"
              type="button"
              onClick={() => onAgencyChange({ ...agency, logoFile: 'ennabl-icon-light (1).png' })}
            >
              <IconUpload size={16} />
              Upload from Computer
            </button>
            <div className="logo-dropzone-hint">or drag and drop here</div>
          </div>
        )}
      </CollapsibleSection>

      <CollapsibleSection
        title="Additional Information"
        modified={modified.agencyName || modified.aboutUs || modified.disclosures || modified.serviceSummary}
      >
        <EditableField
          label="Name"
          value={agency.agencyName}
          modified={modified.agencyName}
          onChange={v => onAgencyChange({ ...agency, agencyName: v })}
        />
        <EditableField
          label="About"
          value={agency.aboutUs}
          multiline
          modified={modified.aboutUs}
          onChange={v => onAgencyChange({ ...agency, aboutUs: v })}
        />
        <EditableField
          label="Disclosures"
          value={agency.disclosures}
          multiline
          modified={modified.disclosures}
          onChange={v => onAgencyChange({ ...agency, disclosures: v })}
        />
        <EditableField
          label="Service Summary"
          value={agency.serviceSummary || ''}
          multiline
          modified={modified.serviceSummary}
          onChange={v => onAgencyChange({ ...agency, serviceSummary: v })}
        />
      </CollapsibleSection>
    </div>
  );
}

function SortIcon({ dir }) {
  // dir: 'none' | 'asc' | 'desc'
  const gray = '#8287B0';
  const dark = '#1E1E1E';
  const upStroke = dir === 'asc' ? dark : gray;
  const downStroke = dir === 'desc' ? dark : gray;
  const upOp = dir === 'asc' ? 0.87 : 0.8;
  const downOp = dir === 'desc' ? 0.87 : 0.8;
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M16 10L12 6L8 10" stroke={upStroke} strokeOpacity={upOp} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M8 14L12 18L16 14" stroke={downStroke} strokeOpacity={downOp} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function ProducerTable({ producers, onChange }) {
  const [tip, setTip] = useState(null); // { text, x, y }
  const [sort, setSort] = useState({ key: null, dir: 'none' });
  const [editingId, setEditingId] = useState(() => {
    // If table mounts with a single blank row, drop straight into edit mode.
    if (producers.length === 1) {
      const p = producers[0];
      if (!p.first && !p.last && !p.email && !p.bio && !p.phone) return p.id;
    }
    return null;
  });
  const prevLenRef = useRef(producers.length);

  // Auto-edit a freshly added empty row
  useEffect(() => {
    if (producers.length > prevLenRef.current) {
      const last = producers[producers.length - 1];
      if (last && !last.first && !last.last && !last.email && !last.bio && !last.phone) {
        setEditingId(last.id);
      }
    }
    prevLenRef.current = producers.length;
  }, [producers]);

  const toggleSort = (key) => {
    setSort(s => {
      if (s.key !== key) return { key, dir: 'asc' };
      if (s.dir === 'asc') return { key, dir: 'desc' };
      if (s.dir === 'desc') return { key: null, dir: 'none' };
      return { key, dir: 'asc' };
    });
  };

  const dirFor = (key) => (sort.key === key ? sort.dir : 'none');

  const sortedProducers = useMemo(() => {
    if (!sort.key || sort.dir === 'none') return producers;
    const arr = [...producers];
    const k = sort.key;
    arr.sort((a, b) => {
      const av = (a[k] || '').toString().toLowerCase();
      const bv = (b[k] || '').toString().toLowerCase();
      if (av < bv) return sort.dir === 'asc' ? -1 : 1;
      if (av > bv) return sort.dir === 'asc' ? 1 : -1;
      return 0;
    });
    return arr;
  }, [producers, sort]);

  const updateRow = (id, patch) => {
    onChange(producers.map(p => p.id === id ? { ...p, ...patch } : p));
  };
  const removeRow = (id) => onChange(producers.filter(p => p.id !== id));

  const onCellEnter = (e, text) => {
    if (!text) return;
    const el = e.currentTarget;
    // measure: if not actually overflowing, skip
    if (el.scrollWidth <= el.clientWidth + 1) return;
    setTip({ text, x: e.clientX, y: e.clientY });
  };
  const onCellMove = (e) => {
    setTip(t => t ? { ...t, x: e.clientX, y: e.clientY } : t);
  };
  const onCellLeave = () => setTip(null);

  return (
    <>
    <table className="table">
      <thead>
        <tr>
          <th className="col-first" onClick={() => toggleSort('first')}><span className="th-inner sortable">First Name <span className="sort"><SortIcon dir={dirFor('first')} /></span></span></th>
          <th className="col-last" onClick={() => toggleSort('last')}><span className="th-inner sortable">Last Name <span className="sort"><SortIcon dir={dirFor('last')} /></span></span></th>
          <th className="col-email" onClick={() => toggleSort('email')}><span className="th-inner sortable">Email <span className="sort"><SortIcon dir={dirFor('email')} /></span></span></th>
          <th className="col-bio"><span className="th-inner">Bio</span></th>
          <th className="col-phone" onClick={() => toggleSort('phone')}><span className="th-inner sortable">Phone Number <span className="sort"><SortIcon dir={dirFor('phone')} /></span></span></th>
          <th className="col-actions"><span className="th-inner">Actions</span></th>
        </tr>
      </thead>
      <tbody>
        {sortedProducers.map(p => {
          const isEditing = editingId === p.id;
          if (isEditing) {
            return (
              <tr key={p.id} className="row-editing">
                <td><input className="cell-input" autoFocus placeholder="First Name" value={p.first} onChange={e => updateRow(p.id, { first: e.target.value })} /></td>
                <td><input className="cell-input" placeholder="Last Name" value={p.last} onChange={e => updateRow(p.id, { last: e.target.value })} /></td>
                <td><input className="cell-input" placeholder="Email" value={p.email} onChange={e => updateRow(p.id, { email: e.target.value })} /></td>
                <td><input className="cell-input" placeholder="Bio" value={p.bio} onChange={e => updateRow(p.id, { bio: e.target.value })} /></td>
                <td><input className="cell-input" placeholder="Phone Number" value={p.phone} onChange={e => updateRow(p.id, { phone: e.target.value })} /></td>
                <td className="col-actions">
                  <div className="cell-actions">
                    <button className="btn-icon" title="Done editing" onClick={() => setEditingId(null)}>
                      <IconCheck size={16} />
                    </button>
                    <button className="btn-icon" title="Remove" onClick={() => { setEditingId(null); removeRow(p.id); }}>
                      <IconTrashFill size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            );
          }
          return (
            <tr key={p.id}>
              <td onMouseEnter={(e) => onCellEnter(e, p.first)} onMouseMove={onCellMove} onMouseLeave={onCellLeave}>{p.first}</td>
              <td onMouseEnter={(e) => onCellEnter(e, p.last)} onMouseMove={onCellMove} onMouseLeave={onCellLeave}>{p.last}</td>
              <td className="muted" onMouseEnter={(e) => onCellEnter(e, p.email)} onMouseMove={onCellMove} onMouseLeave={onCellLeave}>{p.email}</td>
              <td onMouseEnter={(e) => onCellEnter(e, p.bio)} onMouseMove={onCellMove} onMouseLeave={onCellLeave}>{p.bio}</td>
              <td className="muted" onMouseEnter={(e) => onCellEnter(e, p.phone)} onMouseMove={onCellMove} onMouseLeave={onCellLeave}>{p.phone}</td>
              <td className="col-actions">
                <div className="cell-actions">
                  <button className="btn-icon" title="Edit" onClick={() => setEditingId(p.id)}>
                    <IconEditFill size={16} />
                  </button>
                  <button className="btn-icon" title="Remove" onClick={() => removeRow(p.id)}>
                    <IconTrashFill size={16} />
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    {tip && (
      <div
        className="cell-tip"
        style={{ left: tip.x + 14, top: tip.y + 18 }}
      >
        {tip.text}
      </div>
    )}
    </>
  );
}

function EditableField({ label, value, multiline, modified, onChange }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  useEffect(() => setDraft(value), [value]);

  if (!editing) {
    return (
      <div
        className="field"
        onClick={() => setEditing(true)}
        style={{ cursor: 'text' }}
      >
        <div className="field-label">
          {label}
          {modified && <span className="modified-mark" />}
        </div>
        <div className="field-value">{value}</div>
      </div>
    );
  }
  return (
    <div className="field" style={{ background: 'var(--en-bg)' }}>
      <div className="field-label">
        {label}
        {modified && <span className="modified-mark" />}
      </div>
      {multiline ? (
        <textarea
          autoFocus
          className="textarea"
          style={{ marginTop: 4, minHeight: 96 }}
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onBlur={() => { onChange(draft); setEditing(false); }}
        />
      ) : (
        <input
          autoFocus
          className="input"
          style={{ marginTop: 4 }}
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onBlur={() => { onChange(draft); setEditing(false); }}
          onKeyDown={e => { if (e.key === 'Enter') { onChange(draft); setEditing(false); } }}
        />
      )}
    </div>
  );
}

Object.assign(window, { Step3Body });


// === ui.jsx ===
// Core UI primitives — Button, Input, FormField, Table, Badge
// All use existing .btn / .input / .table / .badge CSS classes from styles.css

/* ============================================================
   Button
   ============================================================ */
// @component Button
// @description Canonical button. Use instead of bare <button className="btn ..."> for consistent loading + disabled states.
// @example
// <Button variant="primary" onClick={save}>Save changes</Button>
// <Button variant="secondary" icon={<IconPlus size={14} />}>Add row</Button>
// <Button variant="text">Cancel</Button>
// <Button variant="danger">Delete</Button>
// <Button variant="primary" loading={saving}>Saving…</Button>
// <Button variant="icon" onClick={edit}><IconEdit size={16} /></Button>
// <Button variant="secondary" size="sm">Small</Button>
// @props
// variant   'primary'|'secondary'|'text'|'danger'|'icon'|'link' — default 'primary'
// size      'sm' — smaller padding variant
// loading   boolean — shows spinner, disables interaction
// disabled  boolean
// icon      ReactNode — shown left of label (hidden when loading)
// className  string — extra classes appended to the button
// ...also accepts all standard <button> props (onClick, type, form, etc.)
// @end
function Button({ variant = 'primary', size, loading, disabled, icon, children, className = '', ...props }) {
  if (variant === 'link') {
    return (
      <button className={`btn-link ${className}`} disabled={disabled || loading} {...props}>
        {children}
      </button>
    )
  }
  if (variant === 'icon') {
    return (
      <button className={`btn-icon ${className}`} disabled={disabled || loading} {...props}>
        {loading ? <span className="btn-spinner" /> : (icon || children)}
      </button>
    )
  }
  return (
    <button
      className={`btn btn-${variant}${size === 'sm' ? ' btn-sm' : ''}${loading ? ' btn--loading' : ''} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="btn-spinner" />}
      {!loading && icon}
      {children}
    </button>
  )
}

/* ============================================================
   FormField — wraps any input with label, hint, and error
   ============================================================ */
// @component FormField
// @description Label + input wrapper with hint and error states. Always wrap Input inside FormField.
// @example
// <FormField label="Agency name" hint="Shown on all proposals" htmlFor="agency">
//   <Input id="agency" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Acme Insurance" />
// </FormField>
//
// <FormField label="Notes" error={errors.notes}>
//   <Input multiline value={notes} onChange={e => setNotes(e.target.value)} rows={4} />
// </FormField>
// @props
// label    string
// hint     string — shown below input when there is no error
// error    string — shown in red below input (takes priority over hint)
// htmlFor  string — links the label to an input id
// @end
function FormField({ label, hint, error, htmlFor, children }) {
  return (
    <div className="form-row">
      {label && <label htmlFor={htmlFor}>{label}</label>}
      {children}
      {error  && <span className="form-error">{error}</span>}
      {!error && hint && <span className="form-hint">{hint}</span>}
    </div>
  )
}

/* ============================================================
   Input / Textarea
   ============================================================ */
// @component Input
// @description Styled text input or textarea. Use inside FormField for label and error display.
// @example
// <Input value={v} onChange={e => setV(e.target.value)} placeholder="Search…" />
// <Input multiline value={v} onChange={e => setV(e.target.value)} rows={3} />
// <Input error value={v} onChange={e => setV(e.target.value)} />
// @props
// multiline  boolean — renders <textarea> instead of <input>
// error      boolean — applies red border and focus ring
// ...accepts all standard <input> / <textarea> props (value, onChange, placeholder, rows, etc.)
// @end
// multiline=true renders a <textarea>
function Input({ multiline, error, className = '', ...props }) {
  const cls = `${multiline ? 'textarea' : 'input'}${error ? ' input--error' : ''} ${className}`
  return multiline
    ? <textarea className={cls} {...props} />
    : <input    className={cls} {...props} />
}

/* ============================================================
   Table
   ============================================================ */
// @component Table
// @description Data table with optional sorting, row actions, and empty state. Always use this instead of raw <table> HTML.
// @example
// const columns = [
//   { key: 'name',   label: 'Account', sortable: true, width: '40%' },
//   { key: 'status', label: 'Status',  render: row => <Badge variant={row.active ? 'success' : 'default'}>{row.active ? 'Active' : 'Inactive'}</Badge> },
//   { key: 'date',   label: 'Updated' },
// ]
//
// <Table
//   columns={columns}
//   rows={data}
//   sortKey={sortKey}
//   sortDir={sortDir}
//   onSort={(key, dir) => { setSortKey(key); setSortDir(dir) }}
//   emptyState={<span>No results</span>}
//   getRowActions={row => (
//     <>
//       <Button variant="icon" onClick={() => edit(row)}><IconEdit size={14} /></Button>
//       <Button variant="icon" onClick={() => del(row)}><IconTrash size={14} /></Button>
//     </>
//   )}
// />
// @props
// columns        array of { key, label, sortable?, width?, render?(row)=>node }
// rows           array of objects — include an `id` field for stable React keys
// sortKey        string — key of the currently sorted column
// sortDir        'asc' | 'desc' — current sort direction
// onSort         (key, dir) => void — called when a sortable header is clicked
// getRowActions  (row) => ReactNode — renders right-aligned action buttons per row
// emptyState     ReactNode — shown when rows is empty (default: "No data")
// compact        boolean — tighter row padding
// @end
// columns: [{ key, label, sortable?, width?, render?(row) => node }]
// rows:    array of objects — each row needs a stable `id` field or index is used
// sortKey / sortDir / onSort — optional, for controlled sorting
// getRowActions(row) => ReactNode — renders right-aligned action cell per row
// emptyState — ReactNode shown when rows is empty
// compact — reduces row padding
function Table({ columns, rows = [], sortKey, sortDir = 'asc', onSort, getRowActions, emptyState, compact }) {
  const hasActions = Boolean(getRowActions)
  const colspan = columns.length + (hasActions ? 1 : 0)

  function handleSort(col) {
    if (!col.sortable || !onSort) return
    onSort(col.key, col.key === sortKey && sortDir === 'asc' ? 'desc' : 'asc')
  }

  return (
    <table className={`table${compact ? ' table-compact' : ''}`}>
      <thead>
        <tr>
          {columns.map(col => (
            <th key={col.key} style={col.width ? { width: col.width } : undefined}>
              <div
                className={`th-inner${col.sortable ? ' sortable' : ''}`}
                onClick={() => handleSort(col)}
              >
                {col.label}
                {col.sortable && (
                  <span className="sort">
                    {sortKey === col.key
                      ? sortDir === 'asc'
                        ? <IconChevronUp size={12} />
                        : <IconChevronDown size={12} />
                      : <IconChevronDown size={12} style={{ opacity: 0.3 }} />}
                  </span>
                )}
              </div>
            </th>
          ))}
          {hasActions && <th style={{ width: 80 }} />}
        </tr>
      </thead>
      <tbody>
        {rows.length === 0 ? (
          <tr>
            <td colSpan={colspan} style={{ padding: 0, borderBottom: 0 }}>
              <div className="table-empty">
                {emptyState || <span>No data</span>}
              </div>
            </td>
          </tr>
        ) : rows.map((row, i) => (
          <tr key={row.id ?? i}>
            {columns.map(col => (
              <td key={col.key}>
                {col.render ? col.render(row) : row[col.key]}
              </td>
            ))}
            {hasActions && (
              <td className="col-actions">
                <div className="cell-actions">{getRowActions(row)}</div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

/* ============================================================
   Badge
   ============================================================ */
// @component Badge
// @description Small status label. Use for status, labels, and counts.
// @example
// <Badge variant="success">Active</Badge>
// <Badge variant="warning">Pending</Badge>
// <Badge variant="error">Overdue</Badge>
// <Badge variant="primary">New</Badge>
// <Badge variant="default">Draft</Badge>
// <Badge variant="success" icon={<IconCheck size={10} />}>Verified</Badge>
// @props
// variant  'default'|'primary'|'success'|'warning'|'error' — default 'default'
// icon     ReactNode — shown left of the text label
// @end
// variant: 'default' | 'primary' | 'success' | 'warning' | 'error'
function Badge({ variant = 'default', icon, children }) {
  return (
    <span className={`badge badge-${variant}`}>
      {icon}
      {children}
    </span>
  )
}


// === Toggle.jsx ===
// Toggle — animated on/off switch with label

// @component Toggle
// @description Animated on/off switch. Supports controlled and uncontrolled usage.
// @example
// <Toggle label="Notifications" />
// <Toggle defaultChecked label="Dark mode" />
// <Toggle checked={on} onChange={setOn} label="Feature flag" />
// <Toggle disabled label="Locked" />
// @props
// checked         boolean — controlled value
// defaultChecked  boolean — initial value when uncontrolled
// onChange        (value: boolean) => void
// label           string — shown to the right of the switch
// disabled        boolean
// @end
function Toggle({ checked, defaultChecked = false, onChange, disabled, label, id }) {
  const { useState } = React
  const [internalOn, setInternalOn] = useState(defaultChecked)
  const isControlled = checked !== undefined
  const isOn = isControlled ? checked : internalOn

  function handleToggle() {
    if (disabled) return
    const next = !isOn
    if (!isControlled) setInternalOn(next)
    onChange && onChange(next)
  }

  return (
    <>
      <style>{`
        .tgl-root {
          display: inline-flex; align-items: center; gap: 8px;
          cursor: pointer; user-select: none; box-sizing: border-box;
        }
        .tgl-root.tgl-disabled { cursor: not-allowed; opacity: 0.38; }
        .tgl-track {
          position: relative; width: 40px; height: 22px; border-radius: 11px;
          background: var(--en-bg-empty);
          transition: background 200ms cubic-bezier(0.4, 0, 0.2, 1);
          flex-shrink: 0;
        }
        .tgl-root:not(.tgl-disabled):hover .tgl-track { background: var(--en-bg-dark-grey); }
        .tgl-root.tgl-on .tgl-track { background: var(--en-primary); }
        .tgl-root.tgl-on:not(.tgl-disabled):hover .tgl-track { background: var(--en-primary-light); }
        .tgl-thumb {
          position: absolute; top: 3px; left: 3px; width: 16px; height: 16px;
          border-radius: 50%; background: var(--en-white);
          box-shadow: 0 1px 3px rgba(0,0,0,0.25);
          transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .tgl-root.tgl-on .tgl-thumb { transform: translateX(18px); }
        .tgl-label { font: 400 14px/20px var(--en-font-sans); color: var(--en-fg); }
      `}</style>
      <div
        className={`tgl-root${isOn ? ' tgl-on' : ''}${disabled ? ' tgl-disabled' : ''}`}
        onClick={handleToggle}
        role="switch"
        aria-checked={isOn}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={e => (e.key === ' ' || e.key === 'Enter') && (e.preventDefault(), handleToggle())}
        id={id}
      >
        <div className="tgl-track">
          <div className="tgl-thumb" />
        </div>
        {label && <span className="tgl-label">{label}</span>}
      </div>
    </>
  )
}


// === Avatar.jsx ===
// Avatar — initials circle with sm / md / lg sizes

// @component Avatar
// @description Initials circle with 3 sizes. Defaults to purple (--en-data-accounts).
// @example
// <Avatar name="Ismael Viejo" size="md" />
// <Avatar name="John" size="sm" />
// <Avatar name="Alice" size="lg" color="var(--en-primary)" />
// @props
// name   string — split into initials (max 2 chars)
// size   'sm' (24px) | 'md' (32px) | 'lg' (40px) — default 'md'
// color  CSS color string — defaults to var(--en-data-accounts)
// @end
// size: 'sm' (24px) | 'md' (32px) | 'lg' (40px)
// color: optional CSS color string; defaults to --en-data-accounts (purple)
function Avatar({ name = '', size = 'md', color, className = '', style: extraStyle = {} }) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('') || '?'

  const dim   = { sm: 24, md: 32, lg: 40 }[size] || 32
  const fs    = { sm: 9,  md: 12, lg: 14 }[size] || 12
  const bg    = color || 'var(--en-data-accounts)'

  return (
    <>
      <style>{`
        .av-root {
          display: inline-flex; align-items: center; justify-content: center;
          border-radius: 50%; flex-shrink: 0;
          font-family: var(--en-font-sans); font-weight: 700;
          color: var(--en-white); user-select: none; box-sizing: border-box;
        }
      `}</style>
      <div
        className={`av-root ${className}`}
        style={{ width: dim, height: dim, background: bg, fontSize: fs, ...extraStyle }}
        title={name}
      >
        {initials}
      </div>
    </>
  )
}


// === Dialog.jsx ===
// Dialog — modal overlay with title, subtitle, body slot, and optional footer

// @component Dialog
// @description Modal overlay with title, subtitle, content slot, and optional footer row. Handles Escape key, X button, and backdrop click automatically.
// @example
// <Dialog
//   open={open}
//   onClose={() => setOpen(false)}
//   title="Confirm deletion"
//   subtitle="This cannot be undone."
//   footer={<>
//     <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
//     <Button variant="danger" onClick={handleDelete}>Delete</Button>
//   </>}
// >
//   <p className="en-body2">Are you sure you want to delete <strong>{item.name}</strong>?</p>
// </Dialog>
// @props
// open      boolean — controls visibility
// onClose   () => void — called on Escape, X button, and backdrop click
// title     string
// subtitle  string (optional)
// footer    ReactNode (optional) — right-aligned action buttons
// width     number — dialog width in px (default 480)
// @end
// open: bool — controls visibility
// onClose: fn — called on backdrop click, Escape key, or X button
// title: string
// subtitle: string (optional)
// footer: ReactNode (optional) — renders right-aligned action row
// width: number (default 480)
function Dialog({ open, onClose, title, subtitle, children, footer, width = 480 }) {
  const { useEffect } = React

  useEffect(() => {
    if (!open) return
    function onKey(e) { if (e.key === 'Escape') onClose && onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  if (!open) return null

  return (
    <>
      <style>{`
        .dlg-backdrop {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(30, 30, 30, 0.4);
          display: flex; align-items: center; justify-content: center; padding: 24px;
        }
        .dlg-card {
          background: var(--en-bg); border-radius: var(--en-radius-large);
          box-shadow: 0 8px 32px rgba(30,30,30,0.16), 0 0 1px rgba(30,30,30,0.12);
          display: flex; flex-direction: column;
          max-height: calc(100vh - 48px); overflow: hidden; box-sizing: border-box;
        }
        .dlg-header {
          display: flex; align-items: flex-start; justify-content: space-between;
          gap: 16px; padding: 24px 24px 16px;
        }
        .dlg-titles { display: flex; flex-direction: column; gap: 4px; flex: 1; min-width: 0; }
        .dlg-title { font: 700 16px/24px var(--en-font-sans); color: var(--en-fg); margin: 0; }
        .dlg-subtitle { font: 400 14px/20px var(--en-font-sans); color: var(--en-fg-secondary); margin: 0; }
        .dlg-close {
          width: 28px; height: 28px; border-radius: var(--en-radius-regular);
          border: none; background: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: var(--en-icon); flex-shrink: 0;
          transition: background 200ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .dlg-close:hover { background: var(--en-bg-hover); }
        .dlg-divider { height: 1px; background: var(--en-divider); margin: 0; border: none; flex-shrink: 0; }
        .dlg-body { padding: 20px 24px; overflow-y: auto; flex: 1; }
        .dlg-footer {
          display: flex; align-items: center; justify-content: flex-end; gap: 8px;
          padding: 16px 24px; border-top: 1px solid var(--en-divider); flex-shrink: 0;
        }
      `}</style>
      <div
        className="dlg-backdrop"
        onClick={e => e.target === e.currentTarget && onClose && onClose()}
      >
        <div className="dlg-card" style={{ width }}>
          <div className="dlg-header">
            <div className="dlg-titles">
              {title    && <h2 className="dlg-title">{title}</h2>}
              {subtitle && <p  className="dlg-subtitle">{subtitle}</p>}
            </div>
            {onClose && (
              <button className="dlg-close" onClick={onClose} aria-label="Close">
                <IconClose size={16} />
              </button>
            )}
          </div>
          <hr className="dlg-divider" />
          <div className="dlg-body">{children}</div>
          {footer && <div className="dlg-footer">{footer}</div>}
        </div>
      </div>
    </>
  )
}


// === Chip.jsx ===
// Chip — dismissible pill tag with 5 color variants and 3 styles

// @component Chip
// @description Dismissible pill tag with 5 color variants and 3 styles.
// @example
// <Chip variant="primary">Producer</Chip>
// <Chip variant="success" style="filled">Active</Chip>
// <Chip variant="warning" dot>Pending</Chip>
// <Chip variant="error" style="subtle" dismissible onDismiss={() => remove(id)}>Overdue</Chip>
// @props
// variant     'neutral'|'primary'|'success'|'error'|'warning' — default 'neutral'
// style       'subtle' (outline tint) | 'filled' (solid) | 'dot' (tint + trailing dot) — default 'subtle'
// dot         boolean — shorthand for style="dot"
// dismissible  boolean — shows × button
// onDismiss   () => void — called when × is clicked
// @end
// variant: 'neutral' | 'primary' | 'success' | 'error' | 'warning'
// style:   'subtle' (outline tint) | 'filled' (solid) | 'dot' (tint + trailing dot)
// dismissible: bool — shows × button
// onDismiss: fn
function Chip({ variant = 'neutral', style: chipStyle = 'subtle', dot, dismissible, onDismiss, children, className = '' }) {
  const effectiveStyle = dot ? 'dot' : chipStyle

  return (
    <>
      <style>{`
        .ch-root {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 3px 10px; border-radius: 100px;
          font: 400 12px/16px var(--en-font-sans); letter-spacing: 0.17px;
          border: 1.5px solid transparent;
          box-sizing: border-box; white-space: nowrap; vertical-align: middle;
        }
        .ch-dot-indicator { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
        .ch-dismiss {
          display: inline-flex; align-items: center; justify-content: center;
          width: 14px; height: 14px; border-radius: 50%;
          border: none; background: none; cursor: pointer; padding: 0; margin-left: 1px;
          opacity: 0.6; transition: opacity 150ms; flex-shrink: 0;
        }
        .ch-dismiss:hover { opacity: 1; }

        /* neutral */
        .ch-neutral.ch-subtle { color: var(--en-fg); background: var(--en-bg-dark-grey); border-color: var(--en-border); }
        .ch-neutral.ch-filled { color: var(--en-white); background: var(--en-fg-secondary); }
        .ch-neutral.ch-dot    { color: var(--en-fg); background: var(--en-bg-dark-grey); border-color: var(--en-border); }
        .ch-neutral.ch-dot .ch-dot-indicator { background: var(--en-fg-secondary); }

        /* primary */
        .ch-primary.ch-subtle { color: var(--en-primary); background: hsla(240,100%,95%,1); border-color: var(--en-primary); }
        .ch-primary.ch-filled { color: var(--en-white); background: var(--en-primary); }
        .ch-primary.ch-dot    { color: var(--en-primary); background: hsla(240,100%,95%,1); border-color: var(--en-primary); }
        .ch-primary.ch-dot .ch-dot-indicator { background: var(--en-primary); }

        /* success */
        .ch-success.ch-subtle { color: var(--en-success-dark); background: hsla(160,56%,92%,1); border-color: var(--en-success); }
        .ch-success.ch-filled { color: var(--en-white); background: var(--en-success-dark); }
        .ch-success.ch-dot    { color: var(--en-success-dark); background: hsla(160,56%,92%,1); border-color: var(--en-success); }
        .ch-success.ch-dot .ch-dot-indicator { background: var(--en-success); }

        /* error */
        .ch-error.ch-subtle { color: var(--en-error-dark); background: hsla(2,100%,96%,1); border-color: var(--en-error); }
        .ch-error.ch-filled { color: var(--en-white); background: var(--en-error); }
        .ch-error.ch-dot    { color: var(--en-error-dark); background: hsla(2,100%,96%,1); border-color: var(--en-error); }
        .ch-error.ch-dot .ch-dot-indicator { background: var(--en-error); }

        /* warning */
        .ch-warning.ch-subtle { color: var(--en-warning-dark); background: hsla(43,100%,93%,1); border-color: var(--en-warning); }
        .ch-warning.ch-filled { color: var(--en-black); background: var(--en-warning); }
        .ch-warning.ch-dot    { color: var(--en-warning-dark); background: hsla(43,100%,93%,1); border-color: var(--en-warning); }
        .ch-warning.ch-dot .ch-dot-indicator { background: var(--en-warning); }
      `}</style>
      <span className={`ch-root ch-${variant} ch-${effectiveStyle} ${className}`}>
        {children}
        {effectiveStyle === 'dot' && <span className="ch-dot-indicator" />}
        {dismissible && (
          <button className="ch-dismiss" onClick={onDismiss} aria-label="Remove">
            <IconClose size={10} />
          </button>
        )}
      </span>
    </>
  )
}


// === Select.jsx ===
// Select — dropdown field with label, states, and option list

// @component Select
// @description Dropdown input with label, error state, and option list. Supports string arrays or value/label objects.
// @example
// <Select
//   label="Policy type"
//   options={['Commercial', 'Personal', 'Benefits']}
//   placeholder="Select type..."
//   onChange={val => setType(val)}
// />
//
// <Select
//   label="Market"
//   options={[{ value: 'wholesale', label: 'Wholesale' }, { value: 'retail', label: 'Retail' }]}
//   value={market}
//   onChange={setMarket}
// />
// @props
// label        string
// options      string[] or { value, label }[]
// placeholder  string — default 'Select option...'
// value        string — controlled value
// onChange     (value) => void
// error        string — shows red border and error text below
// disabled     boolean
// @end
// options: string[] | { value, label }[]
// value / onChange — controlled; omit for uncontrolled
function Select({ label, options = [], error, disabled, placeholder = 'Select option...', value, onChange, className = '' }) {
  const { useState, useRef, useEffect } = React
  const [open,     setOpen]     = useState(false)
  const [internal, setInternal] = useState('')
  const ref = useRef(null)

  const isControlled  = value !== undefined
  const currentValue  = isControlled ? value : internal

  const currentOption = options.find(o => (typeof o === 'object' ? o.value : o) === currentValue)
  const displayLabel  = currentValue
    ? (typeof currentOption === 'object' ? currentOption?.label : currentOption) || currentValue
    : placeholder

  useEffect(() => {
    function onClick(e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  function handleSelect(opt) {
    const val = typeof opt === 'object' ? opt.value : opt
    if (!isControlled) setInternal(val)
    setOpen(false)
    onChange && onChange(val)
  }

  return (
    <>
      <style>{`
        .sel-wrapper { position: relative; display: flex; flex-direction: column; gap: 4px; box-sizing: border-box; }
        .sel-label { font: 400 12px/16px var(--en-font-sans); color: var(--en-fg-secondary); }
        .sel-label--focused { color: var(--en-primary); }
        .sel-trigger {
          display: flex; align-items: center; gap: 8px; padding: 0 12px; height: 36px;
          background: var(--en-bg); border: 1.5px solid var(--en-border);
          border-radius: var(--en-radius-regular); cursor: pointer;
          box-sizing: border-box; user-select: none;
          transition: border-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .sel-trigger:hover:not(.sel-trigger--disabled) { border-color: var(--en-primary); }
        .sel-trigger:focus { outline: none; border-color: var(--en-primary); }
        .sel-trigger--open { border-color: var(--en-primary); }
        .sel-trigger--error { border-color: var(--en-error); }
        .sel-trigger--disabled { background: var(--en-bg-dark-grey); cursor: not-allowed; opacity: 0.55; }
        .sel-value { flex: 1; font: 400 14px/20px var(--en-font-sans); color: var(--en-fg); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .sel-value--placeholder { color: var(--en-fg-disabled); }
        .sel-chevron { flex-shrink: 0; color: var(--en-icon-secondary); transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1); }
        .sel-chevron--open { transform: rotate(180deg); }
        .sel-dropdown {
          position: absolute; top: calc(100% + 4px); left: 0; right: 0; z-index: 200;
          background: var(--en-bg); border-radius: var(--en-radius-regular);
          box-shadow: var(--en-shadow-menu); overflow-y: auto; max-height: 240px; padding: 4px 0;
        }
        .sel-option {
          padding: 8px 12px; font: 400 14px/20px var(--en-font-sans); color: var(--en-fg);
          cursor: pointer; transition: background 150ms;
        }
        .sel-option:hover { background: var(--en-bg-hover); }
        .sel-option--active { color: var(--en-primary); background: var(--en-outlined-hover); }
      `}</style>
      <div className={`sel-wrapper ${className}`} ref={ref}>
        {label && (
          <label className={`sel-label${open ? ' sel-label--focused' : ''}`}>{label}</label>
        )}
        <div
          className={`sel-trigger${open ? ' sel-trigger--open' : ''}${error ? ' sel-trigger--error' : ''}${disabled ? ' sel-trigger--disabled' : ''}`}
          onClick={() => !disabled && setOpen(o => !o)}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={e => {
            if (disabled) return
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(o => !o) }
            if (e.key === 'Escape') setOpen(false)
          }}
        >
          <span className={`sel-value${!currentValue ? ' sel-value--placeholder' : ''}`}>{displayLabel}</span>
          <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" className={`sel-chevron${open ? ' sel-chevron--open' : ''}`}>
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/>
          </svg>
        </div>
        {error && <span className="form-error">{error}</span>}
        {open && !disabled && (
          <div className="sel-dropdown">
            {options.map((opt, i) => {
              const val = typeof opt === 'object' ? opt.value : opt
              const lbl = typeof opt === 'object' ? opt.label : opt
              return (
                <div
                  key={i}
                  className={`sel-option${val === currentValue ? ' sel-option--active' : ''}`}
                  onMouseDown={e => { e.preventDefault(); handleSelect(opt) }}
                >
                  {lbl}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}


// === Stepper.jsx ===
// Stepper — horizontal multi-step progress indicator

// @component Stepper
// @description Horizontal multi-step progress indicator. Connecting lines fill as steps complete.
// @example
// <Stepper steps={[
//   { label: 'Policy details', status: 'completed' },
//   { label: 'Coverage',       status: 'active' },
//   { label: 'Review',         status: 'upcoming' },
//   { label: 'Confirm',        status: 'upcoming' },
// ]} />
// @props
// steps  array of { label: string, status: 'completed'|'active'|'upcoming' }
// @end
// steps: [{ label: string, status: 'completed' | 'active' | 'upcoming' }]
function Stepper({ steps = [], className = '' }) {
  return (
    <>
      <style>{`
        .stp-root { display: flex; align-items: flex-start; box-sizing: border-box; }
        .stp-step {
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          flex: 1; position: relative; min-width: 0;
        }
        .stp-step:not(:last-child)::after {
          content: ''; position: absolute;
          top: 14px; left: calc(50% + 16px);
          width: calc(100% - 32px); height: 1.5px;
          background: var(--en-divider);
        }
        .stp-step.stp-completed:not(:last-child)::after { background: var(--en-primary); }
        .stp-icon {
          width: 28px; height: 28px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; box-sizing: border-box;
          font: 700 12px/1 var(--en-font-sans); z-index: 1;
          background: var(--en-bg);
        }
        .stp-completed .stp-icon { background: var(--en-primary); color: var(--en-white); }
        .stp-active    .stp-icon { background: var(--en-primary); color: var(--en-white); }
        .stp-upcoming  .stp-icon { border: 1.5px solid var(--en-border); color: var(--en-fg-disabled); }
        .stp-label {
          font: 400 12px/16px var(--en-font-sans); color: var(--en-fg-secondary);
          text-align: center; white-space: nowrap;
        }
        .stp-active .stp-label { font-weight: 700; color: var(--en-fg); }
      `}</style>
      <div className={`stp-root ${className}`}>
        {steps.map((step, i) => (
          <div key={i} className={`stp-step stp-${step.status || 'upcoming'}`}>
            <div className="stp-icon">
              {step.status === 'completed'
                ? <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34Z"/></svg>
                : i + 1}
            </div>
            <span className="stp-label">{step.label}</span>
          </div>
        ))}
      </div>
    </>
  )
}


// === Tooltip.jsx ===
// Tooltip — dark contextual tooltip shown on hover

// @component Tooltip
// @description Dark tooltip shown on hover. Wrap any element — no positioning needed.
// @example
// <Tooltip label="Download report" position="top">
//   <Button variant="icon"><IconDownload size={16} /></Button>
// </Tooltip>
//
// <Tooltip label="GWP" description="Gross Written Premium for the policy year" position="bottom">
//   <span className="en-body2">GWP</span>
// </Tooltip>
// @props
// label        string — bold heading (required to show tooltip)
// description  string (optional) — secondary line below the label
// position     'top'|'bottom'|'left'|'right' — default 'top'
// @end
// label:       string — bold heading (required)
// description: string — secondary text (optional)
// position:    'top' | 'bottom' | 'left' | 'right' (default 'top')
function Tooltip({ label, description, position = 'top', children, className = '' }) {
  const { useState } = React
  const [visible, setVisible] = useState(false)

  return (
    <>
      <style>{`
        .tt-root { position: relative; display: inline-flex; align-items: center; }
        .tt-box {
          position: absolute; z-index: 300;
          background: var(--en-black); color: var(--en-white);
          border-radius: var(--en-radius-regular); padding: 6px 10px;
          box-shadow: var(--en-shadow-tooltip); pointer-events: none;
          white-space: nowrap; box-sizing: border-box;
          animation: tt-in 120ms ease forwards;
        }
        @keyframes tt-in { from { opacity: 0; transform: translateY(3px); } to { opacity: 1; transform: translateY(0); } }
        .tt-top    { bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%); }
        .tt-bottom { top: calc(100% + 8px);    left: 50%; transform: translateX(-50%); }
        .tt-left   { right: calc(100% + 8px);  top: 50%;  transform: translateY(-50%); }
        .tt-right  { left: calc(100% + 8px);   top: 50%;  transform: translateY(-50%); }
        .tt-arrow {
          position: absolute; width: 8px; height: 8px;
          background: var(--en-black); transform: rotate(45deg);
        }
        .tt-top    .tt-arrow { bottom: -4px; left: 50%; margin-left: -4px; }
        .tt-bottom .tt-arrow { top: -4px;    left: 50%; margin-left: -4px; }
        .tt-left   .tt-arrow { right: -4px;  top: 50%;  margin-top: -4px; }
        .tt-right  .tt-arrow { left: -4px;   top: 50%;  margin-top: -4px; }
        .tt-label { font: 700 12px/16px var(--en-font-sans); display: block; }
        .tt-desc  { font: 400 12px/16px var(--en-font-sans); display: block; margin-top: 2px; opacity: 0.75; }
      `}</style>
      <div
        className={`tt-root ${className}`}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
      >
        {children}
        {visible && label && (
          <div className={`tt-box tt-${position}`}>
            <span className="tt-arrow" />
            <span className="tt-label">{label}</span>
            {description && <span className="tt-desc">{description}</span>}
          </div>
        )}
      </div>
    </>
  )
}
