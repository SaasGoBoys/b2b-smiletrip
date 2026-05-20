export interface DealFlightDto {
  departText: string
  arrivalText: string
  routeDate: string
  price: string
  originPrice: string
  currency: string
  thumb: string
  thumbAlt: string
  dataSearch: string
  airline: string
  airlineLogoUrl: string
  priorityOrder: number
}

export interface DealFlightTabDto {
  id: string
  label: string
  isActive: boolean
}

export interface DealFlightsDto {
  title: string
  tabs: DealFlightTabDto[]
  dealsByTab: Record<string, DealFlightDto[]>
  hasDealsByTab: Record<string, boolean>
}
