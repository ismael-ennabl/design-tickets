import { useState } from 'react'
import ChatPanel from './ChatPanel'
import ReportTab from './ReportTab'
import './RightPanel.css'

export default function RightPanel({
  prd, messages, setMessages, onCodeGenerated, onIterationComplete,
  session, onSessionUpdate, initTrigger,
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
            initTrigger={initTrigger}
          />
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
