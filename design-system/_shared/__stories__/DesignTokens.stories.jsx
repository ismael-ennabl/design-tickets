import React from 'react';

// ── helpers ───────────────────────────────────────────────────────────────────

function getVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function Label({ children }) {
  return (
    <p style={{
      fontFamily: 'var(--en-font-sans)', fontSize: 11, fontWeight: 700,
      letterSpacing: '0.5px', textTransform: 'uppercase',
      color: 'var(--en-fg-secondary)', margin: '0 0 16px',
      paddingBottom: 8, borderBottom: '1px solid var(--en-divider)',
    }}>{children}</p>
  );
}

function Page({ children }) {
  return (
    <div style={{ padding: 40, background: 'var(--en-bg-grey)', minHeight: '100vh' }}>
      {children}
    </div>
  );
}

// ── Spacing ───────────────────────────────────────────────────────────────────

const SPACE_TOKENS = [
  '--en-space-0', '--en-space-1', '--en-space-2', '--en-space-3',
  '--en-space-4', '--en-space-5', '--en-space-6', '--en-space-8',
  '--en-space-10', '--en-space-12', '--en-space-16',
];

function SpacingStory() {
  return (
    <Page>
      <Label>Spacing — base unit 4px</Label>
      {SPACE_TOKENS.map(name => {
        const value = getVar(name);
        const px = parseInt(value) || 0;
        return (
          <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 6 }}>
            <div style={{ width: 180, fontFamily: 'var(--en-font-mono)', fontSize: 12, color: 'var(--en-fg)' }}>{name}</div>
            <div style={{ width: 40, fontFamily: 'var(--en-font-mono)', fontSize: 11, color: 'var(--en-fg-secondary)' }}>{value}</div>
            <div style={{ height: 20, width: px, background: 'var(--en-primary)', borderRadius: 2 }} />
          </div>
        );
      })}
    </Page>
  );
}

// ── Border Radius ─────────────────────────────────────────────────────────────

const RADIUS_TOKENS = [
  '--en-radius-sm', '--en-radius', '--en-radius-regular',
  '--en-radius-medium', '--en-radius-large', '--en-radius-xl',
];

function RadiusStory() {
  return (
    <Page>
      <Label>Border Radius</Label>
      {RADIUS_TOKENS.map(name => {
        const value = getVar(name);
        return (
          <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
            <div style={{ width: 180, fontFamily: 'var(--en-font-mono)', fontSize: 12, color: 'var(--en-fg)' }}>{name}</div>
            <div style={{ width: 48, fontFamily: 'var(--en-font-mono)', fontSize: 11, color: 'var(--en-fg-secondary)' }}>{value}</div>
            <div style={{
              width: 48, height: 48,
              background: 'var(--en-secondary-dark)',
              border: '2px solid var(--en-primary)',
              borderRadius: `var(${name})`,
            }} />
          </div>
        );
      })}
    </Page>
  );
}

// ── Typography ────────────────────────────────────────────────────────────────

const TYPE_CLASSES = [
  { cls: 'en-h1',           group: 'Headings' },
  { cls: 'en-h2',           group: 'Headings' },
  { cls: 'en-h3',           group: 'Headings' },
  { cls: 'en-h4',           group: 'Headings' },
  { cls: 'en-h5',           group: 'Headings' },
  { cls: 'en-body1',        group: 'Body' },
  { cls: 'en-body1-bold',   group: 'Body' },
  { cls: 'en-body2',        group: 'Body' },
  { cls: 'en-body2-bold',   group: 'Body' },
  { cls: 'en-body3',        group: 'Body' },
  { cls: 'en-body3-bold',   group: 'Body' },
  { cls: 'en-subtitle1',    group: 'Subtitle' },
  { cls: 'en-subtitle2',    group: 'Subtitle' },
  { cls: 'en-subtitle3',    group: 'Subtitle' },
  { cls: 'en-caption',      group: 'Caption' },
  { cls: 'en-caption-bold', group: 'Caption' },
  { cls: 'en-overline',     group: 'Overline' },
  { cls: 'en-overline-bold',group: 'Overline' },
  { cls: 'en-btn-large',    group: 'Button' },
  { cls: 'en-btn-medium',   group: 'Button' },
  { cls: 'en-btn-small',    group: 'Button' },
  { cls: 'en-tab-large',    group: 'Tab' },
  { cls: 'en-tab-medium',   group: 'Tab' },
  { cls: 'en-table-header', group: 'Table' },
  { cls: 'en-table-text',   group: 'Table' },
  { cls: 'en-code',         group: 'Code' },
];

