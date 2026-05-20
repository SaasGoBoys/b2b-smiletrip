import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'

const SLIDER_DATE_RADIUS = 120

export function formatSliderDateLabel(date: Dayjs): string {
  return date.format('DD/MM')
}

/** Consecutive calendar days centered on `center` (±radius). */
export function buildSliderDateRange(center: Dayjs, radius = SLIDER_DATE_RADIUS): Dayjs[] {
  const dates: Dayjs[] = []
  for (let offset = -radius; offset <= radius; offset += 1) {
    dates.push(center.add(offset, 'day'))
  }
  return dates
}

export function findDateIndex(dates: Dayjs[], target: Dayjs): number {
  return dates.findIndex((d) => d.isSame(target, 'day'))
}

/** Window start index so `selectedIndex` sits in the middle of `visibleCount` slots. */
export function getCenteredWindowStart(
  selectedIndex: number,
  visibleCount: number,
  totalLength: number
): number {
  if (selectedIndex < 0 || totalLength === 0) return 0
  const idealStart = selectedIndex - Math.floor(visibleCount / 2)
  return Math.max(0, Math.min(idealStart, Math.max(0, totalLength - visibleCount)))
}

export function getVisibleDateCount(
  flags: { isSmallMobile: boolean; isMobile: boolean; isTablet: boolean }
): number {
  if (flags.isSmallMobile) return 3
  if (flags.isMobile) return 4
  if (flags.isTablet) return 5
  return 7
}

/** Keep return leg length when depart moves forward past return (round-trip). */
export function resolveReturnDateForNewDepart(
  tripType: 'one-way' | 'round-trip',
  newDepart: Dayjs,
  currentDepart: Dayjs,
  currentReturn: Dayjs
): Dayjs {
  if (tripType !== 'round-trip') return currentReturn
  const tripLengthDays = Math.max(1, currentReturn.diff(currentDepart, 'day'))
  if (!currentReturn.isBefore(newDepart, 'day')) return currentReturn
  return newDepart.add(tripLengthDays, 'day')
}

export function parseDepartDateFromParams(departDateParam: string | null): Dayjs {
  if (departDateParam?.trim()) {
    const iso = dayjs(departDateParam, 'YYYY-MM-DD', true)
    if (iso.isValid()) return iso
    const dmy = dayjs(departDateParam, 'DD/MM/YYYY', true)
    if (dmy.isValid()) return dmy
  }
  return dayjs().startOf('day')
}
