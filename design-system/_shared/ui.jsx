// Core UI primitives — Button, Input, FormField, Table, Badge
// All use existing .btn / .input / .table / .badge CSS classes from styles.css

/* ============================================================
   Button
   ============================================================ */
// variant: 'primary' | 'secondary' | 'text' | 'danger' | 'icon'
// size: undefined (default 13px) | 'sm'
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
// variant: 'default' | 'primary' | 'success' | 'warning' | 'error'
function Badge({ variant = 'default', icon, children }) {
  return (
    <span className={`badge badge-${variant}`}>
      {icon}
      {children}
    </span>
  )
}
