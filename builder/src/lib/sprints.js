const KEY = 'ennabl_builder_sprints'

export function loadSprints() {
  try { return JSON.parse(localStorage.getItem(KEY)) || [] }
  catch { return [] }
}

export function saveSprints(arr) {
  localStorage.setItem(KEY, JSON.stringify(arr))
}

export function createSprint({ name, startDate, endDate }) {
  return {
    id: `sprint-${Date.now()}`,
    name: name.trim(),
    startDate: startDate || '',
    endDate: endDate || '',
    createdAt: new Date().toISOString(),
  }
}

const FMT = d => new Date(d + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

export function sprintLabel(sprint) {
  if (sprint.startDate && sprint.endDate)
    return `${sprint.name} · ${FMT(sprint.startDate)} – ${FMT(sprint.endDate)}`
  if (sprint.startDate)
    return `${sprint.name} · from ${FMT(sprint.startDate)}`
  return sprint.name
}
