import { ConfigProvider, Modal } from 'antd'

import { useBreakpoint } from '@/shared/hooks/useBreakpoint'

import { useModalController } from '../../../modals/hooks/useModalController'
import type { ModalEngineProps } from '../../../modals/store/modal.type'

import { AirportSelectContent } from './AirportSelectContent'

export const AIRPORT_SELECT_MODAL = 'AIRPORT_SELECT_MODAL'

interface AirportSelectModalPayload {
  type: 'from' | 'to'
  value: string
  onSelect: (value: string) => void
  searchQuery?: string
  onSearchChange?: (value: string) => void
}

export function AirportSelectModal({ payload }: ModalEngineProps<AirportSelectModalPayload>) {
  const { isMobile } = useBreakpoint()
  const { close } = useModalController()
  const { type, value, onSelect, searchQuery, onSearchChange } = payload

  const handleClose = () => {
    close(AIRPORT_SELECT_MODAL)
  }

  const handleSelect = (val: string) => {
    onSelect(val)
    handleClose()
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            paddingMD: isMobile ? 8 : 20,
            paddingContentHorizontalLG: isMobile ? 4 : 10,
          },
        },
      }}
    >
      <Modal
        open={true}
        onCancel={handleClose}
        footer={null}
        centered={!isMobile}
        width={isMobile ? '100%' : 923}
        // closeIcon={<CloseIcon width={isMobile ? 20 : 24} height={isMobile ? 20 : 24} />}
        closable={false}
        className={`airport-select-modal ${isMobile ? '!m-0 !p-0 !max-w-none' : ''}`}
        styles={{
          body: {
            height: isMobile ? 'calc(100dvh - 56px)' : 'auto',
            maxHeight: isMobile ? 'none' : 'calc(100vh - 100px)',
            overflowY: 'auto',
          },
        }}
      >
        <AirportSelectContent
          value={value}
          type={type}
          onSelect={handleSelect}
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
        />
      </Modal>
    </ConfigProvider>
  )
}
