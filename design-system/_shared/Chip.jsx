// Chip — dismissible pill tag with 5 color variants and 3 styles

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
