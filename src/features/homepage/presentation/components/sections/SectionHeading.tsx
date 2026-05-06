interface SectionHeadingProps {
  title: string
  action?: { label: string; onClick?: () => void }
}

export function SectionHeading({ title, action }: SectionHeadingProps) {
  return (
    <div className="flex items-end justify-between gap-4 mb-6">
      <h2 className="text-2xl md:text-[28px] font-bold text-gray-900 tracking-tight">{title}</h2>
      {action ? (
        <button
          type="button"
          onClick={action.onClick}
          className="text-sm font-semibold text-[#4558B6] hover:underline shrink-0"
        >
          {action.label}
        </button>
      ) : null}
    </div>
  )
}
