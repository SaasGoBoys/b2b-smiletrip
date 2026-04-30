import type { ZodType } from 'zod'

import type { IPipelineBehavior } from '../types'

interface Validatable {
  constructor: { schema?: ZodType<unknown> }
}

export class ValidationBehavior implements IPipelineBehavior {
  async handle<T>(request: object, next: () => Promise<T>): Promise<T> {
    const schema = (request as Validatable).constructor.schema

    if (schema) {
      const result = schema.safeParse(request)
      if (!result.success) {
        const messages = result.error.issues
          .map((e) => `${e.path.join('.')}: ${e.message}`)
          .join(', ')
        throw new Error(`Validation failed: ${messages}`)
      }
    }

    return next()
  }
}
