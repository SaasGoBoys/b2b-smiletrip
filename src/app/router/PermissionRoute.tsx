import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import type { PermissionAction, PermissionResource } from '@/features/auth/domain/entities/Permission.entity'

import { usePermission } from '@/features/auth/presentation/hooks/usePermission'

interface PermissionRouteProps {
  children: ReactNode
  resource: PermissionResource
  action: PermissionAction
  redirectTo?: string
}

export function PermissionRoute({
  children,
  resource,
  action,
  redirectTo = '/403',
}: PermissionRouteProps) {
  const { can } = usePermission()

  if (!can(resource, action)) {
    return <Navigate to={redirectTo} replace />
  }

  return <>{children}</>
}
