import { useState } from 'react'
import { connectPb } from '../lib/pb'
import './PbSetup.css'

export default function PbSetup({ onDone }) {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleConnect(e) {
    e.preventDefault()
    if (!url.trim()) return
    setLoading(true)
    setError('')
    try {
      await connectPb(url)
      onDone()
    } catch (err) {
      setError(
        err?.message?.includes('Failed to fetch')
          ? 'Could not reach that URL. Check the Railway domain and make sure it\'s deployed.'
          : err?.message?.includes('prds')
          ? 'Connected but the "prds" collection is missing. Check that the migration ran.'
          : `Connection failed: ${err?.message || 'unknown error'}`
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pb-setup">
      <div className="pb-setup-card">
        <div className="pb-setup-logo">
          <span className="pb-setup-logo-name">ennabl</span>
          <span className="pb-setup-logo-suffix">builder</span>
        </div>

        <h2 className="pb-setup-title">Connect to PocketBase</h2>
        <p className="pb-setup-sub">
          Paste your Railway deployment URL to sync PRDs across sessions.
        </p>

        <form className="pb-setup-form" onSubmit={handleConnect}>
          <input
            className="pb-setup-input"
            type="url"
            placeholder="https://your-app.up.railway.app"
            value={url}
            onChange={e => setUrl(e.target.value)}
            autoFocus
            disabled={loading}
          />
          {error && <div className="pb-setup-error">{error}</div>}
          <button
            className="pb-setup-btn"
            type="submit"
            disabled={!url.trim() || loading}
          >
            {loading ? 'Connecting…' : 'Connect'}
          </button>
        </form>

        <div className="pb-setup-footer">
          <span className="pb-setup-hint">
            Don't have a deployment yet?{' '}
            <a
              href="https://railway.app"
              target="_blank"
              rel="noreferrer"
              className="pb-setup-link"
            >
              Deploy to Railway →
            </a>
          </span>
          <button className="pb-setup-skip" onClick={onDone}>
            Skip — use local storage
          </button>
        </div>
      </div>
    </div>
  )
}
