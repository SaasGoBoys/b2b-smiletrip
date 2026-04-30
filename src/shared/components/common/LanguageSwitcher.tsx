import { useRef, useState } from 'react'

import { type Language, useI18nStore } from '@/app/providers/i18n.store'

import { useOnClickOutside } from '@/shared/hooks/useOnClickOutside'

interface LanguageOption {
  value: Language
  label: string
  flag: string
  code: string
}

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { value: 'vi', label: 'Tiếng Việt', flag: '🇻🇳', code: 'VNI' },
  { value: 'ja', label: '日本語', flag: '🇯🇵', code: 'JPN' },
  { value: 'fr', label: 'Français', flag: '🇫🇷', code: 'FRA' },
  { value: 'en', label: 'English', flag: '🇺🇸', code: 'ENG' },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18nStore()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside(ref, () => setOpen(false))

  const current = LANGUAGE_OPTIONS.find((o) => o.value === language) ?? LANGUAGE_OPTIONS[0]

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/25 transition-colors"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="text-xs font-semibold tracking-wide">{current.code}</span>
        <svg
          className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-40 rounded-xl bg-white shadow-lg ring-1 ring-black/5 overflow-hidden z-50">
          {LANGUAGE_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setLanguage(opt.value)
                setOpen(false)
              }}
              className={`flex w-full items-center gap-2.5 px-3.5 py-2.5 text-sm text-left transition-colors
                ${language === opt.value ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              <span className="text-base">{opt.flag}</span>
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
