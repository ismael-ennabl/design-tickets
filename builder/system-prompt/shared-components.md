<!-- AUTO-GENERATED — do not edit by hand -->
<!-- Edit @component blocks in design-system/_shared/*.jsx, then: npm run build (in builder/) -->
<!-- source-hash: 8b0103aaec90f3c4 -->
<!-- file:Avatar.jsx:b417bed930e6 -->
<!-- file:Chip.jsx:72c8bb1c7f41 -->
<!-- file:Dialog.jsx:7b10e587e006 -->
<!-- file:Select.jsx:875f1d92a9e3 -->
<!-- file:Sidenav.jsx:a62e6b94a59b -->
<!-- file:Stepper.jsx:e41eaa47276a -->
<!-- file:Toggle.jsx:a93069dd6111 -->
<!-- file:Tooltip.jsx:82d5bb2a192f -->
<!-- file:dialogs.jsx:492a0d6fdecc -->
<!-- file:icons.jsx:fbe0c71a0827 -->
<!-- file:picker.jsx:49b432325ef5 -->
<!-- file:step3.jsx:aff25accb872 -->
<!-- file:ui.jsx:3a9eef5ceffc -->

# ennabl Shared Components

These components are available as globals in the preview. Use them directly — no imports needed.

---

## Avatar

Initials circle with 3 sizes. Defaults to purple (--en-data-accounts).

```jsx
<Avatar name="Ismael Viejo" size="md" />
<Avatar name="John" size="sm" />
<Avatar name="Alice" size="lg" color="var(--en-primary)" />
```

Props:
- `name` string — split into initials (max 2 chars)
- `size` 'sm' (24px) | 'md' (32px) | 'lg' (40px) — default 'md'
- `color` CSS color string — defaults to var(--en-data-accounts)

---

## Chip

Dismissible pill tag with 5 color variants and 3 styles.

```jsx
<Chip variant="primary">Producer</Chip>
<Chip variant="success" style="filled">Active</Chip>
<Chip variant="warning" dot>Pending</Chip>
<Chip variant="error" style="subtle" dismissible onDismiss={() => remove(id)}>Overdue</Chip>
```

Props:
- `variant` 'neutral'|'primary'|'success'|'error'|'warning' — default 'neutral'
- `style` 'subtle' (outline tint) | 'filled' (solid) | 'dot' (tint + trailing dot) — default 'subtle'
- `dot` boolean — shorthand for style="dot"
- `dismissible` boolean — shows × button
- `onDismiss` () => void — called when × is clicked

---

## Dialog

Modal overlay with title, subtitle, content slot, and optional footer row. Handles Escape key, X button, and backdrop click automatically.

```jsx
<Dialog
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm deletion"
  subtitle="This cannot be undone."
  footer={<>
    <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
    <Button variant="danger" onClick={handleDelete}>Delete</Button>
  </>}
>
  <p className="en-body2">Are you sure you want to delete <strong>{item.name}</strong>?</p>
</Dialog>
```

Props:
- `open` boolean — controls visibility
- `onClose` () => void — called on Escape, X button, and backdrop click
- `title` string
- `subtitle` string (optional)
- `footer` ReactNode (optional) — right-aligned action buttons
- `width` number — dialog width in px (default 480)

---

## Select

Dropdown input with label, error state, and option list. Supports string arrays or value/label objects.

```jsx
<Select
  label="Policy type"
  options={['Commercial', 'Personal', 'Benefits']}
  placeholder="Select type..."
  onChange={val => setType(val)}
/>

<Select
  label="Market"
  options={[{ value: 'wholesale', label: 'Wholesale' }, { value: 'retail', label: 'Retail' }]}
  value={market}
  onChange={setMarket}
/>
```

Props:
- `label` string
- `options` string[] or { value, label }[]
- `placeholder` string — default 'Select option...'
- `value` string — controlled value
- `onChange` (value) => void
- `error` string — shows red border and error text below
- `disabled` boolean

---

## Sidenav

Two-panel app navigation. Icon rail on the left selects the active section; submenu shows that section's links and collapsible groups. Pass collapsed={true} to show icon rail only (80px).

```jsx
<Sidenav
  active="insights"
  onNavigate={(sectionId, path) => console.log(sectionId, path)}
/>

// Collapsed — icon rail only
<Sidenav active="workflows" collapsed onNavigate={fn} />

// Custom sections
<Sidenav
  sections={ENNABL_NAV}
  active="data"
  activePath="/data/accounts"
  onNavigate={(sectionId, path) => navigate(sectionId, path)}
/>
```

Props:
- `sections` array — section config (defaults to ENNABL_NAV). Each: { id, label, icon, links[], groups[] }
- `active` string — active section id ('insights' | 'growth' | 'workflows' | 'ai' | 'data' | 'updates' | 'settings')
- `activePath` string — highlighted link path within the active section
- `onNavigate` (sectionId, path?) => void — called on section or link click
- `collapsed` boolean — icon rail only (80px wide). Default false.

---

## Stepper

Horizontal multi-step progress indicator. Connecting lines fill as steps complete.

```jsx
<Stepper steps={[
  { label: 'Policy details', status: 'completed' },
  { label: 'Coverage',       status: 'active' },
  { label: 'Review',         status: 'upcoming' },
  { label: 'Confirm',        status: 'upcoming' },
]} />
```

Props:
- `steps` array of { label: string, status: 'completed'|'active'|'upcoming' }

---

## Toggle

Animated on/off switch. Supports controlled and uncontrolled usage.

```jsx
<Toggle label="Notifications" />
<Toggle defaultChecked label="Dark mode" />
<Toggle checked={on} onChange={setOn} label="Feature flag" />
<Toggle disabled label="Locked" />
```

Props:
- `checked` boolean — controlled value
- `defaultChecked` boolean — initial value when uncontrolled
- `onChange` (value: boolean) => void
- `label` string — shown to the right of the switch
- `disabled` boolean

---

## Tooltip

Dark tooltip shown on hover. Wrap any element — no positioning needed.

```jsx
<Tooltip label="Download report" position="top">
  <Button variant="icon"><IconDownload size={16} /></Button>
</Tooltip>

<Tooltip label="GWP" description="Gross Written Premium for the policy year" position="bottom">
  <span className="en-body2">GWP</span>
</Tooltip>
```

Props:
- `label` string — bold heading (required to show tooltip)
- `description` string (optional) — secondary line below the label
- `position` 'top'|'bottom'|'left'|'right' — default 'top'

---

## SaveTemplateDialog

Modal for creating, editing, or forking a named template.

```jsx
<SaveTemplateDialog
  mode="create"
  initial={{ name: '', description: '', isDefault: false, shared: true }}
  templates={templates}
  onClose={() => setDialog(null)}
  onSubmit={vals => handleSave(vals)}
/>
```

Props:
- `mode` 'create'|'edit'|'fork'
- `initial` { name, description, isDefault, shared }
- `templates` array — used for duplicate-name warning
- `onClose` () => void
- onSubmit ({ name, description, isDefault, shared }) => void

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

Props:
- `template` { name } — the template being updated
- `summary` string[] — bullet list of changes shown in the dialog
- `onClose` () => void
- `onConfirm` () => void
- `onSaveAsNew` () => void

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

Props:
- `templates` array of template objects
- `activeId` string — currently applied template id
- `onClose` () => void
- `onApply` (id) => void
- `onEdit` (id) => void
- `onDuplicate` (id) => void
- `onDelete` (id) => void
- `onSetDefault` (id) => void
- `onCreate` () => void — opens the save-as-new flow

---

## DeleteConfirm

Destructive confirmation modal. CTA and copy are fully customisable.

```jsx
<DeleteConfirm
  template={templateToDelete}
  onClose={() => setDeleteTarget(null)}
  onConfirm={() => confirmDelete()}
/>

<DeleteConfirm
  template={item}
  confirmLabel="Remove forever"
  title={`Delete "${item.name}"?`}
  message="This cannot be undone."
  onClose={handleClose}
  onConfirm={handleConfirm}
/>
```

Props:
- `template` { name, usageCount } — used in default title / message copy
- `confirmLabel` string — CTA button text (default 'Delete template')
- `title` string — overrides the default title
- `message` string|ReactNode — overrides the default body copy
- `onClose` () => void
- `onConfirm` () => void

---

## TemplatePicker

Dropdown picker for selecting and managing named templates. Includes search, default-star, and per-row actions.

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

Props:
- `templates` array of { id, name, description, isDefault, shared, owner: { name, initials, isYou }, updatedAt, usageCount }
- `activeId` string — id of the currently applied template
- `isDirty` boolean — shows unsaved-changes indicator on the trigger
- `onApply` (id) => void
- `onSaveAsNew` () => void — opens save-as-new dialog
- onManageOpen () => void — opens ManageModal
- `onEdit` (id) => void
- onSetDefault (id) => void
- `onDuplicate` (id) => void
- `onDelete` (id) => void

---

## CollapsibleSection

Collapsible card section with an optional unsaved-changes amber dot.

```jsx
<CollapsibleSection title="Accounts in proposal" defaultOpen modified={false}>
  {/* content */}
