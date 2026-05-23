const Icon = ({ size = 16, children }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);
const IconClose = (p) => <Icon {...p}><path d="M6 18L18 6M6 6l12 12" /></Icon>;

function shortDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function UpdateTemplateDialogDemo({ template, summary }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'rgba(0,0,0,0.4)' }}>
      <div className="dialog" style={{ maxWidth: 520 }}>
        <div className="dialog-head">
          <div>
            <div className="dialog-title">Save changes to "{template.name}"?</div>
            <ul className="dialog-sub" style={{ margin: '6px 0 0', paddingLeft: 18 }}>
              <li>
                This will be updated for everyone. Last updated {shortDate(template.updatedAt)} by {template.owner.name}.
              </li>
              {template.usageCount > 0 && (
                <li>
                  Applied to {template.usageCount.toLocaleString()} proposal{template.usageCount === 1 ? '' : 's'}. Existing proposals won't be retroactively changed.
                </li>
              )}
            </ul>
          </div>
          <button className="btn-icon"><IconClose size={16} /></button>
        </div>

        <div className="dialog-body">
          <div style={{
            background: 'var(--en-bg-grey)',
            border: '1px solid var(--en-divider)',
            borderRadius: 8,
            padding: '10px 14px',
            font: '400 13px/20px var(--en-font-sans)',
            color: 'var(--en-fg)',
          }}>
            <div style={{
              font: '500 12px/16px var(--en-font-sans)',
              letterSpacing: '0.4px',
              textTransform: 'uppercase',
              color: 'var(--en-fg-secondary)',
              marginBottom: 6,
            }}>
              Changes in this proposal
            </div>
            {summary.length === 0
              ? <div className="muted">No changes detected.</div>
              : (
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {summary.map((s, i) => <li key={i} style={{ marginBottom: 2 }}>{s}</li>)}
                </ul>
              )
            }
          </div>
        </div>

        <div className="dialog-foot">
          <button className="btn btn-secondary">Cancel</button>
          <button className="btn btn-text">Save as new instead</button>
          <button className="btn btn-primary">Update template</button>
        </div>
      </div>
    </div>
  );
}

const TEMPLATE = {
  name: 'Commercial Producers — Mid-Market',
  updatedAt: '2025-12-01',
  owner: { name: 'Maria Chen' },
  usageCount: 47,
};

export default {
  title: 'Design System/Dialogs/UpdateTemplateDialog',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export const WithChanges = {
  name: 'With changes summary',
  render: () => (
    <UpdateTemplateDialogDemo
      template={TEMPLATE}
      summary={[
        'Added 2 producers to National Accounts team',
        'Removed Ryan Peters from Regional team',
        'Updated broker compensation to 12%',
      ]}
    />
  ),
};

export const NoChanges = {
  name: 'No changes detected',
  render: () => (
    <UpdateTemplateDialogDemo
      template={TEMPLATE}
      summary={[]}
    />
  ),
};

export const SingleProposal = {
  name: 'Used in 1 proposal (singular copy)',
  render: () => (
    <UpdateTemplateDialogDemo
      template={{ ...TEMPLATE, usageCount: 1 }}
      summary={['Changed primary producer to Sarah Johnson']}
    />
  ),
};
