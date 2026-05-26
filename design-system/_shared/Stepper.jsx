// Stepper — horizontal multi-step progress indicator

// @component Stepper
// @description Horizontal multi-step progress indicator. Connecting lines fill as steps complete.
// @example
// <Stepper steps={[
//   { label: 'Policy details', status: 'completed' },
//   { label: 'Coverage',       status: 'active' },
//   { label: 'Review',         status: 'upcoming' },
//   { label: 'Confirm',        status: 'upcoming' },
// ]} />
// @props
// steps  array of { label: string, status: 'completed'|'active'|'upcoming' }
// @end
// steps: [{ label: string, status: 'completed' | 'active' | 'upcoming' }]
function Stepper({ steps = [], className = '' }) {
  return (
    <>
      <style>{`
        .stp-root { display: flex; align-items: flex-start; box-sizing: border-box; }
        .stp-step {
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          flex: 1; position: relative; min-width: 0;
        }
        .stp-step:not(:last-child)::after {
          content: ''; position: absolute;
          top: 14px; left: calc(50% + 16px);
          width: calc(100% - 32px); height: 1.5px;
          background: var(--en-divider);
        }
        .stp-step.stp-completed:not(:last-child)::after { background: var(--en-primary); }
        .stp-icon {
          width: 28px; height: 28px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; box-sizing: border-box;
          font: 700 12px/1 var(--en-font-sans); z-index: 1;
          background: var(--en-bg);
        }
        .stp-completed .stp-icon { background: var(--en-primary); color: var(--en-white); }
        .stp-active    .stp-icon { background: var(--en-primary); color: var(--en-white); }
        .stp-upcoming  .stp-icon { border: 1.5px solid var(--en-border); color: var(--en-fg-disabled); }
        .stp-label {
          font: 400 12px/16px var(--en-font-sans); color: var(--en-fg-secondary);
          text-align: center; white-space: nowrap;
        }
        .stp-active .stp-label { font-weight: 700; color: var(--en-fg); }
      `}</style>
      <div className={`stp-root ${className}`}>
        {steps.map((step, i) => (
          <div key={i} className={`stp-step stp-${step.status || 'upcoming'}`}>
            <div className="stp-icon">
              {step.status === 'completed'
                ? <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34Z"/></svg>
                : i + 1}
            </div>
            <span className="stp-label">{step.label}</span>
          </div>
        ))}
      </div>
    </>
  )
}
