import { useState } from 'react'

import { useBreakpoint } from '@/shared/hooks/useBreakpoint'
import { brandColors } from '@/shared/lib/antd-theme/tokens'

import { useModalController } from '../../../modals/hooks/useModalController'
import { useRegisterModals } from '../../../modals/hooks/useRegisterModals'

import { getDestinationLabel } from './tourDestinationData'
import { TOUR_DESTINATION_MODAL, TourDestinationModal } from './TourDestinationModal'
import { TourDestinationPopover } from './TourDestinationPopover'

import { MapPinIcon } from '@/assets/icons/icons'

interface TourDestinationInputProps {
  value: string
  onSelect: (value: string) => void
  className?: string
}

export function TourDestinationInput({
  value,
  onSelect,
  className = '',
}: TourDestinationInputProps) {
  const { isSmallSize } = useBreakpoint()
  const { open } = useModalController()

  useRegisterModals({ [TOUR_DESTINATION_MODAL]: TourDestinationModal })

  const [searchQuery, setSearchQuery] = useState('')
  const [popoverOpen, setPopoverOpen] = useState(false)

  // ── Handlers ────────────────────────────────────────────────────────────────

  const openDestinationSelection = () => {
    if (!isSmallSize) {
      setPopoverOpen(true)
    } else {
      open(TOUR_DESTINATION_MODAL, {
        value,
        searchQuery,
        onSelect: (val: string) => {
          onSelect(val)
          setSearchQuery('')
        },
        onSearchChange: (val: string) => setSearchQuery(val),
      })
    }
  }

  const handleSelect = (val: string) => {
    onSelect(val)
    setPopoverOpen(false)
    setSearchQuery('')
  }

  const handlePopoverClose = () => {
    setPopoverOpen(false)
    setSearchQuery('')
  }

  const renderTrigger = (isMobileLayout: boolean) => {
    const isInputMode = !isMobileLayout && popoverOpen

    if (isInputMode) {
      return (
        <div className="flex items-center flex-1 h-full px-4 gap-2">
          <MapPinIcon width={20} height={20} color={brandColors.primary} className="shrink-0" />
          <input
            autoFocus
            id="tour-destination-input-desktop"
            className="flex-1 bg-transparent border-none outline-none text-[15px] sm:text-[17px] text-text-main placeholder:text-text-muted w-full h-full font-semibold"
            placeholder="Tìm kiếm địa điểm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoComplete="off"
          />
        </div>
      )
    }

    return (
      <button
        id={`tour-destination-btn${isMobileLayout ? '-mobile' : '-desktop'}`}
        onClick={openDestinationSelection}
        className="flex items-center flex-1 h-full w-full text-left cursor-pointer group px-4 gap-2"
      >
        <MapPinIcon width={20} height={20} color={brandColors.primary} className="shrink-0" />
        <span
          className={`flex-1 text-[15px] sm:text-[17px] font-semibold transition-colors truncate
            ${value ? 'text-text-main group-hover:text-primary' : 'text-text-muted'}`}
        >
          {value ? getDestinationLabel(value) : 'Nhập địa điểm'}
        </span>
      </button>
    )
  }

  // ── JSX ───────────────────────────────────────────────────────────────────

  return (
    <div className={`flex flex-col ${className}`}>
      <p className="text-[15px] sm:text-[17px] font-semibold text-text-main mb-2 px-1">
        Chọn địa điểm
      </p>

      {/* Mobile layout */}
      <div className="sm:hidden">
        <div className="w-full flex items-center h-[45px] border border-border-main rounded-[20px] bg-white overflow-hidden hover:border-primary/60 transition-colors">
          {renderTrigger(true)}
        </div>
      </div>

      {/* Tablet / Desktop layout */}
      <div className="hidden sm:block">
        <TourDestinationPopover
          open={popoverOpen}
          onOpenChange={(open) => {
            if (!open) handlePopoverClose()
            else setPopoverOpen(true)
          }}
          value={value}
          onSelect={handleSelect}
          searchQuery={searchQuery}
        >
          <div
            className={`relative flex items-center h-[55px] border rounded-[20px] bg-white transition-colors overflow-hidden
              ${popoverOpen ? 'border-primary/60' : 'border-border-main hover:border-primary/40'}`}
          >
            {renderTrigger(false)}
          </div>
        </TourDestinationPopover>
      </div>
    </div>
  )
}
