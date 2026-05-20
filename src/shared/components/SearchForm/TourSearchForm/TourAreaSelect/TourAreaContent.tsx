import { brandColors } from '@/shared/lib/antd-theme/tokens'

import { AREA_OPTIONS } from './tourAreaOptions'

interface TourAreaContentProps {
  value: string
  onSelect: (value: string) => void
}

export function TourAreaContent({ value, onSelect }: TourAreaContentProps) {
  return (
    <div className={`flex flex-col overflow-hidden bg-white rounded-[16px] w-[220px] `}>
      {AREA_OPTIONS.map((opt, index) => {
        const isSelected = opt.value === value
        const isLast = index === AREA_OPTIONS.length - 1
        const Icon = opt.icon

        return (
          <button
            key={opt.value}
            id={`tour-area-opt-${opt.value}`}
            onClick={() => onSelect(opt.value)}
            className={`flex items-center gap-3 px-3 h-[55px] sm:h-[65px] cursor-pointer transition-all duration-200
              ${!isLast ? 'border-b border-gray-100' : ''}
              ${
                isSelected
                  ? 'bg-primary/10 text-primary'
                  : 'text-text-main hover:bg-primary/5 hover:text-primary'
              }
            `}
          >
            <div className="w-8 flex justify-center shrink-0">
              <Icon
                width={isSelected ? 26 : 24}
                height={isSelected ? 26 : 24}
                color={isSelected ? brandColors.primary : '#4558B6'}
                className="transition-all duration-200"
              />
            </div>
            <span
              className={`text-[16px] sm:text-[17px] transition-colors ${isSelected ? 'font-bold' : 'font-semibold'}`}
            >
              {opt.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
