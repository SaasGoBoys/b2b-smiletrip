import { Button, Divider } from 'antd'

import { AirlineLogo } from '@/shared/components/common/AirlineLogo'
import { useBreakpoint } from '@/shared/hooks/useBreakpoint'

import { TimelinePlaneIcon, TransitRouteIcon } from '@/assets/icons/icons'

interface SelectedFlight {
  leg: number
  day: string
  route: string
  airline: string
  airlineLogo?: string
  departTime: string
  arriveTime: string
  isDirectFlight: boolean
  changeLabel: string
  originCode?: string // HAN
  destCode?: string // SGN
}

interface Props {
  flights: SelectedFlight[]
  totalPrice: number
  onContinue?: () => void
}

function SummaryFlightItem({
  flight,
  onAction,
  showDivider = true,
  isTablet = false
}: {
  flight: SelectedFlight,
  onAction?: () => void,
  showDivider?: boolean,
  isTablet?: boolean
}) {
  // Bố cục Timeline cho Tablet (có HAN/SGN và Bay thẳng ở dưới)
  const renderTimeline = () => {
    if (isTablet) {
      return (
        <div className="flex items-center justify-between mt-2">
          <div className="flex flex-col items-center">
            <span className="text-[20px] font-semibold text-text-main leading-none">{flight.departTime}</span>
            <span className="text-[12px] text-text-secondary mt-1 uppercase">{flight.originCode || 'HAN'}</span>
          </div>

          <div className="flex-1 flex flex-col items-center mx-4">
            <div className="w-full flex items-center">
              <div className="flex-1 border-t border-dashed border-border-main" />
              <TimelinePlaneIcon width={24} height={24} className="w-5 h-5 mx-2 text-text-secondary" />
              <div className="flex-1 border-t border-dashed border-border-main" />
            </div>
            <span className="text-[12px] text-text-secondary mt-1">Bay thẳng</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[20px] font-semibold text-text-main leading-none">{flight.arriveTime}</span>
            <span className="text-[12px] text-text-secondary mt-1 uppercase">{flight.destCode || 'SGN'}</span>
          </div>
        </div>
      )
    }

    return (
      <div className="pb-4">
        <div className="text-center text-[14px] lg:text-[16px] text-text-main leading-tight">{flight.departTime}</div>
        <div className="flex items-center justify-between">
          <span className="text-[18px] lg:text-[22px] font-semibold text-text-main">{flight.departTime}</span>
          <div className="flex-1 flex items-center mx-2 lg:mx-3">
            <TimelinePlaneIcon width={24} height={24} className="w-5 h-5 lg:w-6 lg:h-6" />
            <div className="flex-1 border-t-2 border-dashed border-border-main mx-1" />
            <div className="w-2 h-2 rounded-full bg-border-main" />
          </div>
          <span className="text-[18px] lg:text-[22px] font-semibold text-text-main">{flight.arriveTime}</span>
        </div>
        {flight.isDirectFlight && (
          <div className="text-center text-[14px] lg:text-[16px] text-text-main leading-tight">Bay thẳng</div>
        )}
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Header chặng */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border-main bg-white">
          <div className="w-6 h-6 rounded-full bg-primary text-white text-[12px] font-bold flex items-center justify-center shrink-0">
            {flight.leg}
          </div>
          <div className="flex flex-col">
            <div className="text-[14px] text-text-main leading-tight">{flight.day}</div>
            <div className="text-[14px] font-medium text-text-main">
              <span className="text-primary font-semibold">{flight.route}</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <AirlineLogo airline={flight.airline} className="w-5 h-5" />
                <span className="text-[14px] font-semibold text-text-main">{flight.airline}</span>
              </div>
              <button className="text-[14px] font-semibold text-primary hover:underline">Chi tiết</button>
            </div>
            {renderTimeline()}
          </div>

          <div className="mt-4">
            <Button
              type="primary"
              block
              className="!rounded-[10px] font-semibold !h-10 !text-[14px]"
              onClick={onAction}
            >
              {flight.changeLabel}
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <details open className="group/item">
        <summary className="flex items-start gap-[10px] px-4 pt-[12px] pb-[8px] lg:pt-[14px] lg:pb-[10px] cursor-pointer hover:bg-surface-hover transition-colors list-none [&::-webkit-details-marker]:hidden">
          <div className="w-6 h-6 rounded-full bg-primary text-white text-[12px] font-bold flex items-center justify-center shrink-0 mt-[1px]">
            {flight.leg}
          </div>
          <div>
            <div className="text-[14px] lg:text-[16px] text-text-main leading-[1.4]">{flight.day}</div>
            <div className="text-[16px] lg:text-[18px] font-semibold text-primary leading-[1.4]">{flight.route}</div>
          </div>
        </summary>

        <div className="px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-2">
              <AirlineLogo airline={flight.airline} className="w-5 h-5 lg:w-6 lg:h-6" />
              <span className="text-[14px] lg:text-[16px] font-semibold text-text-main">{flight.airline}</span>
            </div>
            <button className="text-[14px] lg:text-[16px] font-semibold text-primary hover:underline text-nowrap">
              chi tiết
            </button>
          </div>
          {renderTimeline()}
          <div className="pb-4">
            <Button
              type="primary"
              block
              className="!rounded-[10px] font-semibold !h-10 !text-[14px] lg:!text-[16px]"
              onClick={onAction}
            >
              {flight.changeLabel}
            </Button>
          </div>
        </div>
      </details>
      {showDivider && (
        <Divider className="!m-0 !border-border-main" />
      )}
    </div>
  )
}

export function FlightSummaryCard({ flights, totalPrice, onContinue }: Props) {
  const { isTabletToXl } = useBreakpoint()

  return (
    <div className="bg-white border border-border-main rounded-[16px] xl:rounded-l-[20px] xl:rounded-r-none overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-[12px] lg:py-[14px] border-b border-border-main">
        <div className="flex items-center gap-[10px]">
          {!isTabletToXl && <TransitRouteIcon width={24} height={21} className="w-5 h-auto lg:w-6" />}
          <span className="text-[16px] lg:text-[18px] font-semibold text-text-main">Chuyến bay của bạn</span>
        </div>

        {isTabletToXl && (
          <div className="text-text-main text-[18px] font-semibold">
            <span>
              {totalPrice.toLocaleString('vi-VN')} đ
            </span>
            <span className="text-[14px] font-normal ml-1">/ khách</span>
          </div>
        )}
      </div>

      <div className={`flex ${isTabletToXl ? 'flex-row divide-x divide-border-main' : 'flex-col'}`}>
        {flights.map((flight, index) => (
          <SummaryFlightItem
            key={flight.leg}
            flight={flight}
            onAction={onContinue}
            showDivider={index < flights.length - 1}
            isTablet={isTabletToXl}
          />
        ))}
      </div>

      {/* Footer giá */}
      {!isTabletToXl && (
        <div className="bg-[#E7F5F7] px-4 py-[2px] lg:py-[14px] text-center border-t border-border-main text-text-main text-[20px] lg:text-[24px] font-semibold">
          <span>
            {totalPrice.toLocaleString('vi-VN')} đ
          </span>
          <span className="text-[14px] lg:text-[16px] font-normal ml-1">/ khách</span>
        </div>
      )}
    </div>
  )
}
