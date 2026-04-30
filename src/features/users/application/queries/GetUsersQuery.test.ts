import { beforeEach, describe, expect, it, vi } from 'vitest'

import { UserRoles } from '@/shared/types/user-role'

import { UserProfile } from '../../domain/entities/UserProfile.entity'
import type { IUserRepository } from '../../domain/repositories/IUserRepository'

import { GetUsersQuery, GetUsersQueryHandler } from './GetUsersQuery'

describe('GetUsersQueryHandler', () => {
  const mockGetMany = vi.fn<IUserRepository['getMany']>()
  const repo = { getMany: mockGetMany } as unknown as IUserRepository
  const handler = new GetUsersQueryHandler(repo)

  beforeEach(() => {
    mockGetMany.mockReset()
  })

  it('forwards query filters to repository and returns repository response', async () => {
    const expected = {
      items: [
        new UserProfile({
          id: 'u-1',
          email: 'alice@example.com',
          fullName: 'Alice',
          role: UserRoles.USER,
        }),
      ],
      total: 1,
      page: 2,
      pageSize: 5,
      totalPages: 1,
    }
    mockGetMany.mockResolvedValueOnce(expected)
    const query = new GetUsersQuery('alice', UserRoles.USER, 2, 5)

    const result = await handler.handle(query)

    expect(mockGetMany).toHaveBeenCalledTimes(1)
    expect(mockGetMany).toHaveBeenCalledWith({
      search: 'alice',
      role: UserRoles.USER,
      page: 2,
      pageSize: 5,
    })
    expect(result).toEqual(expected)
  })
})
