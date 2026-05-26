// Sidenav — ennabl two-panel navigation: icon rail (80px) + submenu (222px)
// Mirrors Figma UI Kit 2, node 69:2. Total width: 302px expanded, 80px collapsed.

// @component Sidenav
// @description Two-panel app navigation. Icon rail on the left selects the active section; submenu shows that section's links and collapsible groups. Pass collapsed={true} to show icon rail only (80px).
// @example
// <Sidenav
//   active="insights"
//   onNavigate={(sectionId, path) => console.log(sectionId, path)}
// />
//
// // Collapsed — icon rail only
// <Sidenav active="workflows" collapsed onNavigate={fn} />
//
// // Custom sections
// <Sidenav
//   sections={ENNABL_NAV}
//   active="data"
//   activePath="/data/accounts"
//   onNavigate={(sectionId, path) => navigate(sectionId, path)}
// />
// @props
// sections    array — section config (defaults to ENNABL_NAV). Each: { id, label, icon, links[], groups[] }
// active      string — active section id ('insights' | 'growth' | 'workflows' | 'ai' | 'data' | 'updates' | 'settings')
// activePath  string — highlighted link path within the active section
// onNavigate  (sectionId, path?) => void — called on section or link click
// collapsed   boolean — icon rail only (80px wide). Default false.
// @end

