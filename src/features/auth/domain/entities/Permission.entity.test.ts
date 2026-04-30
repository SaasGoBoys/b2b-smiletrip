import { describe, expect, it } from 'vitest'

import { type Permission,permissionAllows } from './Permission.entity'

describe('permissionAllows', () => {
  it('allows action when resource and action match', () => {
    const permission: Permission = {
      resource: 'users',
      actions: ['read', 'update'],
    }
    expect(permissionAllows(permission, 'users', 'read')).toBe(true)
  })

  it('allows any action for wildcard action', () => {
    const permission: Permission = {
      resource: 'users',
      actions: ['*'],
    }
    expect(permissionAllows(permission, 'users', 'delete')).toBe(true)
  })

  it('allows any resource for wildcard resource', () => {
    const permission: Permission = {
      resource: '*',
      actions: ['read'],
    }
    expect(permissionAllows(permission, 'reports', 'read')).toBe(true)
  })

  it('denies when resource does not match', () => {
    const permission: Permission = {
      resource: 'users',
      actions: ['read'],
    }
    expect(permissionAllows(permission, 'orders', 'read')).toBe(false)
  })
})
