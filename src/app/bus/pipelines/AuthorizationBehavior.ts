import type { IPipelineBehavior } from '../types'
import { useAuthStore } from '@/features/auth/infrastructure/store/authStore'
import { permissionService } from '@/app/composition/permissionService'
import type {
  PermissionAction,
  PermissionResource,
} from '@/features/auth/domain/entities/Permission.entity'

interface Authorizable {
  constructor: { requiredPermission?: string }
}

export class AuthorizationBehavior implements IPipelineBehavior {
  async handle<T>(request: object, next: () => Promise<T>): Promise<T> {
    const permission = (request as Authorizable).constructor.requiredPermission

    if (permission) {
      const user = useAuthStore.getState().user
      if (!user) throw new Error('Unauthenticated')

      const parts = permission.split(':')
      const resource = parts[0] as PermissionResource
      const action = parts[1] as PermissionAction
      if (!resource || !action) {
        throw new Error(`Invalid permission format: ${permission}`)
      }

      if (!permissionService.can(user, resource, action)) {
        throw new Error(`Forbidden: requires ${permission}`)
      }
    }

    return next()
  }
}
