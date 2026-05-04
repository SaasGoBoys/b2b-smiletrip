import { AirlineLogo } from '@/shared/components/common/AirlineLogo'

import type { Flight } from '../FlightCard'

import { AirplaneCancelIcon, ConditionCalendarCancelIcon, TicketIcon, VNLogoIcon } from '@/assets/icons/icons'



interface SpecialOfferItemProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  onLinkClick?: () => void
}

function SpecialOfferItem({ icon, title, subtitle, onLinkClick }: SpecialOfferItemProps) {
  return (
    <div className="flex items-start gap-3 py-0">
      <div className="mt-[2px]">{icon}</div>
      <div>
        <div className="text-[16px] font-semibold text-text-main leading-tight mb-[2px]">{title}</div>
        <div className="text-[16px] font-normal text-text-secondary leading-snug mb-[3px]">{subtitle}</div>
        <button
          onClick={onLinkClick}
          className="text-[16px] font-semibold text-primary hover:underline cursor-pointer bg-transparent border-none p-0"
        >
          Tìm hiểu thêm
        </button>
      </div>
    </div>
  )
}

export function BenefitTab({ flight }: { flight: Flight }) {
  return (
    <div className="bg-surface-hover border-x border-border-main p-3">
      {/* Điều kiện section */}
      <div className="text-[18px] font-semibold text-text-main pb-3 pl-1">Điều kiện</div>

      <div className="bg-white rounded-[10px]">
        {/* Card */}
        <div className="border-b border-border-main"> 
          {/* Airline */}
          <div className="flex items-center gap-2 pt-3 pb-2 px-4">
            <AirlineLogo airline={flight.airline} logoUrl={flight.logoUrl} className="w-[36px] h-[36px] shrink-0" />
            <span className="text-[18px] font-semibold text-text-main">{flight.airline}</span>
          </div>
          <div className="text-[14px] font-semibold text-text-secondary px-4">
            Hà Nội → TP HCM • phổ thông
          </div>

          {/* Conditions */}
          <div className="pb-3">
            <div className="flex items-center gap-2 px-4 py-1">
              <AirplaneCancelIcon width={24} height={24} color="#BDBDBD" />
              <span className="text-[14px] text-text-secondary">Không hoàn vé</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-1">
              <ConditionCalendarCancelIcon width={24} height={24} color="#BDBDBD" />
              <span className="text-[14px] text-text-secondary">Không áp dụng đổi lịch bay</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border-main mx-6" />

        {/* Ưu đãi đặc biệt section */}
        <div className="px-4 py-3">
          <div className="text-[16px] font-semibold text-text-main pb-3">Ưu đãi đặc biệt</div>

          <div className="space-y-4">
            <SpecialOfferItem
              icon={<VNLogoIcon width={20} height={20} />}
              title="Ưu đãi mừng Đại Lễ"
              subtitle="Đặt sớm bay giá tốt"
            />
            <SpecialOfferItem
              icon={<TicketIcon width={20} height={20} />}
              title="BAYFSHOLIDAY giảm đến 50%"
              subtitle="Ưu đãi chỉ áp dụng trên app. Mở app xem ngay!"
            />
            <SpecialOfferItem
              icon={<TicketIcon width={20} height={20} />}
              title="BAYHOLIDAYND giảm đến 300K"
              subtitle="Ưu đãi chỉ áp dụng trên app. Mở app xem ngay!"
            />
            <SpecialOfferItem
              icon={<TicketIcon width={20} height={20} />}
              title="BAYVUIHOLIDAY giảm 600K"
              subtitle="Ưu đãi chỉ áp dụng trên app. Mở app xem ngay!"
            />
          </div>
        </div>
      </div>


    </div>
  )
}
