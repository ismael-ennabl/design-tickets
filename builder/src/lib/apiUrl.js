const STORAGE_KEY = 'ennabl_builder_api_url'
const DEFAULT_DEV = 'http://localhost:3001'

export function getApiUrl() {
  return localStorage.getItem(STORAGE_KEY) || import.meta.env.VITE_API_URL || DEFAULT_DEV
}

export function setApiUrl(url) {
  localStorage.setItem(STORAGE_KEY, url.replace(/\/$/, ''))
}

export function clearApiUrl() {
  localStorage.removeItem(STORAGE_KEY)
}
