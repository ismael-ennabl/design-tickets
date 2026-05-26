import React, { useState } from 'react';
import '../icons.jsx';

const { IconChevronDown } = window;

const SEL_CSS = `
  .sel-wrapper{position:relative;display:flex;flex-direction:column;gap:4px;box-sizing:border-box;}
  .sel-label{font:400 12px/16px var(--en-font-sans);color:var(--en-fg-secondary);}
  .sel-label--focused{color:var(--en-primary);}
  .sel-trigger{display:flex;align-items:center;gap:8px;padding:0 12px;height:36px;background:var(--en-bg);border:1.5px solid var(--en-border);border-radius:var(--en-radius-regular);cursor:pointer;box-sizing:border-box;user-select:none;transition:border-color 200ms cubic-bezier(.4,0,.2,1);}
  .sel-trigger:hover:not(.sel-trigger--disabled){border-color:var(--en-primary);}
  .sel-trigger:focus{outline:none;border-color:var(--en-primary);}
  .sel-trigger--open{border-color:var(--en-primary);}
  .sel-trigger--error{border-color:var(--en-error);}
  .sel-trigger--disabled{background:var(--en-bg-dark-grey);cursor:not-allowed;opacity:.55;}
  .sel-value{flex:1;font:400 14px/20px var(--en-font-sans);color:var(--en-fg);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .sel-value--placeholder{color:var(--en-fg-disabled);}
  .sel-chevron{flex-shrink:0;color:var(--en-icon-secondary);transition:transform 200ms cubic-bezier(.4,0,.2,1);}
  .sel-chevron--open{transform:rotate(180deg);}
  .sel-dropdown{position:absolute;top:calc(100% + 4px);left:0;right:0;z-index:200;background:var(--en-bg);border-radius:var(--en-radius-regular);box-shadow:var(--en-shadow-menu);overflow-y:auto;max-height:240px;padding:4px 0;}
  .sel-option{padding:8px 12px;font:400 14px/20px var(--en-font-sans);color:var(--en-fg);cursor:pointer;transition:background 150ms;}
  .sel-option:hover{background:var(--en-bg-hover);}
  .sel-option--active{color:var(--en-primary);background:var(--en-outlined-hover);}
`;

function Select({ label, options = [], error, disabled, placeholder = 'Select option...', value, onChange }) {
  const [open, setOpen] = React.useState(false);
  const [internal, setInternal] = React.useState('');
  const ref = React.useRef(null);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internal;
  const currentOption = options.find(o => (typeof o === 'object' ? o.value : o) === currentValue);
  const displayLabel = currentValue ? (typeof currentOption === 'object' ? currentOption?.label : currentOption) || currentValue : placeholder;

  React.useEffect(() => {
    const onClick = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  function handleSelect(opt) {
    const val = typeof opt === 'object' ? opt.value : opt;
    if (!isControlled) setInternal(val);
    setOpen(false);
    onChange && onChange(val);
  }

  return (
    <div className="sel-wrapper" ref={ref} style={{ width: '100%' }}>
      {label && <label className={`sel-label${open ? ' sel-label--focused' : ''}`}>{label}</label>}
      <div
        className={`sel-trigger${open ? ' sel-trigger--open' : ''}${error ? ' sel-trigger--error' : ''}${disabled ? ' sel-trigger--disabled' : ''}`}
        onClick={() => !disabled && setOpen(o => !o)}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={e => { if (disabled) return; if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(o => !o); } if (e.key === 'Escape') setOpen(false); }}
      >
        <span className={`sel-value${!currentValue ? ' sel-value--placeholder' : ''}`}>{displayLabel}</span>
        <span className={`sel-chevron${open ? ' sel-chevron--open' : ''}`}><IconChevronDown size={16} /></span>
      </div>
      {error && <span style={{ font: '400 12px/16px var(--en-font-sans)', color: 'var(--en-error)' }}>{error}</span>}
      {open && !disabled && (
        <div className="sel-dropdown">
          {options.map((opt, i) => {
            const val = typeof opt === 'object' ? opt.value : opt;
            const lbl = typeof opt === 'object' ? opt.label : opt;
            return (
              <div key={i} className={`sel-option${val === currentValue ? ' sel-option--active' : ''}`} onMouseDown={e => { e.preventDefault(); handleSelect(opt); }}>
                {lbl}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

const STATES_OPTIONS = ['Wholesale', 'Retail', 'E&S', 'Surplus Lines'];
const POLICY_OPTIONS = [
  { value: 'commercial', label: 'Commercial Lines' },
  { value: 'personal', label: 'Personal Lines' },
  { value: 'benefits', label: 'Employee Benefits' },
  { value: 'specialty', label: 'Specialty & Excess' },
];

function Row({ label, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 20 }}>
      <span style={{ width: 110, paddingTop: 24, fontSize: 12, color: 'var(--en-fg-secondary)', fontFamily: 'var(--en-font-sans)', flexShrink: 0 }}>{label}</span>
      <div style={{ flex: 1, maxWidth: 280 }}>{children}</div>
    </div>
  );
}

function Demo() {
  const [controlled, setControlled] = useState('');
  return (
    <div style={{ padding: 32, background: 'var(--en-bg-grey)', minHeight: '100vh' }}>
      <style>{SEL_CSS}</style>
      <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--en-fg-secondary)', marginBottom: 24 }}>Select</p>
      <Row label="default"><Select label="Field label" options={STATES_OPTIONS} /></Row>
      <Row label="with objects"><Select label="Policy type" options={POLICY_OPTIONS} placeholder="Choose type..." /></Row>
      <Row label="error"><Select label="Field label" options={STATES_OPTIONS} error="This field is required" /></Row>
      <Row label="disabled"><Select label="Field label" options={STATES_OPTIONS} disabled /></Row>
      <Row label="controlled">
        <Select label="Market type" options={STATES_OPTIONS} value={controlled} onChange={setControlled} />
        {controlled && <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 12, color: 'var(--en-fg-secondary)', marginTop: 8 }}>Selected: {controlled}</p>}
      </Row>
    </div>
  );
}

export default {
  title: 'Design System/UI Primitives/Select',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export const AllVariants = { render: () => <Demo /> };
