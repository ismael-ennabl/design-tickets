import figma from '@figma/code-connect'

// Step (completed) — node 44:14
figma.connect(
  'https://www.figma.com/design/E5Y5kOJd8KhUlpC4ymmWW0?node-id=44-14',
  {
    variant: { State: 'Completed' },
    example: () => (
      <div className="step-card">
        <div className="step-header">
          <div className="step-header-left">
            <span className="step-check">✓</span>
            <span className="step-title">Step title</span>
          </div>
        </div>
      </div>
    ),
  }
)

// Step (active) — node 44:14
figma.connect(
  'https://www.figma.com/design/E5Y5kOJd8KhUlpC4ymmWW0?node-id=44-14',
  {
    variant: { State: 'Active' },
    example: () => (
      <div className="step-card">
        <div className="step-header">
          <div className="step-header-left">
            <span className="step-title">Step title</span>
          </div>
        </div>
      </div>
    ),
  }
)

// Step (pending) — node 44:14
figma.connect(
  'https://www.figma.com/design/E5Y5kOJd8KhUlpC4ymmWW0?node-id=44-14',
  {
    variant: { State: 'Pending' },
    example: () => (
      <div className="step-card step-card--pending">
        <div className="step-header">
          <div className="step-header-left">
            <span className="step-title">Step title</span>
          </div>
        </div>
      </div>
    ),
  }
)
