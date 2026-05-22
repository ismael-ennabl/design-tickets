import { useState, useEffect } from 'react'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'
import ApiSetup from './components/ApiSetup'
import PrdSearch from './components/PrdSearch'
import ProjectsPage from './pages/ProjectsPage'
import ProjectView from './pages/ProjectView'
import { getApiKey } from './lib/apiKey'
import { newSession, calcCost, saveSession } from './lib/reports'
import { loadHistory, saveHistory, makeEntry } from './lib/history'
import { loadPrds, savePrds, seedIfEmpty, getPrd } from './lib/prds'
import './App.css'

export default function App() {
  const [apiReady, setApiReady] = useState(() => !!getApiKey())
  const [route, setRoute] = useState({ page: 'projects' })
  const [prds, setPrds] = useState(() => { seedIfEmpty(); return loadPrds() })
  const [prd, setPrd] = useState(null)
  const [generatedCode, setGeneratedCode] = useState(null)
  const [messages, setMessages] = useState([])
  const [session, setSession] = useState(null)
  const [history, setHistory] = useState(loadHistory)

  function navigate(next) {
    if (next.page === 'builder' && next.prdId) {
      const found = getPrd(next.prdId)
      if (found) loadPrdById(found)
    }
    setRoute(next)
  }

  function handlePrdsChange(updater) {
    setPrds(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater
      savePrds(next)
      return next
    })
  }

  function loadPrdById(prdObj) {
    setPrd({ id: prdObj.id, name: prdObj.title, content: prdObj.content })
    setMessages([])
    setGeneratedCode(null)
    setSession(newSession(prdObj.title))
  }

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

  function handleHistoryClear() {
    setHistory([])
    saveHistory([])
  }

  if (!apiReady) return <ApiSetup onDone={() => setApiReady(true)} />

  if (route.page === 'projects') {
    return <ProjectsPage prds={prds} onNavigate={navigate} />
  }

  if (route.page === 'project') {
    return (
      <ProjectView
        projectId={route.projectId}
        prds={prds}
        onNavigate={navigate}
        onPrdsChange={handlePrdsChange}
      />
    )
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-left">
          <button className="app-back-btn" onClick={() => navigate({ page: 'projects' })}>
            ← Projects
          </button>
          <span className="app-header-sep" />
          <span className="app-logo">ennabl</span>
          <span className="app-logo-suffix">builder</span>
          {prd && <span className="app-prd-badge">{prd.name}</span>}
        </div>
        <PrdSearch onSelect={p => { loadPrdById(p); }} />
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
