import { useEffect, useRef } from 'react'
import { marked } from 'marked'
import './PreviewPanel.css'

export default function PreviewPanel({ prd, code }) {
  const codeRef = useRef(null)

  useEffect(() => {
    if (codeRef.current && code) {
      codeRef.current.scrollTop = 0
    }
  }, [code])

  if (!prd) {
    return (
      <div className="preview-panel preview-empty">
        <div className="preview-empty-inner">
          <div className="preview-empty-icon">⌘</div>
          <p>Load a PRD to get started</p>
          <span>Select a .md file from your repo</span>
        </div>
      </div>
    )
  }

  if (code) {
    return (
      <div className="preview-panel preview-code">
        <div className="preview-code-header">
          <span>generated component</span>
          <button
            className="preview-copy-btn"
            onClick={() => navigator.clipboard.writeText(code)}
          >
            copy
          </button>
        </div>
        <pre ref={codeRef} className="preview-code-block">
          <code>{code}</code>
        </pre>
      </div>
    )
  }

  return (
    <div className="preview-panel preview-prd">
      <div className="preview-prd-header">
        <span>{prd.name}</span>
      </div>
      <div
        className="preview-prd-body"
        dangerouslySetInnerHTML={{ __html: marked.parse(prd.content) }}
      />
    </div>
  )
}
