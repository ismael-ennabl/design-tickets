import figma from '@figma/code-connect'

// Button (non-icon variants) — node 16:2
figma.connect(
  'https://www.figma.com/design/E5Y5kOJd8KhUlpC4ymmWW0?node-id=16-2',
  {
    props: {
      variant: figma.enum('Variant', {
        Contained: 'btn-primary',
        Outlined:  'btn-secondary',
        Text:      'btn-text',
        Link:      'btn-link',
      }),
      disabled: figma.enum('State', {
        Default:  false,
        Hover:    false,
        Disabled: true,
      }),
    },
    example: ({ variant, disabled }) => (
      <button className={`btn ${variant}`} disabled={disabled}>Label</button>
    ),
  }
)

// Button — Icon variant
figma.connect(
  'https://www.figma.com/design/E5Y5kOJd8KhUlpC4ymmWW0?node-id=16-2',
  {
    variant: { Variant: 'Icon' },
    props: {
      disabled: figma.enum('State', {
        Default:  false,
        Hover:    false,
        Disabled: true,
      }),
    },
    example: ({ disabled }) => (
      <button className="btn-icon" disabled={disabled}>
        {/* icon */}
      </button>
    ),
  }
)
