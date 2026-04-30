import { beforeEach, describe, expect, it, vi } from 'vitest'

import type { IAuthRepository } from '../../domain/repositories/IAuthRepository'

import { LogoutCommand, LogoutCommandHandler } from './LogoutCommand'

describe('LogoutCommandHandler', () => {
  const mockLogout = vi.fn<IAuthRepository['logout']>()
  const repo = { logout: mockLogout } as unknown as IAuthRepository
  const handler = new LogoutCommandHandler(repo)

  beforeEach(() => {
    mockLogout.mockReset()
  })

  it('calls repository.logout', async () => {
    mockLogout.mockResolvedValueOnce()
    await handler.handle(new LogoutCommand())
    expect(mockLogout).toHaveBeenCalledTimes(1)
  })

  it('rethrows repository errors', async () => {
    mockLogout.mockRejectedValueOnce(new Error('logout failed'))
    await expect(handler.handle(new LogoutCommand())).rejects.toThrow('logout failed')
  })
})
