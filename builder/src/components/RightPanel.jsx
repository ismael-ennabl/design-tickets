import { useState } from 'react'
import { marked } from 'marked'
import ChatPanel from './ChatPanel'
import ReportTab from './ReportTab'
import './RightPanel.css'

export default function RightPanel({
  prd, messages, setMessages, onCodeGenerated, onIterationComplete,
  session, onSessionUpdate,
}) {
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
        <button
          className={`right-tab ${tab === 'report' ? 'right-tab--active' : ''}`}
          onClick={() => setTab('report')}
        >
          Report
          {session?.accepted && <span className="right-tab-dot right-tab-dot--green" />}
          {session && !session.accepted && session.iterations > 0 && <span className="right-tab-dot" />}
        </button>
      </div>

      <div className="right-content">
        {tab === 'chat' && (
          <ChatPanel
            prd={prd}
            messages={messages}
            setMessages={setMessages}
            onCodeGenerated={onCodeGenerated}
            onIterationComplete={onIterationComplete}
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
        {tab === 'report' && (
          <ReportTab
            session={session}
            prd={prd}
            onSessionUpdate={onSessionUpdate}
          />
        )}
      </div>
    </div>
  )
}
