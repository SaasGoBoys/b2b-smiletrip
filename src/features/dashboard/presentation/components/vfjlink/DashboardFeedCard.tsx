import { Badge, Tabs } from 'antd'

import type { AlertItem, ImportantItem, NewsItem } from '@/features/dashboard/domain/entities/VfjlinkDashboard.entity'

const TONE_DOT: Record<AlertItem['tone'], string> = {
  red: 'bg-red-500',
  amber: 'bg-amber-500',
  green: 'bg-emerald-500',
  blue: 'bg-blue-600',
}

interface Props {
  alerts: readonly AlertItem[]
  important: readonly ImportantItem[]
  news: readonly NewsItem[]
}

export function DashboardFeedCard({ alerts, important, news }: Props) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col min-h-[240px]">
      <Tabs
        defaultActiveKey="alerts"
        className="dashboard-feed-tabs px-0 [&_.ant-tabs-nav]:mb-3 [&_.ant-tabs-nav]:px-4 [&_.ant-tabs-nav]:-mx-[1px] [&_.ant-tabs-nav]:border-b [&_.ant-tabs-nav]:border-slate-200"
        items={[
          {
            key: 'alerts',
            label: (
              <span className="text-xs font-medium">
                🔔 Thông báo <Badge count={7} size="small" className="ml-1" />
              </span>
            ),
            children: (
              <div className="flex flex-col gap-1.5 max-h-[340px] overflow-y-auto px-4 pb-4">
                {alerts.map((a, i) => (
                  <button
                    type="button"
                    key={`${a.title}-${i}`}
                    className="flex gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-left hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all"
                  >
                    <span className={`w-2 h-2 rounded-full shrink-0 mt-4 ${TONE_DOT[a.tone]}`} />
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-wide mb-0.5" style={{ color: a.sourceColor }}>
                        {a.source}
                      </div>
                      <div className="text-xs text-slate-600 leading-snug mb-0.5">{a.title}</div>
                      <div className="text-[10px] text-slate-400">{a.time}</div>
                    </div>
                  </button>
                ))}
              </div>
            ),
          },
          {
            key: 'important',
            label: (
              <span className="text-xs font-medium">
                📌 Quan trọng <Badge count={3} size="small" className="ml-1" style={{ backgroundColor: '#FEF3C7', color: '#D97706' }} />
              </span>
            ),
            children: (
              <div className="flex flex-col gap-1.5 max-h-[340px] overflow-y-auto px-4 pb-4">
                {important.map((it, i) => (
                  <div
                    key={`${it.title}-${i}`}
                    className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 border-l-[3px]"
                    style={{ borderLeftColor: it.borderColor }}
                  >
                    <div className="text-[10px] font-bold mb-0.5">{it.source}</div>
                    <div className="text-xs text-slate-600 leading-snug mb-0.5">{it.title}</div>
                    <div className="text-[10px] text-slate-400">{it.time}</div>
                  </div>
                ))}
              </div>
            ),
          },
          {
            key: 'news',
            label: (
              <span className="text-xs font-medium">
                📰 Tin ngành <Badge count={5} size="small" className="ml-1" style={{ backgroundColor: '#DBEAFE', color: '#1D4ED8' }} />
              </span>
            ),
            children: (
              <div className="max-h-[340px] overflow-y-auto px-4 pb-4">
                {news.map((n, i) => (
                  <div
                    key={`${n.title}-${i}`}
                    className="py-2.5 border-b border-slate-100 last:border-0 cursor-pointer hover:bg-slate-50 rounded-md px-1 -mx-1 transition-colors"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span
                        className="text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide"
                        style={{ background: n.badgeBg, color: n.badgeFg }}
                      >
                        {n.badge}
                      </span>
                      <span className="text-[10px] text-slate-400">{n.date}</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-800 leading-snug mb-0.5">{n.title}</div>
                    <div className="text-[11px] text-slate-500 leading-snug">{n.desc}</div>
                  </div>
                ))}
              </div>
            ),
          },
        ]}
      />
    </div>
  )
}
