import { Button,ConfigProvider, Drawer } from 'antd'
import { CloseOutlined } from '@ant-design/icons'

import { useModalController } from '@/shared/components/modals/hooks/useModalController'
import type { ModalEngineProps } from '@/shared/components/modals/store/modal.type'

import type { Flight } from '../FlightSearchResults/FlightCard'
import { FlightDetailPanel } from '../FlightSearchResults/FlightDetailPanel'

interface Payload {
  flight: Flight
  onBook?: (flight: Flight) => void
}

export function FlightDetailModal({ type, payload }: ModalEngineProps<Payload>) {
  const { flight, onBook } = payload
  const { close } = useModalController()

  const onClose = () => {
    close(type)
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Drawer: {
            borderRadiusLG: 0,
            paddingLG: 0,
            footerPaddingBlock: 0,
            footerPaddingInline: 0,
          },
        },
      }}
    >
      <Drawer
        open={true}
        onClose={onClose}
        placement="bottom"
        height="100dvh"
        closable={false}
        styles={{
          header: {
            padding: '10px 16px',
            borderBottom: '1px solid #e8e8e8',
            flexShrink: 0,
          },
          body: {
            padding: 0,
            paddingBottom: 68,
            overflowY: 'auto',
          },
          wrapper: {
            borderRadius: 0,
          },
        }}
        title={
          <div className="flex items-center justify-between pr-2">
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-text-main leading-tight">
                {flight.airline}
              </span>
              <span className="text-[12px] text-text-secondary">
                {flight.flightNumber} · {flight.departTime} → {flight.arriveTime}
              </span>
            </div>

            <CloseOutlined
              onClick={onClose}
              className="text-[16px] cursor-pointer text-gray-500 hover:text-black"
            />
          </div>
        }
        destroyOnClose
      >
        <FlightDetailPanel flight={flight} onBook={(f) => { onBook?.(f); onClose() }} />

        <div className="fixed bottom-0 left-0 right-0 px-4 py-3 bg-white border-t border-border-light shadow-[0_-2px_8px_rgba(0,0,0,0.08)] z-[1001]">
          <Button
            type="primary"
            block
            onClick={() => { onBook?.(flight); onClose() }}
            className="!h-[46px] !rounded-[10px] !text-[17px] !font-bold !border-none !bg-[#8EDFEB] !text-primary transition-all hover:opacity-90 active:scale-[0.98]"
          >
            Đặt vé
          </Button>
        </div>
      </Drawer>
    </ConfigProvider>
  )
}

export default FlightDetailModal
