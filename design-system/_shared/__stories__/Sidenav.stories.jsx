import React, { useState } from 'react';
import {
  ChartBar, TrendUp, FlowArrow, Sparkle, Database, Bell, GearSix,
  CaretRight, CaretDown,
  House, Gauge, BookmarkSimple, Target, UsersThree,
  FileText, Files, ChatDots, Lightning, Buildings, UserCircle, Users,
  ClockCounterClockwise,
} from '@phosphor-icons/react';

// ── Data ─────────────────────────────────────────────────────────────────────

const SECTION_ICONS = {
  insights:  ChartBar,
  growth:    TrendUp,
  workflows: FlowArrow,
  ai:        Sparkle,
  data:      Database,
  updates:   Bell,
  settings:  GearSix,
};

const LINK_ICONS = {
  House, Gauge, BookmarkSimple, Target, UsersThree,
  FileText, Files, ChatDots, Lightning, Buildings, UserCircle, Users,
  ClockCounterClockwise, Bell,
};

const NAV = [
  {
    id: 'insights', label: 'Insights',
    links: [
      { label: 'Dashboards',  icon: 'House',          path: '/insights/dashboards' },
      { label: 'KPIs',        icon: 'Gauge',          path: '/insights/kpis' },
      { label: 'Favorites',   icon: 'BookmarkSimple', path: '/insights/favorites' },
    ],
    groups: [
      { id: 'resources', label: 'Resources', links: [
        { label: 'Cross sell', path: '/insights/resources/cross-sell' },
        { label: 'Monoline',   path: '/insights/resources/monoline' },
        { label: 'Renewals',   path: '/insights/resources/renewals' },
      ]},
      { id: 'account-breakdown', label: 'Account Breakdown', links: [
        { label: 'By carrier',  path: '/insights/breakdown/carrier' },
        { label: 'By producer', path: '/insights/breakdown/producer' },
      ]},
    ],
  },
  {
    id: 'growth', label: 'Growth',
    links: [
      { label: 'Target Industry', icon: 'Target',     path: '/growth/target-industry' },
      { label: 'Net-new',         icon: 'UsersThree', path: '/growth/net-new' },
    ],
    groups: [
      { id: 'your-book', label: 'Your Book', links: [
        { label: 'Cross sell', path: '/growth/book/cross-sell' },
        { label: 'Monoline',   path: '/growth/book/monoline' },
        { label: 'Renewals',   path: '/growth/book/renewals' },
      ]},
    ],
  },
  {
    id: 'workflows', label: 'Workflows',
    links: [
      { label: 'All Workflows',    icon: 'House',    path: '/workflows' },
      { label: 'Document Library', icon: 'FileText', path: '/workflows/documents' },
      { label: 'AMS Documents',    icon: 'Files',    path: '/workflows/ams' },
    ],
    groups: [
      { id: 'workflows-library', label: 'Workflows Library', links: [
        { label: 'Documents Compare',   path: '/workflows/library/compare' },
        { label: 'AMS Audit',           path: '/workflows/library/ams-audit' },
        { label: 'Proposal Generation', path: '/workflows/library/proposals' },
      ]},
      { id: 'recent', label: 'Recent Workflows', links: [
        { label: 'PG-01 DC — AB Policy', path: '/workflows/recent/1' },
        { label: 'PG-02 DC — AB Policy', path: '/workflows/recent/2' },
      ]},
    ],
  },
  {
    id: 'ai', label: 'AI',
    links: [
      { label: 'Assistant', icon: 'ChatDots',  path: '/ai/assistant' },
      { label: 'Insights',  icon: 'Lightning', path: '/ai/insights' },
    ],
    groups: [],
  },
  {
    id: 'data', label: 'Data',
    links: [
      { label: 'Accounts',  icon: 'Buildings',  path: '/data/accounts' },
      { label: 'Producers', icon: 'UserCircle', path: '/data/producers' },
      { label: 'Clients',   icon: 'Users',      path: '/data/clients' },
    ],
    groups: [],
  },
  {
    id: 'updates', label: 'Updates',
    links: [
      { label: 'Notifications', icon: 'Bell',                  path: '/updates/notifications' },
      { label: 'Activity Feed', icon: 'ClockCounterClockwise', path: '/updates/activity' },
    ],
    groups: [],
  },
  {
    id: 'settings', label: 'Settings',
    links: [],
    groups: [
      { id: 'settings-group', label: 'Settings', links: [
        { label: 'Account',             path: '/settings/account' },
        { label: 'Credit Management',   path: '/settings/credit' },
        { label: 'Manage Users',        path: '/settings/users' },
        { label: 'Customize Workspace', path: '/settings/workspace' },
        { label: 'Subscription',        path: '/settings/subscription' },
      ]},
    ],
  },
];

