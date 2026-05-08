import { useState } from 'react'

import { Modal } from 'antd'

const POPULAR_CITIES = [
  { value: 'HAN', label: 'Hà Nội' },
  { value: 'SGN', label: 'TP. Hồ Chí Minh' },
  { value: 'DAD', label: 'Đà Nẵng' },
  { value: 'LHR', label: 'Luân Đôn' },
  { value: 'CDG', label: 'Paris' },
  { value: 'YVR', label: 'Vancouver' },
  { value: 'CAI', label: 'Cairo' },
  { value: 'ICN', label: 'Seoul' },
  { value: 'TYO', label: 'Tokyo' },
  { value: 'BKK', label: 'Băng Cốc' },
  { value: 'FRA', label: 'Frankfurt' },
  { value: 'JFK', label: 'New York' },
  { value: 'GIG', label: 'Rio de Janeiro' },
  { value: 'SYD', label: 'Sydney' },
]

const CITY_REGIONS = [
  {
    key: 'vietnam',
    label: 'Việt Nam',
    cities: [
      { value: 'HAN', label: 'Hà Nội', code: 'HAN' },
      { value: 'SGN', label: 'Hồ Chí Minh', code: 'SGN' },
      { value: 'DAD', label: 'Đà Nẵng', code: 'DAD' },
      { value: 'CXR', label: 'Nha Trang', code: 'CXR' },
      { value: 'PQC', label: 'Phú Quốc', code: 'PQC' },
      { value: 'HUI', label: 'Huế', code: 'HUI' },
      { value: 'HPH', label: 'Hải phòng', code: 'PHP' },
      { value: 'VCA', label: 'Cần Thơ', code: 'VCA' },
      { value: 'VCS', label: 'Côn Đảo', code: 'VCS' },
      { value: 'THD', label: 'Thanh Hóa', code: 'THD' },
      { value: 'DLI', label: 'Đà Lạt', code: 'DLI' },
      { value: 'UIH', label: 'Quy Nhơn', code: 'UIH' },
      { value: 'CAH', label: 'Cà Mau', code: 'CAH' },
      { value: 'VCL', label: 'Chu Lai', code: 'VCL' },
      { value: 'BMV', label: 'Buôn Ma Thuột', code: 'BMV' },
      { value: 'DIN', label: 'Điện Biên', code: 'DIN' },
      { value: 'VDH', label: 'Đồng Hới', code: 'VDH' },
      { value: 'TBB', label: 'Tuy Hòa', code: 'TBB' },
      { value: 'PXU', label: 'Pleiku', code: 'PXU' },
      { value: 'VKG', label: 'Rạch Giá', code: 'VKG' },
      { value: 'VII', label: 'Vinh', code: 'VII' },
      { value: 'VDO', label: 'Vân Đồn', code: 'VDO' },
    ],
  },
  {
    key: 'southeast-asia',
    label: 'Đông Nam Á',
    cities: [
      { value: 'BKK', label: 'Băng Cốc', code: 'BKK' },
      { value: 'SIN', label: 'Singapore', code: 'SIN' },
      { value: 'KUL', label: 'Kuala Lumpur', code: 'KUL' },
      { value: 'CGK', label: 'Jakarta', code: 'CGK' },
      { value: 'MNL', label: 'Manila', code: 'MNL' },
      { value: 'RGN', label: 'Yangon', code: 'RGN' },
      { value: 'PNH', label: 'Phnom Penh', code: 'PNH' },
      { value: 'VTE', label: 'Vientiane', code: 'VTE' },
    ],
  },
  {
    key: 'asia',
    label: 'Châu Á',
    cities: [
      { value: 'TYO', label: 'Tokyo', code: 'NRT' },
      { value: 'ICN', label: 'Seoul', code: 'ICN' },
      { value: 'PEK', label: 'Bắc Kinh', code: 'PEK' },
      { value: 'HKG', label: 'Hồng Kông', code: 'HKG' },
      { value: 'TPE', label: 'Đài Bắc', code: 'TPE' },
      { value: 'BOM', label: 'Mumbai', code: 'BOM' },
      { value: 'DEL', label: 'New Delhi', code: 'DEL' },
      { value: 'DXB', label: 'Dubai', code: 'DXB' },
    ],
  },
  {
    key: 'europe',
    label: 'Châu Âu',
    cities: [
      { value: 'LHR', label: 'Luân Đôn', code: 'LHR' },
      { value: 'CDG', label: 'Paris', code: 'CDG' },
      { value: 'FRA', label: 'Frankfurt', code: 'FRA' },
      { value: 'AMS', label: 'Amsterdam', code: 'AMS' },
      { value: 'FCO', label: 'Rome', code: 'FCO' },
      { value: 'MAD', label: 'Madrid', code: 'MAD' },
      { value: 'IST', label: 'Istanbul', code: 'IST' },
      { value: 'ZRH', label: 'Zurich', code: 'ZRH' },
    ],
  },
  {
    key: 'oceania',
    label: 'Châu Đại Dương',
    cities: [
      { value: 'SYD', label: 'Sydney', code: 'SYD' },
      { value: 'MEL', label: 'Melbourne', code: 'MEL' },
      { value: 'AKL', label: 'Auckland', code: 'AKL' },
      { value: 'BNE', label: 'Brisbane', code: 'BNE' },
    ],
  },
]

