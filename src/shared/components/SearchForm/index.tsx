import { ConfigProvider, Tabs } from 'antd'

import { brandColors } from '@/shared/lib/antd-theme/tokens'

import { CarSearchForm } from './CarSearchForm'
import { FlightSearchForm } from './FlightSearchForm'
import { HotelSearchForm } from './HotelSearchForm'
import { TourSearchForm } from './TourSearchForm'
import { TrainSearchForm } from './TrainSearchForm'

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
  const tabItems = MAIN_SERVICES.map((service) => {
    const Icon = service.icon

    const lgWidth = service.key === 'car' ? 'lg:w-[32px]' : 'lg:w-[26px]'
    const mdWidth = service.key === 'car' ? 'md:w-[30px]' : 'md:w-[24px]'
    const smWidth = service.key === 'car' ? 'sm:w-[26px]' : 'sm:w-[22px]'
    const baseWidth = service.key === 'car' ? 'w-[22px]' : 'w-[20px]'

    return {
      key: service.key,
      label: (
        <div className="flex flex-col items-center justify-center w-full">
          <Icon
            className={`${baseWidth} ${smWidth} ${mdWidth} ${lgWidth} h-[20px] sm:h-[22px] md:h-[24px] lg:h-[26px] transition-all duration-300`}
            color="currentColor"
          />
          <span className="text-[13px] min-[660px]:text-[15px] md:text-[17px] lg:text-[20px] font-semibold whitespace-nowrap mt-1 transition-all duration-300">
            {service.label}
          </span>
        </div>
      ),
      children:
        service.key === 'flight' ? (
          <FlightSearchForm className="!shadow-none !rounded-none" />
        ) : service.key === 'tour' ? (
          <TourSearchForm className="!shadow-none !rounded-none" />
        ) : service.key === 'train' ? (
          <TrainSearchForm className="!shadow-none !rounded-none" />
        ) : service.key === 'hotel' ? (
          <HotelSearchForm className="!shadow-none !rounded-none" />
        ) : service.key === 'car' ? (
          <CarSearchForm className="!shadow-none !rounded-none" />
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
            horizontalItemPadding: '0',
          },
        },
      }}
    >
      <div className={`w-full overflow-hidden rounded-[20px] bg-white shadow-lg ${className}`}>
        <Tabs
          items={tabItems}
          rootClassName="search-form-tabs"
          className="[&_.ant-tabs-nav]:mb-0 [&_.ant-tabs-nav::before]:border-border-main [&_.ant-tabs-nav-wrap]:px-0 sm:[&_.ant-tabs-nav-wrap]:px-4 [&_.ant-tabs-ink-bar]:!h-[3px] transition-all duration-300"
        />
      </div>
    </ConfigProvider>
  )
}
