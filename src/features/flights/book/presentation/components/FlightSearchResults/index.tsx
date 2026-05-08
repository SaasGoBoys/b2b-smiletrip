import { useState } from 'react'

import { Col, Row } from 'antd'

import { useBreakpoint } from '@/shared/hooks/useBreakpoint'

import { DEFAULT_FILTERS, type FilterState } from '../../constants/FlightFilterTypes'

import { FlightFilterPanel } from './FlightFilterPanel'
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
    originCode: 'HAN',
    destCode: 'SGN',
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
    originCode: 'SGN',
    destCode: 'HAN',
  },
]

interface Props {
  from?: string
  to?: string
}

export function FlightSearchResults({ from = 'Hà Nội', to = 'TP. Hồ Chí Minh' }: Props) {
  const { isTabletToXl, isMobile } = useBreakpoint()

  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS)

  const isLargeDesktop = !isTabletToXl && !isMobile

  const handleFilterChange = (partial: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...partial }))
  }

  return (
    <div className="flex flex-col gap-6">
      <Row gutter={[20, 20]}>
        {/* Sidebar: Chỉ hiện ở Desktop >= 1280px */}
        {isLargeDesktop && (
          <Col xs={24} xl={6}>
            <div className="flex flex-col gap-4">
              <FlightSummaryCard
                flights={DEFAULT_SUMMARY_FLIGHTS}
                totalPrice={6882660}
                onContinue={() => console.log('Continue booking')}
              />
              <FlightFilterPanel
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>
          </Col>
        )}

        {/* Danh sách kết quả & Summary Card trên Mobile/Tablet */}
        <Col xs={24} xl={isLargeDesktop ? 18 : 24}>
          {!isLargeDesktop && (
            <div className="mb-4">
              <FlightSummaryCard
                flights={DEFAULT_SUMMARY_FLIGHTS}
                totalPrice={6882660}
                onContinue={() => console.log('Continue booking')}
              />
            </div>
          )}
          <FlightResultList from={from} to={to} />
        </Col>
      </Row>
    </div>
  )
}
