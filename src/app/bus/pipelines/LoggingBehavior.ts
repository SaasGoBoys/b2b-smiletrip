import type { IPipelineBehavior } from '../types'

export class LoggingBehavior implements IPipelineBehavior {
  async handle<T>(request: object, next: () => Promise<T>): Promise<T> {
    const name = request.constructor.name
    const start = performance.now()

    if (import.meta.env.DEV) {
      console.group(`🚌 [Bus] ${name}`)
      console.log('payload:', request)
    }

    try {
      const result = await next()
      const ms = (performance.now() - start).toFixed(1)

      if (import.meta.env.DEV) {
        console.log(`✅ done in ${ms}ms`, result)
        console.groupEnd()
      }

      return result
    } catch (err) {
      const ms = (performance.now() - start).toFixed(1)
      console.error(`❌ [Bus] ${name} failed in ${ms}ms:`, err)
      if (import.meta.env.DEV) console.groupEnd()
      throw err
    }
  }
}
