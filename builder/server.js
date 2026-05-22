import Anthropic from '@anthropic-ai/sdk'
import express from 'express'
import { readFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
app.use(express.json({ limit: '2mb' }))

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

function loadSystemPrompt() {
  const read = (path) => existsSync(path) ? readFileSync(path, 'utf8') : ''

  const tokens   = read(join(__dirname, 'system-prompt/design-tokens.md'))
  const patterns = read(join(__dirname, 'system-prompt/component-patterns.md'))
  const shared   = read(join(__dirname, 'system-prompt/shared-components.md'))

  return `You are an expert UI engineer for ennabl, an insurance analytics platform for insurance agencies and brokers.

Your job: generate React JSX + CSS from PRD descriptions, strictly using the ennabl design system.

## Output format

Always respond with:
1. A \`\`\`jsx code block — the full, self-contained component
2. One sentence explaining key decisions

**Code must follow this exact structure:**
\`\`\`jsx
const { useState, useEffect, useMemo, useCallback, useRef } = React;

function App() {
  // state, handlers ...
  return (
    <>
      <style>{\`
        /* component-specific CSS only — reuse --en-* vars */
        .my-thing { color: var(--en-primary); }
      \`}</style>
      <div className="stage">
        {/* content */}
      </div>
    </>
  );
}
\`\`\`

Rules:
- Use \`const { useState, ... } = React;\` — NEVER \`import\` statements
- Name the root component \`App\`
- Do NOT include \`ReactDOM.createRoot\` — the preview handles rendering
- Put component-specific styles in the \`<style>\` tag inside the fragment
- Make the component fully self-contained — no external sub-component imports

## Hard rules

- NEVER hardcode hex/rgba — always use \`--en-*\` CSS variables
- NEVER use Tailwind unless the PRD explicitly requests it
- ALWAYS use \`.en-body2\`, \`.en-subtitle2\` etc. for typography
- Use \`box-sizing: border-box\` on all elements
- Cards: \`border-radius: 16px\` (var(--en-radius-large))
- Buttons/inputs: \`border-radius: 8px\` (var(--en-radius-regular))
- Spacing in multiples of 4px
- Transitions: \`200ms cubic-bezier(0.4, 0, 0.2, 1)\`

## Available globals in the preview

React hooks: \`useState\`, \`useEffect\`, \`useMemo\`, \`useCallback\`, \`useRef\`
Icons (all global): \`IconCheck\`, \`IconChevronDown\`, \`IconChevronUp\`, \`IconPlus\`, \`IconEdit\`, \`IconTrash\`, \`IconGear\`, \`IconSearch\`, \`IconStar\`, \`IconCopy\`, \`IconClose\`, \`IconMore\`, \`IconShare\`, \`IconRevert\`, \`IconUsers\`, \`IconInfo\`, \`IconUpload\`
Design system CSS (\`--en-*\` vars + \`.en-*\` classes): loaded globally, use freely

## Design tokens

${tokens}

## Component patterns

${patterns}

## Shared components (available as globals in the preview)

${shared}

## Context

The generated code runs inside a Vite + React app. The ennabl design system CSS (colors_and_type.css + styles.css) is already loaded globally — you can use all \`--en-*\` variables and \`.en-*\` classes directly without importing them.`
}

// Design system assets served to the preview iframe
const DS = join(__dirname, '../youtrack/_design_system')
const SHARED = join(__dirname, '../youtrack/_shared')
const CORS = { 'Access-Control-Allow-Origin': '*' }

app.get('/design-system/colors.css', (req, res) => {
  let css = readFileSync(join(DS, 'colors_and_type.css'), 'utf8')
  // strip local @font-face — iframe uses Google Fonts
  css = css.replace(/@font-face\s*\{[^}]*\}/g, '')
  res.set({ 'Content-Type': 'text/css', ...CORS }).send(css)
})

app.get('/design-system/styles.css', (req, res) => {
  res.set({ 'Content-Type': 'text/css', ...CORS })
    .send(readFileSync(join(DS, 'styles.css'), 'utf8'))
})

app.get('/design-system/icons.js', (req, res) => {
  res.set({ 'Content-Type': 'text/plain', ...CORS })
    .send(readFileSync(join(SHARED, 'icons.jsx'), 'utf8'))
})

// All _shared components concatenated — loaded into the preview iframe
app.get('/design-system/shared.js', (req, res) => {
  const files = ['picker.jsx', 'dialogs.jsx', 'step3.jsx']
  const combined = files
    .map(f => `// === ${f} ===\n` + readFileSync(join(SHARED, f), 'utf8'))
    .join('\n\n')
  res.set({ 'Content-Type': 'text/plain', ...CORS }).send(combined)
})

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body

  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')

  try {
    const stream = await client.messages.stream({
      model: 'claude-opus-4-7',
      max_tokens: 8192,
      thinking: { type: 'enabled', budget_tokens: 5000 },
      system: [
        {
          type: 'text',
          text: loadSystemPrompt(),
          cache_control: { type: 'ephemeral' }
        }
      ],
      messages
    })

    let inputTokens = 0
    let outputTokens = 0
    let cacheReadTokens = 0

    for await (const event of stream) {
      if (event.type === 'message_start') {
        inputTokens = event.message.usage?.input_tokens ?? 0
        cacheReadTokens = event.message.usage?.cache_read_input_tokens ?? 0
      }
      if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
        res.write(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`)
      }
      if (event.type === 'message_delta') {
        outputTokens = event.usage?.output_tokens ?? 0
      }
    }

    res.write(`data: ${JSON.stringify({ usage: { inputTokens, outputTokens, cacheReadTokens } })}\n\n`)
    res.write('data: [DONE]\n\n')
    res.end()
  } catch (err) {
    res.write(`data: ${JSON.stringify({ error: err.message })}\n\n`)
    res.end()
  }
})

const PORT = 3001
app.listen(PORT, () => console.log(`builder api → http://localhost:${PORT}`))
