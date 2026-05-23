import { useState } from 'react';

const Icon = ({ size = 16, children }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);
const IconClose = (p) => <Icon {...p}><path d="M6 18L18 6M6 6l12 12" /></Icon>;

function SaveTemplateDialogDemo({ mode, initialName = '', initialDescription = '', initialDefault = false, initialShared = true, templates = [] }) {
  const [name, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);
  const [isDefault, setIsDefault] = useState(initialDefault);
  const [isShared, setIsShared] = useState(initialShared);

  const title =
    mode === 'edit' ? 'Edit template details' :
    mode === 'fork' ? 'Save as new template' :
    'Save Step 3 as template';
  const subtitle =
    mode === 'edit'
      ? 'Update the name, description, or sharing settings.'
      : 'Save the current Producer Team + Additional Information as a reusable template.';
  const submitLabel = mode === 'edit' ? 'Save changes' : 'Save template';

  const collidingDefault = isDefault && templates.find(t => t.isDefault);
  const canSubmit = name.trim().length > 0;

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'rgba(0,0,0,0.4)' }}>
      <div className="dialog">
        <div className="dialog-head">
          <div>
            <div className="dialog-title">{title}</div>
            <div className="dialog-sub">{subtitle}</div>
          </div>
          <button className="btn-icon"><IconClose size={16} /></button>
        </div>

        <div className="dialog-body">
          <div className="form-row">
            <label htmlFor="t-name">Template name</label>
            <input
              id="t-name"
              className="input"
              placeholder="e.g. Commercial Producers — Mid-Market"
              value={name}
              onChange={e => setName(e.target.value)}
              autoFocus
            />
          </div>

          <div className="form-row">
            <label htmlFor="t-desc">
              Description <span className="muted" style={{ fontWeight: 400 }}>(optional)</span>
            </label>
            <textarea
              id="t-desc"
              className="textarea"
              placeholder="Help teammates pick the right one."
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <div className="toggle-row">
            <div className="meta">
              Share with everyone in your organization
              <span className="help">Everyone can apply this template. Only owners and admins can edit.</span>
            </div>
            <div
              className={`toggle ${isShared ? 'on' : ''}`}
              role="switch"
              aria-checked={isShared}
              onClick={() => setIsShared(s => !s)}
            />
          </div>

          <div className="toggle-row">
            <div className="meta">
              Set as default for new proposals
              <span className="help">Auto-applied to Step 3 whenever you create a new proposal.</span>
            </div>
            <div
              className={`toggle ${isDefault ? 'on' : ''}`}
              role="switch"
              aria-checked={isDefault}
              onClick={() => setIsDefault(s => !s)}
            />
          </div>

          {collidingDefault && (
            <div style={{
              background: 'var(--en-bg-active)',
              border: '1px solid hsla(206,100%,80%,1)',
              borderRadius: 8,
              padding: '8px 12px',
              font: '400 12px/16px var(--en-font-sans)',
              color: 'var(--en-text-tertiary)',
            }}>
              <strong style={{ fontWeight: 600 }}>{collidingDefault.name}</strong> is currently the default. Saving will move the default to this template.
            </div>
          )}
        </div>

        <div className="dialog-foot">
          <button className="btn btn-secondary">Cancel</button>
          <button
            className="btn btn-primary"
            disabled={!canSubmit}
            style={{ opacity: canSubmit ? 1 : 0.5, cursor: canSubmit ? 'pointer' : 'not-allowed' }}
          >
            {submitLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default {
  title: 'Design System/Dialogs/SaveTemplateDialog',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export const CreateMode = {
  name: 'Create — empty (submit disabled)',
  render: () => <SaveTemplateDialogDemo mode="create" />,
};

export const CreateModeWithName = {
  name: 'Create — name entered (submit enabled)',
  render: () => (
    <SaveTemplateDialogDemo
      mode="create"
      initialName="Commercial Producers — Mid-Market"
      initialDescription="Default setup for mid-market commercial accounts."
    />
  ),
};

export const EditMode = {
  name: 'Edit mode',
  render: () => (
    <SaveTemplateDialogDemo
      mode="edit"
      initialName="Specialty Lines — E&O"
      initialDescription="Errors & Omissions producer setup for specialty lines."
      initialShared={true}
    />
  ),
};

export const ForkMode = {
  name: 'Fork mode',
  render: () => (
    <SaveTemplateDialogDemo
      mode="fork"
      initialName="Specialty Lines — E&O (copy)"
    />
  ),
};

export const WithDefaultCollision = {
  name: 'Default collision warning',
  render: () => (
    <SaveTemplateDialogDemo
      mode="create"
      initialName="My New Default Template"
      initialDefault={true}
      templates={[{ id: 'tmpl-1', name: 'Commercial Producers — Mid-Market', isDefault: true }]}
    />
  ),
};

export const PrivateTemplate = {
  name: 'Private (shared off)',
  render: () => (
    <SaveTemplateDialogDemo
      mode="create"
      initialName="My Draft Template"
      initialDescription="Personal draft — not ready to share."
      initialShared={false}
    />
  ),
};
