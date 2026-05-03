import type { ReactNode } from 'react'
import { useState } from 'react'

import { Button, Tooltip } from 'antd'

import { AirlineLogo } from '@/shared/components/common/AirlineLogo'

import { FlightDetailPanel } from './FlightDetailPanel'

import {
  BoltIcon,
  ChevronDownBoxIcon,
  EntertainmentAmenityIcon,
  LuggageIcon,
  MealAmenityIcon,
  TravelBagIcon} from '@/assets/icons/icons'

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
  price: number
  amenities: {
    handLuggage: boolean
    checkInLuggage: boolean
    charging: boolean
    meal: boolean
    entertainment: boolean
  }
  promotions?: string[]
  isFeatured?: boolean
}

interface Props {
  flight: Flight
  onBook?: (flight: Flight) => void
}



function AmenityIcon({ icon, active, label }: { icon: ReactNode; active: boolean; label: string }) {
  return (
    <Tooltip title={label}>
      <span className={`inline-flex items-center justify-center cursor-default transition-all ${active ? 'opacity-100' : 'opacity-35 grayscale'}`}>
        {icon}
      </span>
    </Tooltip>
  )
}

export function FlightCard({ flight, onBook }: Props) {
  const [showDetail, setShowDetail] = useState(false)

  const formattedPrice = flight.price.toLocaleString('vi-VN') + ' đ'

  return (
    <div className="border-b border-border-light">
      <div className={`flex items-center gap-2 px-2 h-[56px] transition-colors duration-150 bg-white hover:bg-white/60`}>

        {/* Logo */}
        <div className="shrink-0">
          <AirlineLogo airline={flight.airline} logoUrl={flight.logoUrl} />
        </div>

        {/* Hãng bay */}
        <div className="min-w-[150px] shrink-0 overflow-hidden flex-1">
          <span className="text-[16px] font-semibold text-text-main block truncate">{flight.airline}</span>
        </div>

        {/* Số hiệu chuyến */}
        <div className="w-[80px] shrink-0 text-center">
          <span className="text-[16px] font-regular text-text-main whitespace-nowrap">{flight.flightNumber}</span>
        </div>

        {/* Giờ bay */}
        <div className="w-[120px] shrink-0 text-center">
          <span className="text-[16px] font-semibold text-text-main whitespace-nowrap">
            {flight.departTime} - {flight.arriveTime}
          </span>
        </div>

        {/* Icon tiện ích */}
        <div className="w-[140px] flex items-center gap-2 justify-center">
          <AmenityIcon icon={<LuggageIcon width={20} height={20} />} active={flight.amenities.handLuggage} label="Hành lý xách tay" />
          <AmenityIcon icon={<TravelBagIcon width={20} height={20} />} active={flight.amenities.checkInLuggage} label="Hành lý ký gửi" />
          <AmenityIcon icon={<BoltIcon width={20} height={20} />} active={flight.amenities.charging} label="Sạc điện thoại" />
          <AmenityIcon icon={<MealAmenityIcon width={20} height={20} />} active={flight.amenities.meal} label="Suất ăn" />
          <AmenityIcon icon={<EntertainmentAmenityIcon width={20} height={20} />} active={flight.amenities.entertainment} label="Giải trí" />
        </div>

        {/* Giá */}
        <div className="w-[110px] text-right shrink-0">
          <span className="text-[16px] font-bold text-text-main whitespace-nowrap">{formattedPrice}</span>
        </div>

        {/* Chi tiết */}
        <div className="w-[80px] flex justify-center items-center shrink-0">
          <button
            onClick={() => setShowDetail((v) => !v)}
            className="flex items-center gap-1 text-[13px] font-semibold text-text-secondary hover:text-text-main transition-colors shrink-0 cursor-pointer whitespace-nowrap"
          >
            Chi tiết
            <ChevronDownBoxIcon width={16} height={16} open={showDetail} />
          </button>
        </div>

        {/* Đặt vé */}
        <Button
          onClick={() => onBook?.(flight)}
          className="!w-[90px] !h-[35px] shrink-0 !rounded-[10px] !text-[16px] !font-bold !border-none transition-all hover:opacity-90 !bg-[#8EDFEB] !text-primary"
        >
          Đặt vé
        </Button>
      </div>

      {showDetail && (
        <FlightDetailPanel
          flight={flight}
          onBook={onBook}
        />
      )}
    </div>
  )
}
