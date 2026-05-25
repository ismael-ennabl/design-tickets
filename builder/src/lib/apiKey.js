const KEY = 'ennabl_builder_api_key'
export const getApiKey = () => localStorage.getItem(KEY) || ''
export const setApiKey = (key) => localStorage.setItem(KEY, key.trim())
export const clearApiKey = () => localStorage.removeItem(KEY)

const EMAIL_KEY = 'ennabl_builder_email'
export const getEmail = () => localStorage.getItem(EMAIL_KEY) || ''
export const setEmail = (email) => localStorage.setItem(EMAIL_KEY, email)

const THEME_KEY = 'ennabl_builder_theme'
export const getTheme = () => localStorage.getItem(THEME_KEY) || 'dark'
export const saveTheme = (t) => localStorage.setItem(THEME_KEY, t)
