import { useLocation, useNavigate } from 'react-router-dom'

import { Layout, Menu } from 'antd'

import { getSidebarMenuItems } from '@/shared/constants/sidebarMenuConfig'
import { useBreakpoint } from '@/shared/hooks/useBreakpoint'
import { useSidebarStore } from '@/shared/hooks/useSidebarStore'

import { MenuIcon } from '@/assets/icons/icons'
import CloseMenuIcon from '@/assets/sidebar/close-menu.svg?react'

const { Sider } = Layout

export function Sidebar() {
  const { collapsed, setCollapsed, openKeys, setOpenKeys } = useSidebarStore()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { isDesktop } = useBreakpoint()

  const menuItems = getSidebarMenuItems(collapsed)

  const handleGoHomepage = () => {
    navigate('/')
  }

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      collapsedWidth={isDesktop ? 60 : 0}
      width={300}
      style={{ background: '#4F65CD' }}
      trigger={null}
      className="relative h-screen overflow-y-auto"
    >
      <div className="flex flex-col shrink-0">
        {!collapsed && (
          <div className="flex justify-end m-4 mb-1">
            <CloseMenuIcon
              className="cursor-pointer w-[30px] h-[30px] hover:opacity-80 transition-opacity"
              onClick={() => setCollapsed(true)}
            />
          </div>
        )}

        {!collapsed && (
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={handleGoHomepage}
          >
            <img
              src="/images/logo.webp"
              alt="logo"
              className="w-full max-w-[230px] object-contain"
            />
          </div>
        )}
      </div>

      {collapsed && isDesktop && (
        <div className="w-full flex justify-center items-center shrink-0 mt-7">
          <MenuIcon
            className="cursor-pointer w-7 h-7 text-white hover:opacity-80 transition-opacity"
            onClick={() => setCollapsed(false)}
          />
        </div>
      )}

      <div className="mt-2">
        <Menu
          theme="dark"
          mode="inline"
          items={menuItems}
          inlineCollapsed={collapsed}
          selectedKeys={[pathname]}
          openKeys={collapsed ? undefined : openKeys}
          onOpenChange={(keys) => {
            if (!collapsed) setOpenKeys(keys as string[])
          }}
          onClick={({ key }) => {
            if (typeof key === 'string' && key.startsWith('/')) navigate(key)
          }}
          style={{
            background: 'transparent',
            borderInlineEnd: 0,
            color: '#fff',
          }}
          className="mt-4 sidebar-menu"
        />
      </div>
    </Sider>
  )
}
