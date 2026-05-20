import { ConfigProvider, Select } from 'antd'

import { AirlineLogo } from '@/shared/components/common/AirlineLogo'
import { Tag } from '@/shared/components/common/Tag'

import type { Flight } from './FlightCard'
import { FlightDetailTabs } from './FlightDetailTabs/FlightDetailTabs'
import { FlightRouteTimeline } from './FlightRouteTimeline'

import {
  ChevronDownCircleIcon,
  FlightWarningRedIcon,
  LaborIcon,
  LuggageIcon,
  TravelBagIcon,
} from '@/assets/icons/icons'

function FareClassSelect({ flight }: { flight: Flight }) {
  const options = flight.fareClassOptions
  if (options.length <= 1) return null

  return (
    <Select
      defaultValue={options[0].value}
      style={{ width: 170 }}
      className="ticket-select shrink-0"
      suffixIcon={<ChevronDownCircleIcon width={18} height={18} color="#54858C" />}
      labelRender={({ label }) => (
        <span style={{ fontWeight: 600, fontSize: 13, color: '#54858C' }}>{label}</span>
      )}
      options={options}
    />
  )
}

function BaggageTags({ flight, showLabel }: { flight: Flight; showLabel?: boolean }) {
  const { handLuggage, checkInLuggage } = flight.amenities
  if (!handLuggage && !checkInLuggage) return null

  return (
    <Tag
      icon={
        <div className="flex items-center gap-1.5">
          {handLuggage && <TravelBagIcon width={18} height={18} color="#54858C" />}
          {checkInLuggage && <LuggageIcon width={18} height={18} color="#54858C" />}
        </div>
      }
      label={
        showLabel ? (
          <span className="hidden sm:inline">
            {[handLuggage && 'Có hành lý xách tay', checkInLuggage && 'Có hành lý ký gửi']
              .filter(Boolean)
              .join(' · ')}
          </span>
        ) : undefined
      }
      className="bg-[#86CED9]/20 text-[12px] text-[#54858C] font-regular shrink-0"
    />
  )
}

export function FlightDetailPanel({ flight, onBook }: { flight: Flight; onBook?: (flight: Flight) => void }) {
  const formattedPrice = flight.price.toLocaleString('vi-VN') + 'đ'
  const flightMeta = [flight.airlineCode + flight.flightNumber, flight.airEquip].filter(Boolean).join(' • ')

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
          <div className="flex min-[992px]:flex-row min-[992px]:items-center min-[992px]:justify-between flex-col gap-2 min-[992px]:gap-0 px-2">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              {flight.isFeatured && (
                <Tag label="Rẻ nhất" className="bg-[#54858C] text-white font-semibold shrink-0" />
              )}
              {flight.isLaborFare && (
                <Tag
                  icon={<LaborIcon width={18} height={18} color="currentColor" />}
                  label="Vé lao động"
                  className="shrink-0 bg-[#86CED9]/40 text-[#54858C] font-semibold"
                />
              )}
              <div className="hidden min-[992px]:flex items-center gap-1.5 shrink-0">
                <BaggageTags flight={flight} />
              </div>
            </div>

            <div className="flex items-center justify-between min-[992px]:hidden">
              <div className="flex items-center gap-2">
                <BaggageTags flight={flight} showLabel />
              </div>
              <FareClassSelect flight={flight} />
            </div>

            <div className="hidden min-[992px]:block shrink-0">
              <FareClassSelect flight={flight} />
            </div>
          </div>

          <div className="grid grid-cols-2 min-[992px]:flex min-[992px]:flex-row min-[992px]:items-center min-[992px]:justify-between px-2 gap-y-4 min-[992px]:gap-y-0 mt-4 min-[992px]:mt-0">
            <div className="col-span-1 min-[992px]:col-auto flex flex-row min-[992px]:flex-col items-center gap-3 min-[992px]:gap-0 min-[992px]:min-w-[160px]">
              <AirlineLogo airline={flight.airline} logoUrl={flight.logoUrl} className="w-10 h-10 shrink-0 min-[992px]:mb-1" />
              <div className="text-left min-[992px]:text-center">
                <div className="text-[15px] min-[992px]:text-[14px] font-semibold min-[992px]:font-normal text-text-main">
                  {flight.airline}
                </div>
                <div className="text-[13px] text-text-secondary font-normal">{flightMeta}</div>
                {flight.operatedByText && (
                  <div className="text-[12px] text-text-secondary mt-0.5">Vận hành bởi {flight.operatedByText}</div>
                )}
              </div>
            </div>

            <FlightRouteTimeline
              departTime={flight.departTime}
              arriveTime={flight.arriveTime}
              depAirportLabel={flight.depEndpoint.airportLabel}
              arrAirportLabel={flight.arrEndpoint.airportLabel}
              layovers={flight.layovers}
              routeLabel={flight.routeLabel}
            />

            <div className="col-span-1 min-[992px]:col-auto text-right shrink-0 min-[992px]:min-w-[220px]">
              <div className="text-[28px] min-[992px]:text-[40px] font-semibold text-text-main leading-none tracking-tight">
                {formattedPrice}
              </div>
              {flight.ticketClassName && (
                <div className="text-[12px] min-[992px]:text-[13px] text-text-secondary mt-1">{flight.ticketClassName}</div>
              )}
            </div>
          </div>

          <FlightDetailTabs flight={flight} onBook={onBook} />
        </div>

        {flight.seatsAvailable && (
          <div className="bg-[#E1E1E1] px-5 py-2.5 flex items-center gap-2">
            <div className="flex items-center gap-2 text-danger">
              <img
                src="/icons/seat-icon.png"
                className="w-5 h-5 object-contain"
                alt="seat"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              <FlightWarningRedIcon width={18} height={18} />
              <span className="text-[13px] font-bold">Còn {flight.seatsAvailable}</span>
            </div>
          </div>
        )}
      </div>
    </ConfigProvider>
  )
}
