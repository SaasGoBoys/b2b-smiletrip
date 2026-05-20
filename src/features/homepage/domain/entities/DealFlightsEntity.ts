import { DealFlightEntity, type DealFlightEntityProps } from './DealFlightEntity'

export interface DealFlightTabEntityProps {
  id: string
  label: string
  isActive: boolean
}

export class DealFlightTabEntity {
  readonly id: string
  readonly label: string
  readonly isActive: boolean

  constructor(props: DealFlightTabEntityProps) {
    this.id = props.id
    this.label = props.label
    this.isActive = props.isActive
  }
}

export interface DealFlightsEntityProps {
  title: string
  tabs: DealFlightTabEntityProps[]
  dealsByTab: Record<string, DealFlightEntityProps[]>
  hasDealsByTab: Record<string, boolean>
}

export class DealFlightsEntity {
  readonly title: string
  readonly tabs: DealFlightTabEntity[]
  readonly dealsByTab: Record<string, DealFlightEntity[]>
  readonly hasDealsByTab: Record<string, boolean>

  constructor(props: DealFlightsEntityProps) {
    this.title = props.title
    this.tabs = props.tabs.map((tab) => new DealFlightTabEntity(tab))
    this.dealsByTab = Object.fromEntries(
      Object.entries(props.dealsByTab).map(([tabId, deals]) => [
        tabId,
        deals.map((deal) => new DealFlightEntity(deal)),
      ])
    )
    this.hasDealsByTab = { ...props.hasDealsByTab }
  }

  getFirstTab(): DealFlightTabEntity | undefined {
    return this.tabs[0]
  }

  getFirstTabDeals(): DealFlightEntity[] {
    const tab = this.getFirstTab()
    if (!tab) return []

    const deals = this.dealsByTab[tab.id] ?? []
    return [...deals].sort((a, b) => a.priorityOrder - b.priorityOrder)
  }
}
