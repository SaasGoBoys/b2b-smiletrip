import { ConfigProvider,Select } from 'antd'

import { AirlineLogo } from '@/shared/components/common/AirlineLogo'

import type { Flight } from './FlightCard'
import { FlightDetailTabs } from './FlightDetailTabs/FlightDetailTabs'

import {
  AirplaneCharterIcon,
  BoltIcon,
  ChevronDownCircleIcon,
  EntertainmentAmenityIcon,
  FlightWarningRedIcon,
  GroupIcon,
  LaborIcon,
  LuggageIcon,
  MealAmenityIcon,
  PromotionStarIcon,
  StudyIcon,
  TicketIcon,
  TravelBagIcon,
} from '@/assets/icons/icons'


const PROMOTIONS = [
  { code: 'UU_DAI', label: 'Ưu đãi mừng đại lễ', variant: 'fill', icon: <PromotionStarIcon width={18} height={18} /> },
  { code: 'BAYFSHOLIDAY', label: 'BAYFSHOLIDAY giảm đến 50%', variant: 'outline', icon: <TicketIcon width={18} height={18} /> },
  { code: 'BAYFS44', label: 'BAYFS44 giảm đến 999k', variant: 'outline', icon: <TicketIcon width={18} height={18} /> },
  { code: 'BAYFSHOLIDAY2', label: 'BAYFSHOLIDAY giảm đến 50%', variant: 'outline', icon: <TicketIcon width={18} height={18} /> },
]


function SpecialTag({ icon, label, className = 'bg-[#86CED9]/40 text-[#54858C] font-semibold' }: { icon?: React.ReactNode; label?: string; className?: string }) {
  return (
    <div className={`h-[28px] flex items-center gap-1.5 px-2 py-1 rounded-[5px] text-[13px] whitespace-nowrap ${className}`}>
      {icon}
      {label}
    </div>
  )
}

function PromotionTag({ label, variant = 'fill', icon }: { label: string; variant?: 'fill' | 'outline'; icon?: React.ReactNode }) {
  const isOutline = variant === 'outline'
  return (
    <div
      className={`flex items-center gap-1.5 pl-[7px] pr-[10px] py-[5px] rounded-[15px] text-[13px] font-semibold whitespace-nowrap ${isOutline
        ? 'border border-danger text-danger bg-white'
        : 'bg-danger text-white'
        }`}
    >
      {icon}
      {label}
    </div>
  )
}



