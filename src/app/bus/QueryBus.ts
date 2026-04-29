import type { IQuery, IQueryHandler, IPipelineBehavior } from './types'

export class QueryBus {
  private readonly handlers = new Map<string, { handler: IQueryHandler<IQuery, unknown> }>()
  private readonly behaviors: IPipelineBehavior[] = []

  register<T extends IQuery, R>(
    queryType: new (...args: never[]) => T,
    handler: IQueryHandler<T, R>
  ): this {
    this.handlers.set(queryType.name, {
      handler: handler as IQueryHandler<IQuery, unknown>,
    })
    return this
  }

  use(behavior: IPipelineBehavior): this {
    this.behaviors.push(behavior)
    return this
  }

  async query<T extends IQuery, R>(q: T): Promise<R> {
    const entry = this.handlers.get(q.constructor.name)
    if (!entry) {
      throw new Error(`No query handler: ${q.constructor.name}`)
    }

    const execute = () => entry.handler.handle(q) as Promise<R>
    const chain = this.behaviors.reduceRight((next, b) => () => b.handle(q, next), execute)
    return chain()
  }
}

export const queryBus = new QueryBus()
