export type KpiVariant = 'blue' | 'green' | 'amber' | 'purple' | 'red'

export interface DashboardKpi {
  readonly id: string
  readonly variant: KpiVariant
  readonly icon: string
  readonly label: string
  /** Numeric target for count-up animation, or display string */
  readonly value: number | string
  readonly valueSuffix?: string
  readonly foot: {
    readonly upBadge?: string
    readonly downBadge?: string
    readonly text?: string
  }
}

export interface RevenueChartPack {
  readonly labels7: readonly string[]
  readonly values7: readonly number[]
  readonly labels14: readonly string[]
  readonly values14: readonly number[]
  readonly labels30: readonly string[]
  readonly values30: readonly number[]
}

export interface DonutSegment {
  readonly label: string
  readonly pct: number
  readonly color: string
}

export interface DonutChartData {
  readonly centerValue: string
  readonly centerSub: string
  readonly segments: readonly DonutSegment[]
}

export type AlertTone = 'red' | 'amber' | 'green' | 'blue'

export interface AlertItem {
  readonly tone: AlertTone
  readonly source: string
  readonly sourceColor?: string
  readonly title: string
  readonly time: string
}

export interface ImportantItem {
  readonly borderColor: string
  readonly source: string
  readonly title: string
  readonly time: string
}

export interface NewsItem {
  readonly badge: string
  readonly badgeBg: string
  readonly badgeFg: string
  readonly date: string
  readonly title: string
  readonly desc: string
}

export interface DashboardTable {
  readonly title: string
  readonly headers: readonly string[]
  readonly rows: readonly (readonly string[])[]
}

export type ServiceKpiSubTone = 'up' | 'down' | 'mute'

export interface ServiceKpi {
  readonly label: string
  readonly value: string
  readonly valueColor?: string
  readonly sub?: string
  readonly subTone?: ServiceKpiSubTone
}

export interface ServicePane {
  readonly id: string
  readonly tab: string
  readonly count: string
  readonly kpis: readonly ServiceKpi[]
  readonly left: DashboardTable
  readonly right: DashboardTable
}

export interface AgentSvcSeg {
  readonly name: string
  readonly pct: number
  readonly color: string
}

export type AgentStatus = 'ok' | 'warn' | 'bad'

export interface AgentRow {
  readonly name: string
  readonly code: string
  readonly city: string
  readonly status: AgentStatus
  readonly revenue: number
  readonly tickets: number
  readonly bookings: number
  readonly bal: number
  readonly trend: number
  readonly color: string
  readonly svc: readonly AgentSvcSeg[]
}

export interface VfjlinkDashboardData {
  readonly monthLabel: string
  readonly kpis: readonly DashboardKpi[]
  readonly revenue: RevenueChartPack
  readonly donut: DonutChartData
  readonly alerts: readonly AlertItem[]
  readonly important: readonly ImportantItem[]
  readonly news: readonly NewsItem[]
  readonly servicePanes: readonly ServicePane[]
  readonly agents: readonly AgentRow[]
  readonly agentSummary: {
    readonly total: number
    readonly active: number
    readonly warn: number
    readonly bad: number
  }
}
