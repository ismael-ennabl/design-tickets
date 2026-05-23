import figma from '@figma/code-connect'

// Input (text) — node 19:2
figma.connect(
  'https://www.figma.com/design/E5Y5kOJd8KhUlpC4ymmWW0?node-id=19-2',
  {
    variant: { Type: 'Text' },
    props: {
      disabled: figma.enum('State', {
        Default:  false,
        Focused:  false,
        Error:    false,
        Disabled: true,
        Filled:   false,
      }),
      hasError: figma.enum('State', {
        Default:  false,
        Focused:  false,
        Error:    true,
        Disabled: false,
        Filled:   false,
      }),
    },
    example: ({ disabled, hasError }) => (
      <div className="form-row">
        <label className="field-label">Label</label>
        <input className={`input${hasError ? ' error' : ''}`} disabled={disabled} />
      </div>
    ),
  }
)

// Input (textarea) — node 19:2
figma.connect(
  'https://www.figma.com/design/E5Y5kOJd8KhUlpC4ymmWW0?node-id=19-2',
  {
    variant: { Type: 'Textarea' },
    props: {
      disabled: figma.enum('State', {
        Default:  false,
        Focused:  false,
        Error:    false,
        Disabled: true,
        Filled:   false,
      }),
      hasError: figma.enum('State', {
        Default:  false,
        Focused:  false,
        Error:    true,
        Disabled: false,
        Filled:   false,
      }),
    },
    example: ({ disabled, hasError }) => (
      <div className="form-row">
        <label className="field-label">Label</label>
        <textarea className={`textarea${hasError ? ' error' : ''}`} disabled={disabled} rows={3} />
      </div>
    ),
  }
)
