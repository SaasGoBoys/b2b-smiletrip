import { Input } from 'antd'

import { brandColors } from '@/shared/lib/antd-theme/tokens'

import { POPULAR_TOUR_DESTINATIONS } from './tourDestinationData'

import { SearchIcon } from '@/assets/icons/icons'

interface TourDestinationContentProps {
  value: string
  onSelect: (value: string) => void
  isPopover?: boolean
  searchQuery?: string
  onSearchChange?: (value: string) => void
}

export function TourDestinationContent({
  value,
  onSelect,
  isPopover,
  searchQuery = '',
  onSearchChange,
}: TourDestinationContentProps) {
  const normalizedSearch = searchQuery.toLowerCase().trim()

  const filteredDestinations = POPULAR_TOUR_DESTINATIONS.filter((d) =>
    d.label.toLowerCase().includes(normalizedSearch)
  )

  return (
    <div className={`flex flex-col gap-3 ${isPopover ? 'w-[340px] sm:w-[500px] md:w-[640px] p-2' : ''}`}>
      {!isPopover && (
        <div>
          <Input
            prefix={<SearchIcon color={brandColors.textSecondary} width={18} height={18} />}
            placeholder="Tìm kiếm địa điểm tour..."
            value={searchQuery}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="h-11 rounded-lg border-border-light text-[15px]"
            allowClear
          />
        </div>
      )}

      <p className="text-[14px] font-medium text-text-secondary leading-none">Tour phổ biến</p>

      {filteredDestinations.length > 0 ? (
        <div className="flex flex-wrap gap-x-2 gap-y-2">
          {filteredDestinations.map((dest, index) => {
            const isSelected = dest.value === value
            return (
              <button
                key={dest.value}
                id={`tour-dest-${dest.value}`}
                onClick={() => onSelect(dest.value)}
                className={`
                  flex items-center overflow-hidden h-[30px] rounded-[10px] border transition-all duration-150 whitespace-nowrap cursor-pointer
                  ${
                    isSelected
                      ? 'border-primary shadow-sm'
                      : 'border-[#78ABCD] hover:border-primary/50'
                  }
                `}
              >
                <div
                  className={`
                    w-[32px] h-[30px] flex items-center justify-center shrink-0 border-r text-[14px] font-normal
                    ${
                      isSelected
                        ? 'bg-primary text-white border-primary'
                        : 'bg-[#CDE7FF] text-[#5063BF] border-[#78ABCD]'
                    }
                  `}
                >
                  {index + 1}
                </div>
                <div className="px-3 h-[30px] flex items-center bg-white text-[14px] font-normal text-text-main">
                  {dest.label}
                </div>
              </button>
            )
          })}
        </div>
      ) : (
        <div className="py-8 text-center text-text-secondary text-[14px]">
          Không tìm thấy địa điểm
        </div>
      )}
    </div>
  )
}
