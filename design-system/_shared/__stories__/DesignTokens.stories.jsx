import React from 'react';

// ── helpers ───────────────────────────────────────────────────────────────────

function getVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2 style={{
        fontFamily: 'var(--en-font-sans)',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        color: 'var(--en-fg-secondary)',
        margin: '0 0 16px',
        paddingBottom: 8,
        borderBottom: '1px solid var(--en-divider)',
      }}>{title}</h2>
      {children}
    </div>
  );
}

// ── Color swatch ──────────────────────────────────────────────────────────────

function ColorSwatch({ name }) {
  const value = getVar(name);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
      <div style={{
        width: 40, height: 40,
        borderRadius: 'var(--en-radius)',
        background: `var(${name})`,
        border: '1px solid var(--en-divider)',
        flexShrink: 0,
      }} />
      <div>
        <div style={{ fontFamily: 'var(--en-font-mono)', fontSize: 12, color: 'var(--en-fg)' }}>{name}</div>
        <div style={{ fontFamily: 'var(--en-font-mono)', fontSize: 11, color: 'var(--en-fg-secondary)' }}>{value}</div>
      </div>
    </div>
  );
}

function ColorGroup({ vars }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '4px 24px' }}>
      {vars.map(v => <ColorSwatch key={v} name={v} />)}
    </div>
  );
}

// ── Spacing ───────────────────────────────────────────────────────────────────

const SPACE_TOKENS = [
  '--en-space-0', '--en-space-1', '--en-space-2', '--en-space-3',
  '--en-space-4', '--en-space-5', '--en-space-6', '--en-space-8',
  '--en-space-10', '--en-space-12', '--en-space-16',
];

function SpaceRow({ name }) {
  const value = getVar(name);
  const px = parseInt(value) || 0;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 6 }}>
      <div style={{ width: 180, fontFamily: 'var(--en-font-mono)', fontSize: 12, color: 'var(--en-fg)' }}>{name}</div>
      <div style={{ width: 40, fontFamily: 'var(--en-font-mono)', fontSize: 11, color: 'var(--en-fg-secondary)' }}>{value}</div>
      <div style={{ height: 20, width: px, background: 'var(--en-primary)', borderRadius: 2, minWidth: px ? px : 0 }} />
    </div>
  );
}

// ── Radius ────────────────────────────────────────────────────────────────────

const RADIUS_TOKENS = [
  '--en-radius-sm', '--en-radius', '--en-radius-regular',
  '--en-radius-medium', '--en-radius-large', '--en-radius-xl',
];

function RadiusRow({ name }) {
  const value = getVar(name);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 10 }}>
      <div style={{ width: 180, fontFamily: 'var(--en-font-mono)', fontSize: 12, color: 'var(--en-fg)' }}>{name}</div>
      <div style={{ width: 40, fontFamily: 'var(--en-font-mono)', fontSize: 11, color: 'var(--en-fg-secondary)' }}>{value}</div>
      <div style={{
        width: 48, height: 48,
        background: 'var(--en-secondary-dark)',
        border: '2px solid var(--en-primary)',
        borderRadius: `var(${name})`,
      }} />
    </div>
  );
}

// ── Typography ────────────────────────────────────────────────────────────────

const TYPE_CLASSES = [
  { cls: 'en-h1',          label: 'H1 — 48/52 400' },
  { cls: 'en-h2',          label: 'H2 — 34/40 400' },
  { cls: 'en-h3',          label: 'H3 — 24/32 700' },
  { cls: 'en-h4',          label: 'H4 — 20/28 700' },
  { cls: 'en-h5',          label: 'H5 — 14/16 700' },
  { cls: 'en-body1',       label: 'Body1 — 16/24 400' },
  { cls: 'en-body1-bold',  label: 'Body1 Bold — 16/24 700' },
  { cls: 'en-body2',       label: 'Body2 — 14/20 400' },
  { cls: 'en-body2-bold',  label: 'Body2 Bold — 14/20 700' },
  { cls: 'en-body3',       label: 'Body3 — 12/16 400' },
  { cls: 'en-body3-bold',  label: 'Body3 Bold — 12/16 700' },
  { cls: 'en-subtitle1',   label: 'Subtitle1 — 16/24 400' },
  { cls: 'en-subtitle2',   label: 'Subtitle2 — 14/16 500' },
  { cls: 'en-subtitle3',   label: 'Subtitle3 — 12/16 500' },
  { cls: 'en-caption',     label: 'Caption — 12/16 400' },
  { cls: 'en-caption-bold',label: 'Caption Bold — 12/16 700' },
  { cls: 'en-overline',    label: 'Overline — 12/20 400 UC' },
  { cls: 'en-overline-bold',label: 'Overline Bold — 12/20 700 UC' },
  { cls: 'en-btn-large',   label: 'Btn Large — 16/24' },
  { cls: 'en-btn-medium',  label: 'Btn Medium — 14/20' },
  { cls: 'en-btn-small',   label: 'Btn Small — 12/16' },
  { cls: 'en-tab-large',   label: 'Tab Large — 16/20 600' },
  { cls: 'en-tab-medium',  label: 'Tab Medium — 14/16 600' },
  { cls: 'en-table-header',label: 'Table Header — 14/24 500' },
  { cls: 'en-table-text',  label: 'Table Text — 14/24 400' },
  { cls: 'en-code',        label: 'Code — 12/16 mono' },
];

