import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { User } from '../../domain/entities/User.entity'
import type { Permission } from '../../domain/entities/Permission.entity'

interface AuthState {
  user: User | null
  accessToken: string | null
  refreshToken: string | null
  isAuthenticated: boolean
  isLoading: boolean
  permissions: Permission[]
}

interface AuthActions {
  setUser: (user: User, accessToken: string, refreshToken: string) => void
  setTokens: (accessToken: string, refreshToken: string) => void
  clearAuth: () => void
  setLoading: (loading: boolean) => void
}

export const useAuthStore = create<AuthState & AuthActions>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        isLoading: false,
        permissions: [],

        setUser: (user, accessToken, refreshToken) =>
          set(
            {
              user,
              accessToken,
              refreshToken,
              isAuthenticated: true,
              permissions: user.permissions ?? [],
            },
            false,
            'auth/setUser'
          ),

        setTokens: (accessToken, refreshToken) =>
          set({ accessToken, refreshToken }, false, 'auth/setTokens'),

        clearAuth: () =>
          set(
            {
              user: null,
              accessToken: null,
              refreshToken: null,
              isAuthenticated: false,
              permissions: [],
            },
            false,
            'auth/clear'
          ),

        setLoading: (isLoading) => set({ isLoading }, false, 'auth/setLoading'),
      }),
      {
        name: 'auth-storage',
        partialize: (state) => ({
          user: state.user,
          permissions: state.permissions,
          accessToken: state.accessToken,
          refreshToken: state.refreshToken,
          isAuthenticated: state.isAuthenticated,
        }),
      }
    ),
    { name: 'AuthStore' }
  )
)
