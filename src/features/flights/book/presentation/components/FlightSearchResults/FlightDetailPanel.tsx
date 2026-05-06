import { ConfigProvider, Select } from 'antd'

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
          {/* Mobile: single row | Tablet (md-lg): 2 rows | Desktop (lg+): single row */}
          <div className="flex min-[992px]:flex-row min-[992px]:items-center min-[992px]:justify-between flex-col gap-2 min-[992px]:gap-0 px-2">
            {/* Hàng tags loại vé */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <SpecialTag label="Rẻ nhất" className="bg-[#54858C] text-white font-semibold shrink-0" />
              <SpecialTag icon={<LaborIcon width={18} height={18} color="currentColor" />} label="Vé lao động" className="shrink-0 bg-[#86CED9]/40 text-[#54858C] font-semibold" />
              <SpecialTag icon={<StudyIcon width={18} height={18} color="currentColor" />} label="Vé du học" className="shrink-0 bg-[#86CED9]/40 text-[#54858C] font-semibold" />
              <SpecialTag icon={<GroupIcon width={18} height={18} color="currentColor" />} label="Vé Block" className="shrink-0 bg-[#86CED9]/40 text-[#54858C] font-semibold" />
              <SpecialTag icon={<AirplaneCharterIcon width={18} height={18} color="currentColor" />} label="Vé Charter" className="shrink-0 bg-[#86CED9]/40 text-[#54858C] font-semibold" />
              {/* Desktop: icon hành lý nằm cùng hàng tags */}
              <div className="hidden min-[992px]:flex items-center gap-1.5 shrink-0">
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
            {/* Hàng dưới: icon hành lý + Select (hiện trên Tablet, ẩn trên Desktop lớn) */}
            <div className="flex items-center justify-between min-[992px]:hidden">
              <div className="flex items-center gap-2">
                <SpecialTag
                  icon={<div className='flex items-center gap-1.5'>
                    <TravelBagIcon width={18} height={18} color="#54858C" />
                    <LuggageIcon width={18} height={18} color="#54858C" />
                  </div>}
                  label="Có hành lý xách tay"
                  className='bg-[#86CED9]/20 text-[12px] text-[#54858C] font-regular'
                />
                <SpecialTag
                  icon={<BoltIcon width={18} height={18} color="#54858C" />}
                  className='bg-[#86CED9]/20'
                />
                <SpecialTag
                  icon={<MealAmenityIcon width={18} height={18} color="#54858C" />}
                  className='bg-[#86CED9]/20'
                />
                <SpecialTag
                  icon={<EntertainmentAmenityIcon width={18} height={18} color="#54858C" />}
                  className='bg-[#86CED9]/20'
                />
              </div>
              <Select
                defaultValue="eco1"
                style={{ width: 170 }}
                className="ticket-select shrink-0"
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
            {/* Select chỉ hiện trên Desktop - bọc trong div để tránh Ant Design override hidden */}
            <div className="hidden min-[992px]:block shrink-0">
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
          </div>

          {/* Row 2: Main Flight Details */}
          {/* Use CSS Grid for Mobile/Tablet to stack elements, use Flex for Desktop */}
          <div className="grid grid-cols-2 min-[992px]:flex min-[992px]:flex-row min-[992px]:items-center min-[992px]:justify-between px-2 gap-y-4 min-[992px]:gap-y-0 mt-4 min-[992px]:mt-0">
            {/* Airline Info */}
            <div className="col-span-1 min-[992px]:col-auto flex flex-row min-[992px]:flex-col items-center gap-3 min-[992px]:gap-0 min-[992px]:min-w-[160px]">
              <AirlineLogo airline={flight.airline} logoUrl={flight.logoUrl} className="w-10 h-10 shrink-0 min-[992px]:mb-1" />
              <div className="text-left min-[992px]:text-center">
                <div className="text-[15px] min-[992px]:text-[14px] font-semibold min-[992px]:font-normal text-text-main">{flight.airline}</div>
                <div className="text-[13px] text-text-secondary font-normal">
                  {flight.airlineCode}{flight.flightNumber} • Airbus A321-100
                </div>
              </div>
            </div>

            {/* Time & Route */}
            <div className="col-span-2 px-4 min-[992px]:col-auto min-[992px]:flex-1 flex items-center gap-4 w-full min-[992px]:max-w-[550px] min-[992px]:mx-auto order-last min-[992px]:order-none">
              <div className="text-left min-[992px]:text-center shrink-0 min-[992px]:shrink">
                <div className="text-[28px] min-[992px]:text-[30px] font-semibold text-text-main leading-tight">{flight.departTime}</div>
                <div className="text-[14px] min-[992px]:text-[16px] text-text-secondary font-semibold uppercase">HAN T1</div>
              </div>
              <div className="flex flex-col items-center flex-1 px-0 min-[992px]:px-2 min-[992px]:min-w-[220px]">
                <div className="w-full h-[3px] bg-[#D9D9D9] relative flex items-center justify-center">
                  <div className="absolute left-0 w-[8px] h-[8px] min-[992px]:w-[9px] min-[992px]:h-[9px] bg-[#D9D9D9]" />
                  <div className="absolute right-0 w-[8px] h-[8px] min-[992px]:w-[9px] min-[992px]:h-[9px] bg-[#D9D9D9]" />
                </div>
                <div className="text-[14px] min-[992px]:text-[16px] text-text-secondary mt-2 font-normal">Bay thẳng</div>
              </div>
              <div className="text-right min-[992px]:text-center shrink-0 min-[992px]:shrink">
                <div className="text-[28px] min-[992px]:text-[30px] font-semibold text-text-main leading-tight">{flight.arriveTime}</div>
                <div className="text-[14px] min-[992px]:text-[16px] text-text-secondary font-semibold uppercase">SGN T1</div>
              </div>
            </div>

            {/* Price Section */}
            <div className="col-span-1 min-[992px]:col-auto text-right shrink-0 min-[992px]:min-w-[220px]">
              <div className="text-[14px] min-[992px]:text-[20px] text-text-secondary line-through font-normal min-[992px]:mb-1">5.6324.000 đ</div>
              <div className="text-[28px] min-[992px]:text-[40px] font-semibold text-text-main leading-none tracking-tight">
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
