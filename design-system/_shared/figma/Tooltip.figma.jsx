import figma from '@figma/code-connect'

// Tooltip component set — node 38:2
figma.connect(
  'https://www.figma.com/design/E5Y5kOJd8KhUlpC4ymmWW0?node-id=38-2',
  {
    props: {
      placement: figma.enum('Placement', {
        Top:    'tooltip--top',
        Bottom: 'tooltip--bottom',
      }),
    },
    example: ({ placement }) => (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {/* trigger element */}
        <div className={`tooltip ${placement}`}>Tooltip text</div>
      </div>
    ),
  }
)
