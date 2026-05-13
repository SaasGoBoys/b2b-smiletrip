import { Fragment, useMemo, useState } from 'react'

import type { CollapseProps } from 'antd'
import { Button, Collapse, Input, Spin } from 'antd'

import { useSyncState } from '@/shared/hooks/useSyncState'
import { brandColors } from '@/shared/lib/antd-theme/tokens'

import type { AirportEntity } from '../../../domain/entities/AirportEntity'
import useGetAirportLocationsQuery from '../../hooks/useGetAirportLocationsQuery'
import { groupAirportSearchResults } from '../../utils/airportSearch'

import { SearchIcon } from '@/assets/icons/icons'

const cityCollapseClassName =
  'bg-white [&_.ant-collapse-expand-icon]:text-white [&_.ant-collapse-content-box]:!p-0 [&_.ant-collapse-header]:!min-h-0 [&_.ant-collapse-header]:!items-start [&_.ant-collapse-header]:!rounded-md [&_.ant-collapse-header]:!border-0 [&_.ant-collapse-header]:!bg-[#4558B6] [&_.ant-collapse-header]:!py-2.5 [&_.ant-collapse-header]:!px-3 [&_.ant-collapse-header]:!leading-snug'

function AirportCitySearchCollapse({
  item,
}: {
  item: NonNullable<CollapseProps['items']>[number]
}) {
  const [activeKeys, setActiveKeys] = useState<string[]>([])

  return (
    <Collapse
      ghost
      bordered={false}
      expandIconPosition="end"
      activeKey={activeKeys}
      onChange={(keys) => setActiveKeys(keys)}
      className={cityCollapseClassName}
      items={[item]}
    />
  )
}

/** Search field + typeahead results, supplied by parent so from/to stay isolated. */
export interface AirportSelectSearchBinding {
  searchText: string
  onSearchTextChange: (text: string) => void
  searchResults: AirportEntity[]
  isSearchPending: boolean
}

interface AirportSelectContentProps {
  value: string
  type: 'from' | 'to'
  /** `displayLabel` is taken from the row only (name + code), no list lookup elsewhere. */
  onSelect: (cityCode: string, displayLabel: string) => void
  isPopover?: boolean
  airportSearch: AirportSelectSearchBinding
}

