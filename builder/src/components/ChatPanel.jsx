import { useState, useRef, useEffect } from 'react'
import { streamChat } from '../lib/claude'
import { extractComponents } from '../lib/reports'
import { MODELS, getModel, setModel } from '../lib/model'
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
    if (initTrigger > 0 && prd && !streaming) {
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

    const apiMessages = [
      ...(prd && messages.length === 0
        ? [{ role: 'user', content: `${prdContext}\n${text}` }]
        : [...messages, userMessage])
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
      if (code) onCodeGenerated(code)

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
        {messages.map((msg, i) => (
          <div key={i} className={`chat-msg chat-msg--${msg.role}`}>
            {msg.role === 'assistant' ? (
              <MessageContent content={msg.content} />
            ) : (
              <span>{msg.content}</span>
            )}
          </div>
        ))}
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

function MessageContent({ content }) {
  const parts = content.split(/(```[\s\S]*?```)/g)
  return (
    <div className="chat-msg-content">
      {parts.map((part, i) => {
        if (part.startsWith('```')) {
          const code = part.replace(/^```[^\n]*\n?/, '').replace(/```$/, '')
          return <pre key={i} className="chat-code-block"><code>{code}</code></pre>
        }
        return <span key={i}>{part}</span>
      })}
    </div>
  )
}
