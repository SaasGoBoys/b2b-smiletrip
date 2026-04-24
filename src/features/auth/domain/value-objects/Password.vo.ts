/** Domain value object for password rules (no plain-text persistence here). */
export class Password {
  private readonly _value: string

  private constructor(value: string) {
    this._value = value
  }

  static create(value: string): Password {
    if (!value || value.length < 6) {
      throw new Error('Password must be at least 6 characters')
    }
    return new Password(value)
  }

  get value(): string {
    return this._value
  }
}
