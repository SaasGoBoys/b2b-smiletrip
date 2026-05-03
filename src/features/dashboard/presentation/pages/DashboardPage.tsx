import { DashboardAgentTable } from '../components/vfjlink/DashboardAgentTable'
import { DashboardFeedCard } from '../components/vfjlink/DashboardFeedCard'
import { DashboardSectionLabel } from '../components/vfjlink/DashboardSectionLabel'
import { DashboardServiceTabs } from '../components/vfjlink/DashboardServiceTabs'
import { KpiStrip } from '../components/vfjlink/KpiStrip'
import { RevenueLineChartCard } from '../components/vfjlink/RevenueLineChartCard'
import { ServiceDonutCard } from '../components/vfjlink/ServiceDonutCard'
import { useVfjlinkDashboard } from '../hooks/useVfjlinkDashboard'

export default function DashboardPage() {
  const data = useVfjlinkDashboard()

  return (
    <div className="min-h-full bg-slate-100 text-slate-800 text-[13px]">
      <div className="max-w-[1600px] mx-auto px-5 py-5 flex flex-col gap-4">
        <DashboardSectionLabel>📊 Tổng quan {data.monthLabel}</DashboardSectionLabel>
        <KpiStrip kpis={data.kpis} />

        <DashboardSectionLabel>📈 Biểu đồ doanh thu &amp; phân loại dịch vụ</DashboardSectionLabel>
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_220px_400px] gap-3">
          <RevenueLineChartCard pack={data.revenue} />
          <ServiceDonutCard data={data.donut} />
          <DashboardFeedCard alerts={data.alerts} important={data.important} news={data.news} />
        </div>

        <DashboardSectionLabel>🛫 Thống kê theo loại dịch vụ</DashboardSectionLabel>
        <DashboardServiceTabs panes={data.servicePanes} />

        <DashboardSectionLabel>🏢 Mạng lưới Đại lý F2 — Hiệu suất &amp; Năng lực kinh doanh</DashboardSectionLabel>
        <DashboardAgentTable agents={data.agents} summary={data.agentSummary} />
      </div>
    </div>
  )
}
