// Avatar — initials circle with sm / md / lg sizes

// @component Avatar
// @description Initials circle with 3 sizes. Defaults to purple (--en-data-accounts).
// @example
// <Avatar name="Ismael Viejo" size="md" />
// <Avatar name="John" size="sm" />
// <Avatar name="Alice" size="lg" color="var(--en-primary)" />
// @props
// name   string — split into initials (max 2 chars)
// size   'sm' (24px) | 'md' (32px) | 'lg' (40px) — default 'md'
// color  CSS color string — defaults to var(--en-data-accounts)
// @end
// size: 'sm' (24px) | 'md' (32px) | 'lg' (40px)
// color: optional CSS color string; defaults to --en-data-accounts (purple)
function Avatar({ name = '', size = 'md', color, className = '', style: extraStyle = {} }) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('') || '?'

  const dim   = { sm: 24, md: 32, lg: 40 }[size] || 32
  const fs    = { sm: 9,  md: 12, lg: 14 }[size] || 12
  const bg    = color || 'var(--en-data-accounts)'

  return (
    <>
      <style>{`
        .av-root {
          display: inline-flex; align-items: center; justify-content: center;
          border-radius: 50%; flex-shrink: 0;
          font-family: var(--en-font-sans); font-weight: 700;
          color: var(--en-white); user-select: none; box-sizing: border-box;
        }
      `}</style>
      <div
        className={`av-root ${className}`}
        style={{ width: dim, height: dim, background: bg, fontSize: fs, ...extraStyle }}
        title={name}
      >
        {initials}
      </div>
    </>
  )
}
