const KEY = id => `ennabl_bs_${id}`

export function loadBuilderState(prdId) {
  try { return JSON.parse(localStorage.getItem(KEY(prdId))) || {} }
  catch { return {} }
}

export function saveBuilderState(prdId, patch) {
  try {
    const cur = loadBuilderState(prdId)
    localStorage.setItem(KEY(prdId), JSON.stringify({ ...cur, ...patch }))
  } catch {}
}
