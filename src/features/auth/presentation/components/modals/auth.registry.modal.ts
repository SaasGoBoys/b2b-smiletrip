import { lazy } from 'react'

import ForgotPasswordModal from './ForgotPasswordModal'

const SignInModal = lazy(() => import('./SignInModal'))
const SignUpModal = lazy(() => import('./SignUpModal'))

export const AuthRegistryModalKeys = {
  SignIn: 'SignIn',
  SignUp: 'SignUp',
  ForgotPassword: 'ForgotPassword',
} as const

const authRegistryModals = {
  [AuthRegistryModalKeys.SignIn]: SignInModal,
  [AuthRegistryModalKeys.SignUp]: SignUpModal,
  [AuthRegistryModalKeys.ForgotPassword]: ForgotPasswordModal,
}

export default authRegistryModals
