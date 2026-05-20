import type { ReactNode } from 'react'
import { useState } from 'react'

import { Button, Tooltip } from 'antd'

import { AirlineLogo } from '@/shared/components/common/AirlineLogo'
import { useModalController } from '@/shared/components/modals/hooks/useModalController'
import { useBreakpoint } from '@/shared/hooks/useBreakpoint'

import type {
  FlightEndpointView,
  FlightFareClassOption,
  FlightLayoverView,
  FlightSegmentDetailView,
} from '../../utils/flightDetailTypes'
import { FlightRegistryModalKeys } from '../modals/flight.registry.modal'

import { FlightDetailPanel } from './FlightDetailPanel'

import { ChevronDownBoxIcon, LuggageIcon, TravelBagIcon } from '@/assets/icons/icons'

export interface Flight {
  id: string
  airline: string
  airlineCode: string
  logoUrl?: string
  flightNumber: string
  departTime: string
  arriveTime: string
  duration: string
  isDirectFlight: boolean
  stopLabel?: string
  price: number
  amenities: {
    handLuggage: boolean
    checkInLuggage: boolean
  }
  isFeatured?: boolean
  isLaborFare?: boolean
  ticketClassName?: string
  depEndpoint: FlightEndpointView
  arrEndpoint: FlightEndpointView
  segments: FlightSegmentDetailView[]
  layovers: FlightLayoverView[]
  routeLabel: string
  airEquip?: string
  carryOnBaggageText?: string
  checkedBaggageText?: string
  seatsAvailable?: string
  fareClassOptions: FlightFareClassOption[]
  operatedByText?: string
}

interface Props {
  flight: Flight
  onBook?: (flight: Flight) => void
  /** Round-trip leg selection: show "Chọn" and highlight when selected. */
  selectionMode?: boolean
  isSelected?: boolean
  onSelect?: (flight: Flight) => void
}

function AmenityIcon({ icon, active, label }: { icon: ReactNode; active: boolean; label: string }) {
  return (
    <Tooltip title={label}>
      <span
        className={`inline-flex items-center justify-center cursor-default transition-all ${active ? 'opacity-100' : 'opacity-35 grayscale'}`}
      >
        {icon}
      </span>
    </Tooltip>
  )
}

export function FlightCard({
  flight,
  onBook,
  selectionMode = false,
  isSelected = false,
  onSelect,
}: Props) {
  const [showDetail, setShowDetail] = useState(false)
  const { isSmallSize } = useBreakpoint()
  const { open } = useModalController()

  const formattedPrice = flight.price.toLocaleString('vi-VN') + ' đ'

  const handleDetailClick = () => {
    if (isSmallSize) {
      open(FlightRegistryModalKeys.FlightDetail, { flight, onBook: handleDetailBook })
    } else {
      setShowDetail((v) => !v)
    }
  }

  const handlePrimaryAction = () => {
    if (selectionMode) {
      onSelect?.(flight)
      return
    }
    onBook?.(flight)
  }

  const handleDetailBook = () => handlePrimaryAction()

  return (
    <div
      className={`border-b border-border-light ${isSelected ? 'bg-primary/5 ring-1 ring-inset ring-primary/30' : ''}`}
    >
      <div
        className={`flex items-stretch md:items-center gap-2 md:gap-2 px-2 py-3 md:py-0 md:h-[56px] transition-colors duration-150 bg-white hover:bg-white/60 ${isSelected ? '!bg-primary/5' : ''}`}
      >
        {/* Logo */}
        <div className="shrink-0 flex items-center">
          <AirlineLogo airline={flight.airline} logoUrl={flight.logoUrl} />
        </div>

        {/* Column 2: Airline & Number */}
        <div className="flex flex-col justify-center gap-0.5 md:contents flex-1 md:flex-none overflow-hidden">
          {/* Hãng bay */}
          <div className="min-w-0 md:min-w-[180px] shrink-0 overflow-hidden">
            <span className="text-[15px] md:text-[16px] font-semibold text-text-main block truncate leading-tight md:leading-normal">
              {flight.airline}
            </span>
          </div>

          {/* Số hiệu chuyến */}
          <div className="hidden max-md:block min-[950px]:block w-auto md:w-[80px] shrink-0 md:flex-1">
            <span className="text-[13px] font-regular text-text-secondary md:text-text-main whitespace-nowrap">
              {flight.flightNumber}
            </span>
          </div>
        </div>

        {/* Column 3: Time & Amenities */}
        <div className="flex flex-col justify-center gap-1 items-center md:contents shrink-0 min-[550px]:min-w-[150px]">
          {/* Giờ bay */}
          <div className="w-auto md:w-[120px] shrink-0 text-center">
            <span className="text-[14px] md:text-[16px] font-semibold text-text-main whitespace-nowrap">
              {flight.departTime} - {flight.arriveTime}
            </span>
            {flight.stopLabel ? (
              <span className="block text-[11px] md:text-[12px] text-text-secondary truncate max-w-[140px] mx-auto">
                {flight.stopLabel}
              </span>
            ) : flight.isDirectFlight ? (
              <span className="block text-[11px] md:text-[12px] text-text-secondary">
                Bay thẳng
              </span>
            ) : null}
          </div>

          <div className="hidden max-md:flex min-[860px]:flex md:w-[80px] items-center gap-1 md:gap-2 justify-center scale-90 md:scale-100 origin-center">
            <AmenityIcon
              icon={<LuggageIcon width={20} height={20} />}
              active={flight.amenities.handLuggage}
              label="Hành lý xách tay"
            />
            <AmenityIcon
              icon={<TravelBagIcon width={20} height={20} />}
              active={flight.amenities.checkInLuggage}
              label="Hành lý ký gửi"
            />
          </div>
        </div>

        {/* Column 4: Price & Buttons */}
        <div className="flex flex-col justify-between gap-2 items-end md:contents shrink-0 ml-auto md:ml-0">
          {/* Giá */}
          <div className="w-auto md:w-[110px] text-right shrink-0">
            <span className="text-[14px] md:text-[16px] font-bold text-text-main whitespace-nowrap">
              {formattedPrice}
            </span>
          </div>

          <div className="flex items-center gap-1.5 md:contents">
            {/* Chi tiết */}
            <div className="w-auto md:w-[80px] flex justify-center items-center shrink-0">
              <button
                onClick={handleDetailClick}
                className="flex items-center justify-center h-[26px] md:h-auto px-2.5 md:px-0 border border-[#8EDFEB] md:border-none rounded-[6px] md:rounded-none gap-1 text-[12px] md:text-[13px] font-semibold text-primary md:text-text-secondary hover:text-text-main transition-colors shrink-0 cursor-pointer whitespace-nowrap bg-white md:bg-transparent"
              >
                Chi tiết
                <span className="hidden md:block">
                  <ChevronDownBoxIcon width={16} height={16} open={showDetail} />
                </span>
              </button>
            </div>

            {/* Đặt vé */}
            <Button
              onClick={handlePrimaryAction}
              className="!w-[65px] md:!w-[90px] !h-[26px] md:!h-[35px] shrink-0 !rounded-[6px] md:!rounded-[10px] !text-[12px] md:!text-[16px] !font-bold !border-none transition-all hover:opacity-90 !bg-[#8EDFEB] !text-primary !px-0"
            >
              {selectionMode ? 'Chọn' : 'Đặt vé'}
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop: inline panel */}
      {!isSmallSize && showDetail && (
        <FlightDetailPanel flight={flight} onBook={() => handleDetailBook()} />
      )}
    </div>
  )
}
