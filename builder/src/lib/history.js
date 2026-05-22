const KEY = 'ennabl_builder_history'
const MAX = 50

export function loadHistory() {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]') } catch { return [] }
}

export function saveHistory(entries) {
  localStorage.setItem(KEY, JSON.stringify(entries.slice(0, MAX)))
}

export function makeEntry({ prdName, code, iteration }) {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    timestamp: new Date().toISOString(),
    prdName,
    code,
    iteration,
  }
}

export function downloadJsx(entry) {
  const slug = entry.prdName.replace(/\.md$/i, '').replace(/[^a-z0-9]/gi, '-').toLowerCase()
  const filename = `${slug}-v${entry.iteration}.jsx`
  const content = `/**
 * ennabl builder — generated component
 * PRD: ${entry.prdName}  |  iteration: ${entry.iteration}
 * ${new Date(entry.timestamp).toLocaleString()}
 *
 * Globals expected:
 *   - React 18 UMD (window.React, window.ReactDOM)
 *   - ennabl design system CSS (--en-* variables)
 *   - icons.jsx globals (IconCheck, IconClose, …)
 *   - shared globals (Scrim, CollapsibleSection, EditableField, …)
 */

${entry.code}
`
  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  Object.assign(document.createElement('a'), { href: url, download: filename }).click()
  URL.revokeObjectURL(url)
}
