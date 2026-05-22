import { getApiKey } from './apiKey'
import { getModel } from './model'
import systemPrompt from './systemPrompt'

const API_URL = 'https://api.anthropic.com/v1/messages'

function thinkingParams(model) {
  if (model === 'claude-opus-4-7') {
    return { max_tokens: 8192, thinking: { type: 'enabled', budget_tokens: 5000 } }
  }
  return { max_tokens: 8192 }
}

export async function streamChat({ messages, onText, onDone }) {
  const model = getModel()
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': getApiKey(),
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model,
      ...thinkingParams(model),
      system: [
        { type: 'text', text: systemPrompt, cache_control: { type: 'ephemeral' } },
      ],
      messages,
      stream: true,
    }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.error?.message || `API error ${res.status}`)
  }

  const reader = res.body.getReader()
  const decoder = new TextDecoder()
  let inputTokens = 0
  let outputTokens = 0
  let cacheReadTokens = 0

  while (true) {
    const { done, value } = await reader.read()
    if (done) break

    const lines = decoder.decode(value).split('\n')
    for (const line of lines) {
      if (!line.startsWith('data: ')) continue
      const data = line.slice(6).trim()
      if (!data || data === '[DONE]') continue
      try {
        const event = JSON.parse(data)
        if (event.type === 'message_start') {
          inputTokens = event.message?.usage?.input_tokens ?? 0
          cacheReadTokens = event.message?.usage?.cache_read_input_tokens ?? 0
        }
        if (event.type === 'content_block_delta' && event.delta?.type === 'text_delta') {
          onText(event.delta.text)
        }
        if (event.type === 'message_delta') {
          outputTokens = event.usage?.output_tokens ?? 0
        }
      } catch {}
    }
  }

  onDone({ inputTokens, outputTokens, cacheReadTokens })
}
