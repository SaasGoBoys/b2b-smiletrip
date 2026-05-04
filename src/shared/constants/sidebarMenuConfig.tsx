import type { MenuProps } from 'antd'

import AppRoutes from '@/app/router/paths'

import { sidebarPaths } from '@/shared/constants/sidebarPaths'

import CarIcon from '@/assets/sidebar/car.svg?react'
import SimIcon from '@/assets/sidebar/card-sim.svg?react'
import AboutUsIcon from '@/assets/sidebar/contact-round.svg?react'
import InsuranceIcon from '@/assets/sidebar/hand-coins.svg?react'
import HotelIcon from '@/assets/sidebar/hotel.svg?react'
import AgencyPolicyIcon from '@/assets/sidebar/landmark.svg?react'
import ComboIcon from '@/assets/sidebar/piggy-bank.svg?react'
import PlaneIcon from '@/assets/sidebar/plane.svg?react'
import SettingsIcon from '@/assets/sidebar/settings.svg?react'
import TourIcon from '@/assets/sidebar/tent-tree.svg?react'
import TicketPercentIcon from '@/assets/sidebar/ticket-percent.svg?react'
import TrainIcon from '@/assets/sidebar/tram-front.svg?react'

export type MenuItem = Required<MenuProps>['items'][number]

export const getSidebarMenuItems = (collapsed: boolean): MenuItem[] => {
  const iconSize = collapsed ? 24 : 20
  const iconStyle = { width: iconSize, height: iconSize, flexShrink: 0 }

  return [
    {
      key: AppRoutes.dashboard,
      label: 'Tổng quan',
      icon: <AgencyPolicyIcon style={iconStyle} />,
    },
    {
      key: 'flight',
      label: 'Đặt vé máy bay',
      icon: <PlaneIcon style={iconStyle} />,
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
      icon: <TourIcon style={iconStyle} />,
      children: [
        { key: sidebarPaths.tourBooking, label: 'Đặt tour' },
        { key: sidebarPaths.tourList, label: 'Danh sách đặt tour' },
      ],
    },
    {
      key: 'train',
      label: 'Đặt vé tàu',
      icon: <TrainIcon style={iconStyle} />,
      children: [
        { key: sidebarPaths.trainBooking, label: 'Đặt vé' },
        { key: sidebarPaths.trainReservations, label: 'Danh sách đặt chỗ' },
      ],
    },
    {
      key: 'hotel',
      label: 'Đặt Khách sạn',
      icon: <HotelIcon style={iconStyle} />,
      children: [
        { key: sidebarPaths.hotelSearchByLocation, label: 'Tìm khách sạn theo địa điểm' },
        { key: sidebarPaths.hotelList, label: 'Danh sách khách sạn' },
        { key: sidebarPaths.hotelReservations, label: 'Danh sách đặt chỗ' },
      ],
    },
    {
      key: 'airport-transfer',
      label: 'Đưa đón sân bay',
      icon: <CarIcon style={iconStyle} />,
      children: [
        { key: sidebarPaths.airportTransferBooking, label: 'Đặt vé' },
        { key: sidebarPaths.airportTransferList, label: 'Danh sách đặt xe' },
      ],
    },
    {
      key: sidebarPaths.ticketHunting,
      label: 'Săn vé',
      icon: <TicketPercentIcon style={iconStyle} />,
    },
    {
      key: 'sim',
      label: 'Sim/eSim',
      icon: <SimIcon style={iconStyle} />,
      children: [
        { key: sidebarPaths.simBooking, label: 'Đặt Sim/eSim' },
        { key: sidebarPaths.simList, label: 'Danh sách đặt Sim/eSim' },
      ],
    },
    {
      key: 'insurance',
      label: 'Bảo hiểm',
      icon: <InsuranceIcon style={iconStyle} />,
      children: [
        { key: sidebarPaths.insuranceBuy, label: 'Mua bảo hiểm' },
        { key: sidebarPaths.insuranceList, label: 'Danh sách bảo hiểm đã mua' },
      ],
    },
    {
      key: sidebarPaths.combo,
      label: 'Combo tiết kiệm',
      icon: <ComboIcon style={iconStyle} />,
    },
    {
      key: sidebarPaths.agentPolicy,
      label: 'Chính sách đại lý',
      icon: <AgencyPolicyIcon style={iconStyle} />,
    },
    {
      key: sidebarPaths.aboutUs,
      label: 'Về chúng tôi',
      icon: <AboutUsIcon style={iconStyle} />,
    },
    {
      key: sidebarPaths.settings,
      label: 'Cài đặt',
      icon: <SettingsIcon style={iconStyle} />,
    },
  ]
}
