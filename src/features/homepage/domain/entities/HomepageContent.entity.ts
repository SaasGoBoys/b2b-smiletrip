export interface HomepagePromoItem {
  readonly id: string
  readonly variant: 'sky' | 'mint' | 'lavender'
}

export interface HomepageFlightDeal {
  readonly id: string
  readonly imageUrl: string
  readonly priceVnd: number
}

export interface HomepageDestination {
  readonly id: string
  readonly imageUrl: string
  readonly activityCount: number
}

export interface HomepageActivity {
  readonly id: string
  readonly imageUrl: string
  readonly rating: number
  readonly priceFromVnd: number
  readonly tag: 'hot' | 'sale' | 'travel'
}

export interface HomepageWhyItem {
  readonly id: string
  readonly icon: string
}

export interface HomepageAttraction {
  readonly rank: number
  readonly id: string
}

export interface HomepageContent {
  readonly promos: HomepagePromoItem[]
  readonly flightDeals: HomepageFlightDeal[]
  readonly destinations: HomepageDestination[]
  readonly activities: HomepageActivity[]
  readonly why: HomepageWhyItem[]
  readonly attractions: HomepageAttraction[]
}
