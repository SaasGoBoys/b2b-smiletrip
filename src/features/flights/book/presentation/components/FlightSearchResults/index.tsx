import { useState } from 'react'

import { Col, Row } from 'antd'

import { type FilterState,FlightFilterPanel } from './FlightFilterPanel'
import { FlightResultList } from './FlightResultList'
import { FlightSummaryCard } from './FlightSummaryCard'

const DEFAULT_SUMMARY_FLIGHTS = [
  {
    leg: 1,
    day: 'Thứ 5 ngày 07/04/2026',
    route: 'Hà Nội → TP. Hồ Chí Minh',
    airline: 'Bamboo Airway',
    departTime: '06:30',
    arriveTime: '08:45',
    isDirectFlight: true,
    changeLabel: 'Đổi chuyến bay đi',
  },
  {
    leg: 2,
    day: 'Thứ 7 ngày 09/04/2026',
    route: 'TP. Hồ Chí Minh → Hà Nội',
    airline: 'Bamboo Airway',
    departTime: '06:30',
    arriveTime: '08:45',
    isDirectFlight: true,
    changeLabel: 'Đổi chuyến bay về',
  },
]

const DEFAULT_FILTERS: FilterState = {
  ticketTypes: [],
  directOnly: false,
  handLuggage: false,
  checkInLuggage: false,
  timeFrom: [0, 24],
  timeTo: [0, 24],
  airlines: ['Vietnam Airlines', 'Bamboo Airways', 'Vietjet Air', 'Sun Phu Quoc Airway', 'Vietravel Airlines'],
  seatClasses: ['Vé phổ thông'],
}

interface Props {
  from?: string
  to?: string
}

export function FlightSearchResults({ from = 'Hà Nội', to = 'TP. Hồ Chí Minh' }: Props) {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS)

  return (
    <Row gutter={[20, 20]}>
      <Col xs={24} lg={7}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <FlightSummaryCard
            flights={DEFAULT_SUMMARY_FLIGHTS}
            totalPrice={6882660}
            onContinue={() => console.log('Continue booking')}
          />
          <FlightFilterPanel
            filters={filters}
            onFilterChange={(partial) => setFilters((prev) => ({ ...prev, ...partial }))}
          />
        </div>
      </Col>
      <Col xs={24} lg={17}>
        <FlightResultList from={from} to={to} />
      </Col>
    </Row>
  )
}