// ── Shared CSS ────────────────────────────────────────────────────────────────

const CSS = `
  .sn-root { display:flex; height:100%; background:var(--en-bg); flex-shrink:0; }

  .sn-rail {
    width:80px; display:flex; flex-direction:column; align-items:center;
    padding:8px 0; border-right:1px solid var(--en-divider); flex-shrink:0;
  }
  .sn-rail-btn {
    width:64px; height:47px; display:flex; flex-direction:column;
    align-items:center; justify-content:center; gap:3px;
    border:none; background:none; border-radius:var(--en-radius-regular);
    cursor:pointer; padding:6px 4px; margin:1px 0;
    transition:background 150ms; color:var(--en-sidebar);
  }
  .sn-rail-btn:hover { background:var(--en-bg-hover); }
  .sn-rail-btn.sn-active { background:var(--en-secondary-dark); color:var(--en-primary); }
  .sn-rail-label {
    font:600 9px/12px var(--en-font-sans); letter-spacing:0.3px;
    text-transform:uppercase; white-space:nowrap; overflow:hidden;
    text-overflow:ellipsis; max-width:60px; text-align:center;
  }

  .sn-sub {
    width:222px; display:flex; flex-direction:column;
    border-right:1px solid var(--en-divider);
    overflow-y:auto; overflow-x:hidden; flex-shrink:0;
  }
  .sn-section-header {
    padding:16px 16px 4px;
    font:400 12px/20px var(--en-font-sans); letter-spacing:1px;
    text-transform:uppercase; color:var(--en-fg-secondary); flex-shrink:0;
  }
  .sn-links { padding:0 12px; }

  .sn-link {
    display:flex; align-items:center; gap:8px; height:32px; padding:0 8px;
    border-radius:var(--en-radius); cursor:pointer; border:none; background:none;
    width:100%; text-align:left; font:400 14px/20px var(--en-font-sans);
    letter-spacing:0.17px; color:var(--en-fg); transition:background 150ms;
    box-sizing:border-box; text-decoration:none;
  }
  .sn-link:hover { background:var(--en-bg-hover); }
  .sn-link.sn-link-active { background:var(--en-bg-dark-grey); color:var(--en-primary); }
  .sn-link-icon { flex-shrink:0; color:inherit; opacity:0.7; }

  .sn-group { margin-top:8px; }
  .sn-group-btn {
    display:flex; align-items:center; justify-content:space-between;
    width:100%; height:23px; padding:4px 8px 4px 12px;
    border:none; background:none; cursor:pointer;
    font:400 12px/20px var(--en-font-sans); letter-spacing:1px;
    text-transform:uppercase; color:var(--en-fg-secondary);
    border-radius:var(--en-radius); transition:background 150ms;
    box-sizing:border-box; text-align:left;
  }
  .sn-group-btn:hover { background:var(--en-bg-hover); }
  .sn-group-children { padding-left:4px; }

  .sn-child-link {
    display:flex; align-items:center; height:32px; padding:0 8px 0 16px;
    border-radius:var(--en-radius); cursor:pointer; border:none; background:none;
    width:100%; text-align:left; font:400 14px/20px var(--en-font-sans);
    letter-spacing:0.17px; color:var(--en-fg); transition:background 150ms;
    box-sizing:border-box; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
  }
  .sn-child-link:hover { background:var(--en-bg-hover); }
  .sn-child-link.sn-link-active { background:var(--en-bg-dark-grey); color:var(--en-primary); }
`;

// ── Building-block components ─────────────────────────────────────────────────

