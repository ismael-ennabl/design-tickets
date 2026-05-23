import { useState, useRef, useEffect } from 'react'
import { getProject } from '../lib/prds'
import './PrdSearch.css'

export default function PrdSearch({ prds = [], onSelect }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [open, setOpen] = useState(false)
  const [focused, setFocused] = useState(0)
  const inputRef = useRef()
  const dropRef = useRef()

  useEffect(() => {
    if (!query.trim()) { setResults([]); setOpen(false); return }
    const q = query.toLowerCase()
    const hits = prds.filter(p => p.title.toLowerCase().includes(q)).slice(0, 8)
    setResults(hits)
    setOpen(hits.length > 0)
    setFocused(0)
  }, [query, prds])

  useEffect(() => {
    function onDown(e) {
      if (!open) return
      if (e.key === 'ArrowDown') { e.preventDefault(); setFocused(f => Math.min(f + 1, results.length - 1)) }
      if (e.key === 'ArrowUp')   { e.preventDefault(); setFocused(f => Math.max(f - 1, 0)) }
      if (e.key === 'Enter')     { e.preventDefault(); if (results[focused]) pick(results[focused]) }
      if (e.key === 'Escape')    { setOpen(false) }
    }
    window.addEventListener('keydown', onDown)
    return () => window.removeEventListener('keydown', onDown)
  }, [open, results, focused])

  useEffect(() => {
    function onClickOut(e) {
      if (!dropRef.current?.contains(e.target) && !inputRef.current?.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOut)
    return () => document.removeEventListener('mousedown', onClickOut)
  }, [])

  function pick(prd) {
    onSelect(prd)
    setQuery('')
    setOpen(false)
    inputRef.current?.blur()
  }

  return (
    <div className="prd-search">
      <div className="prd-search-input-wrap">
        <span className="prd-search-icon">⌕</span>
        <input
          ref={inputRef}
          className="prd-search-input"
          type="text"
          placeholder="Search PRDs…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => { if (results.length) setOpen(true) }}
        />
        {query && (
          <button className="prd-search-clear" onClick={() => { setQuery(''); setOpen(false) }}>✕</button>
        )}
      </div>

      {open && (
        <div ref={dropRef} className="prd-search-dropdown">
          {results.map((prd, i) => {
            const project = getProject(prd.projectId)
            return (
              <button
                key={prd.id}
                className={`prd-search-result ${i === focused ? 'prd-search-result--active' : ''}`}
                onMouseEnter={() => setFocused(i)}
                onClick={() => pick(prd)}
              >
                <span className="prd-search-result-title">{prd.title}</span>
                <span className="prd-search-result-project">
                  {project?.icon} {project?.name}
                </span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
