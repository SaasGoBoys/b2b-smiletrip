import { AirlineLogo } from '@/shared/components/common/AirlineLogo'

import type { Flight } from '../FlightCard'

import { AirplaneAmenityIcon, EntertainmentAmenityIcon, LuggageIcon, MealAmenityIcon, PlugAmenityIcon, SeatLayoutAmenityIcon, SeatPitchAmenityIcon, WifiOffIcon } from '@/assets/icons/icons'

function AmenityItem({ 
  icon, 
  children, 
  textClassName = "text-[14px] text-text-secondary mt-[1px]" 
}: { 
  icon: React.ReactNode; 
  children: React.ReactNode; 
  textClassName?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="shrink-0 mt-[2px]">
        {icon}
      </div>
      <div className={`leading-[1.4] ${textClassName}`}>
        {children}
      </div>
    </div>
  )
}

function TimeDisplay({ time, date }: { time: string; date: string }) {
  return (
    <div className="text-center">
      <div className="text-[16px] font-semibold text-text-main leading-tight">{time}</div>
      <div className="text-[16px] font-semibold text-text-main mt-0.5">{date}</div>
    </div>
  )
}

function LocationDisplay({ title, subtitle, terminal }: { title: string; subtitle: string; terminal?: string }) {
  return (
    <div>
      <div className="text-[16px] font-semibold text-text-main leading-tight">{title}</div>
      <div className="text-[14px] font-semibold text-text-secondary mt-0.5">{subtitle}</div>
      {terminal && <div className="text-[14px] font-semibold text-text-secondary mt-0.5">{terminal}</div>}
    </div>
  )
}

export function DetailTab({ flight }: { flight: Flight }) {
  return (
    <div>
      <div className="bg-surface-hover border-x border-border-main py-6 px-6">
          <div className="grid grid-cols-[90px_40px_1fr]">
            {/* ROW 1: Departure */}
            <TimeDisplay time={flight.departTime} date="8 tháng 4" />
            <div></div>
            <LocationDisplay title="Hà Nội (HAN)" subtitle="Sân bay Nội Bài" />

            {/* ROW 2: Flight Details & Timeline */}
            <div className="flex items-center justify-center">
              <div className="text-[14px] font-semibold text-text-secondary">{flight.duration?.replace(/\s+/g, '') || '2h15m'}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[14px] h-[14px] rounded-full border-[1px] border-text-main bg-white z-10 shrink-0 mt-1.5"></div>
              <div className="w-[2px] bg-text-main opacity-30 flex-1 my-[-1px]"></div>
            </div>
            <div className="pb-10">
              <div className="flex items-center gap-2">
                <span className="text-[16px] font-semibold text-text-main">{flight.airline}</span>
                <AirlineLogo airline={flight.airline} logoUrl={flight.logoUrl} className="w-[24px] h-[24px] object-contain" />
              </div>
              <div className="text-[16px] font-semibold text-text-main mb-5">
                {flight.airlineCode}{flight.flightNumber} • Phổ thông
              </div>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                <AmenityItem 
                  icon={<LuggageIcon width={24} height={24} color="#909090" />}
                >
                  <div className="text-text-secondary">Hành lý 23 kg</div>
                  <div className="text-text-secondary">Hành lý xách tay 1 x 10 kg</div>
                </AmenityItem>

                <AmenityItem icon={<PlugAmenityIcon width={20} height={20} color="#909090" />}>
                  Cổng nguồn/USB không có sẵn
                </AmenityItem>

                <AmenityItem icon={<MealAmenityIcon width={20} height={20} color="#909090" />}>
                  Suất ăn
                </AmenityItem>

                <AmenityItem icon={<AirplaneAmenityIcon width={20} height={20} color="#909090" />}>
                  Airbus A321-100/200
                </AmenityItem>

                <AmenityItem icon={<EntertainmentAmenityIcon width={20} height={20} color="#909090" />}>
                  Giải trí trên chuyến bay miễn phí
                </AmenityItem>

                <AmenityItem icon={<SeatLayoutAmenityIcon width={20} height={20} color="#909090" />}>
                  3-3 Sơ đồ ghế ngồi
                </AmenityItem>

                <AmenityItem icon={<WifiOffIcon width={20} height={20} color="#909090" />}>
                  WiFi không có sẵn
                </AmenityItem>

                <AmenityItem icon={<SeatPitchAmenityIcon width={20} height={20} color="#909090" />}>
                  31-inches Khoảng cách ghế (tiêu chuẩn)
                </AmenityItem>
              </div>
            </div>

            {/* ROW 3: Arrival */}
            <TimeDisplay time={flight.arriveTime} date="8 tháng 4" />
            <div className="flex flex-col items-center">
              <div className="w-[14px] h-[14px] rounded-full bg-primary z-10 shrink-0"></div>
            </div>
            <LocationDisplay title="TP HCM (SGN)" subtitle="Sân bay Tân Sơn Nhất" terminal="Nhà ga 3" />
          </div>
        </div>
      </div>
  )
}
