import { lazy } from 'react'

const SignInModal = lazy(() => import('./SignInModal'))
const SignUpModal = lazy(() => import('./SignUpModal'))

export const AuthRegistryModalKeys = {
  SignIn: 'SignIn',
  SignUp: 'SignUp',
} as const

const authRegistryModals = {
  [AuthRegistryModalKeys.SignIn]: SignInModal,
  [AuthRegistryModalKeys.SignUp]: SignUpModal,
}

export default authRegistryModals
