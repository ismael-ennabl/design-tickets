// Tooltip — dark contextual tooltip shown on hover

// @component Tooltip
// @description Dark tooltip shown on hover. Wrap any element — no positioning needed.
// @example
// <Tooltip label="Download report" position="top">
//   <Button variant="icon"><IconDownload size={16} /></Button>
// </Tooltip>
//
// <Tooltip label="GWP" description="Gross Written Premium for the policy year" position="bottom">
//   <span className="en-body2">GWP</span>
// </Tooltip>
// @props
// label        string — bold heading (required to show tooltip)
// description  string (optional) — secondary line below the label
// position     'top'|'bottom'|'left'|'right' — default 'top'
// @end
// label:       string — bold heading (required)
// description: string — secondary text (optional)
// position:    'top' | 'bottom' | 'left' | 'right' (default 'top')
function Tooltip({ label, description, position = 'top', children, className = '' }) {
  const { useState } = React
  const [visible, setVisible] = useState(false)

  return (
    <>
      <style>{`
        .tt-root { position: relative; display: inline-flex; align-items: center; }
        .tt-box {
          position: absolute; z-index: 300;
          background: var(--en-black); color: var(--en-white);
          border-radius: var(--en-radius-regular); padding: 6px 10px;
          box-shadow: var(--en-shadow-tooltip); pointer-events: none;
          white-space: nowrap; box-sizing: border-box;
          animation: tt-in 120ms ease forwards;
        }
        @keyframes tt-in { from { opacity: 0; transform: translateY(3px); } to { opacity: 1; transform: translateY(0); } }
        .tt-top    { bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%); }
        .tt-bottom { top: calc(100% + 8px);    left: 50%; transform: translateX(-50%); }
        .tt-left   { right: calc(100% + 8px);  top: 50%;  transform: translateY(-50%); }
        .tt-right  { left: calc(100% + 8px);   top: 50%;  transform: translateY(-50%); }
        .tt-arrow {
          position: absolute; width: 8px; height: 8px;
          background: var(--en-black); transform: rotate(45deg);
        }
        .tt-top    .tt-arrow { bottom: -4px; left: 50%; margin-left: -4px; }
        .tt-bottom .tt-arrow { top: -4px;    left: 50%; margin-left: -4px; }
        .tt-left   .tt-arrow { right: -4px;  top: 50%;  margin-top: -4px; }
        .tt-right  .tt-arrow { left: -4px;   top: 50%;  margin-top: -4px; }
        .tt-label { font: 700 12px/16px var(--en-font-sans); display: block; }
        .tt-desc  { font: 400 12px/16px var(--en-font-sans); display: block; margin-top: 2px; opacity: 0.75; }
      `}</style>
      <div
        className={`tt-root ${className}`}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
      >
        {children}
        {visible && label && (
          <div className={`tt-box tt-${position}`}>
            <span className="tt-arrow" />
            <span className="tt-label">{label}</span>
            {description && <span className="tt-desc">{description}</span>}
          </div>
        )}
      </div>
    </>
  )
}
