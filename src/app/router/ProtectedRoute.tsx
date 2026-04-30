import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import type { UserRole } from '@/features/auth/domain/entities/User.entity'

import { useAuthStore } from '@/features/auth/infrastructure/store/authStore'

interface Props {
  children: ReactNode
  requiredRole?: UserRole[]
}

export function ProtectedRoute({ children, requiredRole }: Props) {
  const { isAuthenticated, user } = useAuthStore()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (requiredRole?.length && user && !requiredRole.includes(user.role)) {
    return <Navigate to="/403" replace />
  }

  return <>{children}</>
}