// ── Shadow ────────────────────────────────────────────────────────────────────

const SHADOW_TOKENS = ['--en-shadow-menu', '--en-shadow-tooltip', '--en-shadow-card-hover'];

function ShadowRow({ name }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 20 }}>
      <div style={{ width: 160, fontFamily: 'var(--en-font-mono)', fontSize: 12, color: 'var(--en-fg)' }}>{name}</div>
      <div style={{
        width: 80, height: 48,
        background: 'var(--en-bg)',
        borderRadius: 'var(--en-radius-regular)',
        boxShadow: `var(${name})`,
        border: '1px solid var(--en-divider)',
      }} />
    </div>
  );
}

// ── Demo ──────────────────────────────────────────────────────────────────────

function Demo() {
  return (
    <div style={{ padding: 40, background: 'var(--en-bg-grey)', minHeight: '100vh' }}>

      <Section title="Spacing scale">
        {SPACE_TOKENS.map(t => <SpaceRow key={t} name={t} />)}
      </Section>

      <Section title="Border radius">
        {RADIUS_TOKENS.map(t => <RadiusRow key={t} name={t} />)}
      </Section>

      <Section title="Typography">
        {TYPE_CLASSES.map(({ cls, label }) => (
          <div key={cls} style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 4 }}>
            <div style={{ width: 220, fontFamily: 'var(--en-font-mono)', fontSize: 11, color: 'var(--en-fg-secondary)', flexShrink: 0 }}>
              .{cls}
            </div>
            <div className={cls} style={{ color: 'var(--en-fg)' }}>
              {label}
            </div>
          </div>
        ))}
      </Section>

      <Section title="Colors — Brand">
        <ColorGroup vars={[
          '--en-primary-light', '--en-primary', '--en-primary-dark',
          '--en-secondary-light', '--en-secondary', '--en-secondary-dark',
          '--en-error-light', '--en-error', '--en-error-dark',
          '--en-success-light', '--en-success', '--en-success-dark',
          '--en-warning-light', '--en-warning', '--en-warning-dark',
        ]} />
      </Section>

      <Section title="Colors — Text & Icon">
        <ColorGroup vars={[
          '--en-fg', '--en-fg-secondary', '--en-fg-disabled',
          '--en-icon', '--en-icon-secondary', '--en-icon-disabled',
          '--en-sidebar',
          '--en-text-secondary', '--en-text-tertiary', '--en-text-success', '--en-text-warning',
        ]} />
      </Section>

      <Section title="Colors — Background">
        <ColorGroup vars={[
          '--en-bg', '--en-bg-grey', '--en-bg-dark-grey', '--en-bg-black',
          '--en-bg-hover', '--en-bg-active', '--en-bg-empty',
        ]} />
      </Section>

      <Section title="Colors — Border & Divider">
        <ColorGroup vars={[
          '--en-divider', '--en-border', '--en-border-danger',
          '--en-action-hover', '--en-outlined-hover',
        ]} />
      </Section>

      <Section title="Colors — Data types">
        <ColorGroup vars={[
          '--en-data-accounts', '--en-data-account-managers', '--en-data-benefits',
          '--en-data-book', '--en-data-carriers', '--en-data-clients',
          '--en-data-commercial', '--en-data-industries', '--en-data-intermediaries',
          '--en-data-personal', '--en-data-policies', '--en-data-premium',
          '--en-data-producers', '--en-data-revenue', '--en-data-unknown',
        ]} />
      </Section>

      <Section title="Elevation">
        {SHADOW_TOKENS.map(t => <ShadowRow key={t} name={t} />)}
      </Section>

    </div>
  );
}

export default {
  title: 'Design System/Foundations/Design Tokens',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export const AllTokens = { render: () => <Demo /> };
