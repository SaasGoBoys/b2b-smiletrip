import type { ReactNode } from 'react'

import type {
  PermissionAction,
  PermissionResource,
} from '@/features/auth/domain/entities/Permission.entity'

import { usePermission } from '@/features/auth/presentation/hooks/usePermission'

interface CanProps {
  do: PermissionAction
  on: PermissionResource
  children: ReactNode
  fallback?: ReactNode
}

export function Can({ do: action, on: resource, children, fallback = null }: CanProps) {
  const { can } = usePermission()
  return can(resource, action) ? <>{children}</> : <>{fallback}</>
}
