import { useState } from 'react'
import { marked } from 'marked'
import ChatPanel from './ChatPanel'
import './RightPanel.css'

export default function RightPanel({ prd, messages, setMessages, onCodeGenerated }) {
  const [tab, setTab] = useState('chat')

  return (
    <div className="right-panel">
      <div className="right-tabs">
        <button
          className={`right-tab ${tab === 'chat' ? 'right-tab--active' : ''}`}
          onClick={() => setTab('chat')}
        >
          Chat
        </button>
        <button
          className={`right-tab ${tab === 'prd' ? 'right-tab--active' : ''} ${!prd ? 'right-tab--disabled' : ''}`}
          onClick={() => prd && setTab('prd')}
        >
          {prd ? prd.name : 'PRD'}
        </button>
      </div>

      <div className="right-content">
        {tab === 'chat' && (
          <ChatPanel
            prd={prd}
            messages={messages}
            setMessages={setMessages}
            onCodeGenerated={onCodeGenerated}
            onSwitchToPrd={() => setTab('prd')}
          />
        )}
        {tab === 'prd' && prd && (
          <div
            className="prd-view"
            dangerouslySetInnerHTML={{ __html: marked.parse(prd.content) }}
          />
        )}
        {tab === 'prd' && !prd && (
          <div className="prd-empty">No PRD loaded</div>
        )}
      </div>
    </div>
  )
}
