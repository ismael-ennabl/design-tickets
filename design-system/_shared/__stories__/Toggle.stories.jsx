import React, { useState } from 'react';

function Toggle({ checked, defaultChecked = false, onChange, disabled, label }) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const isControlled = checked !== undefined;
  const isOn = isControlled ? checked : internal;
  function handleToggle() {
    if (disabled) return;
    const next = !isOn;
    if (!isControlled) setInternal(next);
    onChange && onChange(next);
  }
  return (
    <>
      <style>{`
        .tgl-root { display:inline-flex;align-items:center;gap:8px;cursor:pointer;user-select:none; }
        .tgl-root.tgl-disabled { cursor:not-allowed;opacity:0.38; }
        .tgl-track { position:relative;width:40px;height:22px;border-radius:11px;background:var(--en-bg-empty);transition:background 200ms cubic-bezier(.4,0,.2,1);flex-shrink:0; }
        .tgl-root:not(.tgl-disabled):hover .tgl-track { background:var(--en-bg-dark-grey); }
        .tgl-root.tgl-on .tgl-track { background:var(--en-primary); }
        .tgl-root.tgl-on:not(.tgl-disabled):hover .tgl-track { background:var(--en-primary-light); }
        .tgl-thumb { position:absolute;top:3px;left:3px;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.25);transition:transform 200ms cubic-bezier(.4,0,.2,1); }
        .tgl-root.tgl-on .tgl-thumb { transform:translateX(18px); }
        .tgl-label { font:400 14px/20px var(--en-font-sans);color:var(--en-fg); }
      `}</style>
      <div
        className={`tgl-root${isOn ? ' tgl-on' : ''}${disabled ? ' tgl-disabled' : ''}`}
        onClick={handleToggle} role="switch" aria-checked={isOn}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={e => (e.key === ' ' || e.key === 'Enter') && (e.preventDefault(), handleToggle())}
      >
        <div className="tgl-track"><div className="tgl-thumb" /></div>
        {label && <span className="tgl-label">{label}</span>}
      </div>
    </>
  );
}

function Row({ label, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
      <span style={{ width: 110, fontSize: 12, color: 'var(--en-fg-secondary)', fontFamily: 'var(--en-font-sans)' }}>{label}</span>
      {children}
    </div>
  );
}

function Demo() {
  const [controlled, setControlled] = useState(false);
  return (
    <div style={{ padding: 32, background: 'var(--en-bg-grey)', minHeight: '100vh' }}>
      <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--en-fg-secondary)', marginBottom: 24 }}>Toggle</p>
      <Row label="off (default)"><Toggle label="Notifications" /></Row>
      <Row label="on (default)"><Toggle defaultChecked label="Dark mode" /></Row>
      <Row label="disabled off"><Toggle disabled label="Disabled" /></Row>
      <Row label="disabled on"><Toggle defaultChecked disabled label="Disabled on" /></Row>
      <Row label="controlled">
        <Toggle checked={controlled} onChange={setControlled} label={controlled ? 'On' : 'Off'} />
        <button
          onClick={() => setControlled(v => !v)}
          style={{ marginLeft: 16, padding: '4px 10px', fontSize: 12, fontFamily: 'var(--en-font-sans)', background: 'var(--en-bg)', border: '1px solid var(--en-border)', borderRadius: 6, cursor: 'pointer' }}
        >
          Toggle externally
        </button>
      </Row>
      <Row label="no label"><Toggle /></Row>
    </div>
  );
}

export default {
  title: 'Design System/UI Primitives/Toggle',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export const AllVariants = { render: () => <Demo /> };
