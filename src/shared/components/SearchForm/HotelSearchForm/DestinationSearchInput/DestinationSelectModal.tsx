import { ConfigProvider, Modal } from 'antd'

import { useBreakpoint } from '@/shared/hooks/useBreakpoint'

import { useModalController } from '../../../modals/hooks/useModalController'
import type { ModalEngineProps } from '../../../modals/store/modal.type'

import { DestinationSelectContent } from './DestinationSelectContent'

export const HOTEL_DESTINATION_SELECT_MODAL = 'HOTEL_DESTINATION_SELECT_MODAL'

interface DestinationSelectModalPayload {
  value: string
  onSelect: (value: string) => void
  searchQuery?: string
  onSearchChange?: (value: string) => void
}

export function DestinationSelectModal({ payload }: ModalEngineProps<DestinationSelectModalPayload>) {
  const { isMobile } = useBreakpoint()
  const { close } = useModalController()
  const { value, onSelect, searchQuery, onSearchChange } = payload

  const handleClose = () => {
    close(HOTEL_DESTINATION_SELECT_MODAL)
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
        width={isMobile ? '100%' : 540}
        closable={!isMobile}
        className={`destination-select-modal ${isMobile ? '!m-0 !p-0 !max-w-none' : ''}`}
        styles={{
          body: {
            height: isMobile ? 'calc(100dvh - 100px)' : 'auto',
            maxHeight: isMobile ? 'none' : 'calc(100vh - 100px)',
            overflowY: 'auto',
          },
        }}
      >
        <DestinationSelectContent
          value={value}
          onSelect={handleSelect}
          searchQuery={searchQuery || ''}
          onSearchChange={onSearchChange || (() => {})}
        />
      </Modal>
    </ConfigProvider>
  )
}
