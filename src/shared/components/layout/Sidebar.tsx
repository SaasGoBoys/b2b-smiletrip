import { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import type { MenuProps } from 'antd'
import { Layout , Menu } from 'antd'

import AppRoutes from '@/app/router/paths'

import { sidebarPaths } from '@/shared/constants/sidebarPaths'
import { useSyncState } from '@/shared/hooks/useSyncState'

import CarIcon from '@/assets/sidebar/car.svg?react'
import SimIcon from '@/assets/sidebar/card-sim.svg?react'
import CloseMenuIcon from '@/assets/sidebar/close-menu.svg?react'
import AboutUsIcon from '@/assets/sidebar/contact-round.svg?react'
import InsuranceIcon from '@/assets/sidebar/hand-coins.svg?react'
import HotelIcon from '@/assets/sidebar/hotel.svg?react'
import AgencyPolicyIcon from '@/assets/sidebar/landmark.svg?react'
import MenuIcon from '@/assets/sidebar/menu.svg?react'
import ComboIcon from '@/assets/sidebar/piggy-bank.svg?react'
import PlaneIcon from '@/assets/sidebar/plane.svg?react'
import SettingsIcon from '@/assets/sidebar/settings.svg?react'
import TourIcon from '@/assets/sidebar/tent-tree.svg?react'
import TicketPercentIcon from '@/assets/sidebar/ticket-percent.svg?react'
import TrainIcon from '@/assets/sidebar/tram-front.svg?react'

type MenuItem = Required<MenuProps>['items'][number]

const { Sider } = Layout

const iconClassName = 'w-6 h-6'

const menuItems: MenuItem[] = [
  {
    key: 'flight',
    label: 'Đặt vé máy bay',
    icon: <PlaneIcon className={iconClassName} />,
    children: [
      { key: AppRoutes.flightBooking, label: 'Đặt vé' },
      { key: sidebarPaths.flightReservations, label: 'Danh sách đặt chỗ' },
      { key: sidebarPaths.flightCheckin, label: 'Làm thủ tục' },
      { key: sidebarPaths.flightStatus, label: 'Trạng thái chuyến bay' },
      { key: sidebarPaths.flightImmigration, label: 'Khai nhập cảnh' },
      { key: sidebarPaths.flightSchedule, label: 'Tra cứu lịch bay' },
    ],
  },
  {
    key: 'tour',
    label: 'Tour',
    icon: <TourIcon className={iconClassName} />,
    children: [
      { key: sidebarPaths.tourBooking, label: 'Đặt tour' },
      { key: sidebarPaths.tourList, label: 'Danh sách đặt tour' },
    ],
  },
  {
    key: 'train',
    label: 'Đặt vé tàu',
    icon: <TrainIcon className={iconClassName} />,
    children: [
      { key: sidebarPaths.trainBooking, label: 'Đặt vé' },
      { key: sidebarPaths.trainReservations, label: 'Danh sách đặt chỗ' },
    ],
  },
  {
    key: 'hotel',
    label: 'Đặt Khách sạn',
    icon: <HotelIcon className={iconClassName} />,
    children: [
      { key: sidebarPaths.hotelSearchByLocation, label: 'Tìm khách sạn theo địa điểm' },
      { key: sidebarPaths.hotelList, label: 'Danh sách khách sạn' },
      { key: sidebarPaths.hotelReservations, label: 'Danh sách đặt chỗ' },
    ],
  },
  {
    key: 'airport-transfer',
    label: 'Đưa đón sân bay',
    icon: <CarIcon className={iconClassName} />,
    children: [
      { key: sidebarPaths.airportTransferBooking, label: 'Đặt vé' },
      { key: sidebarPaths.airportTransferList, label: 'Danh sách đặt xe' },
    ],
  },
  {
    key: sidebarPaths.ticketHunting,
    label: 'Săn vé',
    icon: <TicketPercentIcon className={iconClassName} />,
  },
  {
    key: 'sim',
    label: 'Sim/eSim',
    icon: <SimIcon className={iconClassName} />,
    children: [
      { key: sidebarPaths.simBooking, label: 'Đặt Sim/eSim' },
      { key: sidebarPaths.simList, label: 'Danh sách đặt Sim/eSim' },
    ],
  },
  {
    key: 'insurance',
    label: 'Bảo hiểm',
    icon: <InsuranceIcon className={iconClassName} />,
    children: [
      { key: sidebarPaths.insuranceBuy, label: 'Mua bảo hiểm' },
      { key: sidebarPaths.insuranceList, label: 'Danh sách bảo hiểm đã mua' },
    ],
  },
  {
    key: sidebarPaths.combo,
    label: 'Combo tiết kiệm',
    icon: <ComboIcon className={iconClassName} />,
  },
  {
    key: sidebarPaths.agentPolicy,
    label: 'Chính sách đại lý',
    icon: <AgencyPolicyIcon className={iconClassName} />,
  },
  {
    key: sidebarPaths.aboutUs,
    label: 'Về chúng tôi',
    icon: <AboutUsIcon className={iconClassName} />,
  },
  {
    key: sidebarPaths.settings,
    label: 'Cài đặt',
    icon: <SettingsIcon className={iconClassName} />,
  },
]

const getPathOpenKeysDefault = (pathname: string) => {
  if (pathname.startsWith('/flights/')) return ['flight']
  if (pathname.startsWith('/tours/')) return ['tour']
  if (pathname.startsWith('/trains/')) return ['train']
  if (pathname.startsWith('/hotels/')) return ['hotel']
  if (pathname.startsWith('/airport-transfer/')) return ['airport-transfer']
  if (pathname.startsWith('/sim/')) return ['sim']
  if (pathname.startsWith('/insurance/')) return ['insurance']

  return []
}

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const pathOpenKeysDefault = useMemo(() => getPathOpenKeysDefault(pathname), [pathname])

  const [openKeys, setOpenKeys] = useSyncState<string[]>(pathOpenKeysDefault)

  return (
    <Sider
      breakpoint="lg"
      collapsible
      collapsed={collapsed}
      collapsedWidth={60}
      width={300}
      style={{ background: '#4F65CD' }}
      trigger={null}
      className="relative h-screen overflow-y-auto"
    >
      <div className="mt-6 shrink-0">
        {!collapsed && (
          <CloseMenuIcon
            className="absolute top-2 right-2 cursor-pointer w-6 h-6"
            onClick={() => setCollapsed(true)}
          />
        )}
        <img src="/images/logo.png" alt="logo" className="w-[80%] object-contain mx-auto" />
      </div>
      <div className="w-full flex justify-center flex-col items-center px-2 mt-5 shrink-0">
        {collapsed && (
          <MenuIcon className="cursor-pointer w-6 h-6" onClick={() => setCollapsed(false)} />
        )}
      </div>
      <div className="mt-2">
        <Menu
          theme="dark"
          mode="inline"
          items={menuItems}
          inlineCollapsed={collapsed}
          selectedKeys={[pathname]}
          openKeys={openKeys}
          onOpenChange={(keys) => {
            setOpenKeys(keys as string[])
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
