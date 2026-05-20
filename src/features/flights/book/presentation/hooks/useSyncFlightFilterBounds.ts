import { useEffect, useMemo, useRef } from 'react'

import type { FlightItineraryEntity } from '../../domain/entities'
import type { FlightFareOptionEntity } from '../../domain/entities/FlightFareOptionEntity'
import type { FlightSearchResultEntity } from '../../domain/entities/FlightSearchResultEntity'
import { useFlightFilterStore } from '../store/flightFilterStore'
import { deriveFilterBounds } from '../utils/flightFilterUtils'

/**
 * Derives filter bounds from session results and resets the filter store on unmount.
 * Pass `searchResult` from `useFlightSearchResultQuery` (single subscriber per page).
 */
export function useSyncFlightFilterBounds(
  sessionId: string,
  searchResult: FlightSearchResultEntity | undefined,
  legItineraries?: FlightItineraryEntity[],
  legFilterKey?: string
) {
  const setBoundsAndResetFilters = useFlightFilterStore((s) => s.setBoundsAndResetFilters)
  const resetStore = useFlightFilterStore((s) => s.resetStore)
  const boundsScopeRef = useRef<string | null>(null)
  const syncedDoneForScopeRef = useRef<string | null>(null)

  const fareMap = useMemo(() => {
    const map = new Map<string, FlightFareOptionEntity>()
    searchResult?.prices.forEach((p) => map.set(p.id, p))
    return map
  }, [searchResult])

  const itineraries = useMemo(() => {
    if (legItineraries) return legItineraries
    if (!searchResult) return []
    return Object.values(searchResult.blockItems).flat()
  }, [legItineraries, searchResult])

  useEffect(() => {
    if (itineraries.length === 0) return

    const bounds = deriveFilterBounds(itineraries, fareMap)
    const scopeKey = `${sessionId}|${legFilterKey ?? 'all'}`
    const isDone = searchResult?.status === 'done'

    if (boundsScopeRef.current !== scopeKey) {
      setBoundsAndResetFilters(bounds)
      boundsScopeRef.current = scopeKey
      syncedDoneForScopeRef.current = isDone ? scopeKey : null
      return
    }

    if (isDone && syncedDoneForScopeRef.current !== scopeKey) {
      setBoundsAndResetFilters(bounds)
      syncedDoneForScopeRef.current = scopeKey
    }
  }, [
    itineraries,
    fareMap,
    legFilterKey,
    sessionId,
    searchResult?.status,
    setBoundsAndResetFilters,
  ])

  useEffect(() => {
    boundsScopeRef.current = null
    syncedDoneForScopeRef.current = null
    resetStore()
    return () => resetStore()
  }, [sessionId, resetStore])
}
