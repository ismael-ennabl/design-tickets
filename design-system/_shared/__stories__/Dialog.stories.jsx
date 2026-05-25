import React, { useState, useEffect } from 'react';

const closeIcon = <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/></svg>;

function Dialog({ open, onClose, title, subtitle, children, footer, width = 480 }) {
  useEffect(() => {
    if (!open) return;
    const onKey = e => { if (e.key === 'Escape') onClose && onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  if (!open) return null;
  return (
    <>
      <style>{`
        .dlg-backdrop{position:fixed;inset:0;z-index:1000;background:rgba(30,30,30,.4);display:flex;align-items:center;justify-content:center;padding:24px;}
        .dlg-card{background:var(--en-bg);border-radius:var(--en-radius-large);box-shadow:0 8px 32px rgba(30,30,30,.16),0 0 1px rgba(30,30,30,.12);display:flex;flex-direction:column;max-height:calc(100vh - 48px);overflow:hidden;box-sizing:border-box;}
        .dlg-header{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding:24px 24px 16px;}
        .dlg-titles{display:flex;flex-direction:column;gap:4px;flex:1;min-width:0;}
        .dlg-title{font:700 16px/24px var(--en-font-sans);color:var(--en-fg);margin:0;}
        .dlg-subtitle{font:400 14px/20px var(--en-font-sans);color:var(--en-fg-secondary);margin:0;}
        .dlg-close{width:28px;height:28px;border-radius:var(--en-radius-regular);border:none;background:none;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--en-icon);flex-shrink:0;transition:background 200ms;}
        .dlg-close:hover{background:var(--en-bg-hover);}
        .dlg-divider{height:1px;background:var(--en-divider);margin:0;border:none;flex-shrink:0;}
        .dlg-body{padding:20px 24px;overflow-y:auto;flex:1;}
        .dlg-footer{display:flex;align-items:center;justify-content:flex-end;gap:8px;padding:16px 24px;border-top:1px solid var(--en-divider);flex-shrink:0;}
      `}</style>
      <div className="dlg-backdrop" onClick={e => e.target === e.currentTarget && onClose && onClose()}>
        <div className="dlg-card" style={{ width }}>
          <div className="dlg-header">
            <div className="dlg-titles">
              {title    && <h2 className="dlg-title">{title}</h2>}
              {subtitle && <p  className="dlg-subtitle">{subtitle}</p>}
            </div>
            {onClose && <button className="dlg-close" onClick={onClose}>{closeIcon}</button>}
          </div>
          <hr className="dlg-divider" />
          <div className="dlg-body">{children}</div>
          {footer && <div className="dlg-footer">{footer}</div>}
        </div>
      </div>
    </>
  );
}

function Demo() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const btnStyle = { padding: '8px 16px', borderRadius: 8, border: 'none', cursor: 'pointer', fontFamily: 'var(--en-font-sans)', fontSize: 14 };

  return (
    <div style={{ padding: 32, background: 'var(--en-bg-grey)', minHeight: '100vh' }}>
      <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--en-fg-secondary)', marginBottom: 24 }}>Dialog</p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <button onClick={() => setOpen1(true)} style={{ ...btnStyle, background: 'var(--en-primary)', color: '#fff' }}>Simple dialog</button>
        <button onClick={() => setOpen2(true)} style={{ ...btnStyle, background: 'var(--en-primary)', color: '#fff' }}>With footer</button>
        <button onClick={() => setOpen3(true)} style={{ ...btnStyle, background: 'var(--en-primary)', color: '#fff' }}>Narrow (360px)</button>
      </div>

      <Dialog open={open1} onClose={() => setOpen1(false)} title="Dialog title" subtitle="Supporting description text goes here and can wrap.">
        <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 14, color: 'var(--en-fg-secondary)', margin: 0 }}>
          Content area — replace with dialog body content. This is where you place forms, details, or any interactive elements.
        </p>
      </Dialog>

      <Dialog
        open={open2}
        onClose={() => setOpen2(false)}
        title="Confirm action"
        subtitle="This will permanently delete the selected record."
        footer={<>
          <button onClick={() => setOpen2(false)} style={{ ...btnStyle, background: 'var(--en-bg)', border: '1.5px solid var(--en-border)', color: 'var(--en-fg)' }}>Cancel</button>
          <button onClick={() => setOpen2(false)} style={{ ...btnStyle, background: 'var(--en-error)', color: '#fff' }}>Delete</button>
        </>}
      >
        <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 14, color: 'var(--en-fg-secondary)', margin: 0 }}>
          Are you sure you want to delete <strong>Acme Insurance Co.</strong>? This action cannot be undone.
        </p>
      </Dialog>

      <Dialog open={open3} onClose={() => setOpen3(false)} title="Narrow dialog" width={360}>
        <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 14, color: 'var(--en-fg-secondary)', margin: 0 }}>
          Smaller 360px wide variant for compact confirmations.
        </p>
      </Dialog>
    </div>
  );
}

export default {
  title: 'Design System/UI Primitives/Dialog',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export const AllVariants = { render: () => <Demo /> };
