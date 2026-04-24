import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { ConfigProvider } from 'antd'
import viVN from 'antd/locale/vi_VN'
import enUS from 'antd/locale/en_US'
import { useTranslation } from 'react-i18next'
import { lightTheme } from '@/shared/lib/antd-theme/lightTheme'
import { darkTheme } from '@/shared/lib/antd-theme/darkTheme'
import { configureDayjsLocale } from '@/shared/lib/dayjs'

type ThemeMode = 'light' | 'dark'

interface ThemeContextType {
  themeMode: ThemeMode
  toggleTheme: () => void
  setTheme: (mode: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

const THEME_STORAGE_KEY = 'app-theme-mode'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation()

  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, themeMode)
    document.documentElement.setAttribute('data-theme', themeMode)
  }, [themeMode])

  useEffect(() => {
    configureDayjsLocale(i18n.language)
  }, [i18n.language])

  const toggleTheme = () => setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'))

  const antdLocale = i18n.language.startsWith('vi') ? viVN : enUS

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme, setTheme: setThemeMode }}>
      <ConfigProvider theme={themeMode === 'dark' ? darkTheme : lightTheme} locale={antdLocale}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}
