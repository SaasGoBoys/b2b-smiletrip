import { useState } from 'react'

import { useBreakpoint } from '@/shared/hooks/useBreakpoint'
import { brandColors } from '@/shared/lib/antd-theme/tokens'

import { useModalController } from '../../../modals/hooks/useModalController'
import { useRegisterModals } from '../../../modals/hooks/useRegisterModals'

import { AIRPORT_SELECT_MODAL, AirportSelectModal } from './AirportSelectModal'
import { AirportSelectPopover } from './AirportSelectPopover'

import { PlaneLandingIcon, PlaneTakeoffIcon } from '@/assets/icons/icons'
import { CITIES, CITY_REGIONS, POPULAR_CITIES } from '@/mocks/data/flights'

interface AirportSearchInputProps {
  value: string
  onSelect: (value: string) => void
  transferType: string // 'pickup' or 'dropoff'
  className?: string
}

// Helper to get city display label from value
const getCityLabel = (value: string) => {
  for (const region of CITY_REGIONS) {
    const city = region.cities.find((c) => c.value === value)
    if (city) return `${city.label} (${city.code})`
  }

  const popularCity = POPULAR_CITIES.find((c) => c.value === value)
  if (popularCity) return `${popularCity.label} (${popularCity.value})`

  const found = CITIES.find((c) => c.value === value)
  return found ? found.label : value
}

export function AirportSearchInput({
  value,
  onSelect,
  transferType,
  className = '',
}: AirportSearchInputProps) {
  const { isSmallSize } = useBreakpoint()
  const { open } = useModalController()

  // Register the modal for the project's ModalEngine
  useRegisterModals({ [AIRPORT_SELECT_MODAL]: AirportSelectModal })

  const [searchQuery, setSearchQuery] = useState('')
  const [visiblePopover, setVisiblePopover] = useState(false)

  const openSelection = () => {
    if (!isSmallSize) {
      setVisiblePopover(true)
    } else {
      open(AIRPORT_SELECT_MODAL, {
        type: transferType === 'pickup' ? 'to' : 'from',
        value,
        searchQuery,
        onSelect: (val: string) => {
          onSelect(val)
          setSearchQuery('')
        },
        onSearchChange: (val: string) => {
          setSearchQuery(val)
        },
      })
    }
  }

  const handleSelect = (val: string) => {
    if (!isSmallSize) {
      onSelect(val)
      setVisiblePopover(false)
    }
    setSearchQuery('')
  }

  const renderInputField = (isMobile: boolean) => {
    const isVisible = !isMobile && visiblePopover

    if (!isVisible) {
      return (
        <button
          onClick={openSelection}
          className="flex items-center flex-1 h-full w-full text-left cursor-pointer group px-4"
        >
          {transferType === 'pickup' ? (
            <PlaneLandingIcon className="shrink-0" color={brandColors.primary} width={22} height={22} />
          ) : (
            <PlaneTakeoffIcon className="shrink-0" color={brandColors.primary} width={22} height={22} />
          )}
          <span className="flex-1 text-left ml-2 text-[15px] text-text-main group-hover:text-primary transition-colors truncate">
            {value ? getCityLabel(value) : (transferType === 'pickup' ? 'Nhập sân bay đến' : 'Nhập sân bay đi')}
          </span>
        </button>
      )
    }

    return (
      <div className="flex flex-1 items-center h-full relative px-4">
        {transferType === 'pickup' ? (
          <PlaneLandingIcon className="shrink-0" color={brandColors.primary} width={22} height={22} />
        ) : (
          <PlaneTakeoffIcon className="shrink-0" color={brandColors.primary} width={22} height={22} />
        )}
        <input
          autoFocus
          className="flex-1 bg-transparent border-none outline-none ml-2 text-[15px] text-text-main placeholder:text-text-muted w-full h-full"
          placeholder="Tìm kiếm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoComplete="off"
        />
      </div>
    )
  }

  return (
    <div className={`col-span-1 lg:col-span-2 xl:flex-[1.5] w-full ${className}`}>
      <p className="text-[15px] sm:text-[17px] font-semibold text-text-main mb-2 text-left px-1">
        {transferType === 'pickup' ? 'Sân bay đến' : 'Sân bay đi'}
      </p>

      {/* Mobile Input */}
      <div className="sm:hidden relative flex items-center h-[45px] sm:h-[55px] border border-border-main rounded-[20px] bg-white hover:border-primary/40 transition-colors">
        {renderInputField(true)}
      </div>

      {/* Desktop Popover */}
      <div className="hidden sm:flex relative items-center h-[45px] sm:h-[55px] border border-border-main rounded-[20px] bg-white hover:border-primary/40 transition-colors">
        <AirportSelectPopover
          open={visiblePopover}
          onOpenChange={(open) => {
            setVisiblePopover(open)
            if (!open) setSearchQuery('')
          }}
          value={value}
          type={transferType === 'pickup' ? 'to' : 'from'}
          onSelect={handleSelect}
          searchQuery={searchQuery}
        >
          <div className="flex items-center flex-1 h-full overflow-hidden group w-full">
            {renderInputField(false)}
          </div>
        </AirportSelectPopover>
      </div>
    </div>
  )
}
