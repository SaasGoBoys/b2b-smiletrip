import { describe, expect, it } from 'vitest'

import { UserRoles } from '@/shared/types/user-role'

import { UserRepository } from './UserRepository'

describe('UserRepository (integration with MSW)', () => {
  it('getMany returns paginated users mapped to domain model', async () => {
    const repo = new UserRepository()

    const result = await repo.getMany({
      search: '',
      role: null,
      page: 1,
      pageSize: 2,
    })

    expect(result.page).toBe(1)
    expect(result.pageSize).toBe(2)
    expect(result.items).toHaveLength(2)
    expect(result.items[0]).toHaveProperty('displayName')
  })

  it('create then update returns latest mapped profile', async () => {
    const repo = new UserRepository()
    const created = await repo.create({
      email: 'new-user@example.com',
      fullName: 'New User',
      role: UserRoles.USER,
    })

    const updated = await repo.update(created.id, {
      fullName: 'Updated User',
      role: UserRoles.MODERATOR,
    })

    expect(created.email).toBe('new-user@example.com')
    expect(updated.fullName).toBe('Updated User')
    expect(updated.role).toBe(UserRoles.MODERATOR)
  })
})
