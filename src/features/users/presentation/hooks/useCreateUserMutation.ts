import { useMutation } from '@tanstack/react-query'

import { commandBus } from '@/app/bus'

import { CreateUserCommand } from '../../application/commands/CreateUserCommand'
import type { CreateUserDto } from '../../application/dtos/UserDto'
import type { UserProfile } from '../../domain/entities/UserProfile.entity'

export function useCreateUserMutation() {
  return useMutation({
    mutationFn: (data: CreateUserDto) =>
      commandBus.send<CreateUserCommand, UserProfile>(
        new CreateUserCommand(data.email, data.fullName, data.role)
      ),
  })
}
