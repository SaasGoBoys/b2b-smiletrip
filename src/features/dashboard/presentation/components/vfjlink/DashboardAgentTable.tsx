import { useMemo, useState } from 'react'

import type { AgentRow } from '@/features/dashboard/domain/entities/VfjlinkDashboard.entity'

type RankField = 'revenue' | 'tickets' | 'bookings'

interface Props {
  agents: readonly AgentRow[]
  summary: { total: number; active: number; warn: number; bad: number }
}

function statusUi(s: AgentRow['status']) {
  if (s === 'ok') return { cls: 'bg-emerald-100 text-emerald-700', text: '● Hoạt động' }
  if (s === 'warn') return { cls: 'bg-amber-100 text-amber-700', text: '● Cần hỗ trợ' }
  return { cls: 'bg-red-100 text-red-700', text: '● Dưới KPI' }
}

export function DashboardAgentTable({ agents, summary }: Props) {
  const [rankBy, setRankBy] = useState<RankField>('revenue')

  const sorted = useMemo(() => {
    return [...agents].sort((a, b) => b[rankBy] - a[rankBy])
  }, [agents, rankBy])

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-[18px]">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <div className="text-[13px] font-bold text-slate-800 flex-1 min-w-[200px]">
          {summary.total} đại lý F2 — Tháng 5/2026
        </div>
        <div className="flex flex-wrap gap-4 text-[11px] text-slate-500">
          <span className="inline-flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Hoạt động: <b className="text-emerald-600">{summary.active}</b>
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Cần hỗ trợ: <b className="text-amber-600">{summary.warn}</b>
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            Dưới KPI: <b className="text-red-600">{summary.bad}</b>
          </span>
        </div>
        <div className="flex flex-wrap gap-1">
          {(
            [
              { key: 'revenue' as const, label: 'Top doanh thu' },
              { key: 'tickets' as const, label: 'Top xuất vé' },
              { key: 'bookings' as const, label: 'Top đặt chỗ' },
            ] as const
          ).map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setRankBy(t.key)}
              className={`text-[11px] px-3 py-1 rounded-full border transition-colors
                ${rankBy === t.key ? 'bg-blue-50 text-blue-700 border-blue-200 font-semibold' : 'border-slate-200 text-slate-500 hover:bg-slate-50'}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-slate-50">
              <th className="text-[10px] font-bold text-slate-400 uppercase tracking-wide px-3 py-2 border-b-2 border-slate-200 text-left w-10 rounded-tl-lg">
                #
              </th>
              <th className="text-[10px] font-bold text-slate-400 uppercase tracking-wide px-3 py-2 border-b-2 border-slate-200 text-left">
                Đại lý
              </th>
              <th className="text-[10px] font-bold text-slate-400 uppercase tracking-wide px-3 py-2 border-b-2 border-slate-200 text-left">
                Địa điểm
              </th>
              <th className="text-[10px] font-bold text-slate-400 uppercase tracking-wide px-3 py-2 border-b-2 border-slate-200 text-left">
                Trạng thái
              </th>
              <th className="text-[10px] font-bold text-slate-400 uppercase tracking-wide px-3 py-2 border-b-2 border-slate-200 text-left">
                Doanh thu
              </th>
              <th className="text-[10px] font-bold text-slate-400 uppercase tracking-wide px-3 py-2 border-b-2 border-slate-200 text-left">
                Xuất vé
              </th>
              <th className="text-[10px] font-bold text-slate-400 uppercase tracking-wide px-3 py-2 border-b-2 border-slate-200 text-left">
                Đặt chỗ
              </th>
              <th className="text-[10px] font-bold text-slate-400 uppercase tracking-wide px-3 py-2 border-b-2 border-slate-200 text-left">
                Số dư quỹ
              </th>
              <th className="text-[10px] font-bold text-slate-400 uppercase tracking-wide px-3 py-2 border-b-2 border-slate-200 text-left">
                Tăng trưởng
              </th>
              <th className="text-[10px] font-bold text-slate-400 uppercase tracking-wide px-3 py-2 border-b-2 border-slate-200 text-left min-w-[180px] rounded-tr-lg">
                Tỷ lệ dịch vụ kinh doanh
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((ag, i) => {
              const st = statusUi(ag.status)
              const balColor = ag.bal < 100 ? '#DC2626' : ag.bal < 250 ? '#D97706' : '#059669'
              const rnCls =
                i === 0 ? 'bg-amber-100 text-amber-600' : i === 1 ? 'bg-slate-100 text-slate-500' : i === 2 ? 'bg-orange-50 text-orange-700' : 'bg-slate-100 text-slate-400'
              return (
                <tr key={ag.code} className="hover:bg-slate-50/80">
                  <td className="px-3 py-2.5 border-b border-slate-100">
                    <span className={`inline-flex items-center justify-center w-5 h-5 rounded text-[10px] font-bold ${rnCls}`}>
                      {i + 1}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                        style={{ background: ag.color }}
                      >
                        {ag.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-800">{ag.name}</div>
                        <div className="text-[10px] text-slate-400">{ag.code}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-2.5 border-b border-slate-100 text-[11px] text-slate-500">{ag.city}</td>
                  <td className="px-3 py-2.5 border-b border-slate-100">
                    <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${st.cls}`}>
                      {st.text}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 border-b border-slate-100">
                    <span className="text-[13px] font-bold text-emerald-600">{ag.revenue}tr</span>
                  </td>
                  <td className="px-3 py-2.5 border-b border-slate-100 text-xs font-semibold text-slate-800">{ag.tickets}</td>
                  <td className="px-3 py-2.5 border-b border-slate-100 text-xs font-semibold text-slate-800">{ag.bookings}</td>
                  <td className="px-3 py-2.5 border-b border-slate-100">
                    <span className="text-xs font-bold" style={{ color: balColor }}>
                      {ag.bal}tr
                    </span>
                  </td>
                  <td className="px-3 py-2.5 border-b border-slate-100">
                    {ag.trend >= 0 ? (
                      <span className="text-[11px] font-bold text-emerald-600">▲ {ag.trend}%</span>
                    ) : (
                      <span className="text-[11px] font-bold text-red-600">▼ {Math.abs(ag.trend)}%</span>
                    )}
                  </td>
                  <td className="px-3 py-2.5 border-b border-slate-100">
                    <div className="flex h-1.5 rounded overflow-hidden gap-px min-w-[100px]">
                      {ag.svc.map((s) => (
                        <div key={s.name} style={{ width: `${s.pct}%`, background: s.color }} className="h-full" />
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-x-2 gap-y-0.5 mt-1">
                      {ag.svc.map((s) => (
                        <span key={s.name} className="inline-flex items-center gap-1 text-[9px] text-slate-500">
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.color }} />
                          {s.name} {s.pct}%
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
