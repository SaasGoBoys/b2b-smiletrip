import { useMemo } from 'react'
import { Doughnut } from 'react-chartjs-2'

import type { TooltipItem } from 'chart.js'

import type { DonutChartData } from '@/features/dashboard/domain/entities/VfjlinkDashboard.entity'

import '@/features/dashboard/presentation/lib/chartRegister'

interface Props {
  data: DonutChartData
}

export function ServiceDonutCard({ data }: Props) {
  const chartData = useMemo(
    () => ({
      labels: data.segments.map((s) => s.label),
      datasets: [
        {
          data: data.segments.map((s) => s.pct),
          backgroundColor: data.segments.map((s) => s.color),
          borderWidth: 3,
          borderColor: '#fff',
          hoverOffset: 4,
        },
      ],
    }),
    [data.segments]
  )

  const options = useMemo(
    () => ({
      cutout: '68%',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx: TooltipItem<'doughnut'>) => {
              const v = ctx.parsed
              if (v == null) return ''
              return ` ${ctx.label}: ${v}%`
            },
          },
          backgroundColor: '#fff',
          borderColor: '#E2E8F0',
          borderWidth: 1,
          titleColor: '#64748B',
          bodyColor: '#1E293B',
          padding: 8,
        },
      },
    }),
    []
  )

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-[18px] flex flex-col">
      <div className="flex items-start justify-between gap-2 mb-4">
        <div>
          <div className="text-[13px] font-bold text-slate-800">Phân loại dịch vụ</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Tháng 5/2026</div>
        </div>
      </div>
      <div className="relative flex items-center justify-center mx-auto w-[140px] h-[140px]">
        <Doughnut data={chartData} options={options} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-center">
          <div>
            <div className="text-base font-bold text-slate-800">{data.centerValue}</div>
            <div className="text-[10px] text-slate-400">{data.centerSub}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 mt-2">
        {data.segments.map((s) => (
          <div key={s.label} className="flex items-center gap-2 text-[11px]">
            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: s.color }} />
            <span className="text-slate-500 flex-1">{s.label}</span>
            <span className="font-semibold text-slate-800">{s.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