interface CitySelectModalProps {
  open: boolean
  type: 'from' | 'to'
  value: string
  onSelect: (value: string) => void
  onClose: () => void
}

export function CitySelectModal({ open, type, value, onSelect, onClose }: CitySelectModalProps) {
  const [activeRegion, setActiveRegion] = useState('vietnam')

  const currentRegion = CITY_REGIONS.find((region) => region.key === activeRegion) ?? CITY_REGIONS[0]

  const handleSelect = (cityValue: string) => {
    onSelect(cityValue)
    onClose()
  }

  return (
    <Modal
      open={open}
      onCancel={onClose}
      afterClose={() => setActiveRegion('vietnam')}
      footer={null}
      closable={false}
      centered
      width="min(923px, calc(100vw - 4px))"
      className="!p-0 [&_.ant-modal-content]:!overflow-hidden [&_.ant-modal-content]:!rounded-[13px] [&_.ant-modal-content]:!bg-white [&_.ant-modal-content]:!p-0 [&_.ant-modal-content]:!shadow-[0_2px_7px_rgba(0,0,0,0.26)]"
    >
      <div className="px-[10px] pb-[16px] pt-[21px]">
        <section className="pb-[26px]">
          <p className="mb-[17px] text-[14px] font-normal leading-none text-[#9b9b9b]">
            Thành phố phổ biến
          </p>
          <div className="grid grid-cols-2 gap-x-5 gap-y-[15px] sm:grid-cols-4 lg:grid-cols-7">
            {POPULAR_CITIES.map((city) => {
              const isSelected = city.value === value

              return (
                <button
                  key={city.value}
                  id={`popular-city-${type}-${city.value}`}
                  aria-pressed={isSelected}
                  onClick={() => handleSelect(city.value)}
                  className="min-w-0 cursor-pointer truncate text-left text-[14px] font-normal leading-none text-[#3f3f3f] transition-colors hover:text-primary"
                >
                  {city.label}
                </button>
              )
            })}
          </div>
        </section>

        <section className="overflow-hidden bg-white">
          <div className="flex flex-col md:flex-row">
            <aside className="flex w-full shrink-0 overflow-x-auto bg-white md:block md:w-[172px] md:overflow-visible">
              {CITY_REGIONS.map((region) => {
                const isActive = activeRegion === region.key

                return (
                  <button
                    key={region.key}
                    id={`region-tab-${type}-${region.key}`}
                    onClick={() => setActiveRegion(region.key)}
                    className={`h-[31px] shrink-0 cursor-pointer whitespace-nowrap px-[17px] text-left text-[16px] font-bold leading-none transition-colors md:flex md:w-full md:items-center md:text-[18px] ${
                      isActive
                        ? 'rounded-l-[7px] bg-[#f4f4f4] text-[#3f3f3f]'
                        : 'bg-white text-[#3f3f3f] hover:text-primary'
                    }`}
                  >
                    {region.label}
                  </button>
                )
              })}
            </aside>

            <div className="min-h-[176px] flex-1 bg-[#f4f4f4] px-[9px] pb-[14px] pt-[8px]">
              <div className="grid grid-cols-1 gap-x-8 gap-y-[14px] sm:grid-cols-2 lg:grid-cols-4">
                {currentRegion.cities.map((city) => {
                  const isSelected = city.value === value

                  return (
                    <button
                      key={city.value}
                      id={`city-option-${type}-${city.value}`}
                      aria-pressed={isSelected}
                      onClick={() => handleSelect(city.value)}
                      className="min-w-0 cursor-pointer truncate text-left text-[16px] font-bold leading-none text-[#3f3f3f] transition-colors hover:text-primary"
                    >
                      <span>{city.label}</span>
                      <span className="ml-1 text-[#909090]">({city.code})</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Modal>
  )
}
