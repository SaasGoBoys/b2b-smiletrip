import { BuildingIcon, TourBeachIcon, TourMountainIcon } from '@/assets/icons/icons'

export const AREA_OPTIONS = [
  { value: 'urban', label: 'Đô thị', icon: BuildingIcon },
  { value: 'mountain', label: 'Vùng núi', icon: TourMountainIcon },
  { value: 'beach', label: 'Vùng biển', icon: TourBeachIcon },
] as const
