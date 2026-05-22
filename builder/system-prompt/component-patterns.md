# ennabl Component Patterns

## Page layout

```jsx
<div className="stage">
  {/* max-width 1200px, centered, flex column, gap 16px */}
  {/* background: var(--en-bg-grey) */}
</div>
```

## Step card (primary container)

```jsx
<div className="step-card">
  <div className="step-header">
    <div className="step-header-left">
      <h3 className="step-title">Step N: Title</h3>
    </div>
    <button className="btn-hide">Hide</button>
  </div>
  {/* content */}
</div>
```

CSS rules:
- `background: var(--en-bg)`, `border-radius: 16px`, `border: 1px solid var(--en-primary)`
- `padding: 28px 32px 32px`

## Buttons

```jsx
<button className="btn btn-primary">Save changes</button>
<button className="btn btn-secondary">Save as new</button>
<button className="btn btn-text">Discard</button>
<button className="btn btn-hide">Hide</button>
```

Button base: `font-family: inherit; cursor: pointer; border-radius: 8px; display: inline-flex; align-items: center; gap: 6px;`

## Template / picker bar

```jsx
<div className={`tpl-bar ${dirty ? 'dirty' : ''}`}>
  <span className="tpl-bar-label">Template</span>
  {/* picker trigger */}
  <button className="tpl-trigger">Name <IconChevronDown size={16} /></button>
  <div className="tpl-bar-actions">
    <button className="btn btn-primary">Save changes</button>
  </div>
</div>
```

## Data table

```jsx
<table className="manage-table">
  <thead>
    <tr><th>Name</th><th>Value</th></tr>
  </thead>
  <tbody>
    <tr><td>...</td><td>...</td></tr>
  </tbody>
</table>
```

thead: `background: var(--en-bg-grey)`, th: `500 12px uppercase`, letter-spacing 0.4px, color `--en-fg-secondary`
tbody td: `400 14px/20px`, border-bottom `--en-divider`, hover `rgba(0,0,197,0.04)`

## Collapsible section

```jsx
<div className="s3-body">
  <CollapsibleSection title="Section title" defaultOpen>
    {/* content */}
  </CollapsibleSection>
</div>
```

## Modal / dialog

```jsx
<div className="modal-backdrop">
  <div className="modal" role="dialog">
    <div className="modal-header">
      <h2 className="modal-title">Title</h2>
      <button className="modal-close"><IconX size={18} /></button>
    </div>
    <div className="modal-body">{/* content */}</div>
    <div className="modal-footer">
      <button className="btn btn-text">Cancel</button>
      <button className="btn btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

backdrop: `position: fixed; inset: 0; background: rgba(30,30,30,0.4); z-index: 100`
modal: `background: var(--en-bg); border-radius: 16px; box-shadow: var(--en-shadow-menu); padding: 24px`

## Toast

```jsx
<div className="toast-wrap">
  <div className="toast">
    <IconCheck size={16} />
    <span>Action completed</span>
  </div>
</div>
```

`background: var(--en-logo-primary); color: white; border-radius: 10px; bottom: 24px; fixed`

## Tooltip

```jsx
<span className="info-wrap">
  <button className="info-btn"><IconInfo size={16} /></button>
  <div className="tooltip" role="tooltip">Explanation text</div>
</span>
```

## Avatar

```jsx
<div className="avatar">AC</div>
{/* 22px circle, background: var(--en-data-producers), white text, 600 10px */}
```

## Available icons

```jsx
<IconChevronDown size={16} />
<IconChevronUp size={16} />
<IconPlus size={16} />
<IconCheck size={16} />
<IconInfo size={16} />
<IconStar size={16} filled />
<IconRevert size={16} />
<IconX size={18} />
```

Icons accept `size` (number) and optional `style` prop.

## Inline modified indicator

```jsx
{modified.fieldName && <span className="modified-mark" />}
{/* 6px amber dot — shows unsaved changes */}
```

## Row action menu

```jsx
<div className="row-menu-wrap">
  <div className="row-menu">
    <button>Edit</button>
    <div className="sep" />
    <button className="danger">Delete</button>
  </div>
</div>
```

## CSS output rules

1. All colors via `--en-*` variables. Never hardcode.
2. Typography via `.en-body2`, `.en-subtitle2`, etc. or inline `font:` shorthand matching the scale.
3. Spacing in multiples of 4px.
4. Transitions: `var(--en-duration-short) var(--en-easing)`.
5. Use `box-sizing: border-box` on all elements.
6. Cards always `border-radius: var(--en-radius-large)` (16px).
7. Inputs/buttons always `border-radius: var(--en-radius-regular)` (8px).
