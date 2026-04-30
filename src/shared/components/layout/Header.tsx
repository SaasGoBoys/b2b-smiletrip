import { useTranslation } from 'react-i18next'

import { SearchOutlined } from '@ant-design/icons'

import { LanguageSwitcher } from '@/shared/components/common/LanguageSwitcher'

import authRegistryModals, {
  AuthRegistryModalKeys,
} from '@/features/auth/presentation/components/modals/auth.registry.modal'

import { useModalController } from '../modals/hooks/useModalController'
import { useRegisterModals } from '../modals/hooks/useRegisterModals'
import ModalEngine from '../modals/ModalEngine'

export function Header() {
  useRegisterModals(authRegistryModals)

  const { t } = useTranslation('common')

  const { open } = useModalController()

  const handleOpenSignInModal = () => {
    open(AuthRegistryModalKeys.SignIn)
  }

  const handleOpenSignUpModal = () => {
    open(AuthRegistryModalKeys.SignUp)
  }

  return (
    <header
      className="flex items-center gap-5 px-6 h-[72px] shrink-0"
      style={{ background: '#4558B6' }}
    >
      {/* Nav links */}
      <nav className="flex items-center gap-6 min-w-[380px]">
        <button className="flex items-center gap-1 text-white font-medium text-sm hover:text-white/80 transition-colors whitespace-nowrap">
          {t('nav.products')}
          <svg
            className="w-3 h-3 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <button className="text-white font-medium text-sm hover:text-white/80 transition-colors whitespace-nowrap">
          {t('nav.agentPolicy')}
        </button>
        <button className="text-white font-medium text-sm hover:text-white/80 transition-colors whitespace-nowrap">
          {t('nav.contactInfo')}
        </button>
      </nav>

      {/* Search bar */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-[420px]">
          <SearchOutlined className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
          <input
            type="text"
            placeholder={t('header.search')}
            className="w-full h-10 pl-9 pr-4 rounded-full bg-white border-none text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
        </div>
      </div>

      {/* Right side: language + auth */}
      <div className="flex items-center gap-3 shrink-0">
        <LanguageSwitcher />

        <div className="flex items-center rounded-lg overflow-hidden border border-white/60">
          <button
            onClick={handleOpenSignInModal}
            className="px-4 py-1.5 text-sm font-medium text-white hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            {t('header.login')}
          </button>
          <span className="w-px h-5 bg-white/40" />
          <button
            onClick={handleOpenSignUpModal}
            className="px-4 py-1.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            {t('header.register')}
          </button>
        </div>
      </div>

      <ModalEngine />
    </header>
  )
}
