import { useState } from 'react';

const Icon = ({ size = 16, children, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={style}>
    {children}
  </svg>
);
const IconClose = (p) => <Icon {...p}><path d="M6 18L18 6M6 6l12 12" /></Icon>;
const IconSearch = (p) => <Icon {...p}><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></Icon>;
const IconPlus = (p) => <Icon {...p}><path d="M12 5v14M5 12h14" /></Icon>;
const IconMore = (p) => <Icon {...p}><circle cx="12" cy="5" r="1" fill="currentColor" /><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="12" cy="19" r="1" fill="currentColor" /></Icon>;
const IconCheck = (p) => <Icon {...p}><path d="M5 12.5l4 4L19 7" /></Icon>;
const IconStar = ({ size = 16, filled = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const IconUsers = (p) => <Icon {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></Icon>;

function shortDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function totalProducers(tables) {
  if (!tables) return 0;
  return tables.reduce((sum, t) => sum + (Array.isArray(t) ? t.length : 0), 0);
}

const TEMPLATES = [
  {
    id: '1',
    name: 'Commercial Producers — Mid-Market',
    description: 'Default setup for mid-market commercial accounts.',
    isDefault: true,
    shared: true,
    usageCount: 47,
    updatedAt: '2025-12-01',
    owner: { name: 'Maria Chen', isYou: false },
    producerTables: [[1, 2]],
  },
  {
    id: '2',
    name: 'Specialty Lines — E&O',
    description: '',
    isDefault: false,
    shared: true,
    usageCount: 12,
    updatedAt: '2025-11-15',
    owner: { name: 'James Kovac', isYou: false },
    producerTables: [[1]],
  },
  {
    id: '3',
    name: 'Large Account — Complex Risk',
    description: 'For accounts over $500k GWP with multiple layered placements.',
    isDefault: false,
    shared: true,
    usageCount: 8,
    updatedAt: '2025-10-30',
    owner: { name: 'Priya Nair', isYou: false },
    producerTables: [[1, 2, 3]],
  },
  {
    id: '4',
    name: 'My Private Draft',
    description: 'Work in progress — not ready to share.',
    isDefault: false,
    shared: false,
    usageCount: 1,
    updatedAt: '2025-10-10',
    owner: { name: 'Ismael V.', isYou: true },
    producerTables: [[1]],
  },
];

function ManageModalDemo({ templates, activeId, initialQuery = '' }) {
  const [q, setQ] = useState(initialQuery);

  const filtered = q.trim()
    ? templates.filter(t =>
        t.name.toLowerCase().includes(q.toLowerCase()) ||
        (t.description || '').toLowerCase().includes(q.toLowerCase()) ||
        t.owner.name.toLowerCase().includes(q.toLowerCase())
      )
    : templates;

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'rgba(0,0,0,0.4)' }}>
      <div className="dialog lg">
        <div className="dialog-head">
          <div>
            <div className="dialog-title">Step 3 templates</div>
            <div className="dialog-sub">
              Manage saved Producer Team + Additional Information sets shared across your organization.
            </div>
          </div>
          <button className="btn-icon"><IconClose size={16} /></button>
        </div>

        <div className="manage-toolbar">
          <div className="manage-search">
            <IconSearch size={16} />
            <input
              placeholder="Search by name, description, or owner…"
              value={q}
              onChange={e => setQ(e.target.value)}
            />
          </div>
          <button className="btn btn-primary">
            <IconPlus size={16} />
            New template
          </button>
        </div>

        <div className="manage-table-wrap">
          <table className="manage-table">
            <thead>
              <tr>
                <th style={{ width: '32%' }}>Template</th>
                <th style={{ width: 100 }}>Team</th>
                <th>Owner</th>
                <th style={{ width: 90 }}>Usage</th>
                <th style={{ width: 110 }}>Updated</th>
                <th style={{ width: 56 }}></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(t => (
                <tr key={t.id} className={t.id === activeId ? 'applied' : ''}>
                  <td>
                    <div className="manage-name">
                      {t.isDefault && <span className="star"><IconStar filled size={16} /></span>}
                      <span>{t.name}</span>
                      {t.id === activeId && <IconCheck size={16} style={{ color: 'var(--en-primary)' }} />}
                      {!t.shared && <span className="tag-shared">Private</span>}
                    </div>
                    {t.description && <div className="manage-desc">{t.description}</div>}
                  </td>
                  <td>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      <IconUsers size={16} />
                      {totalProducers(t.producerTables)}
                    </span>
                  </td>
                  <td>{t.owner.name}{t.owner.isYou ? ' (you)' : ''}</td>
                  <td className="muted">{t.usageCount.toLocaleString()}</td>
                  <td className="muted">{shortDate(t.updatedAt)}</td>
                  <td>
                    <button className="btn-icon"><IconMore size={16} /></button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center', padding: 40, color: 'var(--en-fg-secondary)' }}>
                    No templates match "{q}".
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="dialog-foot" style={{ justifyContent: 'space-between' }}>
          <div style={{ font: '400 12px/16px var(--en-font-sans)', color: 'var(--en-fg-secondary)' }}>
            {templates.length} template{templates.length === 1 ? '' : 's'} · {templates.filter(t => t.shared).length} shared with your organization
          </div>
          <button className="btn btn-secondary">Done</button>
        </div>
      </div>
    </div>
  );
}

export default {
  title: 'Design System/Dialogs/ManageModal',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export const WithTemplates = {
  name: 'With templates list',
  render: () => <ManageModalDemo templates={TEMPLATES} activeId="2" />,
};

export const ActiveTemplateApplied = {
  name: 'Active template highlighted',
  render: () => <ManageModalDemo templates={TEMPLATES} activeId="1" />,
};

export const EmptySearch = {
  name: 'Search — no results',
  render: () => <ManageModalDemo templates={TEMPLATES} activeId="2" initialQuery="workers comp" />,
};
