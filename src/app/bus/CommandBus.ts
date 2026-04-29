import type { ICommand, ICommandHandler, IPipelineBehavior } from './types'

type HandlerEntry<T extends ICommand, R> = {
  handler: ICommandHandler<T, R>
}

export class CommandBus {
  private readonly handlers = new Map<string, HandlerEntry<ICommand, unknown>>()
  private readonly behaviors: IPipelineBehavior[] = []

  register<T extends ICommand, R>(
    // Constructor arity differs per command; registry only needs the prototype name.
    commandType: new (...args: never[]) => T,
    handler: ICommandHandler<T, R>
  ): this {
    this.handlers.set(commandType.name, {
      handler: handler as ICommandHandler<ICommand, unknown>,
    })
    return this
  }

  use(behavior: IPipelineBehavior): this {
    this.behaviors.push(behavior)

    return this
  }

  async send<T extends ICommand, R = void>(command: T): Promise<R> {
    const entry = this.handlers.get(command.constructor.name)
    if (!entry) {
      throw new Error(`No handler registered for: ${command.constructor.name}`)
    }

    console.log(this.handlers)

    const executeHandler = () => entry.handler.handle(command) as Promise<R>

    const chain = this.behaviors.reduceRight(
      (next, behavior) => () => behavior.handle(command, next),
      executeHandler
    )

    return chain()
  }
}

export const commandBus = new CommandBus()