export function FlightDetailPanel({ flight, onBook }: { flight: Flight; onBook?: (flight: Flight) => void }) {
  const formattedPrice = flight.price.toLocaleString('vi-VN') + 'đ'


  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            borderRadius: 5,
            controlHeight: 28,
            fontSize: 13,
            colorBorder: '#54858C',
            colorText: '#54858C',
            colorPrimary: '#54858C',
            colorPrimaryHover: '#14363bff',
            colorTextPlaceholder: '#54858C',
          },
        },
      }}
    >
      <div className="bg-[#f0f3ff] mb-3">
        <div className="bg-white pt-2 space-y-3">
          {/* Row 1: Status & Special Tags */}
          <div className="flex items-center justify-between overflow-x-auto no-scrollbar px-2">
            <div className="flex items-center gap-2">
              <SpecialTag label="Rẻ nhất" className="bg-[#54858C] text-white font-semibold" />
              <SpecialTag icon={<LaborIcon width={18} height={18} color="currentColor" />} label="Vé lao động" />
              <SpecialTag icon={<StudyIcon width={18} height={18} color="currentColor" />} label="Vé du học" />
              <SpecialTag icon={<GroupIcon width={18} height={18} color="currentColor" />} label="Vé Block" />
              <SpecialTag icon={<AirplaneCharterIcon width={18} height={18} color="currentColor" />} label="Vé Charter" />
              <div className="flex items-center gap-1.5">
                <SpecialTag
                  icon={<div className='flex items-center gap-1.5'>
                    <TravelBagIcon width={18} height={18} color="#54858C" />
                    <LuggageIcon width={18} height={18} color="#54858C" />
                  </div>}
                  // label='Có hành lý xách tay'
                  className='bg-[#86CED9]/20 text-[12px] text-[#54858C] font-regular'
                />

                <SpecialTag
                  icon={<div className='flex items-center gap-1.5'>
                    <BoltIcon width={18} height={18} color="#54858C" />
                    <MealAmenityIcon width={18} height={18} color="#54858C" />
                    <EntertainmentAmenityIcon width={18} height={18} color="#54858C" />
                  </div>}
                  className='bg-[#86CED9]/20'
                />
              </div>
            </div>
            <Select
              defaultValue="eco1"
              style={{ width: 170 }}
              className="ticket-select"
              suffixIcon={<ChevronDownCircleIcon width={18} height={18} color="#54858C" />}
              labelRender={({ label }) => (
                <span style={{ fontWeight: 600, fontSize: 13, color: '#54858C' }}>{label}</span>
              )}
              options={[
                { value: 'eco1', label: "Vé Phổ thông" },
                { value: 'eco2', label: "Vé Phổ thông 2" },
                { value: 'eco3', label: "Vé Phổ thông 3" }
              ]}
            />
          </div>

          {/* Row 2: Main Flight Details */}
          <div className="flex items-center justify-between px-2">
            {/* Airline Info */}
            <div className="flex flex-col items-center min-w-[160px]">
              <AirlineLogo airline={flight.airline} logoUrl={flight.logoUrl} className="w-10 h-10 mb-1" />
              <div className="text-center">
                <div className="text-[14px] font-normal text-text-main">{flight.airline}</div>
                <div className="text-[13px] text-text-secondary font-normal">
                  {flight.airlineCode}{flight.flightNumber} • Airbus A321-100
                </div>
              </div>
            </div>

            {/* Time & Route */}
            <div className="flex items-center gap-4 flex-1 justify-center max-w-[550px]">
              <div className="text-center">
                <div className="text-[30px] font-semibold text-text-main leading-tight">{flight.departTime}</div>
                <div className="text-[16px] text-text-secondary font-semibold uppercase">HAN T1</div>
              </div>

              <div className="flex flex-col items-center px-2 relative min-w-[220px]">
                <div className="w-full h-[3px] bg-[#D9D9D9] relative flex items-center justify-center">
                  <div className="absolute left-0 w-[9px] h-[9px] bg-[#D9D9D9]" />
                  <div className="absolute right-0 w-[9px] h-[9px] bg-[#D9D9D9]" />
                </div>
                <div className="text-[16px] text-text-secondary mt-2 font-normal">Bay thẳng</div>
              </div>

              <div className="text-center">
                <div className="text-[30px] font-semibold text-text-main leading-tight">{flight.arriveTime}</div>
                <div className="text-[16px] text-text-secondary font-semibold uppercase">SGN T1</div>
              </div>
            </div>

            {/* Price Section */}
            <div className="text-right min-w-[220px]">
              <div className="text-[20px] text-text-secondary line-through font-normal mb-1">5.6324.000 đ</div>
              <div className="text-[40px] font-semibold text-text-main leading-none tracking-tight">
                {formattedPrice}
              </div>
            </div>
          </div>

          {/* Row 3: Promotions */}
          <div className="flex flex-wrap gap-2 px-2">
            {PROMOTIONS.map((promo, idx) => (
              <PromotionTag
                key={`${promo.code}-${idx}`}
                label={promo.label}
                variant={promo.variant as 'fill' | 'outline'}
                icon={promo.icon}
              />
            ))}
          </div>

          {/* Row 4: Custom Tabs & Action */}
          <FlightDetailTabs flight={flight} onBook={onBook} />
        </div>

        {/* Footer Info Bar */}
        <div className="bg-[#E1E1E1] px-5 py-2.5 flex items-center gap-2">
          <div className="flex items-center gap-2 text-danger">
            <img src="/icons/seat-icon.png" className="w-5 h-5 object-contain" alt="seat" onError={(e) => (e.currentTarget.style.display = 'none')} />
            <FlightWarningRedIcon width={18} height={18} />
            <span className="text-[13px] font-bold">Còn 9 ghế</span>
          </div>
        </div>

      </div>
    </ConfigProvider>
  )
}
