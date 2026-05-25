import { useEffect, useRef, useState, useCallback } from 'react'

import colorsCssRaw from '../../../design-system/_design_system/colors_and_type.css?raw'
import stylesCssRaw from '../../../design-system/_design_system/styles.css?raw'
import iconsJsRaw from '../../../design-system/_shared/icons.jsx?raw'
import uiJsRaw from '../../../design-system/_shared/ui.jsx?raw'
import toggleJsRaw from '../../../design-system/_shared/Toggle.jsx?raw'
import avatarJsRaw from '../../../design-system/_shared/Avatar.jsx?raw'
import dialogComponentJsRaw from '../../../design-system/_shared/Dialog.jsx?raw'
import chipJsRaw from '../../../design-system/_shared/Chip.jsx?raw'
import selectJsRaw from '../../../design-system/_shared/Select.jsx?raw'
import stepperJsRaw from '../../../design-system/_shared/Stepper.jsx?raw'
import tooltipJsRaw from '../../../design-system/_shared/Tooltip.jsx?raw'
import pickerJsRaw from '../../../design-system/_shared/picker.jsx?raw'
import dialogsJsRaw from '../../../design-system/_shared/dialogs.jsx?raw'
import step3JsRaw from '../../../design-system/_shared/step3.jsx?raw'

import './DesignCanvas.css'

const colorsCSS = colorsCssRaw.replace(/@font-face\s*\{[^}]*\}/g, '')

// Navigation bridge injected into every srcdoc.
// Generated code calls window.__navigate('/path') to push a route.
// hashchange events are also captured so hash-router patterns work.
const NAV_BRIDGE = `
<script>
  window.__navigate = function(path) {
    var hash = path.startsWith('#') ? path : '#' + path;
    window.location.hash = hash;
    window.parent.postMessage({ type: '__route', path: hash }, '*');
  };
  window.addEventListener('hashchange', function() {
    window.parent.postMessage({ type: '__route', path: window.location.hash || '#/' }, '*');
  });
  // report initial route after React mounts
  window.addEventListener('load', function() {
    setTimeout(function() {
      window.parent.postMessage({ type: '__route', path: window.location.hash || '#/' }, '*');
    }, 100);
  });
<\/script>`

