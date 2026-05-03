import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SidebarState {
  collapsed: boolean
  openKeys: string[]
  toggle: () => void
  setCollapsed: (collapsed: boolean) => void
  setOpenKeys: (keys: string[]) => void
}

export const useSidebarStore = create<SidebarState>()(
  persist(
    (set) => ({
      collapsed: true,
      openKeys: [],
      toggle: () => set((state) => ({ collapsed: !state.collapsed })),
      setCollapsed: (collapsed) => set({ collapsed }),
      setOpenKeys: (openKeys) => set({ openKeys }),
    }),
    {
      name: 'sidebar-storage', // Tên key trong localStorage
    }
  )
)