function TypographyStory() {
  const groups = [...new Set(TYPE_CLASSES.map(t => t.group))];
  return (
    <Page>
      {groups.map(group => (
        <div key={group} style={{ marginBottom: 32 }}>
          <Label>{group}</Label>
          {TYPE_CLASSES.filter(t => t.group === group).map(({ cls }) => (
            <div key={cls} style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 6 }}>
              <div style={{ width: 200, fontFamily: 'var(--en-font-mono)', fontSize: 11, color: 'var(--en-fg-secondary)', flexShrink: 0 }}>
                .{cls}
              </div>
              <div className={cls} style={{ color: 'var(--en-fg)' }}>
                The quick brown fox
              </div>
            </div>
          ))}
        </div>
      ))}
    </Page>
  );
}

// ── Colors ────────────────────────────────────────────────────────────────────

function ColorSwatch({ name }) {
  const value = getVar(name);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
      <div style={{
        width: 36, height: 36, borderRadius: 'var(--en-radius)',
        background: `var(${name})`, border: '1px solid var(--en-divider)', flexShrink: 0,
      }} />
      <div>
        <div style={{ fontFamily: 'var(--en-font-mono)', fontSize: 12, color: 'var(--en-fg)' }}>{name}</div>
        <div style={{ fontFamily: 'var(--en-font-mono)', fontSize: 11, color: 'var(--en-fg-secondary)' }}>{value}</div>
      </div>
    </div>
  );
}

function ColorGrid({ vars }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2px 24px', marginBottom: 32 }}>
      {vars.map(v => <ColorSwatch key={v} name={v} />)}
    </div>
  );
}

function ColorsStory() {
  return (
    <Page>
      <Label>Brand</Label>
      <ColorGrid vars={[
        '--en-primary-light', '--en-primary', '--en-primary-dark',
        '--en-secondary-light', '--en-secondary', '--en-secondary-dark',
        '--en-error-light', '--en-error', '--en-error-dark',
        '--en-success-light', '--en-success', '--en-success-dark',
        '--en-warning-light', '--en-warning', '--en-warning-dark',
      ]} />

      <Label>Text &amp; Icon</Label>
      <ColorGrid vars={[
        '--en-fg', '--en-fg-secondary', '--en-fg-disabled',
        '--en-icon', '--en-icon-secondary', '--en-icon-disabled',
        '--en-sidebar',
        '--en-text-secondary', '--en-text-tertiary', '--en-text-success', '--en-text-warning',
      ]} />

      <Label>Background</Label>
      <ColorGrid vars={[
        '--en-bg', '--en-bg-grey', '--en-bg-dark-grey',
        '--en-bg-hover', '--en-bg-active', '--en-bg-empty',
      ]} />

      <Label>Border &amp; Divider</Label>
      <ColorGrid vars={[
        '--en-divider', '--en-border', '--en-border-danger',
        '--en-action-hover', '--en-outlined-hover',
      ]} />

      <Label>Data types</Label>
      <ColorGrid vars={[
        '--en-data-accounts', '--en-data-account-managers', '--en-data-benefits',
        '--en-data-book', '--en-data-carriers', '--en-data-clients',
        '--en-data-commercial', '--en-data-industries', '--en-data-intermediaries',
        '--en-data-personal', '--en-data-policies', '--en-data-premium',
        '--en-data-producers', '--en-data-revenue', '--en-data-unknown',
      ]} />
    </Page>
  );
}

// ── Elevation & Motion ────────────────────────────────────────────────────────

const SHADOW_TOKENS = ['--en-shadow-menu', '--en-shadow-tooltip', '--en-shadow-card-hover'];
const DURATION_TOKENS = ['--en-duration-shortest', '--en-duration-short', '--en-easing'];

function ElevationStory() {
  return (
    <Page>
      <Label>Shadows</Label>
      {SHADOW_TOKENS.map(name => (
        <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 20 }}>
          <div style={{ width: 200, fontFamily: 'var(--en-font-mono)', fontSize: 12, color: 'var(--en-fg)' }}>{name}</div>
          <div style={{
            width: 80, height: 48,
            background: 'var(--en-bg)',
            borderRadius: 'var(--en-radius-regular)',
            boxShadow: `var(${name})`,
            border: '1px solid var(--en-divider)',
          }} />
        </div>
      ))}

      <Label style={{ marginTop: 32 }}>Motion</Label>
      {DURATION_TOKENS.map(name => {
        const value = getVar(name);
        return (
          <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
            <div style={{ width: 260, fontFamily: 'var(--en-font-mono)', fontSize: 12, color: 'var(--en-fg)' }}>{name}</div>
            <div style={{ fontFamily: 'var(--en-font-mono)', fontSize: 11, color: 'var(--en-fg-secondary)' }}>{value}</div>
          </div>
        );
      })}
    </Page>
  );
}

// ── Exports ───────────────────────────────────────────────────────────────────

export default {
  title: 'Design System/Foundations/Design Tokens',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export const Spacing    = { render: () => <SpacingStory /> };
export const Radius     = { render: () => <RadiusStory /> };
export const Typography = { render: () => <TypographyStory /> };
export const Colors     = { render: () => <ColorsStory /> };
export const Elevation  = { render: () => <ElevationStory /> };
