import { AirlineLogo } from '@/shared/components/common/AirlineLogo'
import { PromotionTag } from '@/shared/components/common/PromotionTag'
import type { Flight } from '@/shared/types/flight.types'

import {
  FlightSolidIcon,
  PromotionStarIcon,
  TicketIcon,
  TicketVoucherIcon,
} from '@/assets/icons/icons'

interface Step1FlightReviewProps {
  departureFlight: Flight
  returnFlight?: Flight
}

export function Step1FlightReview({ departureFlight, returnFlight }: Step1FlightReviewProps) {
  const renderFlightItem = (flight: Flight, isReturn = false) => {
    const formattedPrice = flight.price.toLocaleString('vi-VN') + ' đ'

    return (
      <div className="bg-white rounded-[12px] mb-4 border border-[#E8F0F2] shadow-sm overflow-hidden flex flex-col">
        {/* Top Header Section */}
        <div className="flex items-center justify-between px-[18px] py-[14px]">
          <div className="flex items-center gap-10">
            <div className={`flex items-center gap-[10px] px-[10px] py-[7px] rounded-[10px] bg-[#86CED9]/20 text-[#54858C]`}>
              <FlightSolidIcon width={18} height={18} />
              <span className="text-[18px] font-semibold">{isReturn ? 'Bay về' : 'Khởi hành'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[18px] font-semibold text-[#3A3A3A]">Hà Nội</span>
              <span className="text-[#3A3A3A] text-[18px] font-medium">→</span>
              <span className="text-[18px] font-semibold text-[#3A3A3A]">TP HCM</span>
            </div>
            <div className="text-[18px] font-semibold text-[#3A3A3A]">
              Thứ 5, 9 thg 4 2026
            </div>
          </div>
          <div className={`flex items-center gap-[10px] px-[10px] py-[7px] rounded-[10px] bg-[#86CED9]/20 text-[#54858C]`}>
            <TicketVoucherIcon width={25} height={18} />
            <span className="text-[18px] font-semibold">Phổ thông</span>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-[1px] bg-[#F0F4F7] w-full" />

        {/* Main Content Section */}
        <div className="px-[18px] py-[14px]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-6">
              {/* Airline Info */}
              <div className="flex flex-col items-center gap-1.5 min-w-[100px]">
                <AirlineLogo airline={flight.airline} logoUrl={flight.logoUrl} className="!w-[38px] !h-[38px]" />
                <div className="text-center">
                  <span className="text-[14px] font-normal text-[#3A3A3A] block leading-tight">{flight.airline}</span>
                  <span className="text-[14px] text-[#909090] font-normal block mt-0.5">{flight.flightNumber} • Airbus A321-100</span>
                </div>
              </div>

              {/* Flight Times & Duration */}
              <div className="flex items-center gap-5">
                <div className="text-center">
                  <span className="text-[30px] font-semibold text-[#3A3A3A] block leading-none mb-1.5">{flight.departTime}</span>
                  <span className="text-[16px] text-[#909090] font-semibold uppercase">HAN T1</span>
                </div>

                <div className="flex flex-col items-center gap-1 min-w-[160px]">
                  <span className="text-[16px] text-[#909090] font-normal">2h 10m</span>
                  <div className="w-full flex items-center gap-0">
                    <div className="w-2 h-2 bg-[#D9D9D9] flex-shrink-0" />
                    <div className="flex-1 h-[2px] bg-[#D9D9D9]" />
                    <div className="w-2 h-2 bg-[#D9D9D9] flex-shrink-0" />
                  </div>
                  <span className="text-[16px] text-[#909090] font-normal">Bay thẳng</span>
                </div>

                <div className="text-center">
                  <span className="text-[30px] font-semibold text-[#3A3A3A] block leading-none mb-1.5">{flight.arriveTime}</span>
                  <span className="text-[16px] text-[#909090] font-semibold uppercase">SGN T1</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="text-right flex-shrink-0">
              <span className="text-[40px] font-semibold text-[#3A3A3A] tracking-tight whitespace-nowrap">
                {formattedPrice}
              </span>
            </div>
          </div>

          {/* Promotion Row */}
          <div className="flex flex-wrap items-center gap-2.5">
            <PromotionTag
              label="Ưu đãi mừng đại lễ"
              variant="fill"
              icon={<PromotionStarIcon width={16} height={16} color="white" />}
            />
            <PromotionTag
              label="BAYFSHOLIDAY giảm đến 50%"
              variant="outline"
              icon={<TicketIcon width={14} height={14} color="#DA251D" />}
            />
            <PromotionTag
              label="BAYFSHOLIDAY giảm đến 50%"
              variant="outline"
              icon={<TicketIcon width={14} height={14} color="#DA251D" />}
            />

            <button className="ml-auto bg-[#4558B6] text-white text-[16px] font-semibold px-6 py-1 rounded-full cursor-pointer hover:opacity-90 transition-all shadow-sm">
              Chi tiết
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="max-w-[1200px] mx-auto p-4">
        {renderFlightItem(departureFlight, false)}
        {returnFlight && renderFlightItem(returnFlight, true)}
        {!returnFlight && renderFlightItem(departureFlight, true)}
      </div>

    </>
  )
}
