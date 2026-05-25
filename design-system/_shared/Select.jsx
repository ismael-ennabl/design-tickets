// Select — dropdown field with label, states, and option list

// options: string[] | { value, label }[]
// value / onChange — controlled; omit for uncontrolled
function Select({ label, options = [], error, disabled, placeholder = 'Select option...', value, onChange, className = '' }) {
  const { useState, useRef, useEffect } = React
  const [open,     setOpen]     = useState(false)
  const [internal, setInternal] = useState('')
  const ref = useRef(null)

  const isControlled  = value !== undefined
  const currentValue  = isControlled ? value : internal

  const currentOption = options.find(o => (typeof o === 'object' ? o.value : o) === currentValue)
  const displayLabel  = currentValue
    ? (typeof currentOption === 'object' ? currentOption?.label : currentOption) || currentValue
    : placeholder

  useEffect(() => {
    function onClick(e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  function handleSelect(opt) {
    const val = typeof opt === 'object' ? opt.value : opt
    if (!isControlled) setInternal(val)
    setOpen(false)
    onChange && onChange(val)
  }

  return (
    <>
      <style>{`
        .sel-wrapper { position: relative; display: flex; flex-direction: column; gap: 4px; box-sizing: border-box; }
        .sel-label { font: 400 12px/16px var(--en-font-sans); color: var(--en-fg-secondary); }
        .sel-label--focused { color: var(--en-primary); }
        .sel-trigger {
          display: flex; align-items: center; gap: 8px; padding: 0 12px; height: 36px;
          background: var(--en-bg); border: 1.5px solid var(--en-border);
          border-radius: var(--en-radius-regular); cursor: pointer;
          box-sizing: border-box; user-select: none;
          transition: border-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .sel-trigger:hover:not(.sel-trigger--disabled) { border-color: var(--en-primary); }
        .sel-trigger:focus { outline: none; border-color: var(--en-primary); }
        .sel-trigger--open { border-color: var(--en-primary); }
        .sel-trigger--error { border-color: var(--en-error); }
        .sel-trigger--disabled { background: var(--en-bg-dark-grey); cursor: not-allowed; opacity: 0.55; }
        .sel-value { flex: 1; font: 400 14px/20px var(--en-font-sans); color: var(--en-fg); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .sel-value--placeholder { color: var(--en-fg-disabled); }
        .sel-chevron { flex-shrink: 0; color: var(--en-icon-secondary); transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1); }
        .sel-chevron--open { transform: rotate(180deg); }
        .sel-dropdown {
          position: absolute; top: calc(100% + 4px); left: 0; right: 0; z-index: 200;
          background: var(--en-bg); border-radius: var(--en-radius-regular);
          box-shadow: var(--en-shadow-menu); overflow-y: auto; max-height: 240px; padding: 4px 0;
        }
        .sel-option {
          padding: 8px 12px; font: 400 14px/20px var(--en-font-sans); color: var(--en-fg);
          cursor: pointer; transition: background 150ms;
        }
        .sel-option:hover { background: var(--en-bg-hover); }
        .sel-option--active { color: var(--en-primary); background: var(--en-outlined-hover); }
      `}</style>
      <div className={`sel-wrapper ${className}`} ref={ref}>
        {label && (
          <label className={`sel-label${open ? ' sel-label--focused' : ''}`}>{label}</label>
        )}
        <div
          className={`sel-trigger${open ? ' sel-trigger--open' : ''}${error ? ' sel-trigger--error' : ''}${disabled ? ' sel-trigger--disabled' : ''}`}
          onClick={() => !disabled && setOpen(o => !o)}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={e => {
            if (disabled) return
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(o => !o) }
            if (e.key === 'Escape') setOpen(false)
          }}
        >
          <span className={`sel-value${!currentValue ? ' sel-value--placeholder' : ''}`}>{displayLabel}</span>
          <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" className={`sel-chevron${open ? ' sel-chevron--open' : ''}`}>
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/>
          </svg>
        </div>
        {error && <span className="form-error">{error}</span>}
        {open && !disabled && (
          <div className="sel-dropdown">
            {options.map((opt, i) => {
              const val = typeof opt === 'object' ? opt.value : opt
              const lbl = typeof opt === 'object' ? opt.label : opt
              return (
                <div
                  key={i}
                  className={`sel-option${val === currentValue ? ' sel-option--active' : ''}`}
                  onMouseDown={e => { e.preventDefault(); handleSelect(opt) }}
                >
                  {lbl}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}
