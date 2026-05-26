import figma from '@figma/code-connect'

// Badge — node 22:12
figma.connect(
  'https://www.figma.com/design/E5Y5kOJd8KhUlpC4ymmWW0?node-id=22-12',
  {
    props: {
      variant: figma.enum('Color', {
        Neutral: 'default',
        Primary: 'primary',
        Success: 'success',
        Error:   'error',
        Warning: 'warning',
      }),
    },
    example: ({ variant }) => (
      <Badge variant={variant}>Label</Badge>
    ),
  }
)

// Avatar — node 22:19
figma.connect(
  'https://www.figma.com/design/E5Y5kOJd8KhUlpC4ymmWW0?node-id=22-19',
  {
    props: {
      size: figma.enum('Size', {
        Sm: 'sm',
        Md: 'md',
        Lg: 'lg',
      }),
    },
    example: ({ size }) => (
      <Avatar name="John Doe" size={size} />
    ),
  }
)
