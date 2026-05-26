import figma from '@figma/code-connect'

// Toggle — node 21:2
figma.connect(
  'https://www.figma.com/design/E5Y5kOJd8KhUlpC4ymmWW0?node-id=21-2',
  {
    props: {
      defaultChecked: figma.enum('Checked', {
        On:  true,
        Off: false,
      }),
      disabled: figma.enum('State', {
        Default:  false,
        Hover:    false,
        Disabled: true,
      }),
    },
    example: ({ defaultChecked, disabled }) => (
      <Toggle defaultChecked={defaultChecked} disabled={disabled} label="Label" onChange={val => {}} />
    ),
  }
)
