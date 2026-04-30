import { beforeEach, describe, expect, it, vi } from 'vitest'

import { UserRoles } from '@/shared/types/user-role'

import { UserProfile } from '../../domain/entities/UserProfile.entity'
import type { IUserRepository } from '../../domain/repositories/IUserRepository'

import { CreateUserCommand, CreateUserCommandHandler } from './CreateUserCommand'

describe('CreateUserCommandHandler', () => {
  const mockCreate = vi.fn<IUserRepository['create']>()
  const repo = { create: mockCreate } as unknown as IUserRepository
  const handler = new CreateUserCommandHandler(repo)

  beforeEach(() => {
    mockCreate.mockReset()
  })

  it('calls repository.create with command payload', async () => {
    const expected = new UserProfile({
      id: 'u-100',
      email: 'create@test.com',
      fullName: 'Create Test',
      role: UserRoles.USER,
    })
    mockCreate.mockResolvedValueOnce(expected)
    const command = new CreateUserCommand('create@test.com', 'Create Test', UserRoles.USER)

    const result = await handler.handle(command)

    expect(mockCreate).toHaveBeenCalledTimes(1)
    expect(mockCreate).toHaveBeenCalledWith({
      email: 'create@test.com',
      fullName: 'Create Test',
      role: UserRoles.USER,
    })
    expect(result).toEqual(expected)
  })

  it('rethrows repository errors', async () => {
    const error = new Error('duplicate email')
    mockCreate.mockRejectedValueOnce(error)
    const command = new CreateUserCommand('dup@test.com', 'Dup User', UserRoles.USER)

    await expect(handler.handle(command)).rejects.toThrow('duplicate email')
  })
})
