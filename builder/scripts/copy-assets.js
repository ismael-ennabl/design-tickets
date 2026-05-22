import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const src = join(root, '..', 'youtrack')
const out = join(root, 'public', 'design-system')

mkdirSync(out, { recursive: true })

let colors = readFileSync(join(src, '_design_system', 'colors_and_type.css'), 'utf8')
colors = colors.replace(/@font-face\s*\{[^}]*\}/g, '')
writeFileSync(join(out, 'colors.css'), colors)

writeFileSync(join(out, 'styles.css'), readFileSync(join(src, '_design_system', 'styles.css'), 'utf8'))

writeFileSync(join(out, 'icons.js'), readFileSync(join(src, '_shared', 'icons.jsx'), 'utf8'))

const shared = ['picker.jsx', 'dialogs.jsx', 'step3.jsx']
  .map(f => `// === ${f} ===\n` + readFileSync(join(src, '_shared', f), 'utf8'))
  .join('\n\n')
writeFileSync(join(out, 'shared.js'), shared)

console.log('design-system assets → public/design-system/')
