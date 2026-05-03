import { useMemo, useState } from 'react'
import { Line } from 'react-chartjs-2'

import type { TooltipItem } from 'chart.js'

import type { RevenueChartPack } from '@/features/dashboard/domain/entities/VfjlinkDashboard.entity'

import '@/features/dashboard/presentation/lib/chartRegister'

type RangeKey = 7 | 14 | 30

interface Props {
  pack: RevenueChartPack
}

export function RevenueLineChartCard({ pack }: Props) {
  const [range, setRange] = useState<RangeKey>(7)

  const { labels, values } = useMemo(() => {
    if (range === 7) return { labels: [...pack.labels7], values: [...pack.values7] }
    if (range === 14) return { labels: [...pack.labels14], values: [...pack.values14] }
    return { labels: [...pack.labels30], values: [...pack.values30] }
  }, [pack, range])

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          data: values,
          borderColor: '#3B82F6',
          backgroundColor: 'rgba(59,130,246,0.07)',
          borderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 5,
          pointBackgroundColor: '#3B82F6',
          fill: true,
          tension: 0.4,
        },
      ],
    }),
    [labels, values]
  )

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx: TooltipItem<'line'>) => {
              const y = ctx.parsed.y
              if (y == null) return ''
              return ` ${y}tr VND`
            },
          },
          backgroundColor: '#fff',
          borderColor: '#E2E8F0',
          borderWidth: 1,
          titleColor: '#64748B',
          bodyColor: '#1E293B',
          padding: 10,
        },
      },
      scales: {
        x: {
          grid: { color: 'rgba(0,0,0,.05)', drawBorder: false },
          ticks: { color: '#94A3B8', font: { size: 10 } },
        },
        y: {
          grid: { color: 'rgba(0,0,0,.05)', drawBorder: false },
          ticks: {
            color: '#94A3B8',
            font: { size: 10 },
            callback: (v: string | number) => `${v}tr`,
          },
          beginAtZero: false,
        },
      },
    }),
    []
  )

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-[18px] min-h-[200px] flex flex-col">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
        <div>
          <div className="text-[13px] font-bold text-slate-800">Doanh thu theo ngày</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Tất cả dịch vụ · triệu VND</div>
        </div>
        <div className="flex gap-1">
          {([7, 14, 30] as const).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setRange(d)}
              className={`text-[10px] px-2.5 py-1 rounded-full border transition-colors
                ${range === d ? 'bg-blue-50 text-blue-700 border-blue-200 font-semibold' : 'border-slate-200 text-slate-500 hover:bg-slate-50'}`}
            >
              {d} ngày
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 min-h-[120px]">
        <Line data={data} options={options} />
      </div>
    </div>
  )
}
