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

export function getDestinationLabel(value: string): string {
  const found = POPULAR_TOUR_DESTINATIONS.find((d) => d.value === value)
  return found ? found.label : value
}
