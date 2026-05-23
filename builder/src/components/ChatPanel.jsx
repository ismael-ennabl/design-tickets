import { useState, useRef, useEffect } from 'react'
import { streamChat } from '../lib/claude'
import { extractComponents } from '../lib/reports'
import { MODELS, getModel, setModel } from '../lib/model'
import { validateCode } from '../lib/validate'
import './ChatPanel.css'

function extractCode(text) {
  const match = text.match(/```(?:jsx?|tsx?|javascript|typescript)?\n([\s\S]*?)```/)
  return match ? match[1].trim() : null
}

export default function ChatPanel({ prd, messages, setMessages, onCodeGenerated, onSwitchToPrd, onIterationComplete, initTrigger }) {
  const [input, setInput] = useState('')
  const [streaming, setStreaming] = useState(false)
  const [selectedModel, setSelectedModel] = useState(getModel)
  const bottomRef = useRef(null)
  const textareaRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (initTrigger > 0 && prd && !streaming && messages.length === 0) {
      send('Build a complete UI from this PRD.')
    }
  }, [initTrigger])

  async function send(overrideText) {
    const text = (overrideText ?? input).trim()
    if (!text || streaming) return

    const userMessage = { role: 'user', content: text }
    const prdContext = prd
      ? `\n\n---\nPRD: ${prd.name}\n\n${prd.content}\n---\n`
      : ''

    const clean = messages.map(({ role, content }) => ({ role, content }))
    const apiMessages = [
      ...(prd && messages.length === 0
        ? [{ role: 'user', content: `${prdContext}\n${text}` }]
        : [...clean, userMessage])
    ]

    setMessages(prev => [...prev, userMessage])
    if (!overrideText) setInput('')
    setStreaming(true)
    setMessages(prev => [...prev, { role: 'assistant', content: '' }])

    try {
      let full = ''
      let usage = null

      await streamChat({
        messages: apiMessages,
        onText: (chunk) => {
          full += chunk
          setMessages(prev => {
            const updated = [...prev]
            updated[updated.length - 1] = { role: 'assistant', content: full }
            return updated
          })
        },
        onDone: (usageData) => {
          usage = usageData
        },
      })

      const code = extractCode(full)
      if (code) {
        const prose = full.replace(/```[\s\S]*?```/g, '').trim()
        onCodeGenerated(code, prose)
        const validation = validateCode(code)
        setMessages(prev => {
          const updated = [...prev]
          updated[updated.length - 1] = { ...updated[updated.length - 1], validation }
          return updated
        })
      }

      if (onIterationComplete) {
        const u = usage || {}
        onIterationComplete({
          inputTokens: u.inputTokens || 0,
          outputTokens: u.outputTokens || 0,
          cacheReadTokens: u.cacheReadTokens || 0,
          componentsUsed: extractComponents(code),
        })
      }
    } catch (err) {
      setMessages(prev => {
        const updated = [...prev]
        updated[updated.length - 1] = { role: 'assistant', content: `Error: ${err.message}` }
        return updated
      })
    } finally {
      setStreaming(false)
    }
  }

  function onKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <div className="chat-panel">
      <div className="chat-messages">
        {messages.length === 0 && (
          <div className="chat-empty">
            {prd
              ? <>PRD loaded. Describe the UI you want to build.</>
              : <>Load a PRD first, then describe what to build.</>}
          </div>
        )}
        {messages.map((msg, i) => {
          const isStreamingThis = streaming && msg.role === 'assistant' && i === messages.length - 1
          return (
            <div key={i} className={`chat-msg chat-msg--${msg.role}`}>
              {msg.role === 'assistant' ? (
                isStreamingThis ? <ThinkingBubble /> : <MessageContent content={msg.content} validation={msg.validation} />
              ) : (
                <span>{msg.content}</span>
              )}
            </div>
          )
        })}
        <div ref={bottomRef} />
      </div>

      <div className="chat-input-area">
        <div className="chat-model-row">
          {MODELS.map(m => (
            <button
              key={m.id}
              className={`chat-model-btn ${selectedModel === m.id ? 'chat-model-btn--active' : ''}`}
              onClick={() => { setSelectedModel(m.id); setModel(m.id) }}
              title={m.note}
            >
              {m.label}
            </button>
          ))}
        </div>
        <div className="chat-input-row">
          <textarea
            ref={textareaRef}
            className="chat-input"
            placeholder={prd ? `Build from ${prd.name}…` : 'Load a PRD first…'}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            disabled={!prd || streaming}
            rows={3}
          />
          <button
            className="chat-send-btn"
            onClick={send}
            disabled={!prd || !input.trim() || streaming}
          >
            {streaming ? <span className="chat-spinner" /> : '↑'}
          </button>
        </div>
      </div>
    </div>
  )
}

const STEPS = [
  { icon: '✦', verb: 'Reading PRD' },
  { icon: '◎', verb: 'Mapping structure' },
  { icon: '⚡', verb: 'Designing layout' },
  { icon: '⬡', verb: 'Building components' },
  { icon: '↑', verb: 'Writing code' },
  { icon: '✦', verb: 'Polishing output' },
]

function ThinkingBubble() {
  const [step, setStep] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % STEPS.length), 2000)
    return () => clearInterval(t)
  }, [])
  const { icon, verb } = STEPS[step]
  return (
    <div className="thinking-bubble">
      <span className="thinking-icon" key={step}>{icon}</span>
      <span className="thinking-verb" key={verb}>{verb}</span>
      <span className="thinking-dots"><span /><span /><span /></span>
    </div>
  )
}

function MessageContent({ content, validation }) {
  const hasCode = /```/.test(content)
  if (hasCode) {
    const prose = content.replace(/```[\s\S]*?```/g, '').trim()
    return (
      <div className="chat-done-card">
        <span className="chat-done-icon">✓</span>
        <div>
          <div className="chat-done-title">Design ready</div>
          {prose && <div className="chat-done-sub">{prose}</div>}
          {validation && (
            <div className={`chat-done-validation ${validation.ok ? 'chat-done-validation--ok' : 'chat-done-validation--warn'}`}>
              {validation.ok
                ? '✓ tokens clean'
                : validation.issues.slice(0, 4).map((issue, i) => (
                    <div key={i}>⚠ {issue.msg}</div>
                  ))
              }
              {validation && !validation.ok && validation.issues.length > 4 && (
                <div>+{validation.issues.length - 4} more</div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
  return <div className="chat-msg-content">{content}</div>
}
