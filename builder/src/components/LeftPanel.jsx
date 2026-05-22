import { useState } from 'react'
import { marked } from 'marked'
import DesignCanvas from './DesignCanvas'
import './LeftPanel.css'

export default function LeftPanel({ code, prd }) {
  const [tab, setTab] = useState('design')

  return (
    <div className="left-panel">
      <div className="left-tabs">
        <button
          className={`left-tab ${tab === 'design' ? 'left-tab--active' : ''}`}
          onClick={() => setTab('design')}
        >
          Design
        </button>
        <button
          className={`left-tab ${tab === 'prd' ? 'left-tab--active' : ''} ${!prd ? 'left-tab--disabled' : ''}`}
          onClick={() => prd && setTab('prd')}
        >
          {prd ? prd.name : 'PRD'}
        </button>
      </div>

      <div className="left-content">
        <div className={`left-canvas-wrap ${tab !== 'design' ? 'left-canvas-wrap--hidden' : ''}`}>
          <DesignCanvas code={code} />
        </div>
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
