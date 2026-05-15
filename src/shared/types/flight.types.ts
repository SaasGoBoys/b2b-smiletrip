export interface Flight {
  id: string
  airline: string
  airlineCode: string
  logoUrl?: string
  flightNumber: string
  departTime: string
  arriveTime: string
  duration: string
  isDirectFlight: boolean
  price: number
  amenities: {
    handLuggage: boolean
    checkInLuggage: boolean
    charging: boolean
    meal: boolean
    entertainment: boolean
  }
  promotions?: string[]
  isFeatured?: boolean
}
