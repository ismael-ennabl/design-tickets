import { useState, useRef, useEffect } from 'react'
import { getApiUrl } from '../lib/apiUrl'
import './ChatPanel.css'

function extractCode(text) {
  const match = text.match(/```(?:jsx?|tsx?|javascript|typescript)?\n([\s\S]*?)```/)
  return match ? match[1].trim() : null
}

export default function ChatPanel({ prd, messages, setMessages, onCodeGenerated, onSwitchToPrd }) {
  const [input, setInput] = useState('')
  const [streaming, setStreaming] = useState(false)
  const bottomRef = useRef(null)
  const textareaRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function send() {
    const text = input.trim()
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
    setInput('')
    setStreaming(true)

    const assistantMessage = { role: 'assistant', content: '' }
    setMessages(prev => [...prev, assistantMessage])

    try {
      const res = await fetch(`${getApiUrl()}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages })
      })

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let full = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        const lines = chunk.split('\n')

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const data = line.slice(6)
          if (data === '[DONE]') continue
          try {
            const parsed = JSON.parse(data)
            if (parsed.text) {
              full += parsed.text
              setMessages(prev => {
                const updated = [...prev]
                updated[updated.length - 1] = { role: 'assistant', content: full }
                return updated
              })
            }
          } catch {}
        }
      }

      const code = extractCode(full)
      if (code) onCodeGenerated(code)
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
