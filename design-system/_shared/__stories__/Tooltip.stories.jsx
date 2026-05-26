import React, { useState } from 'react';
import '../icons.jsx';

const { IconDownload } = window;

const TT_CSS = `
  .tt-root{position:relative;display:inline-flex;align-items:center;}
  .tt-box{position:absolute;z-index:300;background:var(--en-black);color:#fff;border-radius:var(--en-radius-regular);padding:6px 10px;box-shadow:var(--en-shadow-tooltip);pointer-events:none;white-space:nowrap;box-sizing:border-box;animation:tt-in 120ms ease forwards;}
  @keyframes tt-in{from{opacity:0;transform:translateY(3px)}to{opacity:1;transform:translateY(0)}}
  .tt-top{bottom:calc(100% + 8px);left:50%;transform:translateX(-50%);}
  .tt-bottom{top:calc(100% + 8px);left:50%;transform:translateX(-50%);}
  .tt-left{right:calc(100% + 8px);top:50%;transform:translateY(-50%);}
  .tt-right{left:calc(100% + 8px);top:50%;transform:translateY(-50%);}
  .tt-arrow{position:absolute;width:8px;height:8px;background:var(--en-black);transform:rotate(45deg);}
  .tt-top .tt-arrow{bottom:-4px;left:50%;margin-left:-4px;}
  .tt-bottom .tt-arrow{top:-4px;left:50%;margin-left:-4px;}
  .tt-left .tt-arrow{right:-4px;top:50%;margin-top:-4px;}
  .tt-right .tt-arrow{left:-4px;top:50%;margin-top:-4px;}
  .tt-label{font:700 12px/16px var(--en-font-sans);display:block;}
  .tt-desc{font:400 12px/16px var(--en-font-sans);display:block;margin-top:2px;opacity:.75;}
`;

function Tooltip({ label, description, position = 'top', children }) {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="tt-root" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      {children}
      {visible && label && (
        <div className={`tt-box tt-${position}`}>
          <span className="tt-arrow" />
          <span className="tt-label">{label}</span>
          {description && <span className="tt-desc">{description}</span>}
        </div>
      )}
    </div>
  );
}

const triggerStyle = {
  padding: '6px 12px', borderRadius: 8, border: '1.5px solid var(--en-border)',
  background: 'var(--en-bg)', cursor: 'default', fontFamily: 'var(--en-font-sans)',
  fontSize: 13, color: 'var(--en-fg)',
};

function Row({ label, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
      <span style={{ width: 120, fontSize: 12, color: 'var(--en-fg-secondary)', fontFamily: 'var(--en-font-sans)' }}>{label}</span>
      {children}
    </div>
  );
}

function Demo() {
  return (
    <div style={{ padding: 48, background: 'var(--en-bg-grey)', minHeight: '100vh' }}>
      <style>{TT_CSS}</style>
      <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--en-fg-secondary)', marginBottom: 48 }}>Tooltip — hover any element</p>

      <Row label="label only">
        <Tooltip label="Tooltip label" position="top">
          <span style={triggerStyle}>Hover me (top)</span>
        </Tooltip>
      </Row>
      <Row label="with description">
        <Tooltip label="Tooltip label" description="Helpful context that explains this field" position="top">
          <span style={triggerStyle}>Hover me (top)</span>
        </Tooltip>
      </Row>
      <Row label="bottom">
        <Tooltip label="Opens below" description="Position: bottom" position="bottom">
          <span style={triggerStyle}>Hover me (bottom)</span>
        </Tooltip>
      </Row>
      <Row label="left">
        <Tooltip label="Opens left" position="left">
          <span style={triggerStyle}>Hover me (left)</span>
        </Tooltip>
      </Row>
      <Row label="right">
        <Tooltip label="Opens right" position="right">
          <span style={triggerStyle}>Hover me (right)</span>
        </Tooltip>
      </Row>
      <Row label="on icon button">
        <Tooltip label="Download report" position="top">
          <button style={{ ...triggerStyle, width: 32, height: 32, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconDownload size={16} />
          </button>
        </Tooltip>
      </Row>
    </div>
  );
}

export default {
  title: 'Design System/UI Primitives/Tooltip',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export const AllVariants = { render: () => <Demo /> };
