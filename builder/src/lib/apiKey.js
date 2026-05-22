const KEY = 'ennabl_builder_api_key'
export const getApiKey = () => localStorage.getItem(KEY) || ''
export const setApiKey = (key) => localStorage.setItem(KEY, key.trim())
export const clearApiKey = () => localStorage.removeItem(KEY)
