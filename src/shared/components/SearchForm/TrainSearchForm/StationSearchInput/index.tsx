import { useState } from 'react'

import { useBreakpoint } from '@/shared/hooks/useBreakpoint'
import { brandColors } from '@/shared/lib/antd-theme/tokens'

import { useModalController } from '../../../modals/hooks/useModalController'
import { useRegisterModals } from '../../../modals/hooks/useRegisterModals'

import { STATION_SELECT_MODAL, StationSelectModal } from './StationSelectModal'
import { StationSelectPopover } from './StationSelectPopover'

import { ArrowExchangeIcon } from '@/assets/icons/icons'
import { INTERNATIONAL_REGIONS, POPULAR_STATIONS } from '@/mocks/data/trains'

const FROM_ICON = '/icons/railway-location-1.webp'
const TO_ICON = '/icons/railway-location-2.webp'

interface StationSearchInputProps {
  from: string
  to: string
  onFromSelect: (value: string) => void
  onToSelect: (value: string) => void
  onSwap: () => void
  className?: string
}

const getStationLabel = (value: string) => {
  for (const region of INTERNATIONAL_REGIONS) {
    const station = region.stations.find((s) => s.value === value)
    if (station) return station.label
  }
  const popular = POPULAR_STATIONS.find((s) => s.value === value)
  if (popular) return popular.label
  return value
}

