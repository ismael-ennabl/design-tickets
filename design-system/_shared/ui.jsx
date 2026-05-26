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
