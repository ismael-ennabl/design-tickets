# ennabl Shared Components

These components are available as globals in the preview. Use them directly — no imports needed.

---

## CollapsibleSection

Collapsible card section with an optional unsaved-changes dot.

```jsx
<CollapsibleSection title="Accounts in proposal" defaultOpen modified={false}>
  {/* content */}
</CollapsibleSection>
```

Props:
- `title` string — section heading
- `defaultOpen` boolean (default: true)
- `modified` boolean — shows amber dot when true
- `children` ReactNode

---

## EditableField

Inline-editable label/textarea with unsaved indicator.

```jsx
<EditableField
  label="About Us"
  value={agency.aboutUs}
  multiline
  modified={modified.aboutUs}
  onChange={val => setAgency(a => ({ ...a, aboutUs: val }))}
/>
```

Props:
- `label` string
- `value` string
- `multiline` boolean — textarea vs input
- `modified` boolean — shows amber dot
- `onChange` (value: string) => void

---

## TemplatePicker

Dropdown picker for selecting/managing named templates. Shows search, default-star, and per-row actions.

```jsx
<TemplatePicker
  templates={templates}
  activeId={activeId}
  isDirty={dirty}
  onApply={id => applyTemplate(id)}
  onSaveAsNew={() => openSaveDialog()}
  onManageOpen={() => setManageOpen(true)}
  onEdit={id => openEditDialog(id)}
  onSetDefault={id => setDefault(id)}
  onDuplicate={id => duplicate(id)}
  onDelete={id => deleteTemplate(id)}
/>
```

Template shape:
```js
{
  id: string,
  name: string,
  description: string,
  isDefault: boolean,
  shared: boolean,
  owner: { name: string, initials: string, isYou: boolean },
  updatedAt: string (ISO),
  usageCount: number,
}
```

---

## SaveTemplateDialog

Modal for creating or editing a named template.

```jsx
<SaveTemplateDialog
  mode="fork"           // 'create' | 'edit' | 'fork'
  initial={{ name: '', description: '', isDefault: false, shared: true }}
  templates={templates} // for duplicate-name warning
  onClose={() => setDialog(null)}
  onSubmit={vals => handleSave(vals)}
/>
```

`onSubmit` receives `{ name, description, isDefault, shared }`.

---

## UpdateTemplateDialog

Confirmation modal for saving changes to an existing template.

```jsx
<UpdateTemplateDialog
  template={activeTpl}
  summary={['Producer team: 3 → 4 members', 'Agency name updated']}
  onClose={() => setDialog(false)}
  onConfirm={() => confirmUpdate()}
  onSaveAsNew={() => { closeDialog(); openSaveAsNew(); }}
/>
```

---

## ManageModal

Full-screen modal for browsing, applying, editing, duplicating, and deleting templates.

```jsx
<ManageModal
  templates={templates}
  activeId={activeId}
  onClose={() => setManageOpen(false)}
  onApply={id => applyTemplate(id)}
  onEdit={id => openEditDialog(id)}
  onDuplicate={id => duplicate(id)}
  onDelete={id => confirmDelete(id)}
  onSetDefault={id => setDefault(id)}
  onCreate={() => { setManageOpen(false); openSaveDialog(); }}
/>
```

---

## DeleteConfirm

Destructive confirmation modal. CTA and copy are fully customisable.

```jsx
// Default — "Delete template"
<DeleteConfirm
  template={templateToDelete}
  onClose={() => setDeleteTarget(null)}
  onConfirm={() => confirmDelete()}
/>

// Custom label + copy
<DeleteConfirm
  template={item}
  confirmLabel="Delete Forever"
  title={`Permanently delete "${item.name}"?`}
  message="This cannot be undone."
  onClose={handleClose}
  onConfirm={handleConfirm}
/>
```

Props:
- `template` `{ name, usageCount }` — used in default title/message
- `confirmLabel` string (default: `'Delete template'`) — CTA text
- `title` string — overrides the default title
- `message` string | ReactNode — overrides the default body copy
- `onClose` () => void
- `onConfirm` () => void

---

## Custom dialogs (build your own)

Use these CSS classes to build any dialog that matches the ennabl design:

```jsx
function MyDialog({ onClose, onConfirm }) {
  return (
    <Scrim onClose={onClose}>
      <div className="dialog" onClick={e => e.stopPropagation()}>
        <div className="dialog-head">
          <div>
            <div className="dialog-title">Are you sure?</div>
            <div className="dialog-sub">This action cannot be undone.</div>
          </div>
          <button className="btn-icon" onClick={onClose}><IconClose size={16} /></button>
        </div>
        <div className="dialog-foot">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </Scrim>
  );
}
```

Classes:
- `.scrim` — fixed full-screen backdrop (use `<Scrim onClose={fn}>` component instead)
- `.dialog` — white card, centered, `max-width: 560px` by default; override with `style={{ maxWidth: 440 }}`
- `.dialog-head` — flex row: left content + close button
- `.dialog-title` — bold heading
- `.dialog-sub` — muted subtitle / body copy
- `.dialog-foot` — right-aligned action buttons row
- For destructive CTAs add `style={{ background: 'var(--en-error-dark)' }}` to `.btn-primary`

`Scrim` is available as a global — use it directly.

---

## Step3Body

The full Step 3 form body — producer tables + agency fields.

```jsx
<Step3Body
  producerTables={producerTables}
  agency={agency}
  onProducerTablesChange={setProducerTables}
  onAgencyChange={setAgency}
  modified={modified}
/>
```

`modified` shape: `{ producers, tables: { [id]: bool }, agencyName, aboutUs, disclosures, serviceSummary, logoFile }`

Agency shape: `{ agencyName, aboutUs, disclosures, serviceSummary, logoFile }`

---

## Usage notes

- All shared components use global React (`const { useState } = React` — no imports)
- All shared components use the ennabl CSS classes and `--en-*` variables
- Wrap dialogs/modals in a fragment after the main content — they render to fixed position overlays
- The `Scrim` component is the modal backdrop — used internally by dialogs, rarely needed directly
