import { z } from 'zod'

import { UserRoles } from '@/shared/types/user-role'

export const createUserSchema = z.object({
  email: z.string().email(),
  fullName: z.string().min(1),
  role: z.enum([UserRoles.ADMIN, UserRoles.USER, UserRoles.MODERATOR]),
})

export type CreateUserDto = z.infer<typeof createUserSchema>
