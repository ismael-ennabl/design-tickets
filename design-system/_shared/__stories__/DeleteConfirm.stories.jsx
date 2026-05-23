const Icon = ({ size = 16, children }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);
const IconClose = (p) => <Icon {...p}><path d="M6 18L18 6M6 6l12 12" /></Icon>;

function DeleteConfirmDemo({ template }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'rgba(0,0,0,0.4)' }}>
      <div className="dialog" style={{ maxWidth: 440 }}>
        <div className="dialog-head">
          <div>
            <div className="dialog-title">Delete "{template.name}"?</div>
            <div className="dialog-sub">
              This template will no longer be available to anyone in your organization.
              {template.usageCount > 0 && (
                ` Existing proposals (${template.usageCount.toLocaleString()}) that used it won't be affected.`
              )}
            </div>
          </div>
          <button className="btn-icon"><IconClose size={16} /></button>
        </div>
        <div className="dialog-foot">
          <button className="btn btn-secondary">Cancel</button>
          <button className="btn btn-primary" style={{ background: 'var(--en-error-dark)' }}>
            Delete template
          </button>
        </div>
      </div>
    </div>
  );
}

export default {
  title: 'Design System/Dialogs/DeleteConfirm',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export const WithUsageCount = {
  name: 'Template used in proposals',
  render: () => (
    <DeleteConfirmDemo
      template={{
        name: 'Commercial Producers — Mid-Market',
        usageCount: 47,
      }}
    />
  ),
};

export const ZeroUsage = {
  name: 'Template never used',
  render: () => (
    <DeleteConfirmDemo
      template={{
        name: 'My Private Draft',
        usageCount: 0,
      }}
    />
  ),
};

export const LongName = {
  name: 'Long template name',
  render: () => (
    <DeleteConfirmDemo
      template={{
        name: 'Large Account — Complex Risk with Multi-Layer Placement and Specialty Endorsements',
        usageCount: 3,
      }}
    />
  ),
};
