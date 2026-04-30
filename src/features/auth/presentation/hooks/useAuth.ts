import { useNavigate } from 'react-router-dom'

import { useMutation } from '@tanstack/react-query'

import { message } from 'antd'

import { commandBus } from '@/app/bus'

import { LoginCommand, type LoginCommandResult } from '../../application/commands/LoginCommand'
import type { LoginDto } from '../../application/dtos/LoginDto'
import { useAuthStore } from '../../infrastructure/store/authStore'

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message
  return 'Đăng nhập thất bại'
}

export function useAuth() {
  const navigate = useNavigate()
  const { user, isAuthenticated, setUser, clearAuth } = useAuthStore()

  const loginMutation = useMutation({
    mutationFn: (data: LoginDto) =>
      commandBus.send<LoginCommand, LoginCommandResult>(
        new LoginCommand(data.email, data.password)
      ),
    onSuccess: ({ user: nextUser, accessToken, refreshToken }) => {
      setUser(nextUser, accessToken, refreshToken)
      message.success('Đăng nhập thành công!')
      navigate('/')
    },
    onError: (error: unknown) => {
      message.error(getErrorMessage(error))
    },
  })

  const logout = () => {
    clearAuth()
    navigate('/login')
  }

  return {
    user,
    isAuthenticated,
    isLoading: loginMutation.isPending,
    login: loginMutation.mutate,
    logout,
  }
}
