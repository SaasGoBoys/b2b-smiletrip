import { useState } from 'react'

import { useBreakpoint } from '@/shared/hooks/useBreakpoint'
import { brandColors } from '@/shared/lib/antd-theme/tokens'

import { useModalController } from '../../../modals/hooks/useModalController'
import { useRegisterModals } from '../../../modals/hooks/useRegisterModals'

import { DestinationSelectModal, HOTEL_DESTINATION_SELECT_MODAL } from './DestinationSelectModal'
import { DestinationSelectPopover } from './DestinationSelectPopover'

import { MapPinIcon } from '@/assets/icons/icons'
import { POPULAR_DESTINATIONS } from '@/mocks/data/hotels'

interface DestinationSearchInputProps {
  value: string
  onSelect: (value: string) => void
  className?: string
}

export function DestinationSearchInput({
  value,
  onSelect,
  className = '',
}: DestinationSearchInputProps) {
  const { isSmallSize } = useBreakpoint()
  const { open } = useModalController()
  const [searchQuery, setSearchQuery] = useState('')
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  useRegisterModals({ [HOTEL_DESTINATION_SELECT_MODAL]: DestinationSelectModal })

  const selectedDestination = POPULAR_DESTINATIONS.find(d => d.value === value)

  const handleOpenSelection = () => {
    if (!isSmallSize) {
      setIsPopoverOpen(true)
    } else {
      open(HOTEL_DESTINATION_SELECT_MODAL, {
        value,
        searchQuery,
        onSearchChange: (val: string) => setSearchQuery(val),
        onSelect: (val: string) => {
          onSelect(val)
          setSearchQuery('')
        },
      })
    }
  }

  const handleSelect = (val: string) => {
    onSelect(val)
    setSearchQuery('')
    setIsPopoverOpen(false)
  }

  const renderInput = (isMobile: boolean) => {
    const isVisible = !isMobile && isPopoverOpen

    if (!isVisible) {
      return (
        <button
          onClick={handleOpenSelection}
          className="flex items-center flex-1 h-full w-full text-left cursor-pointer group px-4"
        >
          <MapPinIcon width={24} height={24} color={brandColors.primary} className="shrink-0" />
          <span className={`flex-1 text-left ml-2 text-[15px] truncate transition-colors ${selectedDestination ? 'text-text-main font-semibold' : 'text-text-muted group-hover:text-primary font-normal'}`}>
            {selectedDestination ? selectedDestination.label : 'Chọn điểm đến'}
          </span>
        </button>
      )
    }

    return (
      <div className="flex flex-1 items-center h-full relative px-4">
        <MapPinIcon width={24} height={24} color={brandColors.primary} className="shrink-0" />
        <input
          autoFocus
          className="flex-1 bg-transparent border-none outline-none ml-2 text-[15px] text-text-main placeholder:text-text-muted w-full h-full font-semibold"
          placeholder="Tìm kiếm điểm đến..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoComplete="off"
        />
      </div>
    )
  }

  return (
    <div className={`w-full ${className}`}>
      <p className="text-[15px] sm:text-[17px] font-semibold text-text-main mb-2 px-1">
        Điểm đến
      </p>
      
      {!isSmallSize ? (
        <DestinationSelectPopover
          open={isPopoverOpen}
          onOpenChange={(open) => {
            setIsPopoverOpen(open)
            if (!open) setSearchQuery('')
          }}
          value={value}
          onSelect={handleSelect}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        >
          <div className="relative flex items-center h-[55px] border border-border-main rounded-[20px] bg-white hover:border-primary/40 transition-colors overflow-hidden">
            {renderInput(false)}
          </div>
        </DestinationSelectPopover>
      ) : (
        <div className="w-full flex items-center h-[45px] sm:h-[55px] border border-border-main rounded-[20px] bg-white overflow-hidden active:border-primary transition-colors">
          {renderInput(true)}
        </div>
      )}
    </div>
  )
}

