import figma from '@figma/code-connect'

// Chip (default / hover) — node 36:2
figma.connect(
  'https://www.figma.com/design/E5Y5kOJd8KhUlpC4ymmWW0?node-id=36-2',
  {
    variant: { Variant: 'Default' },
    props: {
      color: figma.enum('Color', {
        Neutral: 'chip--neutral',
        Primary: 'chip--primary',
        Success: 'chip--success',
        Error:   'chip--error',
        Warning: 'chip--warning',
      }),
    },
    example: ({ color }) => (
      <span className={`chip ${color}`}>Label</span>
    ),
  }
)

figma.connect(
  'https://www.figma.com/design/E5Y5kOJd8KhUlpC4ymmWW0?node-id=36-2',
  {
    variant: { Variant: 'Hover' },
    props: {
      color: figma.enum('Color', {
        Neutral: 'chip--neutral',
        Primary: 'chip--primary',
        Success: 'chip--success',
        Error:   'chip--error',
        Warning: 'chip--warning',
      }),
    },
    example: ({ color }) => (
      <span className={`chip ${color}`}>Label</span>
    ),
  }
)

// Chip (deletable) — node 36:2
figma.connect(
  'https://www.figma.com/design/E5Y5kOJd8KhUlpC4ymmWW0?node-id=36-2',
  {
    variant: { Variant: 'Deletable' },
    props: {
      color: figma.enum('Color', {
        Neutral: 'chip--neutral',
        Primary: 'chip--primary',
        Success: 'chip--success',
        Error:   'chip--error',
        Warning: 'chip--warning',
      }),
    },
    example: ({ color }) => (
      <span className={`chip ${color}`}>
        Label
        <button className="chip-delete" aria-label="Remove">✕</button>
      </span>
    ),
  }
)
