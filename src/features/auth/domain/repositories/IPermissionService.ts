import type { PermissionAction, PermissionResource } from '../entities/Permission.entity'
import type { User } from '../entities/User.entity'

export interface IPermissionService {
  can(user: User, resource: PermissionResource, action: PermissionAction): boolean
  getPermissionsForRole(role: string): Record<string, PermissionAction[]>
}
