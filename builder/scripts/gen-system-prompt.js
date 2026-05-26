/**
 * Reads @component manifest blocks from design-system/_shared/*.jsx
 * and writes system-prompt/shared-components.md.
 *
 * Runs automatically as part of npm run build and npm run dev.
 * DO NOT edit shared-components.md by hand — changes will be overwritten.
 *
 * To add a new component to the AI's context:
 *   1. Add a @component block to the component's .jsx file (see any existing file for format)
 *   2. Run: npm run build (in builder/)
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { createHash } from 'crypto'

const __dirname = dirname(fileURLToPath(import.meta.url))
const sharedDir = join(__dirname, '..', '..', 'design-system', '_shared')
const outputFile = join(__dirname, '..', 'system-prompt', 'shared-components.md')

// ── Parse @component blocks from one file ────────────────────────────────────
// Format:
//   // @component Name
//   // @description Single-line description
//   // @example
//   // code line...
//   // @props
//   // propName  type — description
//   // @end

function parseManifests(content) {
  const components = []
  let cur = null
  let mode = null // 'example' | 'props'

  for (const raw of content.split('\n')) {
    const m = raw.match(/^\s*\/\/ ?(.*)$/)
    if (!m) {
      // Non-comment line ends the current mode section (but not the component block)
      if (mode) mode = null
      continue
    }
    const line = m[1]

    if (line.startsWith('@component ')) {
      if (cur) components.push(cur)
      cur = { name: line.slice('@component '.length).trim(), description: '', example: [], props: [] }
      mode = null
      continue
    }
    if (!cur) continue

    if (line.startsWith('@description ')) {
      cur.description = line.slice('@description '.length).trim()
      mode = null
    } else if (line === '@example') {
      mode = 'example'
    } else if (line === '@props') {
      mode = 'props'
    } else if (line === '@end') {
      components.push(cur)
      cur = null
      mode = null
    } else if (mode === 'example') {
      cur.example.push(line)
    } else if (mode === 'props') {
      cur.props.push(line)
    }
  }
  if (cur) components.push(cur)
  return components
}

// ── Render one component to Markdown ─────────────────────────────────────────

function renderComponent(c) {
  const parts = [`## ${c.name}`]

  if (c.description) parts.push('\n' + c.description)

  if (c.example.length) {
    // Trim leading/trailing blank lines from example
    const ex = [...c.example]
    while (ex.length && !ex[0].trim()) ex.shift()
    while (ex.length && !ex[ex.length - 1].trim()) ex.pop()
    parts.push('\n```jsx\n' + ex.join('\n') + '\n```')
  }

  if (c.props.length) {
    const bullets = c.props
      .map(p => {
        const t = p.trim()
        if (!t) return null
        if (t.startsWith('-')) return t                      // already a bullet
        const gap = t.search(/[ \t]{2,}/)                   // "propName  rest"
        if (gap > 0) return `- \`${t.slice(0, gap).trim()}\` ${t.slice(gap).trim()}`
        return `- ${t}`
      })
      .filter(Boolean)
    if (bullets.length) parts.push('\nProps:\n' + bullets.join('\n'))
  }

  return parts.join('\n')
}

// ── Main ──────────────────────────────────────────────────────────────────────

const files = readdirSync(sharedDir).filter(f => f.endsWith('.jsx')).sort()

// Per-file hashes for granular drift detection
const fileHashes = {}
for (const f of files) {
  fileHashes[f] = createHash('sha256')
    .update(readFileSync(join(sharedDir, f), 'utf8'))
    .digest('hex').slice(0, 12)
}
const overallHash = createHash('sha256')
  .update(Object.entries(fileHashes).map(([f, h]) => `${f}:${h}`).join('\n'))
  .digest('hex').slice(0, 16)

// Collect all manifests in file-alphabetical order
const allComponents = []
for (const f of files) {
  const parsed = parseManifests(readFileSync(join(sharedDir, f), 'utf8'))
  allComponents.push(...parsed)
}

if (allComponents.length === 0) {
  console.error('✗ No @component manifests found in design-system/_shared/')
  console.error('  Add // @component blocks to component .jsx files to populate the AI context.')
  process.exit(1)
}

// Build the output file
const hashHeader = [
  `<!-- AUTO-GENERATED — do not edit by hand -->`,
  `<!-- Edit @component blocks in design-system/_shared/*.jsx, then: npm run build (in builder/) -->`,
  `<!-- source-hash: ${overallHash} -->`,
  ...files.map(f => `<!-- file:${f}:${fileHashes[f]} -->`),
].join('\n')

const sections = allComponents.map(renderComponent).join('\n\n---\n\n')

const output = `${hashHeader}

# ennabl Shared Components

These components are available as globals in the preview. Use them directly — no imports needed.

---

${sections}

---

## Usage notes

- All shared components use global React (\`const { useState } = React\` — no imports)
- All shared components use the ennabl CSS classes and \`--en-*\` variables
- Wrap dialogs/modals in a fragment after the main content — they render to fixed position overlays
- The \`Scrim\` component is the modal backdrop — used internally by dialogs, rarely needed directly
`

writeFileSync(outputFile, output)
console.log(`✓ shared-components.md — ${allComponents.length} components | hash: ${overallHash}`)
