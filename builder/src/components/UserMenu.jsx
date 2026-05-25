import { useState, useRef, useEffect } from 'react'
import { Sun, Moon, SignOut, GearSix, UserCircle } from '@phosphor-icons/react'
import { clearApiKey, getEmail, setEmail } from '../lib/apiKey'
import './UserMenu.css'

function getInitials(email) {
  if (!email) return null
  const local = email.split('@')[0]
  return local.slice(0, 2).toUpperCase()
}

export default function UserMenu({ theme, onThemeToggle, onSignOut }) {
  const [open, setOpen] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [emailDraft, setEmailDraft] = useState(getEmail)
  const ref = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function handleEmailBlur() {
    setEmail(emailDraft.trim())
  }

  function handleSignOut() {
    clearApiKey()
    onSignOut()
  }

  const initials = getInitials(getEmail())

  return (
    <div className="user-menu" ref={ref}>
      <button
        className="user-avatar-btn"
        onClick={() => { setOpen(o => !o); setShowSettings(false) }}
        aria-label="User menu"
      >
        {initials
          ? <span className="user-avatar-initials">{initials}</span>
          : <UserCircle size={20} weight="fill" />
        }
      </button>

      {open && (
        <div className="user-dropdown">
          {/* Identity */}
          <div className="user-dropdown-identity">
            <div className="user-avatar-lg">
              {initials || <UserCircle size={22} weight="fill" />}
            </div>
            <div className="user-dropdown-email">{getEmail() || 'No email set'}</div>
          </div>

          <div className="user-dropdown-divider" />

          {/* Theme toggle */}
          <button className="user-dropdown-item" onClick={onThemeToggle}>
            {theme === 'dark'
              ? <Sun size={15} weight="regular" />
              : <Moon size={15} weight="regular" />
            }
            <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
          </button>

          <div className="user-dropdown-divider" />

          {/* Settings */}
          <button
            className="user-dropdown-item"
            onClick={() => setShowSettings(s => !s)}
          >
            <GearSix size={15} weight="regular" />
            <span>Settings</span>
          </button>

          {showSettings && (
            <div className="user-settings-panel">
              <label className="user-settings-label">Email</label>
              <input
                className="user-settings-input"
                type="email"
                value={emailDraft}
                onChange={e => setEmailDraft(e.target.value)}
                onBlur={handleEmailBlur}
                placeholder="you@ennabl.com"
              />
            </div>
          )}

          <div className="user-dropdown-divider" />

          {/* Sign out */}
          <button className="user-dropdown-item user-dropdown-item--danger" onClick={handleSignOut}>
            <SignOut size={15} weight="regular" />
            <span>Sign out</span>
          </button>
        </div>
      )}
    </div>
  )
}
