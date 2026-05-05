import { AIRLINE_LOGOS } from '@/mocks/data/flights'

interface AirlineLogoProps {
  airline: string
  logoUrl?: string
  className?: string
}

export function AirlineLogo({ 
  airline, 
  logoUrl, 
  className = "w-[30px] h-[30px]" 
}: AirlineLogoProps) {
  const finalLogoUrl = logoUrl || AIRLINE_LOGOS[airline]

  if (finalLogoUrl) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <img src={finalLogoUrl} alt={airline} className="w-full h-full object-contain" />
      </div>
    )
  }

  const initials = airline
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 3)
    .toUpperCase()

  return (
    <div className={`w-[36px] h-[36px] rounded-lg bg-surface-hover flex items-center justify-center text-[10px] font-bold text-text-main tracking-[0.5px] ${className}`}>
      {initials}
    </div>
  )
}
