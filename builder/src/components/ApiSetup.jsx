import { useState } from 'react'
import { setApiUrl } from '../lib/apiUrl'
import './ApiSetup.css'

export default function ApiSetup({ onDone }) {
  const [url, setUrl] = useState('http://localhost:3001')
  const [testing, setTesting] = useState(false)
  const [error, setError] = useState(null)

  async function handleSave() {
    const cleaned = url.trim().replace(/\/$/, '')
    if (!cleaned) return
    setTesting(true)
    setError(null)
    try {
      await fetch(`${cleaned}/design-system/colors.css`, { signal: AbortSignal.timeout(4000) })
      setApiUrl(cleaned)
      onDone()
    } catch {
      setError('Could not reach that URL. Make sure the builder server is running.')
    } finally {
      setTesting(false)
    }
  }

  return (
    <div className="setup-overlay">
      <div className="setup-card">
        <div className="setup-logo">
          <span className="setup-logo-name">ennabl</span>
          <span className="setup-logo-suffix">builder</span>
        </div>
        <p className="setup-desc">
          Enter the URL where the builder API is running.<br />
          For local dev this is <code>http://localhost:3001</code>.
        </p>
        <label className="setup-label">API URL</label>
        <input
          className="setup-input"
          value={url}
          onChange={e => setUrl(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSave()}
          placeholder="https://your-api.vercel.app"
          spellCheck={false}
        />
        {error && <p className="setup-error">{error}</p>}
        <button className="setup-btn" onClick={handleSave} disabled={testing || !url.trim()}>
          {testing ? 'Connecting…' : 'Connect'}
        </button>
      </div>
    </div>
  )
}
