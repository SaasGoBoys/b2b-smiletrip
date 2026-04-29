import type { FeatureBusModule } from '@/app/composition/types'
import {
  CreateUserCommand,
  CreateUserCommandHandler,
} from './application/commands/CreateUserCommand'
import {
  UpdateUserCommand,
  UpdateUserCommandHandler,
} from './application/commands/UpdateUserCommand'
import { GetUsersQuery, GetUsersQueryHandler } from './application/queries/GetUsersQuery'
import { GetUserByIdQuery, GetUserByIdQueryHandler } from './application/queries/GetUserByIdQuery'
import { UserRepository } from './infrastructure/repositories/UserRepository'

const registerUsersBus: FeatureBusModule = ({ commandBus, queryBus }) => {
  const userRepository = new UserRepository()

  commandBus
    .register(CreateUserCommand, new CreateUserCommandHandler(userRepository))
    .register(UpdateUserCommand, new UpdateUserCommandHandler(userRepository))

  queryBus
    .register(GetUsersQuery, new GetUsersQueryHandler(userRepository))
    .register(GetUserByIdQuery, new GetUserByIdQueryHandler(userRepository))
}

export default registerUsersBus
