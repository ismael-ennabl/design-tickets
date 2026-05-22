const STORAGE_KEY = 'ennabl_builder_reports'

// Opus 4.7 pricing (per token)
const PRICE = {
  input:      15   / 1_000_000,
  output:     75   / 1_000_000,
  cacheRead:  1.50 / 1_000_000,
}

export function calcCost({ inputTokens = 0, outputTokens = 0, cacheReadTokens = 0 }) {
  const billableInput = Math.max(0, inputTokens - cacheReadTokens)
  return (
    billableInput   * PRICE.input +
    cacheReadTokens * PRICE.cacheRead +
    outputTokens    * PRICE.output
  )
}

export function newSession(prdName) {
  return {
    id: `s_${Date.now()}`,
    prdName,
    startedAt: new Date().toISOString(),
    iterations: 0,
    inputTokens: 0,
    outputTokens: 0,
    cacheReadTokens: 0,
    cost: 0,
    componentsUsed: [],
    rating: null,
    accepted: false,
  }
}

function load() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') } catch { return {} }
}

function save(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function saveSession(session) {
  const data = load()
  const key = session.prdName
  if (!data[key]) data[key] = []
  const idx = data[key].findIndex(s => s.id === session.id)
  if (idx >= 0) data[key][idx] = session
  else data[key].unshift(session)
  save(data)
}

export function getHistory(prdName) {
  return load()[prdName] || []
}

export function extractComponents(code) {
  if (!code) return []
  const known = [
    'CollapsibleSection', 'EditableField', 'TemplatePicker',
    'SaveTemplateDialog', 'UpdateTemplateDialog', 'ManageModal',
    'DeleteConfirm', 'Step3Body', 'ProducerTable',
  ]
  return known.filter(c => code.includes(c))
}

export function passRate(sessions) {
  if (!sessions.length) return null
  const accepted = sessions.filter(s => s.accepted && s.iterations <= 2).length
  return Math.round((accepted / sessions.length) * 100)
}
