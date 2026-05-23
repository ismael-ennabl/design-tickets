import figma from '@figma/code-connect'

// Toggle component set — node 21:2
figma.connect(
  'https://www.figma.com/design/E5Y5kOJd8KhUlpC4ymmWW0?node-id=21-2',
  {
    props: {
      checked: figma.enum('Checked', {
        On:  true,
        Off: false,
      }),
      disabled: figma.enum('State', {
        Default:  false,
        Hover:    false,
        Disabled: true,
      }),
    },
    example: ({ checked, disabled }) => (
      <label className="toggle">
        <input type="checkbox" checked={checked} disabled={disabled} onChange={() => {}} />
        <span className="toggle-track" />
      </label>
    ),
  }
)