export function AirportSelectContent({
  value,
  type,
  onSelect,
  isPopover,
  airportSearch,
}: AirportSelectContentProps) {
  const { data: airportLocations = [], isPending } = useGetAirportLocationsQuery()
  const { searchText, onSearchTextChange, searchResults, isSearchPending } = airportSearch

  const searchTrimmed = searchText.trim()
  const showSearchPanel = searchTrimmed.length > 0

  const [selectedCountry, setSelectedCountry] = useSyncState<string | null>(
    airportLocations[0]?.countryName ?? null
  )

  const handleSelectCountry = (countryName: string) => {
    setSelectedCountry(countryName)
  }

  const listAirportsLocation = useMemo(() => {
    return (
      airportLocations?.find((airportLocation) => airportLocation.countryName === selectedCountry)
        ?.airport ?? []
    )
  }, [airportLocations, selectedCountry])

  const airportSearchBlocks = useMemo(
    () => groupAirportSearchResults(searchResults),
    [searchResults]
  )

  const selectableButtonClassName = `min-w-0 cursor-pointer truncate !justify-start !text-left !text-[14px] md:!text-[15px] !font-semibold !leading-none !gap-1 h-9 md:h-10 text-text-main hover:text-primary bg-white md:bg-transparent hover:bg-surface-hover`

  const selectBrowseAirport = (airport: (typeof listAirportsLocation)[number]) => {
    onSelect(airport.cityCode, `${airport.airportName} (${airport.cityCode})`)
  }

  const selectSearchEntity = (row: (typeof searchResults)[number]) => {
    onSelect(row.cityCode, row.displayName)
  }

  return (
    <div
      className={`flex flex-col ${
        isPopover ? 'sm:w-[543px] md:w-[680px] lg:w-[866px] xl:w-[956px] p-1' : ''
      }`}
    >
      <div className="mb-4">
        <Input
          prefix={<SearchIcon color={brandColors.textSecondary} width={18} height={18} />}
          placeholder="Tìm kiếm thành phố, sân bay..."
          value={searchText}
          onChange={(e) => onSearchTextChange(e.target.value)}
          className="h-11 rounded-lg border-border-light text-[15px]"
          allowClear
        />
      </div>

      {/* {filteredPopularCities.length > 0 && (
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
      )} */}

      <section className="overflow-hidden bg-white rounded-lg border border-border-light md:border-none">
        {!showSearchPanel && (
          <div className="grid grid-cols-1 md:grid-cols-[160px_1fr]">
            <aside className="flex overflow-x-auto bg-white border-b border-border-light md:flex-col md:overflow-visible md:border-b-0 md:border-r">
              {airportLocations.map((airportLocation) => {
                return (
                  <button
                    key={airportLocation.countryName}
                    id={`region-tab-${type}-${airportLocation.countryName}`}
                    onClick={() => handleSelectCountry(airportLocation.countryName)}
                    className={`flex h-[40px] md:h-[45px] shrink-0 cursor-pointer items-center whitespace-nowrap px-[15px] text-left text-[13px] md:text-[15px] font-semibold transition-all md:w-full ${
                      airportLocation.countryName === selectedCountry
                        ? 'relative z-10 md:-mr-[1px] bg-surface-hover text-primary md:text-text-main border-b-2 border-primary md:border-b-0 md:rounded-l-[8px]'
                        : 'bg-white text-text-secondary md:text-text-main hover:text-primary'
                    }`}
                  >
                    {airportLocation.countryName}
                  </button>
                )
              })}
            </aside>

            <div className="min-h-[176px] bg-surface-hover px-3 pb-4 pt-3 md:px-[12px] md:pb-[16px] md:pt-[12px]">
              {isPending ? (
                <div className="flex h-full items-center justify-center py-10 text-text-secondary">
                  <Spin />
                </div>
              ) : listAirportsLocation.length > 0 ? (
                <div className="grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 md:gap-y-[12px]">
                  {listAirportsLocation.map((airport) => {
                    const isSelected = airport.cityCode === value

                    return (
                      <Button
                        key={airport.cityCode}
                        id={`city-option-${type}-${airport.cityCode}`}
                        type={isSelected ? 'primary' : 'text'}
                        onClick={() => selectBrowseAirport(airport)}
                        className={`min-w-0 cursor-pointer truncate !justify-start !text-left !text-[14px] md:!text-[15px] !font-semibold !leading-none !gap-1 h-9 md:h-10 ${
                          !isSelected &&
                          'text-text-main hover:text-primary bg-white md:bg-transparent'
                        }`}
                      >
                        <span>{airport.airportName}</span>
                        <span
                          className={`${isSelected ? 'text-white/80' : 'text-text-secondary'} font-normal text-[12px] md:text-[13px]`}
                        >
                          ({airport.cityCode})
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
        )}

        {showSearchPanel && (
          <div className="w-full">
            <aside className="flex overflow-x-auto bg-white border-b border-border-light md:flex-col md:overflow-visible md:border-b-0 md:border-r gap-2">
              {isSearchPending ? (
                <div className="flex h-full items-center justify-center py-10 text-text-secondary">
                  <Spin />
                </div>
              ) : searchResults.length > 0 ? (
                airportSearchBlocks.map((block, blockIndex) => {
                  if (block.kind === 'flat') {
                    return (
                      <Fragment key={`search-flat-${blockIndex}`}>
                        {block.items.map((airport, itemIndex) => (
                          <button
                            key={`${type}-${blockIndex}-${itemIndex}-${airport.cityCode}-${airport.text}`}
                            id={`city-option-${type}-${airport.cityCode}-${blockIndex}-${itemIndex}`}
                            type="button"
                            onClick={() => selectSearchEntity(airport)}
                            className={selectableButtonClassName}
                          >
                            <span>{airport.displayName}</span>
                          </button>
                        ))}
                      </Fragment>
                    )
                  }

                  const panelKey = `city-group-${blockIndex}-${block.city.cityCode}`
                  const collapseItem: NonNullable<CollapseProps['items']>[number] = {
                    key: panelKey,
                    label: (
                      <div className="flex min-w-0 flex-col gap-0.5 text-left text-white">
                        <span className="truncate text-[14px] font-semibold md:text-[15px]">
                          {block.city.text}
                        </span>
                        {block.city.cityCode ? (
                          <span className="truncate text-[12px] font-normal text-white/85 md:text-[13px]">
                            {block.city.city}
                          </span>
                        ) : null}
                      </div>
                    ),
                    children: (
                      <div className="flex flex-col gap-1 pb-1">
                        {block.subs.length > 0 ? (
                          block.subs.map((sub, subIndex) => (
                            <button
                              key={`${type}-${blockIndex}-sub-${subIndex}-${sub.cityCode}`}
                              id={`city-option-${type}-${sub.cityCode}-sub-${subIndex}`}
                              type="button"
                              onClick={() => selectSearchEntity(sub)}
                              className={selectableButtonClassName}
                            >
                              <span>{sub.displayName}</span>
                            </button>
                          ))
                        ) : (
                          <span className="px-1 py-2 text-[13px] text-text-secondary">
                            Không có sân bay
                          </span>
                        )}
                      </div>
                    ),
                  }

                  return <AirportCitySearchCollapse key={panelKey} item={collapseItem} />
                })
              ) : (
                <div className="flex h-full items-center justify-center py-10 text-text-secondary">
                  Không tìm thấy kết quả
                </div>
              )}
            </aside>
          </div>
        )}
      </section>
    </div>
  )
}
