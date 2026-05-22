import { useEffect, useRef, useState } from 'react'

import colorsCssRaw from '../../../youtrack/_design_system/colors_and_type.css?raw'
import stylesCssRaw from '../../../youtrack/_design_system/styles.css?raw'
import iconsJsRaw from '../../../youtrack/_shared/icons.jsx?raw'
import pickerJsRaw from '../../../youtrack/_shared/picker.jsx?raw'
import dialogsJsRaw from '../../../youtrack/_shared/dialogs.jsx?raw'
import step3JsRaw from '../../../youtrack/_shared/step3.jsx?raw'

import './DesignCanvas.css'

const colorsCSS = colorsCssRaw.replace(/@font-face\s*\{[^}]*\}/g, '')
const sharedCode = [pickerJsRaw, dialogsJsRaw, step3JsRaw].join('\n\n')

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
</head>
<body>
  <div id="root"></div>
  <div id="__err"></div>
  <script type="text/babel">
${iconsJsRaw}

${sharedCode}

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

  useEffect(() => {
    if (!iframeRef.current || !code) return
    iframeRef.current.srcdoc = buildSrcdoc(code)
  }, [code])

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
