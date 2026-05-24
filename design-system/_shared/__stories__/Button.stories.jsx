import React, { useState } from 'react';

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
          <button className="btn-icon">
            <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"/></svg>
          </button>
          <button className="btn-icon">
            <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"/></svg>
          </button>
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
            <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"/></svg>
            Add producer
          </button>
          <button className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor"><path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM93.66,77.66,120,51.31V144a8,8,0,0,0,16,0V51.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,77.66Z"/></svg>
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
