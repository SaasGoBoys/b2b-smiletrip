import { beforeEach, describe, expect, it, vi } from 'vitest'
import { UpdateUserCommand, UpdateUserCommandHandler } from './UpdateUserCommand'
import type { IUserRepository } from '../../domain/repositories/IUserRepository'
import { UserRoles } from '@/shared/types/user-role'
import { UserProfile } from '../../domain/entities/UserProfile.entity'

describe('UpdateUserCommandHandler', () => {
  const mockUpdate = vi.fn<IUserRepository['update']>()
  const repo = { update: mockUpdate } as unknown as IUserRepository
  const handler = new UpdateUserCommandHandler(repo)

  beforeEach(() => {
    mockUpdate.mockReset()
  })

  it('calls repository.update with only defined fields', async () => {
    const expected = new UserProfile({
      id: 'u-1',
      email: 'updated@test.com',
      fullName: 'Updated User',
      role: UserRoles.MODERATOR,
    })
    mockUpdate.mockResolvedValueOnce(expected)
    const command = new UpdateUserCommand('u-1', 'updated@test.com', undefined, UserRoles.MODERATOR)

    const result = await handler.handle(command)

    expect(mockUpdate).toHaveBeenCalledTimes(1)
    expect(mockUpdate).toHaveBeenCalledWith('u-1', {
      email: 'updated@test.com',
      role: UserRoles.MODERATOR,
    })
    expect(result).toEqual(expected)
  })

  it('rethrows repository errors', async () => {
    const error = new Error('user not found')
    mockUpdate.mockRejectedValueOnce(error)
    const command = new UpdateUserCommand('missing-id', undefined, 'Any Name')

    await expect(handler.handle(command)).rejects.toThrow('user not found')
  })
})
