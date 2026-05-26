// Toggle — animated on/off switch with label

// @component Toggle
// @description Animated on/off switch. Supports controlled and uncontrolled usage.
// @example
// <Toggle label="Notifications" />
// <Toggle defaultChecked label="Dark mode" />
// <Toggle checked={on} onChange={setOn} label="Feature flag" />
// <Toggle disabled label="Locked" />
// @props
// checked         boolean — controlled value
// defaultChecked  boolean — initial value when uncontrolled
// onChange        (value: boolean) => void
// label           string — shown to the right of the switch
// disabled        boolean
// @end
function Toggle({ checked, defaultChecked = false, onChange, disabled, label, id }) {
  const { useState } = React
  const [internalOn, setInternalOn] = useState(defaultChecked)
  const isControlled = checked !== undefined
  const isOn = isControlled ? checked : internalOn

  function handleToggle() {
    if (disabled) return
    const next = !isOn
    if (!isControlled) setInternalOn(next)
    onChange && onChange(next)
  }

  return (
    <>
      <style>{`
        .tgl-root {
          display: inline-flex; align-items: center; gap: 8px;
          cursor: pointer; user-select: none; box-sizing: border-box;
        }
        .tgl-root.tgl-disabled { cursor: not-allowed; opacity: 0.38; }
        .tgl-track {
          position: relative; width: 40px; height: 22px; border-radius: 11px;
          background: var(--en-bg-empty);
          transition: background 200ms cubic-bezier(0.4, 0, 0.2, 1);
          flex-shrink: 0;
        }
        .tgl-root:not(.tgl-disabled):hover .tgl-track { background: var(--en-bg-dark-grey); }
        .tgl-root.tgl-on .tgl-track { background: var(--en-primary); }
        .tgl-root.tgl-on:not(.tgl-disabled):hover .tgl-track { background: var(--en-primary-light); }
        .tgl-thumb {
          position: absolute; top: 3px; left: 3px; width: 16px; height: 16px;
          border-radius: 50%; background: var(--en-white);
          box-shadow: 0 1px 3px rgba(0,0,0,0.25);
          transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .tgl-root.tgl-on .tgl-thumb { transform: translateX(18px); }
        .tgl-label { font: 400 14px/20px var(--en-font-sans); color: var(--en-fg); }
      `}</style>
      <div
        className={`tgl-root${isOn ? ' tgl-on' : ''}${disabled ? ' tgl-disabled' : ''}`}
        onClick={handleToggle}
        role="switch"
        aria-checked={isOn}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={e => (e.key === ' ' || e.key === 'Enter') && (e.preventDefault(), handleToggle())}
        id={id}
      >
        <div className="tgl-track">
          <div className="tgl-thumb" />
        </div>
        {label && <span className="tgl-label">{label}</span>}
      </div>
    </>
  )
}
