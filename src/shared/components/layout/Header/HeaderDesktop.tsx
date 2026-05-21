import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { ConfigProvider, Menu } from 'antd'

import { LanguageSwitcher } from '@/shared/components/common/LanguageSwitcher'
import { useSidebarStore } from '@/shared/hooks/useSidebarStore'

import authRegistryModals, {
  AuthRegistryModalKeys,
} from '@/features/auth/presentation/components/modals/auth.registry.modal'

import { useModalController } from '../../modals/hooks/useModalController'
import { useRegisterModals } from '../../modals/hooks/useRegisterModals'
import ModalEngine from '../../modals/ModalEngine'

import { useHeaderConfig } from './header.config'
import { MobileNavDrawer } from './MobileNavDrawer'

import { MenuIcon, SearchIcon } from '@/assets/icons/icons'

const LOGO_IMG = '/images/header/logo.webp'

export default function HeaderDesktop() {
  const navigate = useNavigate()
  const collapsed = useSidebarStore((state) => state.collapsed)
  const hideLogo = !collapsed

  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)

  useRegisterModals(authRegistryModals)

  const { t } = useTranslation('common')
  const { open } = useModalController()
  const { menuItems } = useHeaderConfig()

  const handleOpenSignInModal = () => open(AuthRegistryModalKeys.SignIn)
  const handleOpenSignUpModal = () => open(AuthRegistryModalKeys.SignUp)

  const handleGoHomepage = () => {
    navigate('/')
  }

  return (
    <>
      <header className="bg-primary shrink-0">
        <div className="flex items-center pl-[14px] pr-[28px] gap-5 h-[84px]">
          <button
            className="lg:hidden text-white hover:opacity-80 transition-opacity cursor-pointer p-1 shrink-0"
            onClick={() => setMobileNavOpen(true)}
          >
            <MenuIcon className="w-7 h-7" />
          </button>

          <div className="flex items-center gap-[24px] h-full flex-1 min-w-0">
            <div
              className={`flex items-center py-2 h-full shrink-0 max-md:flex cursor-pointer ${hideLogo ? 'hidden md:hidden' : 'hidden md:flex'
                }`}
              onClick={handleGoHomepage}
            >
              <img
                src={LOGO_IMG}
                alt="VFJLink"
                className="h-full max-h-12 w-auto object-contain pointer-events-none"
              />
            </div>

            <ConfigProvider theme={{ components: { Menu: { itemPaddingInline: 12 } } }}>
              <Menu
                mode="horizontal"
                items={menuItems}
                selectable={false}
                className="header-nav-menu !border-none flex-1 !hidden md:!flex"
                style={{ background: 'transparent', minWidth: 0 }}
              />
            </ConfigProvider>
          </div>

          <div className="flex items-center justify-end gap-[24px] shrink-0">
            {/* Search bar — desktop*/}
            <div className="relative w-full max-w-[420px] min-w-[150px] hidden lg:block">
              <SearchIcon
                width={28}
                height={28}
                color="#A0A0A0"
                className="absolute left-[15px] top-1/2 -translate-y-1/2 pointer-events-none"
              />
              <input
                type="text"
                placeholder={t('header.search')}
                className="w-full h-[42px] pl-12 pr-4 rounded-[20px] bg-white border-none text-sm text-gray-700 placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>

            {/* Search icon — mobile/tablet */}
            <button
              className="lg:hidden text-white hover:opacity-80 transition-opacity cursor-pointer p-1"
              onClick={() => setMobileSearchOpen((v) => !v)}
            >
              <SearchIcon width={26} height={26} color="white" />
            </button>

            {/* Language + Auth — desktop */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <LanguageSwitcher />
              <div className="flex items-center h-[42px] !rounded-[20px] bg-[#CDE7FF] overflow-hidden text-[16px] font-semibold text-primary">
                <button
                  onClick={handleOpenSignInModal}
                  className="h-full flex items-center justify-center pl-[22px] pr-[14px] hover:bg-[#b8d6f5] transition-colors whitespace-nowrap outline-none cursor-pointer"
                >
                  {t('header.login')}
                </button>
                <span className="w-[1.5px] h-[18px] bg-primary/40" />
                <button
                  onClick={handleOpenSignUpModal}
                  className="h-full flex items-center justify-center pl-[14px] pr-[22px] hover:bg-[#b8d6f5] transition-colors whitespace-nowrap outline-none cursor-pointer"
                >
                  {t('header.register')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile search row (slide down) ── */}
        <div
          className={[
            'lg:hidden overflow-hidden transition-all duration-300 ease-in-out px-4',
            mobileSearchOpen ? 'max-h-20 pb-3' : 'max-h-0',
          ].join(' ')}
        >
          <div className="relative">
            <SearchIcon
              width={20}
              height={20}
              color="#A0A0A0"
              className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            />
            <input
              type="text"
              placeholder={t('header.search')}
              autoFocus={mobileSearchOpen}
              className="w-full h-[42px] pl-10 pr-4 rounded-[20px] bg-white border-none text-sm text-gray-700 placeholder:text-text-secondary focus:outline-none"
            />
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <MobileNavDrawer open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <ModalEngine />
    </>
  )
}
