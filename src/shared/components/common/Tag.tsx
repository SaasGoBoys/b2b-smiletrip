import React from 'react'

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  label?: React.ReactNode
  className?: string
  children?: React.ReactNode
}

export const Tag = ({
  icon,
  label,
  className = 'bg-[#86CED9]/40 text-[#54858C] font-semibold',
  children,
  ...props
}: TagProps) => {
  return (
    <div 
      className={`h-[28px] flex items-center gap-1.5 px-2 py-1 rounded-[5px] text-[13px] whitespace-nowrap ${className}`}
      {...props}
    >

      {icon}
      {label || children}
    </div>
  )
}
