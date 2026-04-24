import type { IPermissionService } from '../../domain/repositories/IPermissionService'
import type { User, UserRole } from '../../domain/entities/User.entity'
import { UserRoles } from '../../domain/entities/User.entity'
import type { PermissionAction, PermissionResource } from '../../domain/entities/Permission.entity'

const PERMISSION_MAP: Record<UserRole, Record<string, PermissionAction[]>> = {
  [UserRoles.ADMIN]: {
    '*': ['*'],
  },
  [UserRoles.MODERATOR]: {
    users: ['read', 'update', 'create'],
    products: ['read', 'update', 'create'],
    orders: ['read', 'update'],
    reports: ['read'],
    settings: ['read'],
  },
  [UserRoles.USER]: {
    profile: ['read', 'update'],
    products: ['read'],
    orders: ['read', 'create'],
  },
}

export class PermissionService implements IPermissionService {
  can(user: User, resource: PermissionResource, action: PermissionAction): boolean {
    const rolePerms = PERMISSION_MAP[user.role]
    if (!rolePerms) return false

    const wildcardActions = rolePerms['*']
    if (wildcardActions) {
      if (wildcardActions.includes('*') || wildcardActions.includes(action)) return true
    }

    const resourceActions = rolePerms[resource]
    if (!resourceActions) return false

    return resourceActions.includes('*') || resourceActions.includes(action)
  }

  getPermissionsForRole(role: string): Record<string, PermissionAction[]> {
    return PERMISSION_MAP[role as UserRole] ?? {}
  }
}
