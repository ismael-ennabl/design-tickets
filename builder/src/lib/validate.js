const VALID_TOKENS = new Set([
  '--en-primary', '--en-primary-light', '--en-primary-dark', '--en-action-hover', '--en-outlined-hover',
  '--en-fg', '--en-fg-secondary', '--en-fg-disabled',
  '--en-bg', '--en-bg-grey', '--en-bg-dark-grey', '--en-bg-hover', '--en-bg-active',
  '--en-secondary', '--en-secondary-dark',
  '--en-border', '--en-divider',
  '--en-error', '--en-error-dark', '--en-success', '--en-warning', '--en-warning-dark',
  '--en-icon', '--en-icon-secondary', '--en-sidebar',
  '--en-logo-primary', '--en-logo-accent',
  '--en-radius-sm', '--en-radius', '--en-radius-regular', '--en-radius-medium', '--en-radius-large', '--en-radius-xl',
  '--en-shadow-menu', '--en-shadow-tooltip', '--en-shadow-card-hover',
  '--en-duration-short', '--en-easing', '--en-font-sans',
])

const VALID_CLASSES = new Set([
  'en-h3', 'en-h4', 'en-h5',
  'en-body1', 'en-body1-bold', 'en-body2', 'en-body2-bold', 'en-body3', 'en-body3-bold',
  'en-subtitle1', 'en-subtitle2', 'en-subtitle3',
  'en-overline', 'en-caption', 'en-table-header', 'en-table-text',
])

const VALID_ICONS = new Set([
  'IconCheck', 'IconChevronDown', 'IconChevronUp', 'IconClose', 'IconCopy',
  'IconDownload', 'IconEdit', 'IconEditFill', 'IconExternal', 'IconGear', 'IconInfo',
  'IconMore', 'IconPlus', 'IconRevert', 'IconSearch', 'IconShare',
  'IconStar', 'IconTrash', 'IconTrashFill', 'IconUpload', 'IconUsers',
])

export function validateCode(code) {
  const issues = []

  // Unknown --en-* tokens
  const usedTokens = [...code.matchAll(/var\((--en-[a-z0-9-]+)/g)].map(m => m[1])
  ;[...new Set(usedTokens)].filter(t => !VALID_TOKENS.has(t)).forEach(t =>
    issues.push({ type: 'token', msg: `unknown token ${t}` })
  )

  // Unknown .en-* classes (from className strings)
  const usedClasses = [...code.matchAll(/className="([^"]+)"/g)]
    .flatMap(m => m[1].split(/\s+/))
    .filter(c => c.startsWith('en-'))
  ;[...new Set(usedClasses)].filter(c => !VALID_CLASSES.has(c)).forEach(c =>
    issues.push({ type: 'class', msg: `unknown class .${c}` })
  )

  // Unknown Icon* components
  const usedIcons = [...code.matchAll(/<(Icon[A-Z][A-Za-z]*)/g)].map(m => m[1])
  ;[...new Set(usedIcons)].filter(i => !VALID_ICONS.has(i)).forEach(i =>
    issues.push({ type: 'icon', msg: `unknown icon <${i} />` })
  )

  // Raw hex colors (skip comment lines)
  const noComments = code.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '')
  const hexMatches = [...new Set([...noComments.matchAll(/#[0-9A-Fa-f]{6}\b/g)].map(m => m[0]))]
  hexMatches.forEach(h => issues.push({ type: 'color', msg: `raw color ${h} — use --en-* var` }))

  return { ok: issues.length === 0, issues }
}
