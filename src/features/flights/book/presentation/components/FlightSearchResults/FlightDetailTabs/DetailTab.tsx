import { Fragment } from 'react'

import { AirlineLogo } from '@/shared/components/common/AirlineLogo'

import type { FlightSegmentDetailView } from '../../../utils/flightDetailTypes'
import type { Flight } from '../FlightCard'

import { AirplaneAmenityIcon, LuggageIcon } from '@/assets/icons/icons'

function formatTerminalLabel(terminal?: string): string | undefined {
  if (!terminal) return undefined
  const t = String(terminal).trim()
  if (!t) return undefined
  return t.toUpperCase().startsWith('T') ? t : `T${t}`
}

function AmenityItem({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="shrink-0 mt-[2px]">{icon}</div>
      <div className="leading-[1.4] text-[13px] md:text-[14px] text-text-secondary">{children}</div>
    </div>
  )
}

function TimeDisplay({ time, date }: { time: string; date: string }) {
  return (
    <div className="text-center">
      <div className="text-[14px] md:text-[16px] font-semibold text-text-main leading-tight">{time}</div>
      <div className="text-[14px] md:text-[16px] font-semibold text-text-main mt-0.5">{date}</div>
    </div>
  )
}

function LocationDisplay({
  cityName,
  airportCode,
  airportName,
  terminal,
}: {
  cityName: string
  airportCode: string
  airportName: string
  terminal?: string
}) {
  const terminalLabel = formatTerminalLabel(terminal)

  return (
    <div>
      <div className="text-[15px] md:text-[16px] font-semibold text-text-main leading-tight">
        {cityName} ({airportCode})
      </div>
      {airportName && (
        <div className="text-[13px] md:text-[14px] font-semibold text-text-secondary mt-0.5">{airportName}</div>
      )}
      {terminalLabel && (
        <div className="text-[13px] md:text-[14px] font-semibold text-text-secondary mt-0.5">
          Nhà ga {terminalLabel}
        </div>
      )}
    </div>
  )
}

function SegmentDetails({
  segment,
  flight,
  carryOnBaggageText,
  checkedBaggageText,
  airEquip,
}: {
  segment: FlightSegmentDetailView
  flight: Flight
  carryOnBaggageText?: string
  checkedBaggageText?: string
  airEquip?: string
}) {
  const className = segment.ticketClassName || flight.ticketClassName
  const equip = segment.airEquipType || airEquip
  const hasBaggage = carryOnBaggageText || checkedBaggageText

  return (
    <div className="pb-6">
      <div className="flex items-center gap-2">
        <span className="text-[15px] md:text-[16px] font-semibold text-text-main">
          {segment.airlineName || flight.airline}
        </span>
        <AirlineLogo airline={flight.airline} logoUrl={flight.logoUrl} className="w-[24px] h-[24px] object-contain" />
      </div>
      <div className="text-[15px] md:text-[16px] font-semibold text-text-main mb-4">
        {segment.airlineCode}
        {segment.flightNumber}
        {className ? ` • ${className}` : ''}
      </div>

      {(hasBaggage || equip) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
          {hasBaggage && (
            <AmenityItem icon={<LuggageIcon width={24} height={24} color="#909090" />}>
              {checkedBaggageText && <div>Hành lý ký gửi: {checkedBaggageText}</div>}
              {carryOnBaggageText && <div>Hành lý xách tay: {carryOnBaggageText}</div>}
            </AmenityItem>
          )}
          {equip && (
            <AmenityItem icon={<AirplaneAmenityIcon width={20} height={20} color="#909090" />}>
              {equip}
            </AmenityItem>
          )}
        </div>
      )}
    </div>
  )
}

function LayoverRow({ label }: { label: string }) {
  return (
    <>
      <div className="flex items-center justify-center">
        <span className="text-[12px] md:text-[13px] font-semibold text-text-secondary text-center px-1">
          {label}
        </span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[10px] h-[10px] rotate-45 border border-text-main bg-white z-10 shrink-0" />
        <div className="w-[2px] bg-text-main opacity-30 flex-1 min-h-[24px] my-[-1px]" />
      </div>
      <div className="pb-2" />
    </>
  )
}

export function DetailTab({ flight }: { flight: Flight }) {
  const segments = flight.segments.length > 0 ? flight.segments : []
  const dep = flight.depEndpoint
  const arr = flight.arrEndpoint

  if (segments.length === 0) {
    return (
      <div className="bg-surface-hover border-x border-border-main py-4 md:py-6 px-3 md:px-6 text-text-secondary text-sm">
        Không có thông tin chi tiết chuyến bay.
      </div>
    )
  }

  return (
    <div>
      <div className="bg-surface-hover border-x border-border-main py-4 md:py-6 px-3 md:px-6">
        <div className="grid grid-cols-[70px_24px_1fr] md:grid-cols-[90px_40px_1fr]">
          <TimeDisplay time={dep.time} date={dep.dateCulture} />
          <div />
          <LocationDisplay
            cityName={dep.cityName}
            airportCode={dep.airportCode}
            airportName={dep.airportName}
            terminal={dep.terminal}
          />

          {segments.map((segment, index) => (
            <Fragment key={`${segment.flightNumber}-${index}`}>
              <div className="flex items-center justify-center">
                <div className="text-[13px] md:text-[14px] font-semibold text-text-secondary">
                  {segment.elapsedTime?.replace(/\s+/g, '') || flight.duration?.replace(/\s+/g, '')}
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[14px] h-[14px] rounded-full border border-text-main bg-white z-10 shrink-0 mt-1.5" />
                <div className="w-[2px] bg-text-main opacity-30 flex-1 my-[-1px] min-h-[40px]" />
              </div>
              <SegmentDetails
                segment={segment}
                flight={flight}
                carryOnBaggageText={index === 0 ? flight.carryOnBaggageText : undefined}
                checkedBaggageText={index === 0 ? flight.checkedBaggageText : undefined}
                airEquip={flight.airEquip}
              />

              {segment.layoverAfter && <LayoverRow label={segment.layoverAfter.label} />}
            </Fragment>
          ))}

          <TimeDisplay time={arr.time} date={arr.dateCulture} />
          <div className="flex flex-col items-center">
            <div className="w-[14px] h-[14px] rounded-full bg-primary z-10 shrink-0" />
          </div>
          <LocationDisplay
            cityName={arr.cityName}
            airportCode={arr.airportCode}
            airportName={arr.airportName}
            terminal={arr.terminal}
          />
        </div>
      </div>
    </div>
  )
}
