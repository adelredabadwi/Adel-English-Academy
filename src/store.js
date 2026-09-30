const KEY = 'adel-academy-v1';
let fallback = {};
export function readState() {
  try { const data = JSON.parse(localStorage.getItem(KEY) || '{}'); return data && typeof data === 'object' && !Array.isArray(data) ? data : {}; }
  catch { return fallback; }
}
export function saveState(state) {
  fallback = state;
  try { localStorage.setItem(KEY, JSON.stringify(state)); return true; }
  catch { document.getElementById('storage-warning')?.removeAttribute('hidden'); return false; }
}
