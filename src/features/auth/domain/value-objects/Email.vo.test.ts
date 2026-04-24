import { describe, expect, it } from 'vitest'
import { Email } from './Email.vo'

describe('Email value object', () => {
  it('normalizes value to lowercase for valid input', () => {
    const email = Email.create('USER@Example.COM')
    expect(email.value).toBe('user@example.com')
  })

  it('throws for invalid email format', () => {
    expect(() => Email.create('invalid-email')).toThrow('Invalid email: invalid-email')
  })

  it('compares normalized values', () => {
    const left = Email.create('test@example.com')
    const right = Email.create('TEST@example.com')
    expect(left.equals(right)).toBe(true)
  })
})
