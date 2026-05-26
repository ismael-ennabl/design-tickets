import React, { useState } from 'react';
import { X as IconClose } from '@phosphor-icons/react';

const CHIP_CSS = `
  .ch-root{display:inline-flex;align-items:center;gap:5px;padding:3px 10px;border-radius:100px;font:400 12px/16px var(--en-font-sans);border:1.5px solid transparent;box-sizing:border-box;white-space:nowrap;vertical-align:middle;}
  .ch-dot-indicator{width:7px;height:7px;border-radius:50%;flex-shrink:0;}
  .ch-dismiss{display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;border-radius:50%;border:none;background:none;cursor:pointer;padding:0;margin-left:1px;opacity:.6;transition:opacity 150ms;flex-shrink:0;}
  .ch-dismiss:hover{opacity:1;}
  .ch-neutral.ch-subtle{color:var(--en-fg);background:var(--en-bg-dark-grey);border-color:var(--en-border);}
  .ch-neutral.ch-filled{color:#fff;background:var(--en-fg-secondary);}
  .ch-neutral.ch-dot{color:var(--en-fg);background:var(--en-bg-dark-grey);border-color:var(--en-border);}
  .ch-neutral.ch-dot .ch-dot-indicator{background:var(--en-fg-secondary);}
  .ch-primary.ch-subtle{color:var(--en-primary);background:hsla(240,100%,95%,1);border-color:var(--en-primary);}
  .ch-primary.ch-filled{color:#fff;background:var(--en-primary);}
  .ch-primary.ch-dot{color:var(--en-primary);background:hsla(240,100%,95%,1);border-color:var(--en-primary);}
  .ch-primary.ch-dot .ch-dot-indicator{background:var(--en-primary);}
  .ch-success.ch-subtle{color:var(--en-success-dark);background:hsla(160,56%,92%,1);border-color:var(--en-success);}
  .ch-success.ch-filled{color:#fff;background:var(--en-success-dark);}
  .ch-success.ch-dot{color:var(--en-success-dark);background:hsla(160,56%,92%,1);border-color:var(--en-success);}
  .ch-success.ch-dot .ch-dot-indicator{background:var(--en-success);}
  .ch-error.ch-subtle{color:var(--en-error-dark);background:hsla(2,100%,96%,1);border-color:var(--en-error);}
  .ch-error.ch-filled{color:#fff;background:var(--en-error);}
  .ch-error.ch-dot{color:var(--en-error-dark);background:hsla(2,100%,96%,1);border-color:var(--en-error);}
  .ch-error.ch-dot .ch-dot-indicator{background:var(--en-error);}
  .ch-warning.ch-subtle{color:var(--en-warning-dark);background:hsla(43,100%,93%,1);border-color:var(--en-warning);}
  .ch-warning.ch-filled{color:var(--en-black);background:var(--en-warning);}
  .ch-warning.ch-dot{color:var(--en-warning-dark);background:hsla(43,100%,93%,1);border-color:var(--en-warning);}
  .ch-warning.ch-dot .ch-dot-indicator{background:var(--en-warning);}
`;

function Chip({ variant = 'neutral', chipStyle = 'subtle', dot, dismissible, onDismiss, children }) {
  const effective = dot ? 'dot' : chipStyle;
  return (
    <span className={`ch-root ch-${variant} ch-${effective}`}>
      {children}
      {effective === 'dot' && <span className="ch-dot-indicator" />}
      {dismissible && <button className="ch-dismiss" onClick={onDismiss}><IconClose size={10} /></button>}
    </span>
  );
}

const VARIANTS = ['neutral', 'primary', 'success', 'error', 'warning'];
const LABELS = ['Neutral', 'Primary', 'Success', 'Error', 'Warning'];

function Row({ label, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
      <span style={{ width: 100, fontSize: 12, color: 'var(--en-fg-secondary)', fontFamily: 'var(--en-font-sans)' }}>{label}</span>
      {children}
    </div>
  );
}

function Demo() {
  const [chips, setChips] = useState(VARIANTS.slice());
  return (
    <div style={{ padding: 32, background: 'var(--en-bg-grey)', minHeight: '100vh' }}>
      <style>{CHIP_CSS}</style>
      <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--en-fg-secondary)', marginBottom: 24 }}>Chip</p>

      <Row label="subtle">
        {VARIANTS.map((v, i) => <Chip key={v} variant={v} chipStyle="subtle">{LABELS[i]}</Chip>)}
      </Row>
      <Row label="filled">
        {VARIANTS.map((v, i) => <Chip key={v} variant={v} chipStyle="filled">{LABELS[i]}</Chip>)}
      </Row>
      <Row label="dot">
        {VARIANTS.map((v, i) => <Chip key={v} variant={v} dot>{LABELS[i]}</Chip>)}
      </Row>
      <Row label="dismissible">
        {chips.map(v => (
          <Chip key={v} variant={v} chipStyle="subtle" dismissible onDismiss={() => setChips(c => c.filter(x => x !== v))}>
            {LABELS[VARIANTS.indexOf(v)]}
          </Chip>
        ))}
        {chips.length === 0 && (
          <button onClick={() => setChips(VARIANTS.slice())} style={{ fontSize: 12, fontFamily: 'var(--en-font-sans)', background: 'none', border: '1px solid var(--en-border)', borderRadius: 6, padding: '2px 8px', cursor: 'pointer' }}>Reset</button>
        )}
      </Row>

      <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--en-fg-secondary)', margin: '32px 0 16px' }}>In context</p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', padding: 16, background: 'var(--en-bg)', borderRadius: 12 }}>
        <Chip variant="primary" chipStyle="subtle">Producer</Chip>
        <Chip variant="success" dot>Active</Chip>
        <Chip variant="warning" dot>Pending</Chip>
        <Chip variant="error" chipStyle="subtle" dismissible onDismiss={() => {}}>Overdue</Chip>
        <Chip variant="neutral" chipStyle="filled">Archived</Chip>
      </div>
    </div>
  );
}

export default {
  title: 'Design System/UI Primitives/Chip',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export const AllVariants = { render: () => <Demo /> };
