export type ModalState = {
  registry: Record<string, unknown>
  stack: { type: string; payload: unknown }[]
  open: (type: string, payload?: unknown) => void
  close: (type: string) => void
  register: (modals: Record<string, unknown>) => void
  unregister: (modals: Record<string, unknown>) => void
}

export interface ModalEngineProps<T> {
  type: string
  payload: T
}
