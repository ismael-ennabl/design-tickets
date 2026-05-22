const KEY = 'ennabl_builder_model'

export const MODELS = [
  { id: 'claude-haiku-4-5-20251001', label: 'Haiku', note: 'dev / fast' },
  { id: 'claude-sonnet-4-6',         label: 'Sonnet', note: 'balanced' },
  { id: 'claude-opus-4-7',           label: 'Opus',   note: 'prod / best' },
]

export const DEFAULT_MODEL = 'claude-haiku-4-5-20251001'

export const getModel = () => localStorage.getItem(KEY) || DEFAULT_MODEL
export const setModel = (id) => localStorage.setItem(KEY, id)
