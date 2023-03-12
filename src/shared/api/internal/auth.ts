import { AxiosPromise } from 'axios'
import { apiInstance } from '@/shared/api/internal/base'

const BASE_URL = '/auth'

interface SendCodeParams {
  email: string
}

export const sendCode = (params: SendCodeParams): AxiosPromise<void> => {
  return apiInstance.post(`${BASE_URL}/send-code`, params)
}

interface CheckCodeParams {
  email: string
  code: string
}

export const checkCode = (params: CheckCodeParams): AxiosPromise<void> => {
  return apiInstance.post(`${BASE_URL}/check-code`, params)
}