</CollapsibleSection>
```

Props:
- `title` string — section heading
- `defaultOpen` boolean — initial open state (default true)
- `modified` boolean — shows amber dot when true
- `children` ReactNode

---

## EditableField

Inline-editable label/textarea with unsaved-changes indicator.

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
- `multiline` boolean — textarea vs single-line input
- `modified` boolean — shows amber dot when true
- `onChange` (value: string) => void

---

## Step3Body

The full Step 3 form body — producer tables + agency information fields.

```jsx
<Step3Body
  producerTables={producerTables}
  agency={agency}
  onProducerTablesChange={setProducerTables}
  onAgencyChange={setAgency}
  modified={modified}
/>
```

Props:
- `producerTables` array of producer table objects
- `agency` { agencyName, aboutUs, disclosures, serviceSummary, logoFile }
- `onProducerTablesChange` (tables) => void
- `onAgencyChange` (agency) => void
- `modified` { producers, tables: { [id]: bool }, agencyName, aboutUs, disclosures, serviceSummary, logoFile }

---

## Button

Canonical button. Use instead of bare <button className="btn ..."> for consistent loading + disabled states.

```jsx
<Button variant="primary" onClick={save}>Save changes</Button>
<Button variant="secondary" icon={<IconPlus size={14} />}>Add row</Button>
<Button variant="text">Cancel</Button>
<Button variant="danger">Delete</Button>
<Button variant="primary" loading={saving}>Saving…</Button>
<Button variant="icon" onClick={edit}><IconEdit size={16} /></Button>
<Button variant="secondary" size="sm">Small</Button>
```

Props:
- `variant` 'primary'|'secondary'|'text'|'danger'|'icon'|'link' — default 'primary'
- `size` 'sm' — smaller padding variant
- `loading` boolean — shows spinner, disables interaction
- `disabled` boolean
- `icon` ReactNode — shown left of label (hidden when loading)
- `className` string — extra classes appended to the button
- ...also accepts all standard <button> props (onClick, type, form, etc.)

---

## FormField

Label + input wrapper with hint and error states. Always wrap Input inside FormField.

```jsx
<FormField label="Agency name" hint="Shown on all proposals" htmlFor="agency">
  <Input id="agency" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Acme Insurance" />
