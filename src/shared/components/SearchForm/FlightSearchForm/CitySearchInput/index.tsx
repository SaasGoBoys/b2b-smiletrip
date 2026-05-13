import { useState } from 'react'

import { useBreakpoint } from '@/shared/hooks/useBreakpoint'
import type { AirportSelectSearchBinding } from '@/shared/kernels/airport/presentation/components/CitySearchInput/AirportSelectContent'
import {
  AIRPORT_SELECT_MODAL,
  AirportSelectModal,
} from '@/shared/kernels/airport/presentation/components/CitySearchInput/AirportSelectModal'
import { AirportSelectPopover } from '@/shared/kernels/airport/presentation/components/CitySearchInput/AirportSelectPopover'
import useGetAirportListQuery from '@/shared/kernels/airport/presentation/hooks/useGetAirportListQuery'
import { brandColors } from '@/shared/lib/antd-theme/tokens'

import { useModalController } from '../../../modals/hooks/useModalController'
import { useRegisterModals } from '../../../modals/hooks/useRegisterModals'

import { ArrowExchangeIcon, PlaneLandingIcon, PlaneTakeoffIcon } from '@/assets/icons/icons'

interface CitySearchInputProps {
  from: string
  to: string
  onFromSelect: (value: string) => void
  onToSelect: (value: string) => void
  onSwap: () => void
  className?: string
}

/** Fallback label when `from` / `to` are set from outside without a picker row. */
function defaultDisplayForAirportCode(code: string): string {
  if (!code) return ''
  if (code === 'HAN') return 'Hà Nội (HAN)'
  if (code === 'TYO') return 'Tokyo (TYO)'
  return code
}

