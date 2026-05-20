import { useEffect, useRef } from 'react'

import { useQuery } from '@tanstack/react-query'

import type { FlightSearchResultEntity } from '../../domain/entities'
import { FlightSearchRepository } from '../../infrastructure/repositories/FlightSearchRepository'

const repo = new FlightSearchRepository()

export const FLIGHT_SEARCH_RESULT_KEY = 'flightSearchResult'

const POLL_INTERVAL_MS = 3000
/** Extra refetches after the first `status === 'done'` response. */
const DONE_EXTRA_REFETCH_COUNT = 2

type DonePollState = {
  /** How many more interval refetches allowed after the first `done` response. */
  remaining: number
  lastDataUpdatedAt: number
  /** Polling finished — never restart until session changes. */
  finished: boolean
}

/** Shared across all observers of the same query (index, filter sync). */
const donePollStateByQueryKey = new Map<string, DonePollState>()

function queryKeyToString(sessionId: string, currency: string) {
  return `${FLIGHT_SEARCH_RESULT_KEY}|${sessionId}|${currency}`
}

function resolvePollIntervalMs(query: {
  queryKey: readonly unknown[]
  state: { data?: FlightSearchResultEntity; dataUpdatedAt: number }
}): number | false {
  const data = query.state.data
  if (!data) return POLL_INTERVAL_MS

  const key = queryKeyToString(String(query.queryKey[1]), String(query.queryKey[2]))

  if (data.status !== 'done') {
    donePollStateByQueryKey.delete(key)
    return POLL_INTERVAL_MS
  }

  const updatedAt = query.state.dataUpdatedAt
  const state = donePollStateByQueryKey.get(key)

  if (state?.finished) {
    return false
  }

  if (!state) {
    donePollStateByQueryKey.set(key, {
      remaining: DONE_EXTRA_REFETCH_COUNT,
      lastDataUpdatedAt: updatedAt,
      finished: false,
    })
    return POLL_INTERVAL_MS
  }

  if (state.lastDataUpdatedAt === updatedAt) {
    return state.remaining > 0 ? POLL_INTERVAL_MS : false
  }

  const remaining = state.remaining - 1
  const finished = remaining <= 0

  donePollStateByQueryKey.set(key, {
    remaining: Math.max(0, remaining),
    lastDataUpdatedAt: updatedAt,
    finished,
  })

  return finished ? false : POLL_INTERVAL_MS
}

/**
 * Polls until `status === 'done'`, then refetches `DONE_EXTRA_REFETCH_COUNT` more times and stops.
 */
export function useFlightSearchResultQuery(sessionId: string, currency: string) {
  const queryKeyStr = queryKeyToString(sessionId, currency)
  const prevQueryKeyRef = useRef(queryKeyStr)

  useEffect(() => {
    if (prevQueryKeyRef.current !== queryKeyStr) {
      donePollStateByQueryKey.delete(prevQueryKeyRef.current)
      prevQueryKeyRef.current = queryKeyStr
    }
  }, [queryKeyStr])

  useEffect(() => {
    return () => {
      donePollStateByQueryKey.delete(queryKeyStr)
    }
  }, [queryKeyStr])

  return useQuery({
    queryKey: [FLIGHT_SEARCH_RESULT_KEY, sessionId, currency],
    queryFn: () => repo.getSessionResult({ sessionId, currency }),
    enabled: !!sessionId,
    refetchInterval: resolvePollIntervalMs,
    staleTime: 0,
    structuralSharing: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
}
