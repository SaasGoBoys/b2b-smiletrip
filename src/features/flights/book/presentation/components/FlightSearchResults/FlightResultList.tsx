import React, { useState } from 'react'

import { Button } from 'antd'

import { type Flight, FlightCard } from './FlightCard'

import {
  BoltIcon,
  EntertainmentAmenityIcon,
  LuggageIcon,
  MealAmenityIcon,
  TravelBagIcon} from '@/assets/icons/icons'

const MOCK_FLIGHTS: Flight[] = [
  {
    id: '1',
    airline: 'Vietnam Airlines',
    airlineCode: 'VNA',
    flightNumber: 'VN6025',
    departTime: '06:30',
    arriveTime: '08:45',
    duration: '2h15m',
    isDirectFlight: true,
    price: 2882660,
    amenities: {
      handLuggage: true,
      checkInLuggage: true,
      charging: true,
      meal: true,
      entertainment: true,
    },
    isFeatured: false,
  },
  {
    id: '2',
    airline: 'Vietjet Air',
    airlineCode: 'VJA',
    flightNumber: 'VJ129',
    departTime: '06:30',
    arriveTime: '08:45',
    duration: '2h15m',
    isDirectFlight: true,
    price: 2882660,
    amenities: {
      handLuggage: true,
      checkInLuggage: false,
      charging: true,
      meal: false,
      entertainment: false,
    },
  },
  {
    id: '3',
    airline: 'Bamboo Airway',
    airlineCode: 'BAV',
    flightNumber: 'QH1234',
    departTime: '06:30',
    arriveTime: '08:45',
    duration: '2h15m',
    isDirectFlight: true,
    price: 2882660,
    amenities: {
      handLuggage: true,
      checkInLuggage: true,
      charging: false,
      meal: true,
      entertainment: false,
    },
  },
  {
    id: '4',
    airline: 'Vietnam Airlines',
    airlineCode: 'VNA',
    flightNumber: 'VN6027',
    departTime: '07:00',
    arriveTime: '09:20',
    duration: '2h20m',
    isDirectFlight: true,
    price: 3100000,
    amenities: {
      handLuggage: true,
      checkInLuggage: true,
      charging: true,
      meal: true,
      entertainment: true,
    },
  },
  {
    id: '5',
    airline: 'Sun Phu Quoc Airway',
    airlineCode: 'PQ',
    flightNumber: 'PQ101',
    departTime: '08:00',
    arriveTime: '10:15',
    duration: '2h15m',
    isDirectFlight: true,
    price: 2650000,
    amenities: {
      handLuggage: true,
      checkInLuggage: false,
      charging: false,
      meal: false,
      entertainment: false,
    },
  },
  {
    id: '6',
    airline: 'Vietjet Air',
    airlineCode: 'VJA',
    flightNumber: 'VJ131',
    departTime: '09:00',
    arriveTime: '11:20',
    duration: '2h20m',
    isDirectFlight: true,
    price: 2500000,
    amenities: {
      handLuggage: true,
      checkInLuggage: false,
      charging: false,
      meal: false,
      entertainment: false,
    },
  },
  {
    id: '7',
    airline: 'Bamboo Airway',
    airlineCode: 'BAV',
    flightNumber: 'QH1236',
    departTime: '10:30',
    arriveTime: '12:45',
    duration: '2h15m',
    isDirectFlight: true,
    price: 2750000,
    amenities: {
      handLuggage: true,
      checkInLuggage: true,
      charging: false,
      meal: false,
      entertainment: false,
    },
  },
  {
    id: '8',
    airline: 'Vietravel Airlines',
    airlineCode: 'VTL',
    flightNumber: 'VU602',
    departTime: '11:00',
    arriveTime: '13:25',
    duration: '2h25m',
    isDirectFlight: true,
    price: 2900000,
    amenities: {
      handLuggage: true,
      checkInLuggage: true,
      charging: true,
      meal: false,
      entertainment: false,
    },
  },
]

interface Props {
  from: string
  to: string
}