export function StationSearchInput({
  from,
  to,
  onFromSelect,
  onToSelect,
  onSwap,
  className = '',
}: StationSearchInputProps) {
  const { isSmallSize } = useBreakpoint()
  const { open } = useModalController()

  useRegisterModals({ [STATION_SELECT_MODAL]: StationSelectModal })

  const [fromSearch, setFromSearch] = useState('')
  const [toSearch, setToSearch] = useState('')
  const [visiblePopover, setVisiblePopover] = useState<'from' | 'to' | null>(null)

  const openStationSelection = (type: 'from' | 'to') => {
    if (!isSmallSize) {
      setVisiblePopover(type)
    } else {
      open(STATION_SELECT_MODAL, {
        type,
        value: type === 'from' ? from : to,
        searchQuery: type === 'from' ? fromSearch : toSearch,
        onSelect: (val: string) => {
          if (type === 'from') onFromSelect(val)
          else onToSelect(val)
          setFromSearch('')
          setToSearch('')
        },
        onSearchChange: (val: string) => {
          if (type === 'from') setFromSearch(val)
          else setToSearch(val)
        },
      })
    }
  }

  const handleStationSelect = (value: string) => {
    if (!isSmallSize) {
      if (visiblePopover === 'from') onFromSelect(value)
      else onToSelect(value)
      setVisiblePopover(null)
    }
    setFromSearch('')
    setToSearch('')
  }

  const renderInput = (type: 'from' | 'to', isMobile: boolean) => {
    const isFrom = type === 'from'
    const selectedValue = isFrom ? from : to
    const searchValue = isFrom ? fromSearch : toSearch
    const setSearchValue = isFrom ? setFromSearch : setToSearch
    const isVisible = !isMobile && visiblePopover === type

    if (!isVisible) {
      return (
        <button
          id={`station-${type}-btn-${isMobile ? 'mobile' : 'desktop'}`}
          onClick={() => openStationSelection(type)}
          className="flex items-center flex-1 h-full w-full text-left cursor-pointer group px-4"
        >
          <img
            src={isFrom ? FROM_ICON : TO_ICON}
            alt={isFrom ? 'departure' : 'destination'}
            className="w-[30px] h-[30px] shrink-0"
          />
          <span className="flex-1 text-left ml-2 text-[15px] text-text-main group-hover:text-primary transition-colors truncate font-semibold">
            {selectedValue ? getStationLabel(selectedValue) : (
              <span className="text-text-muted font-normal">{isFrom ? 'Từ' : 'Đến'}</span>
            )}
          </span>
        </button>
      )
    }

    return (
      <div className="flex flex-1 items-center h-full relative px-4">
        <img
          src={isFrom ? FROM_ICON : TO_ICON}
          alt={isFrom ? 'departure' : 'destination'}
          className="w-[30px] h-[30px] shrink-0"
        />
        <input
          autoFocus
          id={`station-${type}-input-${isMobile ? 'mobile' : 'desktop'}`}
          className="flex-1 bg-transparent border-none outline-none ml-2 text-[15px] text-text-main placeholder:text-text-muted w-full h-full font-semibold"
          placeholder="Tìm kiếm ga..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          autoComplete="off"
        />
      </div>
    )
  }

  return (
    <div className={`flex flex-col ${className}`}>
      {/* --- MOBILE LAYOUT (< 640px) --- */}
      <div className="sm:hidden relative flex flex-col gap-4">
        <div className="relative">
          <p className="text-[15px] sm:text-[17px] font-semibold text-text-main mb-2 text-left px-1">
            Chọn điểm đi
          </p>
          <div className="w-full flex items-center h-[45px] sm:h-[55px] border border-border-main rounded-[20px] bg-white overflow-hidden hover:border-primary/60 transition-colors">
            {renderInput('from', true)}
          </div>
        </div>

        {/* Mobile Swap Button */}
        <div className="absolute z-20 left-1/2 top-[calc(50%+16px)] -translate-x-1/2 -translate-y-1/2 rotate-90">
          <button
            onClick={onSwap}
            className="w-[30px] h-[50px] bg-white border border-border-main rounded-[10px] flex items-center justify-center hover:bg-surface-hover transition-colors shadow-sm cursor-pointer"
          >
            <ArrowExchangeIcon width={20} height={20} color={brandColors.primary} />
          </button>
        </div>

        <div className="relative">
          <p className="text-[15px] md:text-[17px] font-semibold text-text-main mb-2 text-left px-1">
            Chọn điểm đến
          </p>
          <div className="w-full flex items-center h-[45px] sm:h-[55px] border border-border-main rounded-[20px] bg-white overflow-hidden hover:border-primary/60 transition-colors">
            {renderInput('to', true)}
          </div>
        </div>
      </div>

      {/* --- DESKTOP / TABLET LAYOUT (>= 640px) --- */}
      <div className="hidden sm:block">
        <div className="flex mb-2">
          <p className="text-[15px] sm:text-[17px] font-semibold text-text-main flex-1 text-left px-1">
            Chọn điểm đi
          </p>
          <p className="text-[15px] sm:text-[17px] font-semibold text-text-main flex-1 text-left px-1 pl-8">
            Chọn điểm đến
          </p>
        </div>
        <div className="relative flex items-center h-[55px] border border-border-main rounded-[20px] bg-white hover:border-primary/40 transition-colors">
          {/* Điểm đi */}
          <StationSelectPopover
            open={visiblePopover === 'from'}
            onOpenChange={(open) => {
              setVisiblePopover(open ? 'from' : null)
              if (!open) {
                setFromSearch('')
                setToSearch('')
              }
            }}
            value={from}
            type="from"
            onSelect={handleStationSelect}
            searchQuery={fromSearch}
            onSearchChange={setFromSearch}
          >
            <div className="flex items-center flex-1 h-full overflow-hidden group">
              {renderInput('from', false)}
            </div>
          </StationSelectPopover>

          {/* Vertical Separator and Swap Button */}
          <div className="relative flex items-center justify-center w-[1px] h-full bg-border-main">
            <button
              onClick={onSwap}
              className="absolute w-[36px] h-[36px] bg-white border border-border-main rounded-[10px] flex items-center justify-center hover:bg-surface-hover transition-colors cursor-pointer z-20 shadow-sm"
            >
              <ArrowExchangeIcon width={22} height={22} color={brandColors.primary} />
            </button>
          </div>

          {/* Điểm đến */}
          <StationSelectPopover
            open={visiblePopover === 'to'}
            onOpenChange={(open) => {
              setVisiblePopover(open ? 'to' : null)
              if (!open) {
                setFromSearch('')
                setToSearch('')
              }
            }}
            value={to}
            type="to"
            onSelect={handleStationSelect}
            searchQuery={toSearch}
            onSearchChange={setToSearch}
          >
            <div className="flex items-center flex-1 h-full pl-6 overflow-hidden group">
              {renderInput('to', false)}
            </div>
          </StationSelectPopover>
        </div>
      </div>
    </div>
  )
}
