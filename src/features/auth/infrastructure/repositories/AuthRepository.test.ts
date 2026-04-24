import { describe, it, expect } from 'vitest'
import { AuthRepository } from './AuthRepository'

describe('AuthRepository', () => {
  it('login uses MSW mock response', async () => {
    const repo = new AuthRepository()
    const { user, tokens } = await repo.login({ email: 'hi@test.com', password: 'secret' })
    expect(user.email).toBe('hi@test.com')
    expect(tokens.accessToken).toBe('mock-access-token')
    expect(tokens.refreshToken).toBe('mock-refresh-token')
  })

  it('refreshToken uses bare HTTP and MSW', async () => {
    const repo = new AuthRepository()
    const tokens = await repo.refreshToken('mock-refresh-token')
    expect(tokens.accessToken).toBe('mock-access-token-refreshed')
    expect(tokens.refreshToken).toBe('mock-refresh-token-next')
  })
})
