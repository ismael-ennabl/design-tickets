import { useEffect, useRef, useState } from 'react'
import { getApiUrl } from '../lib/apiUrl'
import './DesignCanvas.css'

function buildSrcdoc(code, iconsCode, apiUrl) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${apiUrl}/design-system/colors.css">
  <link rel="stylesheet" href="${apiUrl}/design-system/styles.css">
  <script src="https://unpkg.com/react@18.3.1/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" crossorigin></script>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body { margin: 0; min-height: 100vh; background: var(--en-bg-grey, #f4f6fc); }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
${iconsCode}
  </script>
  <script type="text/babel">
${code}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
  </script>
</body>
</html>`
}

export default function DesignCanvas({ code }) {
  const iframeRef = useRef(null)
  const [view, setView] = useState('preview') // 'preview' | 'code'
  const [iconsCode, setIconsCode] = useState('')

  useEffect(() => {
    fetch(`${getApiUrl()}/design-system/icons.js`)
      .then(r => r.text())
      .then(setIconsCode)
      .catch(() => setIconsCode(''))
  }, [])

  useEffect(() => {
    if (!iframeRef.current || !code || !iconsCode) return
    iframeRef.current.srcdoc = buildSrcdoc(code, iconsCode, getApiUrl())
  }, [code, iconsCode])

  if (!code) {
    return (
      <div className="canvas canvas--empty">
        <div className="canvas-empty-inner">
          <div className="canvas-empty-icon">◻</div>
          <p>Your design will appear here</p>
          <span>Load a PRD and describe the UI in the chat</span>
        </div>
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
