const KEY = 'ennabl_builder_prds'

export const PROJECT_PREFIXES = {
  ai:        'AI',
  insights:  'INS',
  workflows: 'WFL',
  data:      'DAT',
  growth:    'GRW',
  updates:   'UPD',
  settings:  'SET',
}

export const PROJECTS = [
  { id: 'ai',        name: 'AI',        phosphorIcon: 'Sparkle'   },
  { id: 'insights',  name: 'Insights',  phosphorIcon: 'ChartBar'  },
  { id: 'workflows', name: 'Workflows', phosphorIcon: 'FlowArrow' },
  { id: 'data',      name: 'Data',      phosphorIcon: 'Database'  },
  { id: 'growth',    name: 'Growth',    phosphorIcon: 'TrendUp'   },
  { id: 'updates',   name: 'Updates',   phosphorIcon: 'Bell'      },
  { id: 'settings',  name: 'Settings',  phosphorIcon: 'GearSix'   },
]

export const STATUSES = ['backlog', 'todo', 'doing', 'done']
export const STATUS_LABELS = { backlog: 'Backlog', todo: 'To Do', doing: 'Doing', done: 'Done' }

export function generatePrdId(projectId, allPrds) {
  const prefix = PROJECT_PREFIXES[projectId] || projectId.slice(0, 3).toUpperCase()
  const count = allPrds.filter(p => p.projectId === projectId).length + 1
  return `${prefix}-${String(count).padStart(2, '0')}`
}

// Adds prdId + sprintIds to any PRD missing them; returns updated array (saves if changed).
export function migratePrds(prds) {
  // Group by project to assign sequential IDs
  const counters = {}
  let changed = false
  const migrated = prds.map(p => {
    const updates = {}
    if (!p.prdId) {
      counters[p.projectId] = (counters[p.projectId] || 0) + 1
      const prefix = PROJECT_PREFIXES[p.projectId] || p.projectId.slice(0, 3).toUpperCase()
      updates.prdId = `${prefix}-${String(counters[p.projectId]).padStart(2, '0')}`
      changed = true
    } else {
      counters[p.projectId] = (counters[p.projectId] || 0) + 1
    }
    if (!p.sprintIds) { updates.sprintIds = []; changed = true }
    return Object.keys(updates).length ? { ...p, ...updates } : p
  })
  if (changed) savePrds(migrated)
  return migrated
}

const MOCK_PRDS = [
  {
    id: 'prd-mock-1',
    projectId: 'workflows',
    prdId: 'WFL-01',
    sprintIds: [],
    title: 'Producer Filter Modal',
    content: `# Producer Filter Modal

## Overview
Redesign the filter panel for the Producer Team step to support multi-select filters with a clear visual hierarchy.

## Goals
- Allow filtering by producer type, status, and region
- Show active filter count in the trigger button
- Support "clear all" action

## Key Screens
1. Filter trigger button (shows count badge when filters active)
2. Filter modal with grouped checkboxes
3. Applied state — table reflects filtered results

## Acceptance Criteria
- Filters persist across page navigation
- At most 3 filter groups visible without scroll
- Mobile-friendly layout
`,
    status: 'backlog',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'prd-mock-2',
    projectId: 'workflows',
    prdId: 'WFL-02',
    sprintIds: [],
    title: 'Template Save Flow',
    content: `# Template Save Flow

## Overview
Streamline the process of saving a completed Step 3 as a reusable template.

## Goals
- Reduce save flow from 4 steps to 2
- Add optional description and default-template toggle
- Show a success toast with "View templates" CTA

## Key Screens
1. Save trigger (button in tpl-bar when dirty)
2. Save dialog — name + description + sharing options
3. Success state

## Acceptance Criteria
- Template name is required, max 60 chars
- Duplicate name shows inline warning
- Default toggle shows collision warning if another default exists
`,
    status: 'doing',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
]

export function loadPrds() {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]') } catch { return [] }
}

export function savePrds(prds) {
  localStorage.setItem(KEY, JSON.stringify(prds))
}

export function seedIfEmpty() {
  const existing = loadPrds()
  if (existing.length === 0) savePrds(MOCK_PRDS)
}

export function createPrd({ projectId, title, content, sprintIds = [] }) {
  const prds = loadPrds()
  const prd = {
    id: `prd-${Date.now()}`,
    projectId,
    prdId: generatePrdId(projectId, prds),
    title: title.trim(),
    content,
    status: 'backlog',
    sprintIds,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  const updated = [...prds, prd]
  savePrds(updated)
  return { prd, prds: updated }
}

export function updatePrd(id, changes) {
  const prds = loadPrds().map(p =>
    p.id === id ? { ...p, ...changes, updatedAt: new Date().toISOString() } : p
  )
  savePrds(prds)
  return prds
}

export function deletePrd(id) {
  const prds = loadPrds().filter(p => p.id !== id)
  savePrds(prds)
  return prds
}

export function getPrd(id) {
  return loadPrds().find(p => p.id === id) || null
}

export function getPrdsForProject(projectId) {
  return loadPrds().filter(p => p.projectId === projectId)
}

export function searchPrds(query) {
  if (!query.trim()) return []
  const q = query.toLowerCase()
  return loadPrds().filter(p => p.title.toLowerCase().includes(q)).slice(0, 8)
}

export function getProject(id) {
  return PROJECTS.find(p => p.id === id) || null
}
