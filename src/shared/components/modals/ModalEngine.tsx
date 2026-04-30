import { useModalStore } from './store/modal.store'
import type { ModalEngineProps } from './store/modal.type'

export default function ModalEngine() {
  const { stack, registry } = useModalStore()

  if (!stack.length) return null

  return (
    <>
      {stack.map((modal, index) => {
        const M = registry[modal.type] as React.ComponentType<ModalEngineProps<unknown>>
        if (!M) return null
        return <M key={index} {...modal} />
      })}
    </>
  )
}
