import { Button, Divider } from 'antd'

import { AirlineLogo } from '@/shared/components/common/AirlineLogo'

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
}

interface Props {
  flights: SelectedFlight[]
  totalPrice: number
  onContinue?: () => void
}

function SummaryFlightItem({
  flight,
  onAction,
  showDivider = true
}: {
  flight: SelectedFlight,
  onAction?: () => void,
  showDivider?: boolean
}) {
  return (
    <div>
      <details open className="group/item">
        {/* Leg header: số thứ tự + ngày + tuyến bay - AS SUMMARY */}
        <summary className="flex items-start gap-[10px] px-4 pt-[14px] pb-[10px] cursor-pointer hover:bg-surface-hover transition-colors list-none [&::-webkit-details-marker]:hidden">
          <div className="w-6 h-6 rounded-full bg-primary text-white text-[12px] font-bold flex items-center justify-center shrink-0 mt-[1px]">
            {flight.leg}
          </div>
          <div>
            <div className="text-[16px] text-text-main leading-[1.4]">{flight.day}</div>
            <div className="text-[18px] font-semibold text-primary leading-[1.4]">{flight.route}</div>
          </div>
        </summary>

        <div>
          {/* Airline + chi tiết */}
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <AirlineLogo
                airline={flight.airline}
                className="w-6 h-6"
              />
              <span className="text-[16px] font-semibold text-text-main">{flight.airline}</span>
            </div>
            <button className="text-[16px] font-semibold text-primary hover:underline text-nowrap">
              chi tiết
            </button>
          </div>

          {/* Timeline giờ bay */}
          <div className="px-4 pb-4">
            {/* Giờ khởi hành nhỏ ở trên */}
            <div className="text-center text-[16px] text-text-main leading-tight">{flight.departTime}</div>

            {/* Giờ lớn + đường kẻ + máy bay */}
            <div className="flex items-center justify-between">
              <span className="text-[22px] font-semibold text-text-main">{flight.departTime}</span>

              {/* Đường kẻ giữa */}
              <div className="flex-1 flex items-center mx-3">
                <TimelinePlaneIcon width={24} height={24} />
                <div className="flex-1 border-t-2 border-dashed border-border-main mx-1" />
                <div className="w-2 h-2 rounded-full bg-border-main" />
              </div>

              <span className="text-[22px] font-semibold text-text-main">{flight.arriveTime}</span>
            </div>

            {/* Bay thẳng / số điểm dừng */}
            {flight.isDirectFlight && (
              <div className="text-center text-[16px] text-text-main leading-tight">Bay thẳng</div>
            )}
          </div>

          {/* Nút đổi chuyến — full width */}
          <div className="px-4 pb-4">
            <Button
              type="primary"
              block
              className="!rounded-[10px] font-semibold !h-10 !text-[16px]"
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
  return (
    <div className="bg-white border border-border-main rounded-tl-[20px] rounded-bl-[20px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-[10px] px-4 py-[14px] border-b border-border-main">
        <TransitRouteIcon width={24} height={21} />
        <span className="text-[18px] font-semibold text-text-main">Chuyến bay của bạn</span>
      </div>

      {flights.map((flight, index) => (
        <SummaryFlightItem
          key={flight.leg}
          flight={flight}
          onAction={onContinue}
          showDivider={index < flights.length - 1}
        />
      ))}

      {/* Footer giá */}
      <div className="bg-[#E7F5F7] px-4 py-[14px] text-center border-t border-border-main text-text-main text-[24px] font-semibold">
        <span >
          {totalPrice.toLocaleString('vi-VN')} đ
        </span>
        <span>/ khách</span>
      </div>
    </div>
  )
}
