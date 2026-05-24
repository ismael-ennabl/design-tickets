import React, { useState } from 'react';

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--en-fg-secondary)', marginBottom: 16 }}>{title}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
        {children}
      </div>
    </div>
  );
}

function Demo() {
  const [val, setVal] = useState('');
  const [area, setArea] = useState('');

  return (
    <div style={{ padding: 32, background: 'var(--en-bg-grey)', minHeight: '100vh' }}>
      <Section title="Input">
        {/* Plain input */}
        <div className="form-row">
          <input className="input" placeholder="Placeholder text" />
        </div>

        {/* With label */}
        <div className="form-row">
          <label htmlFor="demo-name" style={{ font: '500 13px/18px var(--en-font-sans)', color: 'var(--en-fg)' }}>Agency name</label>
          <input id="demo-name" className="input" value={val} onChange={e => setVal(e.target.value)} placeholder="e.g. Acme Insurance" />
        </div>

        {/* With hint */}
        <div className="form-row">
          <label style={{ font: '500 13px/18px var(--en-font-sans)', color: 'var(--en-fg)' }}>Display name</label>
          <input className="input" placeholder="Shown on proposals" />
          <span className="form-hint">Max 100 characters</span>
        </div>

        {/* Error */}
        <div className="form-row">
          <label style={{ font: '500 13px/18px var(--en-font-sans)', color: 'var(--en-fg)' }}>Template name</label>
          <input className="input input--error" defaultValue="My template" />
          <span className="form-error">A template with this name already exists</span>
        </div>

        {/* Disabled */}
        <div className="form-row">
          <label style={{ font: '500 13px/18px var(--en-font-sans)', color: 'var(--en-fg)' }}>Account ID</label>
          <input className="input" value="ACC-00421" disabled style={{ opacity: 0.55, cursor: 'not-allowed' }} readOnly />
        </div>
      </Section>

      <Section title="Textarea">
        {/* Plain textarea */}
        <div className="form-row">
          <label style={{ font: '500 13px/18px var(--en-font-sans)', color: 'var(--en-fg)' }}>About Us</label>
          <textarea className="textarea" rows={4} value={area} onChange={e => setArea(e.target.value)} placeholder="Describe the agency…" />
          <span className="form-hint">Shown at the top of every proposal.</span>
        </div>

        {/* Error */}
        <div className="form-row">
          <label style={{ font: '500 13px/18px var(--en-font-sans)', color: 'var(--en-fg)' }}>Notes</label>
          <textarea className="textarea input--error" rows={3} defaultValue="" placeholder="Required" />
          <span className="form-error">Notes are required before saving</span>
        </div>
      </Section>

      <Section title="Checkbox &amp; Toggle">
        <label className="checkbox">
          <input type="checkbox" defaultChecked />
          Set as default template
        </label>
        <label className="checkbox">
          <input type="checkbox" />
          Share with organization
        </label>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[true, false].map(on => (
            <div key={String(on)} className="toggle-row" style={{ borderBottom: '1px solid var(--en-divider)', paddingBottom: 10, marginBottom: 10 }}>
              <div className="meta">
                Auto-save drafts
                <span className="help">Saves every 30 seconds while editing</span>
              </div>
              <div className={`toggle${on ? ' on' : ''}`} role="switch" aria-checked={on} />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default {
  title: 'Design System/UI Primitives/Input',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export const AllVariants = { render: () => <Demo /> };
