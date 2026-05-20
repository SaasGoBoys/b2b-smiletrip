import type { FlightLayoverView } from '../../utils/flightDetailTypes'

interface FlightRouteTimelineProps {
  departTime: string
  arriveTime: string
  depAirportLabel: string
  arrAirportLabel: string
  layovers: FlightLayoverView[]
  routeLabel: string
}

/** Horizontal route line with optional layover blocks (staggered labels). */
export function FlightRouteTimeline({
  departTime,
  arriveTime,
  depAirportLabel,
  arrAirportLabel,
  layovers,
  routeLabel,
}: FlightRouteTimelineProps) {
  const hasLayovers = layovers.length > 0

  return (
    <div className="col-span-2 sm:px-4 min-[992px]:col-auto min-[992px]:flex-1 flex items-center gap-4 w-full min-[992px]:max-w-[550px] min-[992px]:mx-auto order-last min-[992px]:order-none">
      <div className="text-left min-[992px]:text-center shrink-0 min-[992px]:shrink">
        <div className="text-[28px] min-[992px]:text-[30px] font-semibold text-text-main leading-tight">
          {departTime}
        </div>
        <div className="text-[14px] min-[992px]:text-[16px] text-text-secondary font-semibold uppercase">
          {depAirportLabel}
        </div>
      </div>

      <div className="flex flex-col items-center flex-1 px-0 min-[992px]:px-2 min-[992px]:min-w-[220px]">
        <div
          className={`relative w-full h-[3px] bg-[#D9D9D9] ${hasLayovers ? 'my-6 min-[992px]:my-8' : ''}`}
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[8px] h-[8px] min-[992px]:w-[9px] min-[992px]:h-[9px] bg-[#D9D9D9]" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[8px] h-[8px] min-[992px]:w-[9px] min-[992px]:h-[9px] bg-[#D9D9D9]" />

          {layovers.map((layover, index) => {
            const above = index % 2 === 0
            return (
              <div
                key={`${layover.label}-${index}`}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${layover.position * 100}%` }}
              >
                <div className="w-[10px] h-[10px] min-[992px]:w-[11px] min-[992px]:h-[11px] bg-white border border-[#B0B0B0] rotate-45 mx-auto" />
                <div
                  className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap max-w-[120px] min-[992px]:max-w-[160px] text-center text-[11px] min-[992px]:text-[12px] text-text-secondary leading-tight px-1 ${
                    above ? 'bottom-[calc(100%+6px)]' : 'top-[calc(100%+6px)]'
                  }`}
                >
                  {layover.label}
                </div>
              </div>
            )
          })}
        </div>
        <div className="text-[14px] min-[992px]:text-[16px] text-text-secondary mt-2 font-normal text-center">
          {routeLabel}
        </div>
      </div>

      <div className="text-right min-[992px]:text-center shrink-0 min-[992px]:shrink">
        <div className="text-[28px] min-[992px]:text-[30px] font-semibold text-text-main leading-tight">
          {arriveTime}
        </div>
        <div className="text-[14px] min-[992px]:text-[16px] text-text-secondary font-semibold uppercase">
          {arrAirportLabel}
        </div>
      </div>
    </div>
  )
}
