import { type ReactNode, useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n.config'
import { useI18nStore } from './i18n.store'

export function I18nProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const sync = () => {
      void i18n.changeLanguage(useI18nStore.getState().language)
    }
    const unsub = useI18nStore.persist.onFinishHydration(sync)
    if (useI18nStore.persist.hasHydrated()) sync()
    return unsub
  }, [])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
