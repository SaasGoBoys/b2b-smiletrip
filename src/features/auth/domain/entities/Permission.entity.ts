export type PermissionAction = 'create' | 'read' | 'update' | 'delete' | '*'

export type PermissionResource =
  | 'users'
  | 'products'
  | 'orders'
  | 'reports'
  | 'settings'
  | 'profile'
  | '*'

export interface Permission {
  resource: PermissionResource
  actions: PermissionAction[]
}

export function permissionAllows(
  permission: Permission,
  resource: PermissionResource,
  action: PermissionAction
): boolean {
  const resourceMatch = permission.resource === '*' || permission.resource === resource
  const actionMatch = permission.actions.includes('*') || permission.actions.includes(action)
  return resourceMatch && actionMatch
}
