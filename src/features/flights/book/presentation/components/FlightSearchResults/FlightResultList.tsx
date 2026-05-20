import React, { useMemo, useState } from 'react'

import { Button, Spin } from 'antd'

import { useModalController } from '@/shared/components/modals/hooks/useModalController'
import { useRegisterModals } from '@/shared/components/modals/hooks/useRegisterModals'
import { useBreakpoint } from '@/shared/hooks/useBreakpoint'

import type { FlightItineraryEntity } from '../../../domain/entities'
import type { FlightFareOptionEntity } from '../../../domain/entities/FlightFareOptionEntity'
import type { FlightSearchResultEntity } from '../../../domain/entities/FlightSearchResultEntity'
import { useFlightFilterStore } from '../../store/flightFilterStore'
import { filterItineraries } from '../../utils/flightFilterUtils'
import { isDirectFlight } from '../../utils/flightItineraryHelpers'
import { mapItineraryToFlightCard } from '../../utils/mapFlightToCard'
import type { FlightLegPhase } from '../../utils/roundTripFlightUtils'
import flightRegistryModals, { FlightRegistryModalKeys } from '../modals/flight.registry.modal'

import { FlightCard } from './FlightCard'

import { BoltIcon, FilterSettingsIcon, LuggageIcon, TravelBagIcon } from '@/assets/icons/icons'

type SortKey = 'recommended' | 'cheapest' | 'elapsed-time' | 'direct'

function sortItineraries(
  items: FlightItineraryEntity[],
  fareMap: Map<string, FlightFareOptionEntity>,
  key: SortKey
): FlightItineraryEntity[] {
  return [...items].sort((a, b) => {
    const priceA = fareMap.get(a.id)?.price.pricePerPaxValue ?? 0
    const priceB = fareMap.get(b.id)?.price.pricePerPaxValue ?? 0

    if (key === 'cheapest') return priceA - priceB
    if (key === 'elapsed-time') return a.elapsedTimeValue - b.elapsedTimeValue
    if (key === 'direct') {
      const directDelta = Number(isDirectFlight(b)) - Number(isDirectFlight(a))
      return directDelta !== 0 ? directDelta : priceA - priceB
    }

    // recommended: direct first, then lower price
    const scoreA = isDirectFlight(a) ? 1 : 2
    const scoreB = isDirectFlight(b) ? 1 : 2
    const scoreDelta = scoreA - scoreB
    return scoreDelta !== 0 ? scoreDelta : priceA - priceB
  })
}

interface SortStats {
  cheapestPrice: number
  recommendedPrice: number
  fastestPrice: number
  directPrice: number
  hasDirectFlights: boolean
}

function deriveSortStats(
  items: FlightItineraryEntity[],
  fareMap: Map<string, FlightFareOptionEntity>
): SortStats {
  const priced = items.filter((it) => (fareMap.get(it.id)?.price.pricePerPaxValue ?? 0) > 0)
  const prices = priced.map((it) => fareMap.get(it.id)!.price.pricePerPaxValue)
  const cheapest = prices.length > 0 ? Math.min(...prices) : 0

  const directItems = priced.filter(isDirectFlight)
  const recommendedPool = directItems.length > 0 ? directItems : priced
  const recommendedPrice =
    recommendedPool.length > 0
      ? Math.min(...recommendedPool.map((it) => fareMap.get(it.id)!.price.pricePerPaxValue))
      : cheapest

  const fastestItem = [...priced].sort((a, b) => a.elapsedTimeValue - b.elapsedTimeValue)[0]
  const fastestPrice = fastestItem
    ? (fareMap.get(fastestItem.id)?.price.pricePerPaxValue ?? cheapest)
    : cheapest

  const directPrice =
    directItems.length > 0
      ? Math.min(...directItems.map((it) => fareMap.get(it.id)!.price.pricePerPaxValue))
      : 0

  return {
    cheapestPrice: cheapest,
    recommendedPrice,
    fastestPrice,
    directPrice,
    hasDirectFlights: directItems.length > 0,
  }
}

const QUICK_FILTER_ICONS: Record<string, React.ReactNode> = {
  'Bay thẳng': <BoltIcon width={24} height={24} />,
  'Có hành lý xách tay': <LuggageIcon width={24} height={24} />,
  'Có hành lý ký gửi': <TravelBagIcon width={24} height={24} />,
  'Vé lao động': <LuggageIcon width={24} height={24} />,
}

