import { useState, useRef, useEffect } from 'react'
import { CaretDown, Plus, X } from '@phosphor-icons/react'
import { sprintLabel } from '../lib/sprints'
import './SprintBar.css'

export default function SprintBar({ sprints, activeSprint, onSelectSprint, onCreateSprint, onDeleteSprint }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [creating, setCreating] = useState(false)
  const [name, setName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const dropdownRef = useRef(null)
  const nameRef = useRef(null)

  useEffect(() => {
    function onOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdownOpen(false)
    }
    document.addEventListener('mousedown', onOutside)
    return () => document.removeEventListener('mousedown', onOutside)
  }, [])

  useEffect(() => {
    if (creating) nameRef.current?.focus()
  }, [creating])

  function handleCreate() {
    if (!name.trim()) return
    onCreateSprint({ name: name.trim(), startDate, endDate })
    setName(''); setStartDate(''); setEndDate('')
    setCreating(false)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleCreate()
    if (e.key === 'Escape') { setCreating(false); setName('') }
  }

  const selected = activeSprint && activeSprint !== '__none__'
    ? sprints.find(s => s.id === activeSprint)
    : null

  const label = activeSprint === '__none__'
    ? 'Unassigned'
    : selected
      ? sprintLabel(selected)
      : 'All sprints'

  return (
    <div className="sprint-bar">
      {/* Sprint filter dropdown */}
      <div className="sprint-selector" ref={dropdownRef}>
        <button
          className={`sprint-dropdown-btn ${activeSprint ? 'sprint-dropdown-btn--active' : ''}`}
          onClick={() => setDropdownOpen(o => !o)}
        >
          <span className="sprint-dropdown-label">{label}</span>
          <CaretDown size={12} weight="bold" />
        </button>

        {dropdownOpen && (
          <div className="sprint-dropdown">
            {[
              { id: null, label: 'All sprints' },
              { id: '__none__', label: 'Unassigned' },
            ].map(opt => (
              <button
                key={opt.id ?? 'all'}
                className={`sprint-option ${activeSprint === opt.id ? 'sprint-option--active' : ''}`}
                onClick={() => { onSelectSprint(opt.id); setDropdownOpen(false) }}
              >
                {opt.label}
              </button>
            ))}

            {sprints.length > 0 && <div className="sprint-option-divider" />}

            {sprints.map(s => (
              <div key={s.id} className="sprint-option-row">
                <button
                  className={`sprint-option ${activeSprint === s.id ? 'sprint-option--active' : ''}`}
                  onClick={() => { onSelectSprint(s.id); setDropdownOpen(false) }}
                >
                  {sprintLabel(s)}
                </button>
                <button
                  className="sprint-option-delete"
                  title="Delete sprint"
                  onClick={e => { e.stopPropagation(); onDeleteSprint(s.id) }}
                >
                  <X size={11} weight="bold" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* New sprint */}
      {!creating ? (
        <button className="sprint-new-btn" onClick={() => setCreating(true)}>
          <Plus size={13} weight="bold" />
          New sprint
        </button>
      ) : (
        <div className="sprint-create-form">
          <input
            ref={nameRef}
            className="sprint-input"
            placeholder="Sprint name"
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <input
            className="sprint-input sprint-input--date"
            type="date"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
          <span className="sprint-range-sep">–</span>
          <input
            className="sprint-input sprint-input--date"
            type="date"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
          />
          <button
            className="sprint-create-btn"
            onClick={handleCreate}
            disabled={!name.trim()}
          >
            Create
          </button>
          <button
            className="sprint-cancel-btn"
            onClick={() => { setCreating(false); setName('') }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  )
}
