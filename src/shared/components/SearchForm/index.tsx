import { useState } from 'react'

import { ConfigProvider, Tabs } from 'antd'

import { brandColors } from '@/shared/lib/antd-theme/tokens'

import { FlightSearchForm } from '../FlightSearchForm'

import { TourSearchForm } from './TourSearchForm'

import {
  CarIcon,
  HotelIcon,
  PlaneTakeoffIcon,
  TourIcon,
  TrainIcon,
} from '@/assets/icons/icons'

const MAIN_SERVICES = [
  { key: 'flight', label: 'Vé máy bay', icon: PlaneTakeoffIcon },
  { key: 'tour', label: 'Tour', icon: TourIcon },
  { key: 'train', label: 'Vé tàu', icon: TrainIcon },
  { key: 'hotel', label: 'Khách sạn', icon: HotelIcon },
  { key: 'car', label: 'Đưa đón sân bay', icon: CarIcon },
]

interface SearchFormProps {
  className?: string
}

export function SearchForm({ className = '' }: SearchFormProps) {
  const [activeService, setActiveService] = useState('flight')

  const tabItems = MAIN_SERVICES.map((service) => {
    const Icon = service.icon
    const iconWidth = service.key === 'car' ? 32 : 26
    
    return {
      key: service.key,
      label: (
        <div className="flex flex-col items-center justify-center min-w-[80px] sm:min-w-[100px]">
          <Icon width={iconWidth} height={26} color="currentColor" />
          <span className="text-[20px] font-semibold whitespace-nowrap">
            {service.label}
          </span>
        </div>
      ),
      children:
        service.key === 'flight' ? (
          <FlightSearchForm className="!shadow-none !rounded-none" />
        ) : service.key === 'tour' ? (
          <TourSearchForm className="!shadow-none !rounded-none" />
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-text-muted bg-white">
            <p className="text-[17px] font-medium">Tính năng đang được phát triển</p>
            <p className="text-[14px]">Vui lòng quay lại sau</p>
          </div>
        ),
    }
  })

  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            inkBarColor: brandColors.primary,
            itemActiveColor: brandColors.primary,
            itemHoverColor: brandColors.primary,
            itemSelectedColor: brandColors.primary,
            itemColor: brandColors.textMain,
            horizontalMargin: '0',
            horizontalItemPadding: '16px 0 8px 0',
          },
        },
      }}
    >
      <div className={`w-full overflow-hidden rounded-[20px] bg-white shadow-lg ${className}`}>
        <Tabs
          activeKey={activeService}
          onChange={setActiveService}
          items={tabItems}
          className="[&_.ant-tabs-nav]:mb-0 [&_.ant-tabs-nav::before]:border-border-main [&_.ant-tabs-nav-wrap]:px-0 sm:[&_.ant-tabs-nav-wrap]:px-4 [&_.ant-tabs-nav-list]:w-full [&_.ant-tabs-tab]:flex-1 [&_.ant-tabs-tab]:justify-center [&_.ant-tabs-tab-btn]:w-full [&_.ant-tabs-ink-bar]:!h-[3px]"
        />
      </div>
    </ConfigProvider>
  )
}
