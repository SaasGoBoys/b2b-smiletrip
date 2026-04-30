import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import type { UserRole } from '@/shared/types/user-role'

interface UserFilters {
  search: string
  role: UserRole | null
  page: number
  pageSize: number
}

interface UserUIState {
  selectedUserId: string | null
  isCreateModalOpen: boolean
  isEditModalOpen: boolean
  filters: UserFilters
}

interface UserUIActions {
  selectUser: (id: string | null) => void
  openCreateModal: () => void
  closeCreateModal: () => void
  openEditModal: (userId: string) => void
  closeEditModal: () => void
  setFilters: (filters: Partial<UserFilters>) => void
  resetFilters: () => void
}

const defaultFilters: UserFilters = {
  search: '',
  role: null,
  page: 1,
  pageSize: 10,
}

export const useUserUIStore = create<UserUIState & UserUIActions>()(
  devtools(
    (set) => ({
      selectedUserId: null,
      isCreateModalOpen: false,
      isEditModalOpen: false,
      filters: defaultFilters,

      selectUser: (id) => set({ selectedUserId: id }, false, 'users/selectUser'),
      openCreateModal: () => set({ isCreateModalOpen: true }, false, 'users/openCreate'),
      closeCreateModal: () => set({ isCreateModalOpen: false }, false, 'users/closeCreate'),
      openEditModal: (userId) =>
        set({ isEditModalOpen: true, selectedUserId: userId }, false, 'users/openEdit'),
      closeEditModal: () =>
        set({ isEditModalOpen: false, selectedUserId: null }, false, 'users/closeEdit'),
      setFilters: (newFilters) =>
        set(
          (state) => {
            const merged = { ...state.filters, ...newFilters }
            if (newFilters.search !== undefined || newFilters.role !== undefined) {
              merged.page = 1
            }
            return { filters: merged }
          },
          false,
          'users/setFilters'
        ),
      resetFilters: () => set({ filters: defaultFilters }, false, 'users/resetFilters'),
    }),
    { name: 'UserUIStore' }
  )
)
