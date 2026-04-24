import { useCallback, useSyncExternalStore } from 'react'

function subscribe(key: string, onStoreChange: () => void) {
  const handler = (e: StorageEvent) => {
    if (e.key === key || e.key === null) onStoreChange()
  }
  window.addEventListener('storage', handler)
  return () => window.removeEventListener('storage', handler)
}

function getSnapshot(key: string): string | null {
  return window.localStorage.getItem(key)
}

export function useLocalStorage(key: string) {
  const value = useSyncExternalStore(
    (onChange) => subscribe(key, onChange),
    () => getSnapshot(key),
    () => null
  )

  const setValue = useCallback(
    (next: string | null) => {
      if (next === null) window.localStorage.removeItem(key)
      else window.localStorage.setItem(key, next)
      window.dispatchEvent(new StorageEvent('storage', { key }))
    },
    [key]
  )

  return [value, setValue] as const
}
