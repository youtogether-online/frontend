import { AxiosPromise } from 'axios'
import { apiInstance } from '@/shared/api/internal/base'

const BASE_URL = '/auth'

interface SignInSendCodeParams {
  email: string
}

export const signInSendCode = (
  params: SignInSendCodeParams
): AxiosPromise<void> => {
  return apiInstance.post(`${BASE_URL}/sign-in-send-code`, params)
}

interface SignInCheckCodeParams {
  email: string
  code: string
  device: string
}

export const signInCheckCode = (
  params: SignInCheckCodeParams
): AxiosPromise<void> => {
  return apiInstance.post(`${BASE_URL}/sign-in-check-code`, {
    params,
  })
}

interface SignInWithPasswordParams {
  email: string
  password: string
  device: string
}

export const signInWithPassword = (
  params: SignInWithPasswordParams
): AxiosPromise<void> => {
  return apiInstance.post(`${BASE_URL}/sign-in-with-password`, {
    ...params,
  })
}

export const signOut = (): AxiosPromise<void> => {
  return apiInstance.post(`${BASE_URL}/sign-out`)
}
