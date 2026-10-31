// The page's own hidden finds. Saved in this browser only, for fun.
import { useSyncExternalStore } from 'react'

const STORAGE_KEY = 'gcm-site-secrets'

function readFound(): string[] {
  try {
    const saved: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
    return Array.isArray(saved) ? saved.filter((id): id is string => typeof id === 'string') : []
  } catch {
    return []
  }
}

let found = readFound()
const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function markFound(id: string) {
  if (found.includes(id)) return
  found = [...found, id]
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(found))
  } catch {
    // Private windows can block storage. The find still counts for this visit.
  }
  for (const listener of listeners) listener()
}

export const useFound = () => useSyncExternalStore(subscribe, () => found)
