import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import i18n from './i18n.config'

export type Language = 'vi' | 'ja' | 'fr' | 'en'

interface I18nState {
  language: Language
  setLanguage: (lang: Language) => void
}

export const useI18nStore = create<I18nState>()(
  persist(
    (set) => ({
      language: 'vi',
      setLanguage: (language) => {
        set({ language })
        void i18n.changeLanguage(language)
      },
    }),
    { name: 'i18n-storage' }
  )
)