export function FlightResultList({ from, to }: Props) {
  const [activeFilter, setActiveFilter] = useState('recommended')
  const sortKey = 'criteria' as string
  const [page, setPage] = useState(1)

  const sortedFlights = [...MOCK_FLIGHTS].sort((a, b) => {
    if (sortKey === 'lowest' || sortKey === 'cheapest') return a.price - b.price
    if (sortKey === 'earliest') return a.departTime.localeCompare(b.departTime)
    return 0
  })

  const FLIGHTS_PER_PAGE = 8
  const displayedFlights = sortedFlights.slice(0, page * FLIGHTS_PER_PAGE)
  const hasMore = displayedFlights.length < sortedFlights.length

  return (
    <div className="w-full mb-6">
      {/* Header Blue Bar */}
      <div className="bg-primary px-3 h-[54px] flex items-center justify-between text-white rounded-t-[10px]">
        <div className="flex items-center h-full py-1.5">
          <div className="bg-[#6A7CD9] px-[7px] py-[10px] h-full flex items-center rounded-[10px] cursor-pointer">
            <span className="text-[17px] font-semibold">Bay đến {to}</span>
          </div>
          <div className="px-4 h-full flex items-center cursor-pointer">
            <span className="text-[17px] font-semibold">Bay về {from}</span>
          </div>
        </div>
        <span className="text-[17px] font-regular mr-2">Đã tìm thấy 126 chuyến bay</span>
      </div>

      {/* Gap */}
      <div className="h-[10px] bg-surface-hover" />

      <div className="flex border-b border-border-light h-[84px] items-center bg-white">
        {[
          { key: 'direct', label: 'Ưu tiên bay thẳng', price: '5.346.000đ' },
          { key: 'recommended', label: 'Đề xuất', price: '5.346.000đ' },
          { key: 'cheapest', label: 'Rẻ nhất', price: '5.346.000đ' },
        ].map((tab) => (
          <React.Fragment key={tab.key}>
            <button
              onClick={() => setActiveFilter(tab.key)}
              className="flex-1 min-w-[120px] px-4 flex flex-col items-center justify-center gap-1 relative hover:bg-surface-hover transition-colors h-full cursor-pointer"
            >
              <span className="text-[17px] font-semibold text-text-main">
                {tab.label}
              </span>
              <span className="text-[17px] text-text-secondary font-regular">{tab.price}</span>
              {activeFilter === tab.key && (
                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-text-main" />
              )}
            </button>
            <div className="w-[1px] h-[50px] bg-border-light shrink-0" />
          </React.Fragment>
        ))}

        {/* Sort Label Box */}
        <div className="w-[160px] flex items-center justify-center h-full shrink-0 cursor-pointer hover:bg-surface-hover transition-colors">
          <span className="text-[17px] font-semibold text-text-main">Sắp xếp theo</span>
        </div>

        <div className="w-[1px] h-[50px] bg-border-light shrink-0" />

        {/* Right side Sort Button */}
        <div className="w-[200px] flex items-center justify-center h-full shrink-0">
          <button className="flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-all h-full cursor-pointer">
            <div className="w-[32px] h-[32px] flex items-center justify-center mt-1">
              <img src="/icons/Bell3DIcon.webp" alt="Sort" className="w-full h-full object-contain" />
            </div>
            <span className="text-[17px] whitespace-nowrap">Thông báo</span>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-8 px-4 py-2 text-text-main" >
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <LuggageIcon width={24} height={24} />
          <span className="text-[14px] font-regular">Có hành lý xách tay</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <TravelBagIcon width={24} height={24} />
          <span className="text-[14px] font-regular">Có hành lý ký gửi</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <BoltIcon width={24} height={24} />
          <span className="text-[14px] font-regular">Có sạc điện thoại</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <MealAmenityIcon width={24} height={24} />
          <span className="text-[14px] font-regular">Có suất ăn</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <EntertainmentAmenityIcon width={24} height={24} />
          <span className="text-[14px] font-regular">Có giải trí</span>
        </div>
      </div>


      {/* flights list */}
      <div className="overflow-hidden ">
        <div>
          {displayedFlights.map((flight) => (
            <FlightCard
              key={flight.id}
              flight={flight}
              onBook={(f) => console.log('Book:', f.id)}
            />
          ))}
        </div>

        {hasMore && (
          <div className="p-4 text-center border-t border-border-light">
            <Button onClick={() => setPage((p) => p + 1)} className="rounded-lg">
              Xem thêm chuyến bay
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
