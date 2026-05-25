import React, { useState } from 'react';

const checkIcon = <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34Z"/></svg>;

const STP_CSS = `
  .stp-root{display:flex;align-items:flex-start;box-sizing:border-box;}
  .stp-step{display:flex;flex-direction:column;align-items:center;gap:8px;flex:1;position:relative;min-width:0;}
  .stp-step:not(:last-child)::after{content:'';position:absolute;top:14px;left:calc(50% + 16px);width:calc(100% - 32px);height:1.5px;background:var(--en-divider);}
  .stp-step.stp-completed:not(:last-child)::after{background:var(--en-primary);}
  .stp-icon{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-sizing:border-box;font:700 12px/1 var(--en-font-sans);z-index:1;background:var(--en-bg);}
  .stp-completed .stp-icon,.stp-active .stp-icon{background:var(--en-primary);color:#fff;}
  .stp-upcoming .stp-icon{border:1.5px solid var(--en-border);color:var(--en-fg-disabled);}
  .stp-label{font:400 12px/16px var(--en-font-sans);color:var(--en-fg-secondary);text-align:center;white-space:nowrap;}
  .stp-active .stp-label{font-weight:700;color:var(--en-fg);}
`;

function Stepper({ steps = [] }) {
  return (
    <div className="stp-root">
      {steps.map((step, i) => (
        <div key={i} className={`stp-step stp-${step.status || 'upcoming'}`}>
          <div className="stp-icon">
            {step.status === 'completed' ? checkIcon : i + 1}
          </div>
          <span className="stp-label">{step.label}</span>
        </div>
      ))}
    </div>
  );
}

function InteractiveStepper() {
  const [activeStep, setActiveStep] = useState(1);
  const labels = ['Policy details', 'Coverage', 'Review', 'Confirm'];
  const steps = labels.map((label, i) => ({
    label,
    status: i < activeStep ? 'completed' : i === activeStep ? 'active' : 'upcoming',
  }));

  const btnStyle = { padding: '6px 14px', borderRadius: 8, border: 'none', cursor: 'pointer', fontFamily: 'var(--en-font-sans)', fontSize: 13 };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Stepper steps={steps} />
      <div style={{ display: 'flex', gap: 8 }}>
        <button disabled={activeStep === 0} onClick={() => setActiveStep(s => s - 1)} style={{ ...btnStyle, background: 'var(--en-bg)', border: '1.5px solid var(--en-border)', color: 'var(--en-fg)', opacity: activeStep === 0 ? 0.4 : 1 }}>Back</button>
        <button disabled={activeStep === labels.length - 1} onClick={() => setActiveStep(s => s + 1)} style={{ ...btnStyle, background: 'var(--en-primary)', color: '#fff', opacity: activeStep === labels.length - 1 ? 0.4 : 1 }}>Next</button>
      </div>
    </div>
  );
}

function Demo() {
  return (
    <div style={{ padding: 32, background: 'var(--en-bg-grey)', minHeight: '100vh' }}>
      <style>{STP_CSS}</style>
      <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--en-fg-secondary)', marginBottom: 24 }}>Stepper</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 40, maxWidth: 600 }}>
        <div>
          <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 12, color: 'var(--en-fg-secondary)', marginBottom: 16 }}>Step 1 active</p>
          <Stepper steps={[{ label: 'Completed', status: 'completed' }, { label: 'In Progress', status: 'active' }, { label: 'Upcoming', status: 'upcoming' }]} />
        </div>
        <div>
          <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 12, color: 'var(--en-fg-secondary)', marginBottom: 16 }}>All completed</p>
          <Stepper steps={[{ label: 'Policy details', status: 'completed' }, { label: 'Coverage', status: 'completed' }, { label: 'Review', status: 'completed' }, { label: 'Confirmed', status: 'completed' }]} />
        </div>
        <div>
          <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 12, color: 'var(--en-fg-secondary)', marginBottom: 16 }}>Interactive</p>
          <InteractiveStepper />
        </div>
      </div>
    </div>
  );
}

export default {
  title: 'Design System/UI Primitives/Stepper',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export const AllVariants = { render: () => <Demo /> };
