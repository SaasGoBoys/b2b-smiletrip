import { useForm } from 'react-hook-form'

import { useMutation } from '@tanstack/react-query'

import { message } from 'antd'

import { zodResolver } from '@hookform/resolvers/zod'

import { commandBus } from '@/app/bus'

import { SignInCommand, type SignInCommandResult } from '../../application/commands/SignInCommand'
import { type LoginDto, loginSchema } from '../../application/dtos/LoginDto'
import { useAuthStore } from '../../infrastructure/store/authStore'

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message
  return 'Đăng nhập thất bại'
}

const useSignInController = () => {
  const { setUser } = useAuthStore()

  const methods = useForm<LoginDto>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '', rememberMe: false },
  })

  const loginMutation = useMutation({
    mutationFn: (data: LoginDto) =>
      commandBus.send<SignInCommand, SignInCommandResult>(
        new SignInCommand(data.email, data.password)
      ),
    onSuccess: ({ user: nextUser, accessToken, refreshToken }) => {
      setUser(nextUser, accessToken, refreshToken)
      message.success('Đăng nhập thành công!')
    },
    onError: (error: unknown) => {
      message.error(getErrorMessage(error))
    },
  })

  const onSubmit = (data: LoginDto) => loginMutation.mutate(data)

  return {
    form: methods,

    onSubmit,
    isLoading: loginMutation.isPending,
  }
}

export default useSignInController
