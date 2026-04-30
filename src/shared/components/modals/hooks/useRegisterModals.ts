import { useEffect } from 'react'

import { useModalStore } from '../store/modal.store'

export function useRegisterModals(registryObj: Record<string, unknown>) {
  const register = useModalStore((s) => s.register)
  const unregister = useModalStore((s) => s.unregister)

  useEffect(() => {
    register(registryObj)

    return () => {
      unregister(registryObj)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
