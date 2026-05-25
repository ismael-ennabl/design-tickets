// Dialog — modal overlay with title, subtitle, body slot, and optional footer

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
