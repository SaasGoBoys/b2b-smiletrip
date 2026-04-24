import { useCallback } from 'react'
import { useAuthStore } from '../../infrastructure/store/authStore'
import { permissionService } from '@/app/bus'
import type { PermissionAction, PermissionResource } from '../../domain/entities/Permission.entity'

export function usePermission() {
  const { user } = useAuthStore()

  const can = useCallback(
    (resource: PermissionResource, action: PermissionAction): boolean => {
      if (!user) return false
      return permissionService.can(user, resource, action)
    },
    [user]
  )

  const canAny = useCallback(
    (resource: PermissionResource, actions: PermissionAction[]): boolean => {
      return actions.some((action) => can(resource, action))
    },
    [can]
  )

  return { can, canAny, user }
}
