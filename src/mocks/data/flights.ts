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
