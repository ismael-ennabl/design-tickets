import { useState, useEffect } from 'react'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'
import ApiSetup from './components/ApiSetup'
import PbSetup from './components/PbSetup'
import PrdSearch from './components/PrdSearch'
import ProjectsPage from './pages/ProjectsPage'
import ProjectView from './pages/ProjectView'
import { getApiKey } from './lib/apiKey'
import { newSession, calcCost, saveSession } from './lib/reports'
import { loadHistory, saveHistory, makeEntry } from './lib/history'
import { loadPrds, savePrds, seedIfEmpty } from './lib/prds'
import { loadBuilderState, saveBuilderState } from './lib/builderState'
import {
  isPbReady, pbLoadPrds, pbCreatePrd, pbUpdatePrd, pbDeletePrd,
} from './lib/pb'
import './App.css'

export default function App() {
  const [apiReady, setApiReady] = useState(() => !!getApiKey())
  const [pbReady, setPbReady] = useState(isPbReady)
  const [pbSkipped, setPbSkipped] = useState(false)
  const [route, setRoute] = useState({ page: 'projects' })
  const [prds, setPrds] = useState([])
  const [prdsLoaded, setPrdsLoaded] = useState(false)
  const [prd, setPrd] = useState(null)
  const [generatedCode, setGeneratedCode] = useState(null)
  const [messages, setMessages] = useState([])
  const [session, setSession] = useState(null)
  const [history, setHistory] = useState(loadHistory)
  const [initTrigger, setInitTrigger] = useState(0)

  const usePb = pbReady && !pbSkipped

  // Load PRDs once storage is decided
  useEffect(() => {
    if (!apiReady) return
    if (!pbReady && !pbSkipped) return // still showing PbSetup

    async function load() {
      if (usePb) {
        try {
          const data = await pbLoadPrds()
          setPrds(data)
        } catch {
          // PB connection lost — fall back to localStorage
          seedIfEmpty()
          setPrds(loadPrds())
        }
      } else {
        seedIfEmpty()
        setPrds(loadPrds())
      }
      setPrdsLoaded(true)
    }
    load()
  }, [apiReady, pbReady, pbSkipped])

  function navigate(next) {
    if (next.page === 'builder' && next.prdId) {
      const found = prds.find(p => p.id === next.prdId)
      if (found) loadPrdObj(found)
    }
    setRoute(next)
  }

  function loadPrdObj(prdObj) {
    const saved = loadBuilderState(prdObj.id)
    setPrd({ id: prdObj.id, name: prdObj.title, content: prdObj.content })
    setMessages(saved.messages || [])
    setGeneratedCode(saved.code || null)
    setSession(newSession(prdObj.title))
  }

  // Persist builder state per PRD
  useEffect(() => {
    if (prd?.id) saveBuilderState(prd.id, { messages })
  }, [messages, prd?.id])

  useEffect(() => {
    if (prd?.id && generatedCode) saveBuilderState(prd.id, { code: generatedCode })
  }, [generatedCode, prd?.id])

  // ── CRUD ────────────────────────────────────────────────────────────────

  async function handleCreatePrd(projectId, data) {
    if (usePb) {
      const created = await pbCreatePrd({ projectId, ...data })
      setPrds(prev => [created, ...prev])
    } else {
      const created = {
        id: `prd-${Date.now()}`,
        projectId,
        status: 'backlog',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        ...data,
      }
      setPrds(prev => { const next = [created, ...prev]; savePrds(next); return next })
    }
  }

  async function handleUpdatePrd(id, changes) {
    if (usePb) {
      const updated = await pbUpdatePrd(id, { ...changes, updated: new Date().toISOString() })
      setPrds(prev => prev.map(p => p.id === id ? updated : p))
    } else {
      setPrds(prev => {
        const next = prev.map(p =>
          p.id === id ? { ...p, ...changes, updatedAt: new Date().toISOString() } : p
        )
        savePrds(next)
        return next
      })
    }
  }

  async function handleDeletePrd(id) {
    if (usePb) {
      await pbDeletePrd(id)
    }
    setPrds(prev => {
      const next = prev.filter(p => p.id !== id)
      if (!usePb) savePrds(next)
      return next
    })
  }

  // ── Builder callbacks ────────────────────────────────────────────────────

  function handleCodeGenerated(code, prose) {
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

      // Sync PRD: append key decision to build log
      if (prose) {
        const today = new Date().toISOString().slice(0, 10)
        const logLine = `**${today} · iter ${(session?.iterations ?? 0) + 1}:** ${prose}`
        const cur = prds.find(p => p.id === prd.id)
        const base = cur?.content || prd.content || ''
        const newContent = base.includes('## Build log')
          ? base + '\n' + logLine
          : base + '\n\n## Build log\n\n' + logLine
        handleUpdatePrd(prd.id, { content: newContent })
        setPrd(prev => prev ? { ...prev, content: newContent } : prev)
      }
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

  // ── Gates ────────────────────────────────────────────────────────────────

  if (!apiReady) return <ApiSetup onDone={() => setApiReady(true)} />

  if (!pbReady && !pbSkipped) {
    return (
      <PbSetup
        onDone={() => {
          if (isPbReady()) setPbReady(true)
          else setPbSkipped(true)
        }}
      />
    )
  }

  if (!prdsLoaded) {
    return (
      <div style={{ height: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', color: 'var(--text-muted)', fontSize: 13 }}>
        Loading…
      </div>
    )
  }

  if (route.page === 'projects') {
    return <ProjectsPage prds={prds} onNavigate={navigate} />
  }

  if (route.page === 'project') {
    return (
      <ProjectView
        projectId={route.projectId}
        prds={prds}
        onNavigate={navigate}
        onCreatePrd={handleCreatePrd}
        onUpdatePrd={handleUpdatePrd}
        onDeletePrd={handleDeletePrd}
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
        <PrdSearch prds={prds} onSelect={loadPrdObj} />
      </header>

      <main className="app-panels">
        <LeftPanel
          code={generatedCode}
          prd={prd}
          history={history}
          onHistoryClear={handleHistoryClear}
          onInitDesign={() => setInitTrigger(t => t + 1)}
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
          initTrigger={initTrigger}
        />
      </main>
    </div>
  )
}
