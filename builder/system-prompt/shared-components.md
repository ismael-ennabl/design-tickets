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

Small confirmation modal for template deletion.

```jsx
<DeleteConfirm
  template={templateToDelete}
  onClose={() => setDeleteTarget(null)}
  onConfirm={() => confirmDelete()}
/>
```

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
