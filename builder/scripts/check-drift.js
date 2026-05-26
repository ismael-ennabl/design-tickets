/**
 * Compares current design-system/_shared/*.jsx file hashes to those
 * recorded in system-prompt/shared-components.md.
 *
 * Exits 0 if up to date, exits 1 with a clear message if stale.
 *
 * Used by:
 *   npm run check-drift     (manual)
 *   .githooks/pre-commit    (automatic — blocks commits with stale docs)
 *
 * One-time hook setup:
 *   git config core.hooksPath .githooks   (run from repo root)
 */
import { readFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { createHash } from 'crypto'

const __dirname = dirname(fileURLToPath(import.meta.url))
const sharedDir = join(__dirname, '..', '..', 'design-system', '_shared')
const docFile   = join(__dirname, '..', 'system-prompt', 'shared-components.md')

// ── Read recorded hashes from the generated doc ───────────────────────────────

let doc
try {
  doc = readFileSync(docFile, 'utf8')
} catch {
  console.error('\n✗  system-prompt/shared-components.md not found')
  console.error('   Run: npm run build  (in builder/)\n')
  process.exit(1)
}

const recorded = {}
for (const [, file, hash] of doc.matchAll(/<!-- file:([^:]+):([a-f0-9]+) -->/g)) {
  recorded[file] = hash
}

if (Object.keys(recorded).length === 0) {
  console.error('\n✗  No file hashes in shared-components.md — regenerate with: npm run build\n')
  process.exit(1)
}

// ── Recompute current hashes ──────────────────────────────────────────────────

const current = {}
for (const f of readdirSync(sharedDir).filter(f => f.endsWith('.jsx'))) {
  current[f] = createHash('sha256')
    .update(readFileSync(join(sharedDir, f), 'utf8'))
    .digest('hex').slice(0, 12)
}

// ── Compare ───────────────────────────────────────────────────────────────────

const stale = []
for (const [f, h] of Object.entries(current)) {
  if (recorded[f] && recorded[f] !== h) stale.push(f)
  if (!recorded[f]) stale.push(`${f} (new — not yet in doc)`)
}
for (const f of Object.keys(recorded)) {
  if (!current[f]) stale.push(`${f} (deleted)`)
}

if (stale.length === 0) {
  console.log('✓ shared-components.md is up to date')
  process.exit(0)
}

console.error('\n⚠  shared-components.md is stale — run: npm run build  (in builder/)')
console.error(`   Modified since last build: ${stale.join(', ')}\n`)
process.exit(1)
