import { useState } from 'react'
import { downloadJsx } from '../lib/history'
import './StorybookTab.css'

function timeAgo(ts) {
  const m = Math.floor((Date.now() - new Date(ts)) / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  return `${Math.floor(h / 24)}d ago`
}

function snippet(code) {
  return code.split('\n').slice(0, 3).join('\n').slice(0, 140)
}

export default function StorybookTab({ entries, onClear }) {
  const [copied, setCopied] = useState(null)

  function copy(entry) {
    navigator.clipboard.writeText(entry.code)
    setCopied(entry.id)
    setTimeout(() => setCopied(null), 2000)
  }

  if (entries.length === 0) {
    return (
      <div className="sb-empty">
        <p>No components yet</p>
        <span>Each generated UI is logged here. Download or copy the JSX to use in your codebase.</span>
      </div>
    )
  }

  return (
    <div className="sb-tab">
      <div className="sb-toolbar">
        <span className="sb-count">{entries.length} snapshot{entries.length !== 1 ? 's' : ''}</span>
        <button className="sb-clear" onClick={onClear}>clear all</button>
      </div>
      <div className="sb-list">
        {entries.map(entry => (
          <div key={entry.id} className="sb-entry">
            <div className="sb-entry-top">
              <span className="sb-entry-name">{entry.prdName.replace(/\.md$/i, '')}</span>
              <span className="sb-entry-badge">v{entry.iteration}</span>
              <span className="sb-entry-time">{timeAgo(entry.timestamp)}</span>
            </div>
            <pre className="sb-entry-code">{snippet(entry.code)}</pre>
            <div className="sb-entry-actions">
              <button className="sb-btn" onClick={() => copy(entry)}>
                {copied === entry.id ? '✓ copied' : 'copy'}
              </button>
              <button className="sb-btn sb-btn--primary" onClick={() => downloadJsx(entry)}>
                ↓ .jsx
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
