import { describe, it, expect } from 'vitest'
import { User, UserRoles } from './User.entity'

describe('User Entity', () => {
  const mockProps = {
    id: '1',
    email: 'test@example.com',
    fullName: 'Test User',
    role: UserRoles.USER,
  }

  it('should create a user', () => {
    const user = User.create(mockProps)
    expect(user.email).toBe('test@example.com')
    expect(user.isAdmin()).toBe(false)
    expect(user.permissions).toEqual([])
  })

  it('admin should be able to moderate', () => {
    const admin = User.create({ ...mockProps, role: UserRoles.ADMIN })
    expect(admin.isAdmin()).toBe(true)
    expect(admin.canModerate()).toBe(true)
  })
})
