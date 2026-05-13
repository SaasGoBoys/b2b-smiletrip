

import { brandColors } from '@/shared/lib/antd-theme/tokens'

import { ArrowDownSquareIcon,TrainIcon } from '@/assets/icons/icons'
import { INTERNATIONAL_REGIONS,POPULAR_STATIONS } from '@/mocks/data/trains'

interface StationSelectContentProps {
  value: string
  type: 'from' | 'to'
  onSelect: (value: string) => void
  isPopover?: boolean
  searchQuery?: string
  onSearchChange?: (value: string) => void
}

export function StationSelectContent({
  value,
  type,
  onSelect,
  isPopover,
  searchQuery = '',
  onSearchChange,
}: StationSelectContentProps) {
  const visibleCount = isPopover ? 4 : 3
  const normalizedSearch = searchQuery.toLowerCase().trim()

  const filteredPopular = POPULAR_STATIONS.filter(
    (s) =>
      s.label.toLowerCase().includes(normalizedSearch) ||
      s.value.toLowerCase().includes(normalizedSearch)
  )

  const filteredRegions = INTERNATIONAL_REGIONS.map((region) => ({
    ...region,
    stations: region.stations.filter(
      (s) =>
        s.label.toLowerCase().includes(normalizedSearch) ||
        s.value.toLowerCase().includes(normalizedSearch)
    ),
  })).filter((region) => region.stations.length > 0)

  const placeholder = type === 'from' ? 'Chọn ga khởi hành' : 'Chọn ga đến'

  return (
    <div
      className={`flex flex-col bg-white ${
        isPopover ? 'w-[350px] sm:w-[480px] md:w-[620px] lg:w-[780px] xl:w-[900px]' : 'w-full'
      }`}
    >
      {/* Search input - chỉ hiển thị ở Modal (Mobile) */}
      {!isPopover && (
        <>
          <div className="px-2 pt-0 pb-2">
            <div className="flex items-center gap-3 h-[46px] border border-border-main rounded-[10px] px-3 focus-within:border-primary transition-colors">
              <TrainIcon width={22} height={22} color={brandColors.textSecondary} className="shrink-0" />
              <input
                autoFocus
                id={`station-search-${type}`}
                className="flex-1 bg-transparent border-none outline-none !text-[15px] text-text-main placeholder:text-text-muted"
                placeholder={placeholder}
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="border-t border-border-light" />
        </>
      )}

      <div className="overflow-y-auto max-h-[440px] px-2 pb-4">
        {/* Ga quốc nội phổ biến */}
        {filteredPopular.length > 0 && (
          <section className="mt-4 mb-2">
            <p className="text-[15px] text-text-secondary mb-3 px-2">Ga quốc nội phổ biến</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-4 gap-y-3 px-2">
              {filteredPopular.map((station) => {
                const isSelected = station.value === value
                return (
                  <button
                    key={station.value}
                    id={`popular-station-${type}-${station.value}`}
                    onClick={() => onSelect(station.value)}
                    className={`text-left text-[14px] cursor-pointer transition-colors truncate ${
                      isSelected ? 'text-primary font-semibold' : 'text-text-main hover:text-primary'
                    }`}
                  >
                    {station.label}
                  </button>
                )
              })}
            </div>
          </section>
        )}

        {/* Các vùng quốc tế - expandable (Native details/summary) */}
        {filteredRegions.map((region) => {
          const hasMore = region.stations.length > visibleCount
          const first4Stations = region.stations.slice(0, visibleCount)
          const remainingStations = region.stations.slice(visibleCount)

          return (
            <details 
              key={region.key} 
              className="group mt-1"
              open={normalizedSearch ? true : undefined}
            >
              <summary className="list-none [&::-webkit-details-marker]:hidden outline-none select-none">
                {/* Divider */}
                <div className="border-t border-border-light mb-0" />

                {/* Header hàng vùng */}
                <div className="flex items-center h-[40px] bg-surface-hover px-0 cursor-pointer px-2">
                  <span className="flex-1 text-[15px] text-text-secondary font-normal">
                    {region.label}
                  </span>
                  {hasMore && !normalizedSearch && (
                    <>
                      <span className="group-open:hidden flex items-center gap-1 text-[14px] text-primary hover:opacity-80 transition-opacity">
                        Thêm
                      </span>
                      <span className="hidden group-open:flex items-center gap-1 text-[14px] text-primary hover:opacity-80 transition-opacity">
                        Ẩn bớt
                      </span>
                    </>
                  )}
                  {hasMore && !normalizedSearch && (
                    <ArrowDownSquareIcon
                      width={16}
                      height={16}
                      color={brandColors.textSecondary}
                      className="ml-5 transition-transform duration-200 group-open:rotate-180"
                    />
                  )}
                </div>

                {/* 4 ga đầu tiên */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-4 gap-y-3 pt-2 pb-3 cursor-default px-2">
                  {first4Stations.map((station) => {
                    const isSelected = station.value === value
                    return (
                      <button
                        key={station.value}
                        id={`station-${type}-${station.value}`}
                        onClick={(e) => {
                          e.preventDefault()
                          onSelect(station.value)
                        }}
                        className={`text-left text-[14px] cursor-pointer transition-colors truncate ${
                          isSelected
                            ? 'text-primary font-semibold'
                            : 'text-text-main hover:text-primary'
                        }`}
                      >
                        {station.label}
                      </button>
                    )
                  })}
                </div>
              </summary>

              {/* Danh sách ga còn lại */}
              {hasMore && (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-4 gap-y-3 pb-3 px-2">
                  {remainingStations.map((station) => {
                    const isSelected = station.value === value
                    return (
                      <button
                        key={station.value}
                        id={`station-${type}-${station.value}`}
                        onClick={(e) => {
                          e.preventDefault()
                          onSelect(station.value)
                        }}
                        className={`text-left text-[14px] cursor-pointer transition-colors truncate ${
                          isSelected
                            ? 'text-primary font-semibold'
                            : 'text-text-main hover:text-primary'
                        }`}
                      >
                        {station.label}
                      </button>
                    )
                  })}
                </div>
              )}
            </details>
          )
        })}

        {/* Empty state khi search không có kết quả */}
        {normalizedSearch && filteredPopular.length === 0 && filteredRegions.length === 0 && (
          <div className="flex items-center justify-center py-12 text-text-secondary text-[15px]">
            Không tìm thấy ga phù hợp
          </div>
        )}
      </div>
    </div>
  )
}
