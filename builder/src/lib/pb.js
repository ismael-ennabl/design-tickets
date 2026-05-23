import PocketBase from 'pocketbase'

const PB_URL_KEY = 'ennabl_pb_url'

let _client = null

export function getPbUrl() {
  return localStorage.getItem(PB_URL_KEY) || ''
}

function getClient() {
  const url = getPbUrl()
  if (!url) return null
  if (!_client || _client.baseUrl !== url) {
    _client = new PocketBase(url)
  }
  return _client
}

export function isPbReady() {
  return !!getPbUrl()
}

// Test connection and store URL. Public collections need no auth.
export async function connectPb(url) {
  const normalized = url.trim().replace(/\/$/, '')
  localStorage.setItem(PB_URL_KEY, normalized)
  _client = new PocketBase(normalized)
  // Verify by fetching the prds collection
  await _client.collection('prds').getList(1, 1)
}

export function disconnectPb() {
  localStorage.removeItem(PB_URL_KEY)
  _client = null
}

// ── CRUD ────────────────────────────────────────────────────────────────────

export async function pbLoadPrds() {
  const records = await getClient().collection('prds').getFullList({ sort: '-updated' })
  return records.map(toPrd)
}

export async function pbCreatePrd({ projectId, title, content }) {
  const r = await getClient().collection('prds').create({
    projectId,
    title: title.trim(),
    content: content || '',
    status: 'backlog',
  })
  return toPrd(r)
}

export async function pbUpdatePrd(id, changes) {
  const r = await getClient().collection('prds').update(id, changes)
  return toPrd(r)
}

export async function pbDeletePrd(id) {
  await getClient().collection('prds').delete(id)
}

function toPrd(r) {
  return {
    id: r.id,
    projectId: r.projectId,
    title: r.title,
    content: r.content || '',
    status: r.status || 'backlog',
    createdAt: r.created,
    updatedAt: r.updated,
  }
}
