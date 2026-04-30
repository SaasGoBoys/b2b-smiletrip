import { beforeEach, describe, expect, it, vi } from 'vitest'

import { User, UserRoles } from '../../domain/entities/User.entity'
import type { IAuthRepository } from '../../domain/repositories/IAuthRepository'

import { SignInCommand, SignInCommandHandler } from './SignInCommand'

describe('SignInCommandHandler', () => {
  const mockLogin = vi.fn<IAuthRepository['login']>()
  const repo = { login: mockLogin } as unknown as IAuthRepository
  const handler = new SignInCommandHandler(repo)

  const user = User.create({
    id: 'u-login',
    email: 'user@test.com',
    fullName: 'Login User',
    role: UserRoles.USER,
  })

  beforeEach(() => {
    mockLogin.mockReset()
  })

  it('normalizes email then calls repository.login', async () => {
    mockLogin.mockResolvedValueOnce({
      user,
      tokens: {
        accessToken: 'token-a',
        refreshToken: 'token-r',
      },
    })
    const cmd = new SignInCommand('USER@Test.com', 'secret123')

    const result = await handler.handle(cmd)

    expect(mockLogin).toHaveBeenCalledTimes(1)
    expect(mockLogin).toHaveBeenCalledWith({
      email: 'user@test.com',
      password: 'secret123',
    })
    expect(result).toEqual({
      user,
      accessToken: 'token-a',
      refreshToken: 'token-r',
    })
  })

  it('throws for invalid email before calling repository', async () => {
    const cmd = new SignInCommand('invalid', 'secret123')
    await expect(handler.handle(cmd)).rejects.toThrow('Invalid email: invalid')
    expect(mockLogin).not.toHaveBeenCalled()
  })
})
