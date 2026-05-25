import React from 'react';

function Avatar({ name = '', size = 'md', color }) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('') || '?';
  const dim  = { sm: 24, md: 32, lg: 40 }[size] || 32;
  const fs   = { sm: 9, md: 12, lg: 14 }[size] || 12;
  const bg   = color || 'var(--en-data-accounts)';
  return (
    <div title={name} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      borderRadius: '50%', flexShrink: 0, fontFamily: 'var(--en-font-sans)',
      fontWeight: 700, color: '#fff', userSelect: 'none',
      width: dim, height: dim, background: bg, fontSize: fs,
    }}>
      {initials}
    </div>
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
  return (
    <div style={{ padding: 32, background: 'var(--en-bg-grey)', minHeight: '100vh' }}>
      <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--en-fg-secondary)', marginBottom: 24 }}>Avatar</p>
      <Row label="sizes">
        <Avatar name="Ismael Viejo" size="sm" />
        <Avatar name="Ismael Viejo" size="md" />
        <Avatar name="Ismael Viejo" size="lg" />
      </Row>
      <Row label="single name"><Avatar name="John" size="md" /></Row>
      <Row label="long name"><Avatar name="Alexander Hamilton" size="md" /></Row>
      <Row label="no name"><Avatar size="md" /></Row>
      <Row label="custom colors">
        <Avatar name="Alice" size="md" color="var(--en-primary)" />
        <Avatar name="Bob" size="md" color="var(--en-success-dark)" />
        <Avatar name="Carl" size="md" color="var(--en-error)" />
        <Avatar name="Dana" size="md" color="var(--en-warning-dark)" />
      </Row>
      <Row label="avatar group">
        {['Alice B', 'Carlos D', 'Eva F', 'George H'].map((n, i) => (
          <div key={n} style={{ marginLeft: i === 0 ? 0 : -8, zIndex: 4 - i, position: 'relative' }}>
            <Avatar name={n} size="md" color={['var(--en-data-accounts)', 'var(--en-primary)', 'var(--en-success-dark)', 'var(--en-error)'][i]} />
          </div>
        ))}
      </Row>
    </div>
  );
}

export default {
  title: 'Design System/UI Primitives/Avatar',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export const AllVariants = { render: () => <Demo /> };
