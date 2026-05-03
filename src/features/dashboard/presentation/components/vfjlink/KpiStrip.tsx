import type { DashboardKpi, KpiVariant } from '@/features/dashboard/domain/entities/VfjlinkDashboard.entity'

import { useAnimatedDecimal, useAnimatedNumber } from '../../hooks/useAnimatedNumber'

const VARIANT: Record<
  KpiVariant,
  { bar: string; iconBg: string; val: string }
> = {
  blue: { bar: 'before:bg-blue-500', iconBg: 'bg-blue-50', val: 'text-blue-700' },
  green: { bar: 'before:bg-emerald-500', iconBg: 'bg-emerald-50', val: 'text-emerald-600' },
  amber: { bar: 'before:bg-amber-500', iconBg: 'bg-amber-50', val: 'text-amber-600' },
  purple: { bar: 'before:bg-violet-500', iconBg: 'bg-violet-50', val: 'text-violet-700' },
  red: { bar: 'before:bg-red-500', iconBg: 'bg-red-50', val: 'text-red-600' },
}

function KpiAnimatedInt({ value, className }: { value: number; className: string }) {
  const n = useAnimatedNumber(value, 1000)
  return <div className={`text-[26px] font-bold tracking-tight leading-none mb-2 ${className}`}>{n.toLocaleString('vi-VN')}</div>
}

function KpiAnimatedDecimal({
  value,
  suffix,
  className,
}: {
  value: number
  suffix?: string
  className: string
}) {
  const v = useAnimatedDecimal(value, 1000, 1)
  return (
    <div className={`text-[26px] font-bold tracking-tight leading-none mb-2 ${className}`}>
      {v}
      {suffix ?? ''}
    </div>
  )
}

function KpiStaticValue({ value, className }: { value: string; className: string }) {
  return <div className={`text-[26px] font-bold tracking-tight leading-none mb-2 ${className}`}>{value}</div>
}

function KpiValue({ kpi }: { kpi: DashboardKpi }) {
  const cls = VARIANT[kpi.variant].val
  if (typeof kpi.value === 'string') {
    return <KpiStaticValue value={kpi.value} className={cls} />
  }
  if (kpi.id === 'revenue') {
    return <KpiAnimatedDecimal value={kpi.value} suffix={kpi.valueSuffix} className={cls} />
  }
  return <KpiAnimatedInt value={kpi.value} className={cls} />
}

function KpiCard({ kpi }: { kpi: DashboardKpi }) {
  const v = VARIANT[kpi.variant]
  return (
    <div
      className={`relative bg-white border border-slate-200 rounded-xl px-[18px] py-4 overflow-hidden
        shadow-sm hover:shadow-md hover:-translate-y-px transition-all cursor-default
        before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:rounded-t-xl ${v.bar}`}
    >
      <div className={`w-9 h-9 rounded-[9px] flex items-center justify-center text-base mb-2.5 ${v.iconBg}`}>
        {kpi.icon}
      </div>
      <div className="text-[11px] text-slate-500 font-medium mb-1">{kpi.label}</div>
      <KpiValue kpi={kpi} />
      <div className="flex items-center gap-1.5 text-[11px] text-slate-400 flex-wrap">
        {kpi.foot.upBadge ? (
          <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600">
            {kpi.foot.upBadge}
          </span>
        ) : null}
        {kpi.foot.downBadge ? (
          <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-red-50 text-red-600">
            {kpi.foot.downBadge}
          </span>
        ) : null}
        {kpi.foot.text ? <span>{kpi.foot.text}</span> : null}
      </div>
    </div>
  )
}

interface Props {
  kpis: readonly DashboardKpi[]
}

export function KpiStrip({ kpis }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
      {kpis.map((kpi) => (
        <KpiCard key={kpi.id} kpi={kpi} />
      ))}
    </div>
  )
}
