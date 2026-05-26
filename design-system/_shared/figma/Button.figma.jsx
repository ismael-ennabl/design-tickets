import figma from '@figma/code-connect'

// Button — node 16:2
figma.connect(
  'https://www.figma.com/design/E5Y5kOJd8KhUlpC4ymmWW0?node-id=16-2',
  {
    props: {
      variant: figma.enum('Variant', {
        Contained: 'primary',
        Outlined:  'secondary',
        Text:      'text',
        Link:      'link',
      }),
      disabled: figma.enum('State', {
        Default:  false,
        Hover:    false,
        Disabled: true,
      }),
    },
    example: ({ variant, disabled }) => (
      <Button variant={variant} disabled={disabled}>Label</Button>
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
      <Button variant="icon" disabled={disabled}>
        <IconEdit size={16} />
      </Button>
    ),
  }
)
