import { MapPinIcon } from '@/assets/icons/icons'
import { POPULAR_DESTINATIONS } from '@/mocks/data/hotels'

interface DestinationSelectContentProps {
  value: string
  onSelect: (value: string) => void
  isPopover?: boolean
  searchQuery: string
  onSearchChange: (value: string) => void
}

export function DestinationSelectContent({
  value,
  onSelect,
  isPopover,
  searchQuery,
  onSearchChange,
}: DestinationSelectContentProps) {
  const normalizedSearch = searchQuery.toLowerCase().trim()
  const filteredDestinations = POPULAR_DESTINATIONS.filter((item) =>
    item.label.toLowerCase().includes(normalizedSearch)
  )

  return (
    <div className={`flex flex-col bg-white ${isPopover ? 'w-[550px]' : 'w-full'}`}>
      {/* Search Input - chỉ hiển thị ở Modal (Mobile) */}
      {!isPopover && (
        <>
          <div className="px-3 pt-0 pb-3">
            <div className="flex items-center gap-3 h-[46px] border border-border-main rounded-[10px] px-3 focus-within:border-primary transition-colors">
              <MapPinIcon width={22} height={22} color="#666" className="shrink-0" />
              <input
                autoFocus
                className="flex-1 bg-transparent border-none outline-none !text-[15px] text-text-main placeholder:text-text-muted"
                placeholder="Tìm kiếm điểm đến"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="border-t border-border-light" />
        </>
      )}

      <div className="px-2 pb-4">
        <section className="mt-4 mb-2">
          <p className="text-[15px] text-text-secondary mb-3 px-2 font-normal">Điểm đến phổ biến</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-4 gap-y-3 px-2">
            {filteredDestinations.map((dest) => {
              const isSelected = dest.value === value
              return (
                <button
                  key={dest.value}
                  onClick={() => onSelect(dest.value)}
                  className={`text-left text-[14px] transition-colors truncate ${
                    isSelected ? 'text-primary font-semibold' : 'text-text-main hover:text-primary'
                  }`}
                >
                  {dest.label}
                </button>
              )
            })}
          </div>
          {filteredDestinations.length === 0 && (
            <div className="flex items-center justify-center py-8 text-text-secondary text-[14px]">
              Không tìm thấy điểm đến phù hợp
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

