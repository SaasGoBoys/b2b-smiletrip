import { useCallback, useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { message, Spin } from 'antd'

import type { Dayjs } from 'dayjs'

import AppRoutes from '@/app/router/paths'

import {
  FLIGHT_SEARCH_DEFAULT_CURRENCY,
  flightSearchStateToSearchParams,
  formValuesToUrlState,
  parseFlightSearchFromUrl,
} from '@/shared/components/SearchForm/FlightSearchForm/flightSearchUrlParams'
import { useBreakpoint } from '@/shared/hooks/useBreakpoint'
import useSearchFlightsMutation from '@/shared/kernels/airport/presentation/hooks/useSearchFlightsMutation'
import { buildFlightSearchInput } from '@/shared/kernels/airport/presentation/utils/buildFlightSearchInput'
import { brandColors } from '@/shared/lib/antd-theme/tokens'

import {
  buildSliderDateRange,
  findDateIndex,
  formatSliderDateLabel,
  getCenteredWindowStart,
  getVisibleDateCount,
  resolveReturnDateForNewDepart,
} from '../utils/datePriceSliderUtils'

import { ChevronLeftLargeIcon, ChevronRightLargeIcon } from '@/assets/icons/icons'

export function DatePriceSlider() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { mutateAsync: searchFlights, isPending } = useSearchFlightsMutation()
  const { isSmallMobile, isMobile, isTablet } = useBreakpoint()

  const formState = useMemo(() => parseFlightSearchFromUrl(searchParams), [searchParams])
  const selectedDate = formState.departDate.startOf('day')

  const visibleCount = getVisibleDateCount({ isSmallMobile, isMobile, isTablet })

  const allDates = useMemo(() => buildSliderDateRange(selectedDate), [selectedDate])

  const selectedIndex = useMemo(
    () => findDateIndex(allDates, selectedDate),
    [allDates, selectedDate]
  )

  const centeredStartIndex = useMemo(
    () => getCenteredWindowStart(selectedIndex, visibleCount, allDates.length),
    [selectedIndex, visibleCount, allDates.length]
  )

  const [viewStartIndex, setViewStartIndex] = useState(centeredStartIndex)

  const maxStartIndex = Math.max(0, allDates.length - visibleCount)
  const effectiveStartIndex = Math.min(viewStartIndex, maxStartIndex)
  const visibleDates = allDates.slice(effectiveStartIndex, effectiveStartIndex + visibleCount)

  const activeIndexInVisible = visibleDates.findIndex((d) => d.isSame(selectedDate, 'day'))
  const itemWidthPercent = visibleCount > 0 ? 100 / visibleCount : 100

  const runSearchForDate = useCallback(
    async (newDepart: Dayjs) => {
      if (newDepart.isSame(selectedDate, 'day')) return

      const returnDate = resolveReturnDateForNewDepart(
        formState.tripType,
        newDepart,
        formState.departDate,
        formState.returnDate
      )

      try {
        const input = buildFlightSearchInput({
          from: formState.from,
          to: formState.to,
          tripType: formState.tripType,
          departDate: newDepart,
          returnDate: formState.tripType === 'round-trip' ? returnDate : null,
          adults: formState.adults,
          children: formState.children,
          infants: formState.infants,
          seatClass: formState.seatClass,
        })

        const session = await searchFlights(input)

        const query = flightSearchStateToSearchParams(
          formValuesToUrlState({
            sessionId: session.sessionId,
            currency: searchParams.get('currency') ?? FLIGHT_SEARCH_DEFAULT_CURRENCY,
            from: formState.from,
            to: formState.to,
            fromName: formState.fromName,
            toName: formState.toName,
            tripType: formState.tripType,
            departDate: newDepart,
            returnDate: formState.tripType === 'round-trip' ? returnDate : null,
            adults: formState.adults,
            children: formState.children,
            infants: formState.infants,
            seatClass: formState.seatClass,
            ticketType: formState.ticketType,
          })
        )

        navigate(`${AppRoutes.flightBooking}?${query.toString()}`, { replace: true })
      } catch {
        message.error('Không thể tìm chuyến bay. Vui lòng thử lại sau.')
      }
    },
    [formState, navigate, searchFlights, searchParams, selectedDate]
  )

  const handlePrev = () => {
    if (effectiveStartIndex > 0) setViewStartIndex((i) => Math.max(0, i - 1))
  }

  const handleNext = () => {
    if (effectiveStartIndex < maxStartIndex) {
      setViewStartIndex((i) => Math.min(maxStartIndex, i + 1))
    }
  }

  return (
    <div className="relative w-full">
      {isPending && (
        <div className="absolute inset-0 z-20 flex items-center justify-center rounded-[20px] bg-white/70">
          <Spin />
        </div>
      )}

      <div className="w-full bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center h-[64px] sm:h-[74px] overflow-hidden">
        <button
          type="button"
          onClick={handlePrev}
          disabled={isPending || effectiveStartIndex === 0}
          className={`w-[50px] sm:w-[74px] h-full flex items-center justify-center border-r-[2px] sm:border-r-[4px] border-surface-hover transition-all duration-300
          ${effectiveStartIndex === 0 || isPending ? 'cursor-not-allowed opacity-30' : 'cursor-pointer hover:bg-surface-hover active:scale-95'}`}
        >
          <ChevronLeftLargeIcon
            width={isSmallMobile ? 14 : 20}
            height={isSmallMobile ? 24 : 36}
            color={brandColors.textMain}
          />
        </button>

        <div className="flex-1 flex h-full relative">
          {activeIndexInVisible !== -1 && (
            <div
              className="absolute bottom-0 h-[2px] md:h-[4px] bg-text-main transition-all duration-300 ease-out z-10"
              style={{
                width: `${itemWidthPercent}%`,
                left: `${activeIndexInVisible * itemWidthPercent}%`,
              }}
            />
          )}

          {visibleDates.map((date) => {
            const isActive = date.isSame(selectedDate, 'day')
            const key = date.format('YYYY-MM-DD')
            return (
              <button
                key={key}
                type="button"
                disabled={isPending}
                onClick={() => runSearchForDate(date)}
                className="flex-1 flex flex-col items-center justify-center relative cursor-pointer group px-1 transition-all duration-300 disabled:cursor-not-allowed"
              >
                <div
                  className={`flex flex-col items-center transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100 group-hover:scale-105'}`}
                >
                  <span
                    className={`text-[15px] sm:text-[17px] transition-colors duration-300 ${isActive ? 'font-bold text-text-main' : 'font-semibold text-text-main/70 group-hover:text-text-main'}`}
                  >
                    {formatSliderDateLabel(date)}
                  </span>
                  {/* Giá tạm ẩn — bổ sung khi có API giá theo ngày
                  <span className="text-[14px] sm:text-[17px] text-text-secondary/70 whitespace-nowrap">
                    —
                  </span>
                  */}
                </div>
              </button>
            )
          })}
        </div>

        <button
          type="button"
          onClick={handleNext}
          disabled={isPending || effectiveStartIndex >= maxStartIndex}
          className={`w-[50px] sm:w-[74px] h-full flex items-center justify-center border-l-[2px] sm:border-l-[4px] border-surface-hover transition-all duration-300
          ${effectiveStartIndex >= maxStartIndex || isPending ? 'cursor-not-allowed opacity-30' : 'cursor-pointer hover:bg-surface-hover active:scale-95'}`}
        >
          <ChevronRightLargeIcon
            width={isSmallMobile ? 14 : 20}
            height={isSmallMobile ? 24 : 36}
            color={brandColors.textMain}
          />
        </button>
      </div>
    </div>
  )
}