</FormField>

<FormField label="Notes" error={errors.notes}>
  <Input multiline value={notes} onChange={e => setNotes(e.target.value)} rows={4} />
</FormField>
```

Props:
- `label` string
- `hint` string — shown below input when there is no error
- `error` string — shown in red below input (takes priority over hint)
- `htmlFor` string — links the label to an input id

---

## Input

Styled text input or textarea. Use inside FormField for label and error display.

```jsx
<Input value={v} onChange={e => setV(e.target.value)} placeholder="Search…" />
<Input multiline value={v} onChange={e => setV(e.target.value)} rows={3} />
<Input error value={v} onChange={e => setV(e.target.value)} />
```

Props:
- `multiline` boolean — renders <textarea> instead of <input>
- `error` boolean — applies red border and focus ring
- ...accepts all standard <input> / <textarea> props (value, onChange, placeholder, rows, etc.)

---

## Table

Data table with optional sorting, row actions, and empty state. Always use this instead of raw <table> HTML.

```jsx
const columns = [
  { key: 'name',   label: 'Account', sortable: true, width: '40%' },
  { key: 'status', label: 'Status',  render: row => <Badge variant={row.active ? 'success' : 'default'}>{row.active ? 'Active' : 'Inactive'}</Badge> },
  { key: 'date',   label: 'Updated' },
]

<Table
  columns={columns}
  rows={data}
  sortKey={sortKey}
  sortDir={sortDir}
  onSort={(key, dir) => { setSortKey(key); setSortDir(dir) }}
  emptyState={<span>No results</span>}
  getRowActions={row => (
    <>
      <Button variant="icon" onClick={() => edit(row)}><IconEdit size={14} /></Button>
      <Button variant="icon" onClick={() => del(row)}><IconTrash size={14} /></Button>
    </>
  )}
/>
```

Props:
- `columns` array of { key, label, sortable?, width?, render?(row)=>node }
- `rows` array of objects — include an `id` field for stable React keys
- `sortKey` string — key of the currently sorted column
- `sortDir` 'asc' | 'desc' — current sort direction
- `onSort` (key, dir) => void — called when a sortable header is clicked
- `getRowActions` (row) => ReactNode — renders right-aligned action buttons per row
- `emptyState` ReactNode — shown when rows is empty (default: "No data")
- `compact` boolean — tighter row padding

---

## Badge

Small status label. Use for status, labels, and counts.

```jsx
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Overdue</Badge>
<Badge variant="primary">New</Badge>
<Badge variant="default">Draft</Badge>
<Badge variant="success" icon={<IconCheck size={10} />}>Verified</Badge>
```

Props:
- `variant` 'default'|'primary'|'success'|'warning'|'error' — default 'default'
- `icon` ReactNode — shown left of the text label

---

## Usage notes

- All shared components use global React (`const { useState } = React` — no imports)
- All shared components use the ennabl CSS classes and `--en-*` variables
- Wrap dialogs/modals in a fragment after the main content — they render to fixed position overlays
- The `Scrim` component is the modal backdrop — used internally by dialogs, rarely needed directly
