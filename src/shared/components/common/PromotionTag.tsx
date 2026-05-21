import React from 'react'

interface PromotionTagProps {
  label: string
  variant?: 'fill' | 'outline'
  icon?: React.ReactNode
  className?: string
}

export function PromotionTag({ label, variant = 'fill', icon, className = '' }: PromotionTagProps) {
  const isOutline = variant === 'outline'
  
  return (
    <div
      className={`flex items-center gap-1.5 pl-[7px] pr-[10px] py-[5px] rounded-[15px] text-[13px] font-semibold whitespace-nowrap transition-all ${
        isOutline
          ? 'border border-[#DA251D] text-[#DA251D] bg-white'
          : 'bg-[#DA251D] text-white'
      } ${className}`}
    >
      {icon}
      <span className="leading-none">{label}</span>
    </div>
  )
}
