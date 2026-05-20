import { useMemo, useState } from 'react'

import { Col, Row } from 'antd'

import { useBreakpoint } from '@/shared/hooks/useBreakpoint'

import type { FlightItineraryEntity } from '../../../domain/entities'
import type { FlightFareOptionEntity } from '../../../domain/entities/FlightFareOptionEntity'
import { useFlightSearchResultQuery } from '../../hooks/useFlightSearchResultQuery'
import { useSyncFlightFilterBounds } from '../../hooks/useSyncFlightFilterBounds'
import { useFlightFilterStore } from '../../store/flightFilterStore'
import { type FlightLegPhase, resolveListItineraries } from '../../utils/roundTripFlightUtils'

import { FlightFilterPanel } from './FlightFilterPanel'
import { FlightResultList } from './FlightResultList'
import { FlightSummaryCard } from './FlightSummaryCard'

interface Props {
  from?: string
  to?: string
  sessionId?: string
  currency?: string
  tripType?: 'one-way' | 'round-trip'
}

export function FlightSearchResults({
  from = 'Hà Nội',
  to = 'TP. Hồ Chí Minh',
  sessionId = '',
  currency = 'VND',
  tripType = 'one-way',
}: Props) {
  const { isTabletToXl, isMobile } = useBreakpoint()
  const isLargeDesktop = !isTabletToXl && !isMobile
  const setResultPage = useFlightFilterStore((s) => s.setResultPage)

  const { data: result, isFetching } = useFlightSearchResultQuery(sessionId, currency)

  const isRoundTripUi = tripType === 'round-trip'

  const [activeLeg, setActiveLeg] = useState<FlightLegPhase>('outbound')
  const [selectedOutbound, setSelectedOutbound] = useState<FlightItineraryEntity | null>(null)
  const [selectedReturn, setSelectedReturn] = useState<FlightItineraryEntity | null>(null)

  const fareMap = useMemo(() => {
    const map = new Map<string, FlightFareOptionEntity>()
    result?.prices.forEach((p) => map.set(p.id, p))
    return map
  }, [result])

  const listItineraries = useMemo(
    () => resolveListItineraries(result, fareMap, tripType, activeLeg, selectedOutbound),
    [result, fareMap, tripType, activeLeg, selectedOutbound]
  )

  const legFilterKey = useMemo(() => {
    if (tripType !== 'round-trip') return 'one-way'
    if (activeLeg === 'return' && selectedOutbound) {
      return `return:${selectedOutbound.id}`
    }
    return 'outbound'
  }, [tripType, activeLeg, selectedOutbound])

  useSyncFlightFilterBounds(sessionId, result, listItineraries, legFilterKey)

  const selectedItineraries = useMemo(() => {
    const items: FlightItineraryEntity[] = []
    if (selectedOutbound) items.push(selectedOutbound)
    if (selectedReturn) items.push(selectedReturn)
    return items
  }, [selectedOutbound, selectedReturn])

  const totalPriceLabel = useMemo(() => {
    if (selectedItineraries.length === 0) return '—'
    const total = selectedItineraries.reduce((sum, it) => {
      const price = fareMap.get(it.id)?.price.pricePerPaxValue ?? 0
      return sum + price
    }, 0)
    return total > 0 ? total.toLocaleString('vi-VN') + ' đ' : '—'
  }, [selectedItineraries, fareMap])

  const handleSelectOutbound = (itinerary: FlightItineraryEntity) => {
    setSelectedOutbound(itinerary)
    setSelectedReturn(null)
    setActiveLeg('return')
    setResultPage(1)
  }

  const handleBookRoundTrip = (returnItinerary: FlightItineraryEntity) => {
    if (!selectedOutbound) return
    setSelectedReturn(returnItinerary)
    console.log('Book round-trip', selectedOutbound.id, returnItinerary.id)
  }

  const handleBookOneWay = (itinerary: FlightItineraryEntity) => {
    setSelectedOutbound(itinerary)
    console.log('Book one-way', itinerary.id)
  }

  const handleChangeLeg = (leg: FlightLegPhase) => {
    if (!isRoundTripUi) return
    setActiveLeg(leg)
    setResultPage(1)
    if (leg === 'outbound') {
      setSelectedReturn(null)
    }
  }

  const handleSummaryLegAction = (legIndex: number) => {
    if (legIndex === 0) {
      setSelectedReturn(null)
      setSelectedOutbound(null)
      setActiveLeg('outbound')
      setResultPage(1)
      return
    }
    if (legIndex === 1 && selectedOutbound) {
      setSelectedReturn(null)
      setActiveLeg('return')
      setResultPage(1)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <Row gutter={[20, 20]}>
        {isLargeDesktop && (
          <Col xs={24} xl={6}>
            <div className="flex flex-col gap-4">
              <FlightSummaryCard
                selectedItineraries={selectedItineraries}
                totalPriceLabel={totalPriceLabel}
                onLegAction={isRoundTripUi ? handleSummaryLegAction : undefined}
              />
              <FlightFilterPanel />
            </div>
          </Col>
        )}

        <Col xs={24} xl={isLargeDesktop ? 18 : 24}>
          {!isLargeDesktop && (
            <div className="mb-4">
              <FlightSummaryCard
                selectedItineraries={selectedItineraries}
                totalPriceLabel={totalPriceLabel}
                onLegAction={isRoundTripUi ? handleSummaryLegAction : undefined}
              />
            </div>
          )}
          <FlightResultList
            from={from}
            to={to}
            isRoundTrip={isRoundTripUi}
            result={result}
            isFetching={isFetching}
            activeLeg={activeLeg}
            selectedOutbound={selectedOutbound}
            selectedReturn={selectedReturn}
            listItineraries={listItineraries}
            onChangeLeg={handleChangeLeg}
            onSelectOutbound={handleSelectOutbound}
            onBookRoundTrip={handleBookRoundTrip}
            onSelectOneWay={handleBookOneWay}
          />
        </Col>
      </Row>
    </div>
  )
}
