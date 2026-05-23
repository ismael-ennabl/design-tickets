import figma from '@figma/code-connect'

// Badge component set — node 22:12
figma.connect(
  'https://www.figma.com/design/E5Y5kOJd8KhUlpC4ymmWW0?node-id=22-12',
  {
    props: {
      color: figma.enum('Color', {
        Neutral: 'badge--neutral',
        Primary: 'badge--primary',
        Success: 'badge--success',
        Error:   'badge--error',
        Warning: 'badge--warning',
      }),
    },
    example: ({ color }) => (
      <span className={`badge ${color}`}>Label</span>
    ),
  }
)

// Avatar component set — node 22:19
figma.connect(
  'https://www.figma.com/design/E5Y5kOJd8KhUlpC4ymmWW0?node-id=22-19',
  {
    props: {
      size: figma.enum('Size', {
        Sm: 'avatar--sm',
        Md: 'avatar--md',
        Lg: 'avatar--lg',
      }),
    },
    example: ({ size }) => (
      <span className={`avatar ${size}`}>AB</span>
    ),
  }
)
