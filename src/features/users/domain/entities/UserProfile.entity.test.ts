import { describe, expect, it } from 'vitest'
import { UserProfile } from './UserProfile.entity'
import { UserRoles } from '@/shared/types/user-role'

describe('UserProfile Entity', () => {
  it('uses fullName as displayName when fullName is present', () => {
    const user = new UserProfile({
      id: 'u-1',
      email: 'alice@example.com',
      fullName: 'Alice Nguyen',
      role: UserRoles.USER,
    })

    expect(user.displayName).toBe('Alice Nguyen')
  })

  it('falls back to email local-part when fullName is empty', () => {
    const user = new UserProfile({
      id: 'u-2',
      email: 'fallback@example.com',
      fullName: '   ',
      role: UserRoles.USER,
    })

    expect(user.displayName).toBe('fallback')
  })

  it('compares identity by id', () => {
    const first = new UserProfile({
      id: 'same-id',
      email: 'first@example.com',
      fullName: 'First',
      role: UserRoles.USER,
    })
    const second = new UserProfile({
      id: 'same-id',
      email: 'second@example.com',
      fullName: 'Second',
      role: UserRoles.ADMIN,
    })

    expect(first.equals(second)).toBe(true)
  })
})