const ENNABL_NAV = [
  {
    id: 'insights', label: 'Insights', icon: 'ChartBar',
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
    id: 'growth', label: 'Growth', icon: 'TrendUp',
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
    id: 'workflows', label: 'Workflows', icon: 'FlowArrow',
    links: [
      { label: 'All Workflows',    icon: 'House',    path: '/workflows' },
      { label: 'Document Library', icon: 'FileText', path: '/workflows/documents' },
      { label: 'AMS Documents',    icon: 'Files',    path: '/workflows/ams' },
    ],
    groups: [
      { id: 'workflows-library', label: 'Workflows Library', links: [
        { label: 'Documents Compare',  path: '/workflows/library/compare' },
        { label: 'AMS Audit',          path: '/workflows/library/ams-audit' },
        { label: 'Proposal Generation',path: '/workflows/library/proposals' },
      ]},
      { id: 'recent-workflows', label: 'Recent Workflows', links: [
        { label: 'PG-01 DC — AB Policy', path: '/workflows/recent/1' },
        { label: 'PG-02 DC — AB Policy', path: '/workflows/recent/2' },
      ]},
    ],
  },
  {
    id: 'ai', label: 'AI', icon: 'Sparkle',
    links: [
      { label: 'Assistant', icon: 'ChatDots', path: '/ai/assistant' },
      { label: 'Insights',  icon: 'Lightning', path: '/ai/insights' },
    ],
    groups: [],
  },
  {
    id: 'data', label: 'Data', icon: 'Database',
    links: [
      { label: 'Accounts',  icon: 'Buildings',   path: '/data/accounts' },
      { label: 'Producers', icon: 'UserCircle',  path: '/data/producers' },
      { label: 'Clients',   icon: 'Users',       path: '/data/clients' },
    ],
    groups: [],
  },
  {
    id: 'updates', label: 'Updates', icon: 'Bell',
    links: [
      { label: 'Notifications', icon: 'Bell',                  path: '/updates/notifications' },
      { label: 'Activity Feed', icon: 'ClockCounterClockwise', path: '/updates/activity' },
    ],
    groups: [],
  },
  {
    id: 'settings', label: 'Settings', icon: 'GearSix',
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
]

function resolveIcon(name, size = 16) {
  if (!name) return null
  const Comp = window['Icon' + name]
  return Comp ? React.createElement(Comp, { size }) : null
}

function Sidenav({
  sections = ENNABL_NAV,
  active,
  activePath,
  onNavigate,
  collapsed = false,
}) {
  const { useState } = React
  const [expandedGroups, setExpandedGroups] = useState({})

  function toggleGroup(groupId) {
    setExpandedGroups(prev => ({ ...prev, [groupId]: !prev[groupId] }))
  }

  const activeSection = sections.find(s => s.id === active) || sections[0]

  return (
    <>
      <style>{`
        .sn-root {
          display: flex;
          height: 100%;
          background: var(--en-bg);
          flex-shrink: 0;
        }

        /* ── Icon Rail ── */
        .sn-rail {
          width: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 8px 0;
          border-right: 1px solid var(--en-divider);
          flex-shrink: 0;
          overflow: hidden;
        }
        .sn-rail-btn {
          width: 64px;
          height: 47px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          border: none;
          background: none;
          border-radius: var(--en-radius-regular);
          cursor: pointer;
          padding: 6px 4px;
          margin: 1px 0;
          transition: background 150ms;
          color: var(--en-sidebar);
        }
        .sn-rail-btn:hover {
          background: var(--en-bg-hover);
        }
        .sn-rail-btn.sn-active {
          background: var(--en-secondary-dark);
          color: var(--en-primary);
        }
        .sn-rail-label {
          font: 600 9px/12px var(--en-font-sans);
          letter-spacing: 0.3px;
          text-transform: uppercase;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 60px;
          text-align: center;
        }

        /* ── Submenu ── */
        .sn-sub {
          width: 222px;
          display: flex;
          flex-direction: column;
          border-right: 1px solid var(--en-divider);
          overflow-y: auto;
          overflow-x: hidden;
          flex-shrink: 0;
        }
        .sn-section-header {
          padding: 16px 16px 4px;
          font: 400 12px/20px var(--en-font-sans);
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--en-fg-secondary);
          flex-shrink: 0;
        }
        .sn-links {
          padding: 0 12px;
        }

        /* top-level link: icon + label */
        .sn-link {
          display: flex;
          align-items: center;
          gap: 8px;
          height: 32px;
          padding: 0 8px;
          border-radius: var(--en-radius);
          cursor: pointer;
          border: none;
          background: none;
          width: 100%;
          text-align: left;
          font: 400 14px/20px var(--en-font-sans);
          letter-spacing: 0.17px;
          color: var(--en-fg);
          transition: background 150ms;
          box-sizing: border-box;
          text-decoration: none;
        }
        .sn-link:hover {
          background: var(--en-bg-hover);
        }
        .sn-link.sn-link-active {
          background: var(--en-bg-dark-grey);
          color: var(--en-primary);
        }
        .sn-link-icon {
          flex-shrink: 0;
          color: inherit;
          opacity: 0.7;
        }

        /* group */
        .sn-group {
          margin-top: 8px;
        }
        .sn-group-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 23px;
          padding: 4px 8px 4px 12px;
          border: none;
          background: none;
          cursor: pointer;
          font: 400 12px/20px var(--en-font-sans);
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--en-fg-secondary);
          border-radius: var(--en-radius);
          transition: background 150ms;
          box-sizing: border-box;
          text-align: left;
        }
        .sn-group-btn:hover {
          background: var(--en-bg-hover);
        }
        .sn-group-children {
          padding-left: 4px;
        }

        /* child link: text only, more indent */
        .sn-child-link {
          display: flex;
          align-items: center;
          height: 32px;
          padding: 0 8px 0 16px;
          border-radius: var(--en-radius);
          cursor: pointer;
          border: none;
          background: none;
          width: 100%;
          text-align: left;
          font: 400 14px/20px var(--en-font-sans);
          letter-spacing: 0.17px;
          color: var(--en-fg);
          transition: background 150ms;
          box-sizing: border-box;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .sn-child-link:hover {
          background: var(--en-bg-hover);
        }
        .sn-child-link.sn-link-active {
          background: var(--en-bg-dark-grey);
          color: var(--en-primary);
        }
      `}</style>

      <nav className="sn-root">
        {/* Icon Rail */}
        <div className="sn-rail">
          {sections.map(section => {
            const isActive = section.id === (active || activeSection?.id)
            return (
              <button
                key={section.id}
                className={`sn-rail-btn${isActive ? ' sn-active' : ''}`}
                onClick={() => onNavigate?.(section.id)}
                title={section.label}
              >
                {resolveIcon(section.icon, 20)}
                <span className="sn-rail-label">{section.label}</span>
              </button>
            )
          })}
        </div>

        {/* Submenu */}
        {!collapsed && activeSection && (
          <div className="sn-sub">
            <div className="sn-section-header">{activeSection.label}</div>

            <div className="sn-links">
              {/* Top-level links */}
              {activeSection.links.map(link => {
                const isLinkActive = activePath === link.path
                return (
                  <button
                    key={link.path}
                    className={`sn-link${isLinkActive ? ' sn-link-active' : ''}`}
                    onClick={() => onNavigate?.(activeSection.id, link.path)}
                  >
                    {link.icon && (
                      <span className="sn-link-icon">
                        {resolveIcon(link.icon, 16)}
                      </span>
                    )}
                    {link.label}
                  </button>
                )
              })}

              {/* Groups */}
              {activeSection.groups.map(group => {
                const isOpen = expandedGroups[group.id] !== false
                return (
                  <div key={group.id} className="sn-group">
                    <button
                      className="sn-group-btn"
                      onClick={() => toggleGroup(group.id)}
                    >
                      {group.label}
                      {resolveIcon(isOpen ? 'CaretDown' : 'CaretRight', 12)}
                    </button>
                    {isOpen && (
                      <div className="sn-group-children">
                        {group.links.map(link => {
                          const isLinkActive = activePath === link.path
                          return (
                            <button
                              key={link.path}
                              className={`sn-child-link${isLinkActive ? ' sn-link-active' : ''}`}
                              onClick={() => onNavigate?.(activeSection.id, link.path)}
                            >
                              {link.label}
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
