import { useState, useRef } from 'react'
import './PrdEditor.css'

export default function PrdEditor({ prd, projectId, onClose, onSave }) {
  const [title, setTitle] = useState(prd?.title ?? '')
  const [content, setContent] = useState(prd?.content ?? '')
  const fileRef = useRef()

  function handleFile(e) {
    const file = e.target.files[0]
    if (!file) return
    const name = file.name.replace(/\.md$/i, '').replace(/[-_]/g, ' ')
    const reader = new FileReader()
    reader.onload = ev => {
      if (!title) setTitle(name)
      setContent(ev.target.result)
    }
    reader.readAsText(file)
  }

  function handleSave() {
    const t = title.trim()
    if (!t) return
    onSave({ title: t, content })
  }

  return (
    <div className="prd-editor-scrim" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="prd-editor-modal">
        <div className="prd-editor-header">
          <span className="prd-editor-title">{prd ? 'Edit PRD' : 'New PRD'}</span>
          <button className="prd-editor-close" onClick={onClose}>✕</button>
        </div>

        <div className="prd-editor-body">
          <div className="prd-editor-field">
            <label className="prd-editor-label">Title</label>
            <input
              className="prd-editor-input"
              type="text"
              placeholder="e.g. Producer Filter Modal"
              value={title}
              onChange={e => setTitle(e.target.value)}
              autoFocus
            />
          </div>

          <div className="prd-editor-field prd-editor-field--grow">
            <div className="prd-editor-label-row">
              <label className="prd-editor-label">Content</label>
              <button
                className="prd-editor-load-file"
                onClick={() => fileRef.current.click()}
              >
                Load from .md file
              </button>
              <input
                ref={fileRef}
                type="file"
                accept=".md,.txt"
                style={{ display: 'none' }}
                onChange={handleFile}
              />
            </div>
            <textarea
              className="prd-editor-textarea"
              placeholder="Paste your PRD markdown here…"
              value={content}
              onChange={e => setContent(e.target.value)}
            />
          </div>
        </div>

        <div className="prd-editor-footer">
          <button className="prd-editor-btn prd-editor-btn--cancel" onClick={onClose}>Cancel</button>
          <button
            className="prd-editor-btn prd-editor-btn--save"
            onClick={handleSave}
            disabled={!title.trim()}
          >
            {prd ? 'Save changes' : 'Create PRD'}
          </button>
        </div>
      </div>
    </div>
  )
}
