import './FigmaTab.css'

export default function FigmaTab({ entries }) {
  return (
    <div className="figma-tab">
      <div className="figma-coming">
        <div className="figma-icon">◈</div>
        <p>Figma sync</p>
        <span>
          Will push each generated component into your Figma file as a frame —
          auto-named by PRD and iteration, grouped in a dedicated page.
          Requires a Figma access token.
        </span>
        <div className="figma-queue">
          {entries.length > 0 ? (
            <>
              <span className="figma-queue-label">{entries.length} snapshot{entries.length !== 1 ? 's' : ''} queued</span>
              <button className="figma-btn" disabled>Connect Figma to push</button>
            </>
          ) : (
            <span className="figma-queue-label">Generate a UI first</span>
          )}
        </div>
      </div>
    </div>
  )
}
