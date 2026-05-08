import {
  AirplaneCharterIcon,
  GroupIcon,
  LaborIcon,
  StudyIcon,
} from '@/assets/icons/icons'

export const TICKET_TYPES = [
  { key: 'lao-dong', label: 'Vé lao động', icon: LaborIcon },
  { key: 'du-hoc', label: 'Vé du học', icon: StudyIcon },
  { key: 'block', label: 'Vé Block', icon: GroupIcon },
  { key: 'charter', label: 'Vé Charter', icon: AirplaneCharterIcon },
]

export const POPULAR_CITIES = [
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

export const CITY_REGIONS = [
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

export const CITIES = [
  { value: 'HAN', label: 'Hà Nội (HAN)' },
  { value: 'SGN', label: 'TP. Hồ Chí Minh (SGN)' },
  { value: 'DAD', label: 'Đà Nẵng (DAD)' },
  { value: 'CXR', label: 'Nha Trang (CXR)' },
  { value: 'PQC', label: 'Phú Quốc (PQC)' },
  { value: 'VII', label: 'Vinh (VII)' },
  { value: 'HPH', label: 'Hải Phòng (HPH)' },
  { value: 'HUI', label: 'Huế (HUI)' },
]

export const PASSENGER_OPTIONS = [
  { value: '1-1', label: '1 người lớn, Phổ thông' },
  { value: '2-1', label: '2 người lớn, Phổ thông' },
  { value: '1-2', label: '1 người lớn, Thương gia' },
  { value: '3-1', label: '3 người lớn, Phổ thông' },
]

export const DATE_PRICES = [
  { date: '28/03', displayDate: '28/03', price: '6.667.500đ' },
  { date: '29/03', displayDate: '29/03', price: '6.667.500đ' },
  { date: '30/03', displayDate: '30/03', price: '6.667.500đ' },
  { date: '31/03', displayDate: '31/03', price: '6.667.500đ' },
  { date: '01/04', displayDate: '01/04', price: '6.667.500đ' },
  { date: '02/04', displayDate: '02/04', price: '6.667.500đ' },
  { date: '03/04', displayDate: '03/04', price: '6.667.500đ' },
  { date: '04/04', displayDate: '04/04', price: '6.667.500đ' },
]

export const AIRLINE_LOGOS: Record<string, string> = {
  'Vietnam Airlines': '/icons/vnaIcon.webp',
  'Vietjet Air': '/icons/vjIcon.webp',
  'Bamboo Airway': '/icons/bbIcon.webp',
  'Vietravel Airlines': '/icons/vtIcon.webp',
  'Sun Phu Quoc Airway': '/icons/sunIcon.webp',
}
