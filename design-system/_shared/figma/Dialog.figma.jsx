import figma from '@figma/code-connect'

// Dialog component set — node 26:2
figma.connect(
  'https://www.figma.com/design/E5Y5kOJd8KhUlpC4ymmWW0?node-id=26-2',
  {
    props: {
      size: figma.enum('Size', {
        Sm: '',
        Lg: ' lg',
      }),
    },
    example: ({ size }) => (
      <div className="scrim">
        <div className={`dialog${size}`}>
          <div className="dialog-head">
            <div>
              <div className="dialog-title">Dialog title</div>
              <div className="dialog-sub">Supporting text</div>
            </div>
            <button className="btn-icon">✕</button>
          </div>
          <div className="dialog-body">
            {/* dialog content */}
          </div>
          <div className="dialog-foot">
            <button className="btn btn-secondary">Cancel</button>
            <button className="btn btn-primary">Confirm</button>
          </div>
        </div>
      </div>
    ),
  }
)
