import { useState } from 'react'
import { marked } from 'marked'
import DesignCanvas from './DesignCanvas'
import StorybookTab from './StorybookTab'
import FigmaTab from './FigmaTab'
import './LeftPanel.css'

export default function LeftPanel({ code, prd, history, onHistoryClear }) {
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
        <button
          className={`left-tab ${tab === 'storybook' ? 'left-tab--active' : ''}`}
          onClick={() => setTab('storybook')}
        >
          Storybook
          {history.length > 0 && <span className="left-tab-count">{history.length}</span>}
        </button>
        <button
          className={`left-tab ${tab === 'figma' ? 'left-tab--active' : ''}`}
          onClick={() => setTab('figma')}
        >
          Figma
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
        {tab === 'storybook' && (
          <StorybookTab entries={history} onClear={onHistoryClear} />
        )}
        {tab === 'figma' && (
          <FigmaTab entries={history} />
        )}
      </div>
    </div>
  )
}