function buildSrcdoc(code) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/react@18.3.1/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" crossorigin></script>
  <script src="https://unpkg.com/recharts@2/umd/Recharts.min.js" crossorigin></script>
  <style>${colorsCSS}</style>
  <style>${stylesCssRaw}</style>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body { margin: 0; min-height: 100vh; background: var(--en-bg-grey, #f4f6fc); }
    #__err { display:none; position:fixed; inset:0; background:#1a1a1a; color:#f87171; font:13px/1.6 monospace; padding:24px; white-space:pre-wrap; z-index:9999; overflow:auto; }
    #__err.show { display:block; }
  </style>
  <script>
    window.onerror = function(msg, src, line, col, err) {
      var el = document.getElementById('__err');
      if (el) { el.textContent = (err ? err.stack : msg) || msg; el.className = 'show'; }
      return true;
    };
    window.addEventListener('unhandledrejection', function(e) {
      var el = document.getElementById('__err');
      if (el) { el.textContent = String(e.reason); el.className = 'show'; }
    });
  </script>
  ${NAV_BRIDGE}
</head>
<body>
  <div id="root"></div>
  <div id="__err"></div>
  <script type="text/babel">
${iconsJsRaw}
  </script>
  <script type="text/babel">
${uiJsRaw}
  </script>
  <script type="text/babel">
${toggleJsRaw}
  </script>
  <script type="text/babel">
${avatarJsRaw}
  </script>
  <script type="text/babel">
${dialogComponentJsRaw}
  </script>
  <script type="text/babel">
${chipJsRaw}
  </script>
  <script type="text/babel">
${selectJsRaw}
  </script>
  <script type="text/babel">
${stepperJsRaw}
  </script>
  <script type="text/babel">
${tooltipJsRaw}
  </script>
  <script type="text/babel">
${pickerJsRaw}
  </script>
  <script type="text/babel">
${dialogsJsRaw}
  </script>
  <script type="text/babel">
${step3JsRaw}
  </script>
  <script type="text/babel">
${code}

try {
  ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
} catch(e) {
  var el = document.getElementById('__err');
  if (el) { el.textContent = e.stack || e.message; el.className = 'show'; }
}
  </script>
</body>
</html>`
}

export default function DesignCanvas({ code, prd, onInitDesign }) {
  const iframeRef = useRef(null)
  const [view, setView] = useState('preview')
  const [route, setRoute] = useState('#/')
  const [routeInput, setRouteInput] = useState('#/')
  const [history, setHistory] = useState(['#/'])
  const [historyIdx, setHistoryIdx] = useState(0)

  // Listen for route messages from iframe
  useEffect(() => {
    function onMessage(e) {
      if (e.data?.type !== '__route') return
      const path = e.data.path || '#/'
      setRoute(path)
      setRouteInput(path)
      setHistory(prev => {
        const trimmed = prev.slice(0, historyIdx + 1)
        if (trimmed[trimmed.length - 1] === path) return trimmed
        return [...trimmed, path]
      })
      setHistoryIdx(prev => prev + 1)
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [historyIdx])

  useEffect(() => {
    if (!iframeRef.current || !code) return
    setRoute('#/')
    setRouteInput('#/')
    setHistory(['#/'])
    setHistoryIdx(0)
    iframeRef.current.srcdoc = buildSrcdoc(code)
  }, [code])

  function sendNavigate(path) {
    iframeRef.current?.contentWindow?.postMessage({ type: '__navigate', path }, '*')
    // also directly set hash if accessible
    try {
      if (iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.__navigate?.(path)
      }
    } catch {}
  }

  function goBack() {
    if (historyIdx <= 0) return
    const prev = history[historyIdx - 1]
    setHistoryIdx(i => i - 1)
    setRoute(prev)
    setRouteInput(prev)
    sendNavigate(prev)
  }

  function goForward() {
    if (historyIdx >= history.length - 1) return
    const next = history[historyIdx + 1]
    setHistoryIdx(i => i + 1)
    setRoute(next)
    setRouteInput(next)
    sendNavigate(next)
  }

  function handleRouteSubmit(e) {
    e.preventDefault()
    sendNavigate(routeInput)
  }

  if (!code) {
    return (
      <div className="canvas canvas--empty">
        {prd ? (
          <>
            <div className="canvas-empty-icon">✦</div>
            <p className="canvas-empty-title">{prd.name}</p>
            <span className="canvas-empty-sub">PRD loaded — ready to generate</span>
            <button className="canvas-init-btn" onClick={onInitDesign}>
              Init Design
            </button>
          </>
        ) : (
          <>
            <div className="canvas-empty-icon">◎</div>
            <p className="canvas-empty-title">No PRD loaded</p>
            <span className="canvas-empty-sub">Open a PRD from Projects to start</span>
          </>
        )}
      </div>
    )
  }

  return (
    <div className="canvas canvas--live">
      <div className="canvas-toolbar">
        <div className="canvas-view-tabs">
          <button
            className={`canvas-view-tab ${view === 'preview' ? 'active' : ''}`}
            onClick={() => setView('preview')}
          >
            Preview
          </button>
          <button
            className={`canvas-view-tab ${view === 'code' ? 'active' : ''}`}
            onClick={() => setView('code')}
          >
            Code
          </button>
        </div>

        {view === 'preview' && (
          <div className="canvas-urlbar">
            <button
              className="canvas-nav-btn"
              onClick={goBack}
              disabled={historyIdx <= 0}
              title="Back"
            >←</button>
            <button
              className="canvas-nav-btn"
              onClick={goForward}
              disabled={historyIdx >= history.length - 1}
              title="Forward"
            >→</button>
            <form className="canvas-url-form" onSubmit={handleRouteSubmit}>
              <input
                className="canvas-url-input"
                value={routeInput}
                onChange={e => setRouteInput(e.target.value)}
                spellCheck={false}
              />
            </form>
          </div>
        )}

        <button
          className="canvas-copy-btn"
          onClick={() => navigator.clipboard.writeText(code)}
        >
          copy
        </button>
      </div>

      <div className="canvas-body">
        <iframe
          ref={iframeRef}
          className="canvas-iframe"
          style={{ display: view === 'preview' ? 'block' : 'none' }}
          title="design preview"
          sandbox="allow-scripts allow-same-origin"
        />
        {view === 'code' && (
          <pre className="canvas-code"><code>{code}</code></pre>
        )}
      </div>
    </div>
  )
}
