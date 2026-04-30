import { useState } from 'react'

import { Button, Tabs, Typography } from 'antd'

import { type Flight,FlightCard } from './FlightCard'

const { Text } = Typography

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

const SORT_OPTIONS = [
  { key: 'criteria', label: 'Ưu tiên theo tiêu chí' },
  { key: 'lowest', label: 'Giá thấp nhất' },
  { key: 'earliest', label: 'Bay sớm nhất' },
  { key: 'cheapest', label: 'Rẻ nhất' },
]

export function FlightResultList({ from, to }: Props) {
  const [activeTab, setActiveTab] = useState('outbound')
  const [sortKey, setSortKey] = useState('criteria')
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
    <div
      style={{
        background: '#fff',
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 16px',
          borderBottom: '1px solid #f0f0f0',
        }}
      >
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          size="small"
          style={{ margin: 0 }}
          tabBarStyle={{ margin: 0, border: 'none' }}
          items={[
            { key: 'outbound', label: `Bay đến ${to}` },
            { key: 'inbound', label: `Bay về ${from}` },
          ]}
        />
        <Text type="secondary" style={{ fontSize: 13 }}>
          Đã tìm thấy <strong>{MOCK_FLIGHTS.length}</strong> chuyến bay
        </Text>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '10px 16px',
          background: '#f9fafb',
          borderBottom: '1px solid #f0f0f0',
          flexWrap: 'wrap',
        }}
      >
        {SORT_OPTIONS.map((opt) => (
          <button
            key={opt.key}
            onClick={() => setSortKey(opt.key)}
            style={{
              padding: '4px 14px',
              borderRadius: 20,
              border: sortKey === opt.key ? '1px solid #4558B6' : '1px solid #e5e7eb',
              background: sortKey === opt.key ? '#eff6ff' : '#fff',
              color: sortKey === opt.key ? '#4558B6' : '#374151',
              fontSize: 13,
              fontWeight: sortKey === opt.key ? 600 : 400,
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          padding: '8px 16px',
          background: '#fff8f0',
          borderBottom: '1px solid #fed7aa',
          fontSize: 13,
          color: '#92400e',
        }}
      >
        <span>🧳 Có hành lý xách tay</span>
        <span>🏷️ Có hành lý ký gửi</span>
        <span>⚡ Có sạc điện thoại</span>
        <span>🍽️ Có suất ăn</span>
        <span>🎬 Có giải trí</span>
      </div>

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
        <div style={{ padding: '16px', textAlign: 'center', borderTop: '1px solid #f0f0f0' }}>
          <Button onClick={() => setPage((p) => p + 1)} style={{ borderRadius: 8 }}>
            Xem thêm chuyến bay
          </Button>
        </div>
      )}
    </div>
  )
}
