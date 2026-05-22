import { useState } from 'react'
import DesignCanvas from './components/DesignCanvas'
import RightPanel from './components/RightPanel'
import ApiSetup from './components/ApiSetup'
import { getApiUrl } from './lib/apiUrl'
import './App.css'

export default function App() {
  const [prd, setPrd] = useState(null) // { name, content }
  const [generatedCode, setGeneratedCode] = useState(null)
  const [messages, setMessages] = useState([])
  const [apiReady, setApiReady] = useState(() => !!getApiUrl())

  function loadPrd(file) {
    const reader = new FileReader()
    reader.onload = ev => {
      setPrd({ name: file.name, content: ev.target.result })
      setMessages([])
      setGeneratedCode(null)
    }
    reader.readAsText(file)
  }

  if (!apiReady) return <ApiSetup onDone={() => setApiReady(true)} />

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-left">
          <span className="app-logo">ennabl</span>
          <span className="app-logo-suffix">builder</span>
        </div>
        <label className="prd-pick-btn">
          {prd ? 'swap PRD' : 'load PRD'}
          <input
            type="file"
            accept=".md,.txt"
            style={{ display: 'none' }}
            onChange={e => { if (e.target.files[0]) loadPrd(e.target.files[0]) }}
          />
        </label>
      </header>

      <main className="app-panels">
        <DesignCanvas code={generatedCode} />
        <div className="app-divider" />
        <RightPanel
          prd={prd}
          messages={messages}
          setMessages={setMessages}
          onCodeGenerated={setGeneratedCode}
        />
      </main>
    </div>
  )
}
