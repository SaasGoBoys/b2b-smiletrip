import { Select } from 'antd'
import { useI18nStore, type Language } from '@/app/providers/i18n.store'

const LANGUAGE_OPTIONS = [
  { value: 'vi', label: '🇻🇳 Tiếng Việt' },
  { value: 'en', label: '🇺🇸 English' },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18nStore()

  return (
    <Select
      value={language}
      onChange={(val: Language) => setLanguage(val)}
      options={LANGUAGE_OPTIONS}
      style={{ width: 160 }}
      variant="borderless"
    />
  )
}
