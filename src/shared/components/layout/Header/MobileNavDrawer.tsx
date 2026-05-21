import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

import { Drawer, Menu } from 'antd'

import { LanguageSwitcher } from '@/shared/components/common/LanguageSwitcher'
import { getSidebarMenuItems } from '@/shared/constants/sidebarMenuConfig'

import authRegistryModals, {
  AuthRegistryModalKeys,
} from '@/features/auth/presentation/components/modals/auth.registry.modal'

import { useModalController } from '../../modals/hooks/useModalController'
import { useRegisterModals } from '../../modals/hooks/useRegisterModals'
import ModalEngine from '../../modals/ModalEngine'

import CloseMenuIcon from '@/assets/sidebar/close-menu.svg?react'

const LOGO_IMG = '/images/logo.webp'

interface MobileNavDrawerProps {
  open: boolean
  onClose: () => void
}

export function MobileNavDrawer({ open, onClose }: MobileNavDrawerProps) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { t } = useTranslation('common')

  useRegisterModals(authRegistryModals)
  const { open: openModal } = useModalController()

  const menuItems = getSidebarMenuItems(false)

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key.startsWith('/')) {
      navigate(key)
      onClose()
    }
  }

  const handleSignIn = () => {
    openModal(AuthRegistryModalKeys.SignIn)
    onClose()
  }

  const handleSignUp = () => {
    openModal(AuthRegistryModalKeys.SignUp)
    onClose()
  }

  const handleGoHomepage = () => {
    navigate('/')
    onClose()
  }

  return (
    <>
      <Drawer
        open={open}
        onClose={onClose}
        placement="left"
        width={300}
        styles={{
          body: {
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            background: '#4F65CD',
            height: '100%',
          },
          header: { display: 'none' },
          wrapper: { boxShadow: '4px 0 24px rgba(0,0,0,0.25)' },
        }}
      >
        {/* Drawer header (Matches Sidebar style) */}
        <div className="flex flex-col shrink-0">
          <div className="flex justify-end m-4 mb-1">
            <CloseMenuIcon
              className="cursor-pointer w-[30px] h-[30px] hover:opacity-80 transition-opacity"
              onClick={onClose}
            />
          </div>

          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={handleGoHomepage}
          >
            <img src={LOGO_IMG} alt="logo" className="w-full max-w-[230px] object-contain" />
          </div>
        </div>

        {/* Search bar */}
        {/* <div className="px-4 pb-3 shrink-0">
          <div className="relative">
            <SearchIcon
              width={18}
              height={18}
              color="rgba(255,255,255,0.6)"
              className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            />
            <input
              type="text"
              placeholder={t('header.search')}
              className="w-full h-[40px] pl-10 pr-4 rounded-full bg-white/20 text-white placeholder:text-white/60 text-sm focus:outline-none focus:bg-white/30 transition-colors"
            />
          </div>
        </div> */}

        {/* Navigation menu */}
        <div className="flex-1 overflow-y-auto">
          <Menu
            theme="dark"
            mode="inline"
            items={menuItems}
            selectedKeys={[pathname]}
            onClick={handleMenuClick}
            style={{
              background: 'transparent',
              borderInlineEnd: 0,
              color: '#fff',
            }}
            className="sidebar-menu"
          />
        </div>

        {/* Footer: language + auth */}
        <div className="px-4 py-4 border-t border-white/20 shrink-0">
          <div className="mb-3">
            <LanguageSwitcher />
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleSignIn}
              className="flex-1 h-10 rounded-full border border-white/50 text-white text-sm font-semibold hover:bg-white/10 transition-colors cursor-pointer"
            >
              {t('header.login')}
            </button>
            <button
              onClick={handleSignUp}
              className="flex-1 h-10 rounded-full bg-white text-primary text-sm font-semibold hover:bg-white/90 transition-colors cursor-pointer"
            >
              {t('header.register')}
            </button>
          </div>
        </div>
      </Drawer>

      <ModalEngine />
    </>
  )
}
