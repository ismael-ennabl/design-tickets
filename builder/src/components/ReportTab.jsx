import { useState, useEffect } from 'react'
import { getHistory, saveSession, passRate } from '../lib/reports'
import './ReportTab.css'

function Stars({ value, onChange }) {
  const [hover, setHover] = useState(null)
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map(n => (
        <button
          key={n}
          className={`star-btn ${n <= (hover ?? value ?? 0) ? 'star-btn--on' : ''}`}
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(null)}
          onClick={() => onChange(n)}
          aria-label={`Rate ${n} star${n > 1 ? 's' : ''}`}
        >★</button>
      ))}
    </div>
  )
}

function fmt(n) { return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n) }
function fmtCost(c) { return c < 0.01 ? '<$0.01' : `$${c.toFixed(2)}` }
function fmtDate(iso) {
  const d = new Date(iso)
  const today = new Date()
  if (d.toDateString() === today.toDateString()) return 'today'
  const diff = Math.floor((today - d) / 86400000)
  if (diff === 1) return 'yesterday'
  if (diff < 7) return `${diff}d ago`
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export default function ReportTab({ session, prd, onSessionUpdate }) {
  const [history, setHistory] = useState([])

  useEffect(() => {
    if (prd) setHistory(getHistory(prd.name))
  }, [prd, session])

  if (!prd) {
    return <div className="report-empty">Load a PRD to see reports.</div>
  }

  const rate = passRate(history)
  const totalSessions = history.length
  const isCurrentInHistory = history.some(s => s.id === session?.id)

  function handleRating(n) {
    const updated = { ...session, rating: n }
    onSessionUpdate(updated)
    saveSession(updated)
    setHistory(getHistory(prd.name))
  }

  function handleAccept() {
    const updated = { ...session, accepted: true }
    onSessionUpdate(updated)
    saveSession(updated)
    setHistory(getHistory(prd.name))
  }

  const pastSessions = history.filter(s => s.id !== session?.id)

  return (
    <div className="report-tab">

      {/* Current session */}
      {session && (
        <section className="report-section">
          <div className="report-section-label">
            Current session
            {session.accepted && <span className="report-badge report-badge--green">Accepted</span>}
          </div>

          <div className="report-metrics">
            <div className="report-metric">
              <span className="report-metric-value">{session.iterations}</span>
              <span className="report-metric-label">iterations</span>
              {session.iterations <= 2 && session.iterations > 0 &&
                <span className="report-badge report-badge--green">≤2 ✓</span>}
            </div>
            <div className="report-metric">
              <span className="report-metric-value">{fmt(session.inputTokens + session.outputTokens)}</span>
              <span className="report-metric-label">tokens</span>
            </div>
            <div className="report-metric">
              <span className="report-metric-value">{fmtCost(session.cost)}</span>
              <span className="report-metric-label">cost</span>
            </div>
          </div>

          {session.cacheReadTokens > 0 && (
            <div className="report-cache-note">
              {fmt(session.cacheReadTokens)} tokens from cache
            </div>
          )}

          {session.componentsUsed.length > 0 && (
            <div className="report-components">
              <span className="report-components-label">Components used</span>
              <div className="report-chips">
                {session.componentsUsed.map(c => (
                  <span key={c} className="report-chip">{c}</span>
                ))}
              </div>
            </div>
          )}

          <div className="report-rating-row">
            <span className="report-rating-label">Rate this design</span>
            <Stars value={session.rating} onChange={handleRating} />
          </div>

          {!session.accepted && (
            <button className="report-accept-btn" onClick={handleAccept}
              disabled={session.iterations === 0}>
              ✓ Accept design
            </button>
          )}
        </section>
      )}

      {/* Pass rate summary */}
      {totalSessions > 0 && (
        <section className="report-section">
          <div className="report-section-label">This PRD · {totalSessions} session{totalSessions > 1 ? 's' : ''}</div>
          <div className="report-summary">
            {rate !== null && (
              <div className="report-metric">
                <span className="report-metric-value report-metric-value--lg">{rate}%</span>
                <span className="report-metric-label">accepted in ≤2 iterations</span>
              </div>
            )}
          </div>
        </section>
      )}

      {/* History */}
      {pastSessions.length > 0 && (
        <section className="report-section">
          <div className="report-section-label">History</div>
          <div className="report-history">
            {pastSessions.map(s => (
              <div key={s.id} className="report-history-row">
                <div className="report-history-left">
                  <span className="report-history-date">{fmtDate(s.startedAt)}</span>
                  <span className="report-history-iter">{s.iterations} iter{s.iterations !== 1 ? 's' : ''}</span>
                  {s.accepted && <span className="report-badge report-badge--green">✓</span>}
                  {s.iterations <= 2 && s.accepted && <span className="report-badge report-badge--blue">≤2</span>}
                </div>
                <div className="report-history-right">
                  {s.rating && <span className="report-history-stars">{'★'.repeat(s.rating)}{'☆'.repeat(5 - s.rating)}</span>}
                  <span className="report-history-cost">{fmtCost(s.cost)}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {!session && totalSessions === 0 && (
        <div className="report-empty">Start a chat to begin tracking.</div>
      )}
    </div>
  )
}
