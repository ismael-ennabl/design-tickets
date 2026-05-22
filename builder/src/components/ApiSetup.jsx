import { useState } from 'react'
import { setApiKey } from '../lib/apiKey'
import './ApiSetup.css'

export default function ApiSetup({ onDone }) {
  const [key, setKey] = useState('')
  const [error, setError] = useState(null)

  function handleSave() {
    const trimmed = key.trim()
    if (!trimmed.startsWith('sk-ant-') && !trimmed.startsWith('sk-')) {
      setError('Paste your Anthropic API key — it starts with sk-ant-')
      return
    }
    setApiKey(trimmed)
    onDone()
  }

  return (
    <div className="setup-overlay">
      <div className="setup-card">
        <div className="setup-logo">
          <span className="setup-logo-name">ennabl</span>
          <span className="setup-logo-suffix">builder</span>
        </div>
        <p className="setup-desc">
          Paste your Anthropic API key to get started.<br />
          It's stored only in your browser's local storage.
        </p>
        <label className="setup-label">Anthropic API Key</label>
        <input
          className="setup-input"
          type="password"
          value={key}
          onChange={e => { setKey(e.target.value); setError(null) }}
          onKeyDown={e => e.key === 'Enter' && handleSave()}
          placeholder="sk-ant-..."
          spellCheck={false}
          autoFocus
        />
        {error && <p className="setup-error">{error}</p>}
        <button className="setup-btn" onClick={handleSave} disabled={!key.trim()}>
          Save & continue
        </button>
      </div>
    </div>
  )
}
