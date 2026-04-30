import { describe, expect, it } from 'vitest'

import { Password } from './Password.vo'

describe('Password value object', () => {
  it('accepts password with at least 6 characters', () => {
    const password = Password.create('secret1')
    expect(password.value).toBe('secret1')
  })

  it('throws when password is shorter than 6 characters', () => {
    expect(() => Password.create('12345')).toThrow('Password must be at least 6 characters')
  })
})
