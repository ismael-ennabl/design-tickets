import React from 'react';
import '../icons.jsx';

const { IconCheck: CheckIcon } = window;

function Row({ label, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
      <span style={{ width: 80, fontSize: 12, color: 'var(--en-fg-secondary)', fontFamily: 'var(--en-font-sans)' }}>{label}</span>
      {children}
    </div>
  );
}

function Demo() {
  return (
    <div style={{ padding: 32, background: 'var(--en-bg-grey)', minHeight: '100vh' }}>
      <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--en-fg-secondary)', marginBottom: 24 }}>Variants</p>

      <Row label="default">  <span className="badge badge-default">Draft</span></Row>
      <Row label="primary">  <span className="badge badge-primary">New</span></Row>
      <Row label="success">  <span className="badge badge-success">Active</span></Row>
      <Row label="warning">  <span className="badge badge-warning">Pending</span></Row>
      <Row label="error">    <span className="badge badge-error">Overdue</span></Row>

      <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--en-fg-secondary)', margin: '32px 0 24px' }}>With icon</p>
      <Row label="icon left">
        <span className="badge badge-success" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><CheckIcon />Verified</span>
        <span className="badge badge-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><CheckIcon />New</span>
      </Row>

      <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--en-fg-secondary)', margin: '32px 0 16px' }}>In context</p>
      <table className="table" style={{ maxWidth: 480 }}>
        <thead>
          <tr>
            <th><div className="th-inner">Account</div></th>
            <th><div className="th-inner">Status</div></th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Acme Corp', 'active'],
            ['Blue Ridge LLC', 'pending'],
            ['Harbor Freight', 'overdue'],
            ['Meridian Group', 'default'],
          ].map(([name, status]) => (
            <tr key={name}>
              <td>{name}</td>
              <td>
                <span className={`badge badge-${status === 'active' ? 'success' : status === 'pending' ? 'warning' : status === 'overdue' ? 'error' : 'default'}`} style={{ textTransform: 'capitalize' }}>
                  {status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default {
  title: 'Design System/UI Primitives/Badge',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export const AllVariants = { render: () => <Demo /> };
