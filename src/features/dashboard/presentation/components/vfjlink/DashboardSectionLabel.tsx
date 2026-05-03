interface Props {
  children: React.ReactNode
}

export function DashboardSectionLabel({ children }: Props) {
  return (
    <div className="flex items-center gap-2 mb-0.5">
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.08em] shrink-0">
        {children}
      </span>
      <span className="flex-1 h-px bg-slate-200" />
    </div>
  )
}
