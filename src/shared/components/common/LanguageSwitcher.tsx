import { Dropdown, type MenuProps } from 'antd'

import { type Language, useI18nStore } from '@/app/providers/i18n.store'

import { EnglishFlagIcon,FranceFlagIcon, JapanFlagIcon, VietnamFlagIcon } from '@/assets/icons/icons'

interface LanguageOption {
  value: Language
  label: string
  flag: React.ReactNode
  code: string
}

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { value: 'vi', label: 'Tiếng Việt', flag: <VietnamFlagIcon />, code: 'VNI' },
  { value: 'ja', label: '日本語', flag: <JapanFlagIcon />, code: 'JPN' },
  { value: 'fr', label: 'Français', flag: <FranceFlagIcon />, code: 'FRA' },
  { value: 'en', label: 'English', flag: <EnglishFlagIcon />, code: 'ENG' },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18nStore()
  
  const current = LANGUAGE_OPTIONS.find((o) => o.value === language) ?? LANGUAGE_OPTIONS[0]

  const items: MenuProps['items'] = LANGUAGE_OPTIONS.map((opt) => ({
    key: opt.value,
    label: (
      <div className="flex items-center gap-3 w-full min-w-[140px]">
        <span className="flex items-center justify-center shrink-0">
          {opt.flag}
        </span>
        <span className={language === opt.value ? 'text-blue-600 font-semibold' : 'text-gray-700'}>
          {opt.label}
        </span>
      </div>
    ),
    onClick: () => setLanguage(opt.value),
  }))

  return (
    <Dropdown menu={{ items }}>
      <button className="h-[42px] flex items-center gap-2 rounded-[20px] bg-[#687EEC] px-[14px] py-[6px] text-base font-medium text-white hover:bg-[#6c82ef] transition-colors cursor-pointer">
        <span className="flex items-center justify-center shrink-0">
          {current.flag}
        </span>
        <span className="font-semibold tracking-wide">{current.code}</span>
      </button>
    </Dropdown>
  )
}
