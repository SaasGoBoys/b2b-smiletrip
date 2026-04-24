import axios from 'axios'
import type { IPipelineBehavior } from '../types'

export class AppError extends Error {
  readonly code: string
  readonly statusCode: number

  constructor(message: string, code: string, statusCode: number = 500) {
    super(message)
    this.name = 'AppError'
    this.code = code
    this.statusCode = statusCode
  }
}

export class ErrorBehavior implements IPipelineBehavior {
  async handle<T>(_request: object, next: () => Promise<T>): Promise<T> {
    try {
      return await next()
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        const { status, data } = err.response
        const body = data as { message?: string; code?: string }
        throw new AppError(
          body?.message ?? err.message ?? 'Server error',
          body?.code ?? 'SERVER_ERROR',
          status
        )
      }
      if (err instanceof AppError) throw err
      if (err instanceof Error) {
        throw new AppError(err.message, 'UNKNOWN', 500)
      }
      throw new AppError('Unknown error', 'UNKNOWN', 500)
    }
  }
}
