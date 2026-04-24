import { describe, expect, it } from 'vitest'
import { PermissionService } from './PermissionService'
import { User, UserRoles } from '../../domain/entities/User.entity'

function makeUser(role: (typeof UserRoles)[keyof typeof UserRoles]) {
  return User.create({
    id: 'u-auth',
    email: 'auth@test.com',
    fullName: 'Auth User',
    role,
  })
}

describe('PermissionService', () => {
  const service = new PermissionService()

  it('grants all actions for admin wildcard permission', () => {
    const admin = makeUser(UserRoles.ADMIN)
    expect(service.can(admin, 'users', 'delete')).toBe(true)
    expect(service.can(admin, 'reports', 'read')).toBe(true)
  })

  it('allows moderator to read and create users', () => {
    const moderator = makeUser(UserRoles.MODERATOR)
    expect(service.can(moderator, 'users', 'read')).toBe(true)
    expect(service.can(moderator, 'users', 'create')).toBe(true)
  })

  it('denies actions not configured for role', () => {
    const normalUser = makeUser(UserRoles.USER)
    expect(service.can(normalUser, 'users', 'read')).toBe(false)
  })

  it('returns empty map for unknown role', () => {
    expect(service.getPermissionsForRole('unknown')).toEqual({})
  })
})
