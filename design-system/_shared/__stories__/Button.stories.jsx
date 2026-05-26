import React, { useState } from 'react';
import '../icons.jsx';

const { IconEdit, IconTrash, IconPlus, IconDownload } = window;

const spin = `
  @keyframes en-spin { to { transform: rotate(360deg); } }
  .btn-spinner { width:12px;height:12px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:en-spin 600ms linear infinite;flex-shrink:0;display:inline-block; }
`;

function Row({ label, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
      <span style={{ width: 100, fontSize: 12, color: 'var(--en-fg-secondary)', fontFamily: 'var(--en-font-sans)' }}>{label}</span>
      {children}
    </div>
  );
}

function LoadingButton({ variant = 'primary', children }) {
  const [loading, setLoading] = useState(false);
  function click() { setLoading(true); setTimeout(() => setLoading(false), 2000); }
  return (
    <button
      className={`btn btn-${variant}${loading ? ' btn--loading' : ''}`}
      disabled={loading}
      onClick={click}
      style={{ opacity: loading ? 0.55 : 1, cursor: loading ? 'not-allowed' : 'pointer', pointerEvents: loading ? 'none' : 'auto' }}
    >
      {loading && <span className="btn-spinner" />}
      {children}
    </button>
  );
}

function Demo() {
  return (
    <>
      <style>{spin}</style>
      <div style={{ padding: 32, background: 'var(--en-bg-grey)', minHeight: '100vh' }}>
        <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--en-fg-secondary)', marginBottom: 24 }}>Variants</p>
        <Row label="primary">
          <button className="btn btn-primary">Save changes</button>
        </Row>
        <Row label="secondary">
          <button className="btn btn-secondary">Cancel</button>
        </Row>
        <Row label="text">
          <button className="btn btn-text">Discard</button>
        </Row>
        <Row label="danger">
          <button className="btn btn-danger">Delete</button>
        </Row>
        <Row label="icon">
          <button className="btn-icon"><IconEdit size={16} /></button>
          <button className="btn-icon"><IconTrash size={16} /></button>
        </Row>

        <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--en-fg-secondary)', margin: '32px 0 24px' }}>States</p>
        <Row label="small">
          <button className="btn btn-primary btn-sm">Save</button>
          <button className="btn btn-secondary btn-sm">Cancel</button>
        </Row>
        <Row label="loading">
          <LoadingButton variant="primary">Save changes</LoadingButton>
          <LoadingButton variant="secondary">Export</LoadingButton>
        </Row>
        <Row label="disabled">
          <button className="btn btn-primary" disabled style={{ opacity: 0.55, cursor: 'not-allowed' }}>Save changes</button>
          <button className="btn btn-secondary" disabled style={{ opacity: 0.55, cursor: 'not-allowed' }}>Cancel</button>
        </Row>

        <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--en-fg-secondary)', margin: '32px 0 24px' }}>With icon</p>
        <Row label="left icon">
          <button className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <IconPlus size={14} />
            Add producer
          </button>
          <button className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <IconDownload size={14} />
            Export
          </button>
        </Row>
      </div>
    </>
  );
}

export default {
  title: 'Design System/UI Primitives/Button',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export const AllVariants = { render: () => <Demo /> };
