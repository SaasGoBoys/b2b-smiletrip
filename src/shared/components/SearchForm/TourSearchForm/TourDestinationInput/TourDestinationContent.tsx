import { Input } from 'antd'

import { brandColors } from '@/shared/lib/antd-theme/tokens'

import { SearchIcon } from '@/assets/icons/icons'

// ── Mock Data ────────────────────────────────────────────────────────────────

export interface TourDestination {
  value: string
  label: string
}

export const POPULAR_TOUR_DESTINATIONS: TourDestination[] = [
  { value: 'ha-long', label: 'Vịnh Hạ Long' },
  { value: 'sun-world-ba-na', label: 'Sun World Bà Nà Hill' },
  { value: 'cu-chi', label: 'Địa đạo Củ Chi' },
  { value: 'pho-tau-hanoi', label: 'Phố đường Tàu Hà Nội' },
  { value: 'hon-gam-ghi', label: 'Hòn Gầm Ghi' },
  { value: 'trang-an', label: 'Di Sản Tràng An - Ninh Bình' },
  { value: 'ngu-hanh-son', label: 'Ngũ Hành Sơn' },
  { value: 'hoi-an', label: 'Phố cổ Hội An' },
  { value: 'mekong-delta', label: 'Đồng Bằng Sông Cửu Long' },
  { value: 'sai-gon-river', label: 'Sông Sài Gòn' },
  { value: 'cau-rong', label: 'Cầu Rồng' },
  { value: 'vinh-lan-ha', label: 'Vịnh Lan Hạ' },
  { value: 'pho-co-hanoi', label: 'Khu phố cổ Hà Nội' },
  { value: 'ban-cat-cat', label: 'Bản Cát Cát' },
  { value: 'bai-sao', label: 'Bãi Sao' },
  { value: 'phan-xi-pang', label: 'Phan xi păng' },
  { value: 'phu-quoc', label: 'Grand Phú Quốc' },
  { value: 'tam-coc', label: 'Tam Cốc Bích Động' },
  { value: 'my-khe', label: 'Bãi biển Mỹ Khê' },
  { value: 'cau-vang', label: 'Cầu Vàng' },
]

export const getDestinationLabel = (value: string): string => {
  const found = POPULAR_TOUR_DESTINATIONS.find((d) => d.value === value)
  return found ? found.label : value
}

// ── Props ─────────────────────────────────────────────────────────────────────

interface TourDestinationContentProps {
  value: string
  onSelect: (value: string) => void
  isPopover?: boolean
  searchQuery?: string
  onSearchChange?: (value: string) => void
}

// ── Component ─────────────────────────────────────────────────────────────────

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
      {/* Search bar — chỉ hiển thị trong modal (không phải popover) */}
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

      {/* Tiêu đề */}
      <p className="text-[14px] font-medium text-text-secondary leading-none">
        Tour phổ biến
      </p>

      {/* Danh sách địa điểm */}
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
                  ${isSelected
                    ? 'border-primary shadow-sm'
                    : 'border-[#78ABCD] hover:border-primary/50'
                  }
                `}
              >
                {/* Badge số thứ tự (Phần bên trái) */}
                <div
                  className={`
                    w-[32px] h-[30px] flex items-center justify-center shrink-0 border-r text-[14px] font-normal
                    ${isSelected 
                      ? 'bg-primary text-white border-primary' 
                      : 'bg-[#CDE7FF] text-[#5063BF] border-[#78ABCD]'}
                  `}
                >
                  {index + 1}
                </div>
                {/* Tên địa điểm (Phần bên phải) */}
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