interface Props {
  from: string
  to: string
  isRoundTrip?: boolean
  activeLeg?: FlightLegPhase
  selectedOutbound?: FlightItineraryEntity | null
  selectedReturn?: FlightItineraryEntity | null
  listItineraries: FlightItineraryEntity[]
  onChangeLeg?: (leg: FlightLegPhase) => void
  onSelectOutbound?: (itinerary: FlightItineraryEntity) => void
  onBookRoundTrip?: (returnItinerary: FlightItineraryEntity) => void
  onSelectOneWay?: (itinerary: FlightItineraryEntity) => void
  result?: FlightSearchResultEntity
  isFetching?: boolean
}

const FLIGHTS_PER_PAGE = 20

export function FlightResultList({
  from,
  to,
  isRoundTrip = false,
  activeLeg = 'outbound',
  selectedOutbound = null,
  listItineraries,
  onChangeLeg,
  onSelectOutbound,
  onBookRoundTrip,
  onSelectOneWay,
  result,
  isFetching = false,
}: Props) {
  const [sortKey, setSortKey] = useState<SortKey>('recommended')
  const page = useFlightFilterStore((s) => s.resultPage)
  const setResultPage = useFlightFilterStore((s) => s.setResultPage)
  const filters = useFlightFilterStore((s) => s.filters)
  const bounds = useFlightFilterStore((s) => s.bounds)
  const setFilters = useFlightFilterStore((s) => s.setFilters)
  const resetFiltersToBounds = useFlightFilterStore((s) => s.resetFiltersToBounds)

  const { open } = useModalController()
  const { isTabletToXl, isMobile } = useBreakpoint()
  useRegisterModals(flightRegistryModals)

  const isLargeDesktop = !isTabletToXl && !isMobile

  const itineraries = listItineraries
  const isPending = !result
  const isDone = result?.status === 'done'

  const fareMap = useMemo(() => {
    const map = new Map<string, FlightFareOptionEntity>()
    result?.prices.forEach((p) => map.set(p.id, p))
    return map
  }, [result])

  const filteredItineraries = useMemo(
    () => filterItineraries(itineraries, fareMap, filters),
    [itineraries, fareMap, filters]
  )

  const sortedItineraries = useMemo(
    () => sortItineraries(filteredItineraries, fareMap, sortKey),
    [filteredItineraries, fareMap, sortKey]
  )

  const stats = useMemo(
    () => deriveSortStats(filteredItineraries, fareMap),
    [filteredItineraries, fareMap]
  )

  const flights = sortedItineraries
    .slice(0, page * FLIGHTS_PER_PAGE)
    .map((it) => mapItineraryToFlightCard(it, fareMap.get(it.id)))

  const hasMore = page * FLIGHTS_PER_PAGE < sortedItineraries.length
  const totalCount = sortedItineraries.length
  const sortTabs: { key: SortKey; label: string; price: number; hidden?: boolean }[] = [
    { key: 'recommended', label: 'Đề xuất', price: stats.recommendedPrice },
    {
      key: 'direct',
      label: 'Bay thẳng',
      price: stats.directPrice,
      hidden: !stats.hasDirectFlights,
    },
    { key: 'cheapest', label: 'Rẻ nhất', price: stats.cheapestPrice },
    { key: 'elapsed-time', label: 'Bay nhanh nhất', price: stats.fastestPrice },
  ]

  const visibleSortTabs = sortTabs.filter((t) => !t.hidden)

  const quickFilters = useMemo(() => {
    const stopDirect = bounds.stops.find((s) => s.value === '0')
    const items: { key: string; label: string; icon: React.ReactNode }[] = []

    if (stopDirect) {
      items.push({ key: 'stop:0', label: stopDirect.label, icon: QUICK_FILTER_ICONS['Bay thẳng'] })
    }

    for (const label of bounds.availableTicketTypes) {
      if (label === 'Bay thẳng') continue
      items.push({
        key: `ticket:${label}`,
        label,
        icon: QUICK_FILTER_ICONS[label] ?? <LuggageIcon width={24} height={24} />,
      })
    }

    return items
  }, [bounds])

  const isQuickFilterActive = (key: string) => {
    if (key === 'stop:0') return filters.stops.includes('0')
    if (key.startsWith('ticket:')) {
      const label = key.slice('ticket:'.length)
      return filters.ticketTypes.includes(label)
    }
    return false
  }

  const toggleQuickFilter = (key: string) => {
    if (key === 'stop:0') {
      const active = filters.stops.includes('0')
      setFilters({ stops: active ? filters.stops.filter((s) => s !== '0') : ['0'] })
      return
    }
    if (key.startsWith('ticket:')) {
      const label = key.slice('ticket:'.length)
      const active = filters.ticketTypes.includes(label)
      setFilters({
        ticketTypes: active
          ? filters.ticketTypes.filter((t) => t !== label)
          : [...filters.ticketTypes, label],
      })
    }
  }

  const formatPrice = (v: number) => (v > 0 ? v.toLocaleString('vi-VN') + 'đ' : '—')

  const isOutboundSelectPhase = isRoundTrip && activeLeg === 'outbound'

  const findItinerary = (flightId: string) => itineraries.find((it) => it.id === flightId)

  const handleSelectOutbound = (flightId: string) => {
    const itinerary = findItinerary(flightId)
    if (itinerary) onSelectOutbound?.(itinerary)
  }

  const handleBook = (flightId: string) => {
    const itinerary = findItinerary(flightId)
    if (!itinerary) return

    if (isRoundTrip && activeLeg === 'return') {
      if (!selectedOutbound) return
      onBookRoundTrip?.(itinerary)
      return
    }
    onSelectOneWay?.(itinerary)
  }

  const legTabClass = (leg: FlightLegPhase, enabled: boolean) => {
    const active = activeLeg === leg
    if (!enabled) {
      return 'px-2 md:px-4 h-full flex items-center opacity-40 cursor-not-allowed border-none text-white bg-transparent'
    }
    if (active) {
      return 'bg-[#6A7CD9] px-[8px] md:px-[7px] py-[6px] md:py-[10px] h-full flex items-center rounded-[10px] cursor-pointer border-none text-white'
    }
    return 'px-2 md:px-4 h-full flex items-center cursor-pointer hover:bg-white/10 rounded-[10px] transition-colors border-none text-white bg-transparent'
  }

  const emptyListMessage =
    isRoundTrip && activeLeg === 'return' && selectedOutbound
      ? 'Không có chuyến bay về phù hợp với chuyến đi đã chọn.'
      : isRoundTrip
        ? 'Không có chuyến bay khứ hồi phù hợp.'
        : 'Không tìm thấy chuyến bay phù hợp.'

  return (
    <div className="w-full mb-6">
      <div className="bg-primary px-2 md:px-3 h-[44px] md:h-[54px] flex items-center justify-between text-white rounded-t-[10px]">
        <div className="flex items-center h-full py-1.5">
          {isRoundTrip ? (
            <>
              <button
                type="button"
                className={legTabClass('outbound', true)}
                onClick={() => onChangeLeg?.('outbound')}
              >
                <span className="text-[15px] md:text-[17px] font-semibold">Bay đến {to}</span>
              </button>
              <button
                type="button"
                className={legTabClass('return', Boolean(selectedOutbound))}
                disabled={!selectedOutbound}
                onClick={() => selectedOutbound && onChangeLeg?.('return')}
              >
                <span className="text-[15px] md:text-[17px] font-semibold">Bay về {from}</span>
              </button>
            </>
          ) : (
            <div className="bg-[#6A7CD9] px-[8px] md:px-[7px] py-[6px] md:py-[10px] h-full flex items-center rounded-[10px]">
              <span className="text-[15px] md:text-[17px] font-semibold">Bay đến {to}</span>
            </div>
          )}
        </div>
        <div className="hidden md:flex items-center gap-2 mr-2">
          {isFetching && !isDone && (
            <Spin size="small" className="[&_.ant-spin-dot-item]:bg-white!" />
          )}
          <span className="text-[17px] font-regular">
            {isDone
              ? `Đã tìm thấy ${totalCount} chuyến bay`
              : totalCount > 0
                ? `Đang tải... (${totalCount} chuyến)`
                : 'Đang tìm kiếm...'}
          </span>
        </div>
      </div>

      <div className="h-[10px] bg-surface-hover" />

      <div className="flex border-b border-border-light h-[64px] lg:h-[84px] items-center bg-white">
        {visibleSortTabs.map((tab, i) => (
          <React.Fragment key={tab.key}>
            <button
              type="button"
              onClick={() => {
                setSortKey(tab.key)
                setResultPage(1)
              }}
              className={`flex-1 lg:min-w-[100px] px-1 lg:px-3 flex-col items-center justify-center gap-0.5 lg:gap-1 relative hover:bg-surface-hover transition-colors h-full cursor-pointer flex ${i > 1 ? 'hidden sm:flex' : 'flex'}`}
            >
              <span className="text-[13px] lg:text-[17px] font-semibold text-text-main text-center leading-tight lg:whitespace-nowrap">
                {tab.label}
              </span>
              <span className="text-[13px] lg:text-[17px] text-text-secondary font-regular whitespace-nowrap">
                {formatPrice(tab.price)}
              </span>
              {sortKey === tab.key && (
                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-text-main" />
              )}
            </button>
            {i < visibleSortTabs.length - 1 && (
              <div
                className={`w-px h-[30px] lg:h-[50px] bg-border-light shrink-0 ${i >= 1 ? 'hidden sm:block' : ''}`}
              />
            )}
          </React.Fragment>
        ))}

        <div className="w-px h-[30px] lg:h-[50px] bg-border-light shrink-0" />

        <div className="shrink-0 lg:w-[200px] flex items-center justify-center h-full px-3 lg:px-0">
          {isLargeDesktop ? (
            <button
              type="button"
              className="flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-all h-full cursor-pointer"
            >
              <div className="w-[32px] h-[32px] flex items-center justify-center mt-1">
                <img src="/icons/Bell3DIcon.webp" alt="" className="w-full h-full object-contain" />
              </div>
              <span className="text-[17px] whitespace-nowrap">Thông báo</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => open(FlightRegistryModalKeys.FlightFilter)}
              className="flex items-center gap-1.5 lg:gap-2 text-primary font-semibold hover:opacity-80 transition-all h-full cursor-pointer bg-transparent border-none outline-none"
            >
              <span className="text-[14px] lg:text-[17px] whitespace-nowrap">Bộ lọc</span>
              <FilterSettingsIcon color="#4558b6" width={20} height={20} />
            </button>
          )}
        </div>
      </div>

      {quickFilters.length > 0 && (
        <div className="flex items-center gap-3 lg:gap-6 px-2 lg:px-4 py-2 text-text-main overflow-x-auto scrollbar-hide">
          {quickFilters.map((item) => {
            const active = isQuickFilterActive(item.key)
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => toggleQuickFilter(item.key)}
                className={`flex items-center gap-1.5 lg:gap-2 shrink-0 cursor-pointer rounded-full px-3 py-1.5 border transition-colors ${
                  active
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border-light bg-white hover:border-primary/40'
                }`}
              >
                {item.icon}
                <span className="text-[13px] lg:text-[14px] font-regular whitespace-nowrap">
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      )}

      <div className="overflow-hidden">
        {isPending ? (
          <div className="flex items-center justify-center py-20">
            <Spin size="large" />
          </div>
        ) : result?.isNotFound ? (
          <div className="flex items-center justify-center py-20 text-text-secondary text-[16px]">
            Không tìm thấy chuyến bay phù hợp.
          </div>
        ) : filteredItineraries.length === 0 && itineraries.length > 0 ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3 text-text-secondary px-4 text-center">
            <p className="text-[16px]">Không có chuyến bay phù hợp với bộ lọc.</p>
            <Button type="link" onClick={resetFiltersToBounds}>
              Xóa bộ lọc
            </Button>
          </div>
        ) : filteredItineraries.length === 0 && isDone ? (
          <div className="flex items-center justify-center py-20 text-text-secondary text-[16px] px-4 text-center">
            {emptyListMessage}
          </div>
        ) : (
          <>
            {flights.map((flight) => (
              <FlightCard
                key={flight.id}
                flight={flight}
                selectionMode={isOutboundSelectPhase}
                isSelected={isOutboundSelectPhase && flight.id === selectedOutbound?.id}
                onSelect={(f) => handleSelectOutbound(f.id)}
                onBook={(f) => handleBook(f.id)}
              />
            ))}

            {!isDone && itineraries.length === 0 && (
              <div className="flex items-center justify-center py-10 gap-3 text-text-secondary">
                <Spin />
                <span>Đang tải kết quả...</span>
              </div>
            )}

            {hasMore && (
              <div className="p-4 text-center border-t border-border-light">
                <Button
                  onClick={() => setResultPage(page + 1)}
                  className="rounded-lg h-10 px-6 font-semibold"
                >
                  Xem thêm chuyến bay
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