function Rail({ sections, activeId, onSelect }) {
  return (
    <div className="sn-rail">
      {sections.map(s => {
        const Icon = SECTION_ICONS[s.id];
        const isActive = s.id === activeId;
        return (
          <button
            key={s.id}
            className={`sn-rail-btn${isActive ? ' sn-active' : ''}`}
            onClick={() => onSelect(s.id)}
            title={s.label}
          >
            {Icon && <Icon size={20} />}
            <span className="sn-rail-label">{s.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function Submenu({ section, activePath, onNavigate, expandedGroups, onToggleGroup }) {
  return (
    <div className="sn-sub">
      <div className="sn-section-header">{section.label}</div>
      <div className="sn-links">
        {section.links.map(link => {
          const LinkIcon = LINK_ICONS[link.icon];
          const isActive = activePath === link.path;
          return (
            <button
              key={link.path}
              className={`sn-link${isActive ? ' sn-link-active' : ''}`}
              onClick={() => onNavigate?.(section.id, link.path)}
            >
              {LinkIcon && <span className="sn-link-icon"><LinkIcon size={16} /></span>}
              {link.label}
            </button>
          );
        })}

        {section.groups.map(group => {
          const isOpen = expandedGroups[group.id] !== false;
          return (
            <div key={group.id} className="sn-group">
              <button className="sn-group-btn" onClick={() => onToggleGroup(group.id)}>
                {group.label}
                {isOpen ? <CaretDown size={12} /> : <CaretRight size={12} />}
              </button>
              {isOpen && (
                <div className="sn-group-children">
                  {group.links.map(link => {
                    const isActive = activePath === link.path;
                    return (
                      <button
                        key={link.path}
                        className={`sn-child-link${isActive ? ' sn-link-active' : ''}`}
                        onClick={() => onNavigate?.(section.id, link.path)}
                      >
                        {link.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Stories ───────────────────────────────────────────────────────────────────

function DefaultDemo() {
  const section = NAV.find(s => s.id === 'insights');
  const expandedGroups = { resources: true, 'account-breakdown': false };
  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--en-bg-grey)' }}>
      <style>{CSS}</style>
      <div className="sn-root">
        <Rail sections={NAV} activeId="insights" onSelect={() => {}} />
        <Submenu
          section={section}
          activePath="/insights/dashboards"
          expandedGroups={expandedGroups}
          onToggleGroup={() => {}}
        />
      </div>
      <div style={{ flex: 1, padding: 32 }}>
        <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 12, color: 'var(--en-fg-secondary)' }}>
          Page content area — 302px sidenav (80px rail + 222px submenu)
        </p>
      </div>
    </div>
  );
}

function CollapsedDemo() {
  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--en-bg-grey)' }}>
      <style>{CSS}</style>
      <div className="sn-root">
        <Rail sections={NAV} activeId="workflows" onSelect={() => {}} />
      </div>
      <div style={{ flex: 1, padding: 32 }}>
        <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 12, color: 'var(--en-fg-secondary)' }}>
          Collapsed — icon rail only (80px)
        </p>
      </div>
    </div>
  );
}

function InteractiveDemo() {
  const [activeId, setActiveId] = useState('insights');
  const [activePath, setActivePath] = useState('/insights/dashboards');
  const [expandedGroups, setExpandedGroups] = useState({ resources: true });

  const section = NAV.find(s => s.id === activeId) || NAV[0];

  function handleSelect(sectionId) {
    setActiveId(sectionId);
    setActivePath(null);
    setExpandedGroups({});
  }

  function handleNavigate(sectionId, path) {
    setActivePath(path);
  }

  function handleToggleGroup(groupId) {
    setExpandedGroups(prev => ({ ...prev, [groupId]: !prev[groupId] }));
  }

  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--en-bg-grey)' }}>
      <style>{CSS}</style>
      <div className="sn-root">
        <Rail sections={NAV} activeId={activeId} onSelect={handleSelect} />
        <Submenu
          section={section}
          activePath={activePath}
          expandedGroups={expandedGroups}
          onNavigate={handleNavigate}
          onToggleGroup={handleToggleGroup}
        />
      </div>
      <div style={{ flex: 1, padding: 32 }}>
        <p className="en-overline" style={{ color: 'var(--en-fg-secondary)', marginBottom: 8 }}>Active</p>
        <p className="en-body2">Section: <strong>{activeId}</strong></p>
        {activePath && <p className="en-body2">Path: <code>{activePath}</code></p>}
      </div>
    </div>
  );
}

function AllSectionsDemo() {
  const [expandedGroups, setExpandedGroups] = useState({ resources: true, 'settings-group': true, 'workflows-library': true });
  function toggleGroup(gid) { setExpandedGroups(p => ({ ...p, [gid]: !p[gid] })); }

  return (
    <div style={{ background: 'var(--en-bg-grey)', minHeight: '100vh', padding: 32 }}>
      <style>{CSS}</style>
      <p style={{
        fontFamily: 'var(--en-font-sans)', fontSize: 11, fontWeight: 700,
        letterSpacing: '0.5px', textTransform: 'uppercase',
        color: 'var(--en-fg-secondary)', marginBottom: 24,
      }}>
        All sections — submenu panels
      </p>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {NAV.map(section => (
          <div key={section.id} style={{ height: 480, display: 'flex', background: 'var(--en-bg)', borderRadius: 'var(--en-radius-regular)', overflow: 'hidden', boxShadow: 'var(--en-shadow-menu)' }}>
            <div className="sn-root" style={{ height: '100%' }}>
              <Submenu
                section={section}
                expandedGroups={expandedGroups}
                onNavigate={() => {}}
                onToggleGroup={toggleGroup}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Exports ───────────────────────────────────────────────────────────────────

export default {
  title: 'Design System/Shared Components/Sidenav',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export const Default     = { render: () => <DefaultDemo /> };
export const Collapsed   = { render: () => <CollapsedDemo /> };
export const Interactive = { render: () => <InteractiveDemo /> };
export const AllSections = { render: () => <AllSectionsDemo /> };
