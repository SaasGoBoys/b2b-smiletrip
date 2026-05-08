import { useState } from 'react'

import { Button, Input } from 'antd'

import { brandColors } from '@/shared/lib/antd-theme/tokens'

import { SearchIcon } from '@/assets/icons/icons'
import { CITY_REGIONS, POPULAR_CITIES } from '@/mocks/data/flights'

interface CitySelectContentProps {
  value: string
  type: 'from' | 'to'
  onSelect: (value: string) => void
  isPopover?: boolean
  searchQuery?: string
  onSearchChange?: (value: string) => void
}

export function CitySelectContent({
  value,
  type,
  onSelect,
  isPopover,
  searchQuery = '',
  onSearchChange,
}: CitySelectContentProps) {
  const [activeRegion, setActiveRegion] = useState('vietnam')

  const normalizedSearch = searchQuery.toLowerCase().trim()

  const filteredPopularCities = POPULAR_CITIES.filter(
    (city) =>
      city.label.toLowerCase().includes(normalizedSearch) ||
      city.value.toLowerCase().includes(normalizedSearch)
  )

  const currentRegion = CITY_REGIONS.find((region) => region.key === activeRegion) ?? CITY_REGIONS[0]

  const filteredRegionCities = currentRegion.cities.filter(
    (city) =>
      city.label.toLowerCase().includes(normalizedSearch) ||
      city.code.toLowerCase().includes(normalizedSearch) ||
      city.value.toLowerCase().includes(normalizedSearch)
  )

  return (
    <div
      className={`flex flex-col ${isPopover ? 'sm:w-[543px] md:w-[680px] lg:w-[866px] xl:w-[956px] p-1' : ''
        }`}
    >
      {!isPopover && (
        <div className="mb-4">
          <Input
            prefix={<SearchIcon color={brandColors.textSecondary} width={18} height={18} />}
            placeholder="Tìm kiếm thành phố, sân bay..."
            value={searchQuery}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="h-11 rounded-lg border-border-light text-[15px]"
            allowClear
          />
        </div>
      )}

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
                  className={`min-w-0 cursor-pointer truncate !justify-start !text-left text-[13px] md:text-[14px] font-normal leading-none px-3 h-8 md:h-9 ${!isSelected && 'text-text-main hover:text-primary bg-surface-hover md:bg-transparent'
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
                  className={`flex h-[40px] md:h-[45px] shrink-0 cursor-pointer items-center whitespace-nowrap px-[15px] text-left text-[13px] md:text-[15px] font-semibold transition-all md:w-full ${isActive
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
                      className={`min-w-0 cursor-pointer truncate !justify-start !text-left !text-[14px] md:!text-[15px] !font-semibold !leading-none !gap-1 h-9 md:h-10 ${!isSelected && 'text-text-main hover:text-primary bg-white md:bg-transparent'
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
    </div>
  )
}

