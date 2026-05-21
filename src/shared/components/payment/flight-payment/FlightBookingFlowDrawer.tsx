import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Drawer } from 'antd'

import AppRoutes from '@/app/router/paths'

import { useModalController } from '@/shared/components/modals/hooks/useModalController'
import type { ModalEngineProps } from '@/shared/components/modals/store/modal.type'
import { useBreakpoint } from '@/shared/hooks/useBreakpoint'
import type { Flight } from '@/shared/types/flight.types'

import { Step1FlightReview } from './components/Step1FlightReview'
import { Step2TicketTypeSelection } from './components/Step2TicketTypeSelection'

import { ChevronLeftCircleIcon, XCircleIcon } from '@/assets/icons/icons'

interface FlightBookingFlowDrawerProps {
  departureFlight: Flight | null
  returnFlight?: Flight
  initialStep?: 1 | 2
}

export function FlightBookingFlowDrawer({ type, payload }: ModalEngineProps<FlightBookingFlowDrawerProps>) {
  const { isMobile, isTabletToXl } = useBreakpoint()
  const isFullWidth = isMobile || isTabletToXl
  const { close } = useModalController()
  const navigate = useNavigate()
  const { departureFlight, returnFlight, initialStep = 1 } = payload || {}

  const [step, setStep] = useState<number>(initialStep)

  if (!departureFlight) return null

  const onClose = () => close(type)

  const handleBack = () => {
    if (step === 2) {
      setStep(1)
    } else {
      onClose()
    }
  }

  const renderHeader = () => {
    if (step === 1) {
      return (
        <div className="flex items-center gap-3 sm:gap-5">
          <button onClick={onClose} className="cursor-pointer hover:opacity-70 transition-opacity border-none bg-transparent outline-none">
            <XCircleIcon width={32} height={32} />
          </button>
          <span className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-text-main">Xem lại chuyến bay của bạn</span>
        </div>
      )
    }

    if (step === 2) {
      return (
        <div className="flex items-center gap-3 sm:gap-5">
          <button onClick={handleBack} className="cursor-pointer hover:opacity-70 transition-opacity border-none bg-transparent outline-none p-0">
            <ChevronLeftCircleIcon width={32} height={32} />
          </button>
          <div className="flex flex-col">
            <span className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-[#3A3A3A]">Chọn loại vé (Bay đi)</span>
            <div className="flex items-center flex-wrap gap-1">
              <span className="text-[12px] sm:text-[14px] font-semibold text-[#909090]">Mức giá khứ hồi:</span>
              <span className="text-[12px] sm:text-[14px] font-semibold text-[#4558B6]">5.526.189 VND</span>
              <span className="text-[12px] sm:text-[14px] font-semibold text-[#909090]">/khách</span>
            </div>
          </div>
        </div>
      )
    }

    return null
  }

  const renderFooter = () => {
    if (step === 1) {
      const totalPrice = (departureFlight.price + (returnFlight?.price || 0))
      const formattedTotalPrice = totalPrice.toLocaleString('vi-VN') + ' đ'

      return (
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white gap-4">
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-text-main">{formattedTotalPrice}</span>
            <span className="text-[12px] sm:text-[14px] font-medium text-text-secondary">/ khách</span>
          </div>
          <button
            onClick={() => setStep(2)}
            className="h-[40px] sm:h-[48px] px-6 sm:px-10 rounded-[8px] sm:rounded-[12px] text-[15px] sm:text-[18px] md:text-[22px] font-semibold bg-primary text-white border-none cursor-pointer hover:opacity-90 transition-all shrink-0"
          >
            Tiếp tục
          </button>
        </div>
      )
    }
    return null
  }

  return (
    <Drawer
      placement="right"
      onClose={onClose}
      open={true}
      width={isFullWidth ? '100%' : '1200px'}
      styles={{
        content: {
          borderRadius: isFullWidth ? '0' : '20px 0 0 20px',
          overflow: 'hidden',
          background: step === 1 ? '#F8FAFB' : 'linear-gradient(180deg, #bcde15ff 0%, #F1F1F1 100%)',
        },
        header: {
          borderBottom: step === 1 ? '1px solid #F0F0F0' : 'none',
          padding: isMobile ? '12px 16px' : '16px 24px',
          background: 'white',
        },
        body: {
          padding: '0',
          background: 'transparent',
        },
        footer: {
          padding: 0,
          borderTop: '1px solid #F0F0F0',
        }
      }}
      title={renderHeader()}
      footer={renderFooter()}
      closable={false}
      destroyOnClose
    >
      <div className="h-full overflow-y-auto">
        {step === 1 && (
          <Step1FlightReview
            departureFlight={departureFlight}
            returnFlight={returnFlight}
          />
        )}

        {step === 2 && (
          <Step2TicketTypeSelection
            departureFlight={departureFlight}
            returnFlight={returnFlight}
            onBack={handleBack}
            onSelect={() => {
              onClose()
              navigate(AppRoutes.flightPayment)
            }}
          />
        )}
      </div>
    </Drawer>
  )
}

export default FlightBookingFlowDrawer
