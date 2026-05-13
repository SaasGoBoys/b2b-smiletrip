import { ConfigProvider, Modal } from 'antd'

import { useModalController } from '@/shared/components/modals/hooks/useModalController'
import type { ModalEngineProps } from '@/shared/components/modals/store/modal.type'
import { useBreakpoint } from '@/shared/hooks/useBreakpoint'
import { useSyncState } from '@/shared/hooks/useSyncState'

import useGetAirportListQuery from '../../hooks/useGetAirportListQuery'

import { AirportSelectContent, type AirportSelectSearchBinding } from './AirportSelectContent'

interface AirportSelectModalPayload {
  type: 'from' | 'to'
  value: string
  onSelect: (cityCode: string, displayLabel: string) => void
  /** Seeds the search field when the sheet opens (e.g. parent draft). */
  initialSearchText?: string
}

export const AIRPORT_SELECT_MODAL = 'AIRPORT_SELECT_MODAL'

export function AirportSelectModal({ payload, type }: ModalEngineProps<AirportSelectModalPayload>) {
  const { isMobile } = useBreakpoint()
  const { close } = useModalController()
  const { type: airportType, value, onSelect, initialSearchText = '' } = payload

  const [searchText, setSearchText] = useSyncState(initialSearchText)

  const airportQuery = useGetAirportListQuery(`modal-${airportType}`, searchText || '')

  const airportSearch: AirportSelectSearchBinding = {
    searchText,
    onSearchTextChange: setSearchText,
    searchResults: airportQuery.data ?? [],
    isSearchPending: airportQuery.isPending,
  }

  const handleClose = () => {
    close(type)
  }

  const handleSelect = (cityCode: string, displayLabel: string) => {
    onSelect(cityCode, displayLabel)
    handleClose()
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            paddingMD: isMobile ? 16 : 20,
            paddingContentHorizontalLG: isMobile ? 12 : 10,
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
        closable={false}
        className={`city-select-modal ${isMobile ? 'm-0! p-0! max-w-none!' : ''}`}
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
          type={airportType}
          onSelect={handleSelect}
          airportSearch={airportSearch}
        />
      </Modal>
    </ConfigProvider>
  )
}