export function CitySearchInput({
  from,
  to,
  onFromSelect,
  onToSelect,
  onSwap,
  className = '',
}: CitySearchInputProps) {
  const { isSmallSize } = useBreakpoint()
  const { open } = useModalController()

  const [fromSearch, setFromSearch] = useState('')
  const [toSearch, setToSearch] = useState('')

  const [fromDisplay, setFromDisplay] = useState(() => defaultDisplayForAirportCode(from))
  const [toDisplay, setToDisplay] = useState(() => defaultDisplayForAirportCode(to))

  const fromAirportQuery = useGetAirportListQuery('from', fromSearch)
  const toAirportQuery = useGetAirportListQuery('to', toSearch)

  const fromAirportSearch: AirportSelectSearchBinding = {
    searchText: fromSearch,
    onSearchTextChange: setFromSearch,
    searchResults: fromAirportQuery.data ?? [],
    isSearchPending: fromAirportQuery.isPending,
  }

  const toAirportSearch: AirportSelectSearchBinding = {
    searchText: toSearch,
    onSearchTextChange: setToSearch,
    searchResults: toAirportQuery.data ?? [],
    isSearchPending: toAirportQuery.isPending,
  }

  useRegisterModals({ [AIRPORT_SELECT_MODAL]: AirportSelectModal })

  const [visiblePopover, setVisiblePopover] = useState<'from' | 'to' | null>(null)

  const handleSwapClick = () => {
    onSwap()
    const prevFromSearch = fromSearch
    const prevFromDisplay = fromDisplay
    setFromSearch(toSearch)
    setToSearch(prevFromSearch)
    setFromDisplay(toDisplay)
    setToDisplay(prevFromDisplay)
  }

  const openCitySelection = (type: 'from' | 'to') => {
    if (!isSmallSize) {
      setVisiblePopover(type)
      if (type === 'from') setFromSearch('')
      else setToSearch('')
    } else {
      open(AIRPORT_SELECT_MODAL, {
        type,
        value: type === 'from' ? from : to,
        initialSearchText: '',
        onSelect: (cityCode: string, displayLabel: string) => {
          if (type === 'from') {
            onFromSelect(cityCode)
            setFromDisplay(displayLabel)
          } else {
            onToSelect(cityCode)
            setToDisplay(displayLabel)
          }
        },
      })
    }
  }

  const handleCitySelect = (cityCode: string, displayLabel: string) => {
    if (visiblePopover === 'from') {
      onFromSelect(cityCode)
      setFromDisplay(displayLabel)
      setFromSearch('')
    } else if (visiblePopover === 'to') {
      onToSelect(cityCode)
      setToDisplay(displayLabel)
      setToSearch('')
    }
    setVisiblePopover(null)
  }

  const renderReadOnlyTrigger = (type: 'from' | 'to', isMobile: boolean) => {
    const display = type === 'from' ? fromDisplay : toDisplay
    const placeholder = type === 'from' ? 'Chọn điểm đi' : 'Chọn điểm đến'

    return (
      <div
        role="presentation"
        className="group flex h-full w-full flex-1 cursor-pointer items-center px-4 text-left"
        onClick={() => openCitySelection(type)}
      >
        {type === 'from' ? (
          <PlaneTakeoffIcon className="shrink-0" color={brandColors.primary} />
        ) : (
          <PlaneLandingIcon className="shrink-0" color={brandColors.primary} />
        )}
        <input
          readOnly
          tabIndex={-1}
          id={`city-${type}-readonly-${isMobile ? 'mobile' : 'desktop'}`}
          value={display}
          placeholder={placeholder}
          className="pointer-events-none ml-2 min-w-0 flex-1 cursor-pointer border-none bg-transparent text-[15px] text-text-main outline-none placeholder:text-text-muted group-hover:text-primary"
        />
      </div>
    )
  }

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="relative flex flex-col gap-4 sm:hidden">
        <div className="relative">
          <p className="mb-2 px-1 text-left text-[15px] font-semibold text-text-main sm:text-[17px]">
            Chọn điểm đi
          </p>
          <div className="flex h-[45px] w-full items-center overflow-hidden rounded-[20px] border border-border-main bg-white transition-colors hover:border-primary/60 sm:h-[55px]">
            {renderReadOnlyTrigger('from', true)}
          </div>
        </div>

        <div className="absolute left-1/2 top-[calc(50%+16px)] z-20 -translate-x-1/2 -translate-y-1/2 rotate-90">
          <button
            type="button"
            onClick={handleSwapClick}
            className="flex h-[50px] w-[30px] cursor-pointer items-center justify-center rounded-[10px] border border-border-main bg-white shadow-sm transition-colors hover:bg-surface-hover"
          >
            <ArrowExchangeIcon width={20} height={20} color={brandColors.primary} />
          </button>
        </div>

        <div className="relative">
          <p className="mb-2 px-1 text-left text-[15px] font-semibold text-text-main md:text-[17px]">
            Chọn điểm đến
          </p>
          <div className="flex h-[45px] w-full items-center overflow-hidden rounded-[20px] border border-border-main bg-white transition-colors hover:border-primary/60 sm:h-[55px]">
            {renderReadOnlyTrigger('to', true)}
          </div>
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="mb-2 flex">
          <p className="flex-1 px-1 text-left text-[15px] font-semibold text-text-main sm:text-[17px]">
            Chọn điểm đi
          </p>
          <p className="flex-1 px-1 pl-8 text-left text-[15px] font-semibold text-text-main sm:text-[17px]">
            Chọn điểm đến
          </p>
        </div>
        <div className="relative flex h-[55px] items-center rounded-[20px] border border-border-main bg-white transition-colors hover:border-primary/40">
          <AirportSelectPopover
            open={visiblePopover === 'from'}
            onOpenChange={(open) => {
              if (open) {
                setVisiblePopover('from')
                setFromSearch('')
              } else {
                setVisiblePopover(null)
                setFromSearch('')
              }
            }}
            value={from}
            type="from"
            onSelect={handleCitySelect}
            airportSearch={fromAirportSearch}
          >
            <div className="group flex h-full flex-1 items-center overflow-hidden">
              {renderReadOnlyTrigger('from', false)}
            </div>
          </AirportSelectPopover>

          <div className="relative flex h-full w-px items-center justify-center bg-border-main">
            <button
              type="button"
              onClick={handleSwapClick}
              className="absolute z-20 flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-[10px] border border-border-main bg-white shadow-sm transition-colors hover:bg-surface-hover"
            >
              <ArrowExchangeIcon width={22} height={22} color={brandColors.primary} />
            </button>
          </div>

          <AirportSelectPopover
            open={visiblePopover === 'to'}
            onOpenChange={(open) => {
              if (open) {
                setVisiblePopover('to')
                setToSearch('')
              } else {
                setVisiblePopover(null)
                setToSearch('')
              }
            }}
            value={to}
            type="to"
            onSelect={handleCitySelect}
            airportSearch={toAirportSearch}
          >
            <div className="group flex h-full flex-1 items-center overflow-hidden pl-6">
              {renderReadOnlyTrigger('to', false)}
            </div>
          </AirportSelectPopover>
        </div>
      </div>
    </div>
  )
}
