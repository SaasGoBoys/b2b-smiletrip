import { create } from 'zustand'

import {
  createDefaultFilters,
  EMPTY_FILTER_BOUNDS,
  type FilterBounds,
  type FilterState,
} from '../constants/FlightFilterTypes'

interface FlightFilterStore {
  bounds: FilterBounds
  filters: FilterState
  resultPage: number
  setBounds: (bounds: FilterBounds) => void
  /** Update bounds and reset filter selections (e.g. when switching outbound/return list). */
  setBoundsAndResetFilters: (bounds: FilterBounds) => void
  setFilters: (partial: Partial<FilterState>) => void
  setResultPage: (page: number) => void
  /** Reset selections; slider ranges follow current bounds. */
  resetFiltersToBounds: () => void
  /** Full reset when leaving search results (unmount). */
  resetStore: () => void
}

const initialFilters = createDefaultFilters(EMPTY_FILTER_BOUNDS)

export const useFlightFilterStore = create<FlightFilterStore>((set, get) => ({
  bounds: EMPTY_FILTER_BOUNDS,
  filters: initialFilters,
  resultPage: 1,

  setBounds: (bounds) =>
    set((state) => {
      const isFirstLoad = state.bounds.airlines.length === 0 && bounds.airlines.length > 0
      return {
        bounds,
        filters: isFirstLoad ? createDefaultFilters(bounds) : state.filters,
      }
    }),

  setBoundsAndResetFilters: (bounds) =>
    set({
      bounds,
      filters: createDefaultFilters(bounds),
      resultPage: 1,
    }),

  setFilters: (partial) =>
    set((state) => ({
      filters: { ...state.filters, ...partial },
      resultPage: 1,
    })),

  setResultPage: (page) => set({ resultPage: page }),

  resetFiltersToBounds: () => {
    const { bounds } = get()
    set({ filters: createDefaultFilters(bounds), resultPage: 1 })
  },

  resetStore: () =>
    set({
      bounds: EMPTY_FILTER_BOUNDS,
      filters: createDefaultFilters(EMPTY_FILTER_BOUNDS),
      resultPage: 1,
    }),
}))
