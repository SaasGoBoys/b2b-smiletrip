import { useState } from 'react'

import { Button } from 'antd'

import { brandColors } from '@/shared/lib/antd-theme/tokens'

import { ArrowDownSquareIcon, SearchIcon } from '@/assets/icons/icons'
import { CITY_REGIONS, POPULAR_CITIES } from '@/mocks/data/flights'

interface AirportSelectContentProps {
  value: string
  type: 'from' | 'to'
  onSelect: (value: string) => void
  isPopover?: boolean
  searchQuery?: string
  onSearchChange?: (value: string) => void
}

export function AirportSelectContent({
  value,
  type,
  onSelect,
  isPopover = false,
  searchQuery = '',
  onSearchChange,
}: AirportSelectContentProps) {
  const [activeRegion, setActiveRegion] = useState('vietnam')
  const visibleCount = 4
  const normalizedSearch = searchQuery.toLowerCase().trim()

  const filteredPopularCities = POPULAR_CITIES.filter(
    (city) =>
      city.label.toLowerCase().includes(normalizedSearch) ||
      city.value.toLowerCase().includes(normalizedSearch)
  )

  const currentRegion =
    CITY_REGIONS.find((region) => region.key === activeRegion) ?? CITY_REGIONS[0]

  const filteredRegionCities = currentRegion.cities.filter(
    (city) =>
      city.label.toLowerCase().includes(normalizedSearch) ||
      city.code.toLowerCase().includes(normalizedSearch) ||
      city.value.toLowerCase().includes(normalizedSearch)
  )

  const filteredRegionsAll = CITY_REGIONS.map((region) => ({
    ...region,
    cities: region.cities.filter(
      (c) =>
        c.label.toLowerCase().includes(normalizedSearch) ||
        c.code.toLowerCase().includes(normalizedSearch) ||
        c.value.toLowerCase().includes(normalizedSearch)
    ),
  })).filter((region) => region.cities.length > 0)

  return (
    <div
      className={`flex flex-col bg-white ${
        isPopover ? 'sm:w-[543px] md:w-[680px] lg:w-[866px] xl:w-[956px] p-1' : 'w-full h-full'
      }`}
    >
      {!isPopover ? (
        <>
          <div className="px-2 pt-0 pb-2 shrink-0">
            <div className="flex items-center gap-3 h-[46px] border border-border-main rounded-[10px] px-3 focus-within:border-primary transition-colors">
              <SearchIcon
                width={22}
                height={22}
                color={brandColors.textSecondary}
                className="shrink-0"
              />
              <input
                autoFocus
                id={`city-search-${type}`}
                className="flex-1 bg-transparent border-none outline-none !text-[15px] text-text-main placeholder:text-text-muted"
                placeholder="Tìm kiếm thành phố, sân bay..."
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="border-t border-border-light shrink-0" />

          <div className="flex-1 overflow-y-auto px-2 pb-4">
            {filteredPopularCities.length > 0 && (
              <section className="mt-4 mb-2">
                <p className="text-[15px] text-text-secondary mb-3 px-2">Thành phố phổ biến</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-4 gap-y-3 px-2">
                  {filteredPopularCities.map((city) => {
                    const isSelected = city.value === value
                    return (
                      <button
                        key={city.value}
                        id={`popular-city-${type}-${city.value}`}
                        onClick={() => onSelect(city.value)}
                        className={`text-left text-[14px] cursor-pointer transition-colors truncate ${
                          isSelected
                            ? 'text-primary font-semibold'
                            : 'text-text-main hover:text-primary'
                        }`}
                      >
                        {city.label}
                      </button>
                    )
                  })}
                </div>
              </section>
            )}

            {filteredRegionsAll.map((region) => {
              const hasMore = region.cities.length > visibleCount
              const first4Cities = region.cities.slice(0, visibleCount)
              const remainingCities = region.cities.slice(visibleCount)

              return (
                <details
                  key={region.key}
                  className="group mt-1"
                  open={normalizedSearch ? true : undefined}
                >
                  <summary className="list-none [&::-webkit-details-marker]:hidden outline-none select-none">
                    <div className="border-t border-border-light mb-0" />
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

                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-4 gap-y-3 pt-2 pb-3 cursor-default px-2">
                      {first4Cities.map((city) => {
                        const isSelected = city.value === value
                        return (
                          <button
                            key={city.value}
                            id={`city-${type}-${city.value}`}
                            onClick={(e) => {
                              e.preventDefault()
                              onSelect(city.value)
                            }}
                            className={`text-left text-[14px] cursor-pointer transition-colors truncate ${
                              isSelected
                                ? 'text-primary font-semibold'
                                : 'text-text-main hover:text-primary'
                            }`}
                          >
                            {city.label}
                          </button>
                        )
                      })}
                    </div>
                  </summary>

                  {hasMore && (
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-4 gap-y-3 pb-3 px-2">
                      {remainingCities.map((city) => {
                        const isSelected = city.value === value
                        return (
                          <button
                            key={city.value}
                            id={`city-${type}-${city.value}`}
                            onClick={(e) => {
                              e.preventDefault()
                              onSelect(city.value)
                            }}
                            className={`text-left text-[14px] cursor-pointer transition-colors truncate ${
                              isSelected
                                ? 'text-primary font-semibold'
                                : 'text-text-main hover:text-primary'
                            }`}
                          >
                            {city.label}
                          </button>
                        )
                      })}
                    </div>
                  )}
                </details>
              )
            })}

            {normalizedSearch &&
              filteredPopularCities.length === 0 &&
              filteredRegionsAll.length === 0 && (
                <div className="flex items-center justify-center py-12 text-text-secondary text-[15px]">
                  Không tìm thấy thành phố phù hợp
                </div>
              )}
          </div>
        </>
      ) : (
        <>
          {filteredPopularCities.length > 0 && (
            <section className="flex flex-col gap-3 mb-6 md:gap-4 md:mb-4">
              <p className="text-[14px] md:text-[15px] font-medium leading-none text-text-secondary">
                Thành phố phổ biến
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {filteredPopularCities.map((city) => {
                  const isSelected = city.value === value

                  return (
                    <Button
                      key={city.value}
                      id={`popular-city-${type}-${city.value}`}
                      type={isSelected ? 'primary' : 'text'}
                      onClick={() => onSelect(city.value)}
                      className={`min-w-0 cursor-pointer truncate !justify-start !text-left text-[13px] md:text-[14px] font-normal leading-none px-3 h-8 md:h-9 ${
                        !isSelected &&
                        'text-text-main hover:text-primary bg-surface-hover md:bg-transparent'
                      }`}
                    >
                      {city.label}
                    </Button>
                  )
                })}
              </div>
            </section>
          )}

          <section className="overflow-hidden bg-white rounded-lg border border-border-light md:border-none">
            <div className="grid grid-cols-1 md:grid-cols-[160px_1fr]">
              <aside className="flex overflow-x-auto bg-white border-b border-border-light md:flex-col md:overflow-visible md:border-b-0 md:border-r">
                {CITY_REGIONS.map((region) => {
                  const isActive = activeRegion === region.key

                  return (
                    <button
                      key={region.key}
                      id={`region-tab-${type}-${region.key}`}
                      onClick={() => setActiveRegion(region.key)}
                      className={`flex h-[40px] md:h-[45px] shrink-0 cursor-pointer items-center whitespace-nowrap px-[15px] text-left text-[13px] md:text-[15px] font-semibold transition-all md:w-full ${
                        isActive
                          ? 'relative z-10 md:-mr-[1px] bg-surface-hover text-primary md:text-text-main border-b-2 border-primary md:border-b-0 md:rounded-l-[8px]'
                          : 'bg-white text-text-secondary md:text-text-main hover:text-primary'
                      }`}
                    >
                      {region.label}
                    </button>
                  )
                })}
              </aside>

              <div className="min-h-[176px] bg-surface-hover px-3 pb-4 pt-3 md:px-[12px] md:pb-[16px] md:pt-[12px]">
                {filteredRegionCities.length > 0 ? (
                  <div className="grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-y-[12px]">
                    {filteredRegionCities.map((city) => {
                      const isSelected = city.value === value

                      return (
                        <Button
                          key={city.value}
                          id={`city-option-${type}-${city.value}`}
                          type={isSelected ? 'primary' : 'text'}
                          onClick={() => onSelect(city.value)}
                          className={`min-w-0 cursor-pointer truncate !justify-start !text-left !text-[14px] md:!text-[15px] !font-semibold !leading-none !gap-1 h-9 md:h-10 ${
                            !isSelected &&
                            'text-text-main hover:text-primary bg-white md:bg-transparent'
                          }`}
                        >
                          <span>{city.label}</span>
                          <span
                            className={`${isSelected ? 'text-white/80' : 'text-text-secondary'} font-normal text-[12px] md:text-[13px]`}
                          >
                            ({city.code})
                          </span>
                        </Button>
                      )
                    })}
                  </div>
                ) : (
                  <div className="flex h-full items-center justify-center py-10 text-text-secondary">
                    Không tìm thấy kết quả
                  </div>
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
