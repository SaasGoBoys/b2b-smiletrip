export class Email {
  private readonly _value: string

  private constructor(value: string) {
    this._value = value.toLowerCase().trim()
  }

  static create(value: string): Email {
    if (!Email.isValid(value)) {
      throw new Error(`Invalid email: ${value}`)
    }
    return new Email(value)
  }

  static isValid(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  }

  get value(): string {
    return this._value
  }

  equals(other: Email): boolean {
    return this._value === other._value
  }
}
