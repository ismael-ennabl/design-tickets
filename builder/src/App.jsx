import { useState } from 'react'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'
import ApiSetup from './components/ApiSetup'
import { getApiKey } from './lib/apiKey'
import { newSession, calcCost, saveSession } from './lib/reports'
import { loadHistory, saveHistory, makeEntry } from './lib/history'
import './App.css'

export default function App() {
  const [prd, setPrd] = useState(null)
  const [generatedCode, setGeneratedCode] = useState(null)
  const [messages, setMessages] = useState([])
  const [apiReady, setApiReady] = useState(() => !!getApiKey())
  const [session, setSession] = useState(null)
  const [history, setHistory] = useState(loadHistory)

  function handleCodeGenerated(code) {
    setGeneratedCode(code)
    if (prd) {
      const entry = makeEntry({
        prdName: prd.name,
        code,
        iteration: (session?.iterations ?? 0) + 1,
      })
      const updated = [entry, ...history].slice(0, 50)
      setHistory(updated)
      saveHistory(updated)
    }
  }

  function handleIterationComplete({ inputTokens, outputTokens, cacheReadTokens, componentsUsed }) {
    setSession(prev => {
      if (!prev) return prev
      const updated = {
        ...prev,
        iterations: prev.iterations + 1,
        inputTokens: prev.inputTokens + inputTokens,
        outputTokens: prev.outputTokens + outputTokens,
        cacheReadTokens: prev.cacheReadTokens + cacheReadTokens,
        componentsUsed: [...new Set([...prev.componentsUsed, ...componentsUsed])],
      }
      updated.cost = calcCost(updated)
      saveSession(updated)
      return updated
    })
  }

  function loadPrd(file) {
    const reader = new FileReader()
    reader.onload = ev => {
      setPrd({ name: file.name, content: ev.target.result })
      setMessages([])
      setGeneratedCode(null)
      setSession(newSession(file.name))
    }
    reader.readAsText(file)
  }

  function handleHistoryClear() {
    setHistory([])
    saveHistory([])
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
        <LeftPanel
          code={generatedCode}
          prd={prd}
          history={history}
          onHistoryClear={handleHistoryClear}
        />
        <div className="app-divider" />
        <RightPanel
          prd={prd}
          messages={messages}
          setMessages={setMessages}
          onCodeGenerated={handleCodeGenerated}
          onIterationComplete={handleIterationComplete}
          session={session}
          onSessionUpdate={setSession}
        />
      </main>
    </div>
  )
}
