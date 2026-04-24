import type {
  AuthTokens,
  IAuthRepository,
  LoginCredentials,
} from '../../domain/repositories/IAuthRepository'
import type { User, UserRole } from '../../domain/entities/User.entity'
import { User as UserEntity } from '../../domain/entities/User.entity'
import type { Permission } from '../../domain/entities/Permission.entity'
import { apiClient, postWithoutAuthInterceptors } from '@/shared/lib/axios'

interface ApiUserPayload {
  id: string
  email: string
  fullName?: string
  full_name?: string
  role: string
  createdAt?: string
  created_at?: string
  permissions?: Array<{ resource: string; actions: string[] }>
}

export class AuthRepository implements IAuthRepository {
  async login(credentials: LoginCredentials): Promise<{ user: User; tokens: AuthTokens }> {
    const response = await apiClient.post<{
      user: ApiUserPayload
      accessToken: string
      refreshToken: string
    }>('/auth/login', credentials)

    const user = this.mapToUser(response.data.user)
    const tokens: AuthTokens = {
      accessToken: response.data.accessToken,
      refreshToken: response.data.refreshToken,
    }

    return { user, tokens }
  }

  async logout(): Promise<void> {
    await apiClient.post('/auth/logout')
  }

  async refreshToken(refreshToken: string): Promise<AuthTokens> {
    const data = await postWithoutAuthInterceptors<{ accessToken: string; refreshToken: string }>(
      'auth/refresh',
      { refreshToken }
    )
    return {
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    }
  }

  async getCurrentUser(): Promise<User | null> {
    try {
      const response = await apiClient.get<ApiUserPayload>('/auth/me')
      return this.mapToUser(response.data)
    } catch {
      return null
    }
  }

  private mapToUser(data: ApiUserPayload): User {
    const permissions: Permission[] = (data.permissions ?? []).map((p) => ({
      resource: p.resource as Permission['resource'],
      actions: p.actions as Permission['actions'],
    }))

    return new UserEntity({
      id: data.id,
      email: data.email,
      fullName: data.fullName ?? data.full_name ?? '',
      role: data.role as UserRole,
      createdAt: new Date(data.createdAt ?? data.created_at ?? Date.now()),
      permissions,
    })
  }
}
