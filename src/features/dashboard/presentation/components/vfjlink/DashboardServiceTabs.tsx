import { Tabs } from 'antd'

import type { ServiceKpi, ServicePane } from '@/features/dashboard/domain/entities/VfjlinkDashboard.entity'

function KpiSub({ kpi }: { kpi: ServiceKpi }) {
  if (!kpi.sub) return null
  const cls =
    kpi.subTone === 'up'
      ? 'text-emerald-600'
      : kpi.subTone === 'down'
        ? 'text-red-600'
        : 'text-slate-400'
  return <div className={`text-[10px] font-medium ${cls}`}>{kpi.sub}</div>
}

function MiniTable({ title, headers, rows }: { title: string; headers: readonly string[]; rows: readonly (readonly string[])[] }) {
  const rankCol = headers[0] === '#'
  return (
    <div>
      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-2.5">{title}</div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {headers.map((h) => (
                <th
                  key={h}
                  className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide px-2 pb-2 border-b border-slate-200 text-left"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className="hover:bg-slate-50">
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`text-[11px] text-slate-800 py-1.5 px-2 border-b border-slate-100 last:border-0 ${rankCol && ci === 0 ? 'w-10' : ''}`}
                  >
                    {rankCol && ci === 0 && /^\d+$/.test(cell) ? (
                      <span
                        className={`inline-flex items-center justify-center w-[18px] h-[18px] rounded text-[10px] font-bold
                          ${cell === '1' ? 'bg-amber-100 text-amber-600' : cell === '2' ? 'bg-slate-100 text-slate-500' : cell === '3' ? 'bg-orange-50 text-orange-700' : 'bg-slate-100 text-slate-400'}`}
                      >
                        {cell}
                      </span>
                    ) : (
                      <span
                        className={
                          cell.startsWith('▲')
                            ? 'text-emerald-600 font-semibold'
                            : cell.startsWith('▼')
                              ? 'text-red-600 font-semibold'
                              : ''
                        }
                      >
                        {cell}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function ServicePaneBody({ pane }: { pane: ServicePane }) {
  return (
    <div className="p-[18px] space-y-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {pane.kpis.map((k) => (
          <div key={k.label} className="bg-slate-50 border border-slate-200 rounded-[10px] px-3.5 py-3">
            <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wide mb-1">{k.label}</div>
            <div className="text-xl font-bold tracking-tight mb-0.5" style={{ color: k.valueColor }}>
              {k.value}
            </div>
            <KpiSub kpi={k} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <MiniTable title={pane.left.title} headers={pane.left.headers} rows={pane.left.rows} />
        <MiniTable title={pane.right.title} headers={pane.right.headers} rows={pane.right.rows} />
      </div>
    </div>
  )
}

interface Props {
  panes: readonly ServicePane[]
}

export function DashboardServiceTabs({ panes }: Props) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <Tabs
        defaultActiveKey={panes[0]?.id}
        className="dashboard-svc-tabs [&_.ant-tabs-nav]:mb-0 [&_.ant-tabs-nav-wrap]:overflow-x-auto [&_.ant-tabs-nav]:px-0 [&_.ant-tabs-nav]:border-b [&_.ant-tabs-nav]:border-slate-200"
        items={panes.map((pane) => ({
          key: pane.id,
          label: (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium whitespace-nowrap">
              {pane.tab}
              <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-400 [.ant-tabs-tab-active_&]:bg-blue-100 [.ant-tabs-tab-active_&]:text-blue-700">
                {pane.count}
              </span>
            </span>
          ),
          children: <ServicePaneBody pane={pane} />,
        }))}
      />
    </div>
  )
}
