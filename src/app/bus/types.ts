export interface ICommand {
  readonly _type: 'command'
}

export interface IQuery {
  readonly _type: 'query'
}

export interface ICommandHandler<TCommand extends ICommand, TResult = void> {
  handle(command: TCommand): Promise<TResult>
}

export interface IQueryHandler<TQuery extends IQuery, TResult> {
  handle(query: TQuery): Promise<TResult>
}

export interface IPipelineBehavior {
  handle<T>(request: ICommand | IQuery, next: () => Promise<T>): Promise<T>
}

export interface HandlerMetadata {
  requiredPermissions?: string[]
  skipLogging?: boolean
  skipValidation?: boolean
}
