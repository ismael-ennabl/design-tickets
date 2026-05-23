import figma from '@figma/code-connect'

// Select component set — node 39:28
figma.connect(
  'https://www.figma.com/design/E5Y5kOJd8KhUlpC4ymmWW0?node-id=39-28',
  {
    props: {
      disabled: figma.enum('State', {
        Default:  false,
        Focused:  false,
        Open:     false,
        Disabled: true,
        Filled:   false,
      }),
      hasError: figma.enum('State', {
        Default:  false,
        Focused:  false,
        Open:     false,
        Disabled: false,
        Filled:   false,
      }),
    },
    example: ({ disabled, hasError }) => (
      <div className="form-row">
        <label className="field-label">Label</label>
        <select className={`input${hasError ? ' error' : ''}`} disabled={disabled}>
          <option value="">Select…</option>
        </select>
      </div>
    ),
  }
)
