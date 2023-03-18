import { AxiosPromise } from 'axios'
import { DetailedUser } from '@/entities/user/types'
import { apiInstance } from './base'

const BASE_URL = '/users'

export const getSessionData = (): AxiosPromise<DetailedUser> => {
  return apiInstance.get(`${BASE_URL}/`)
}
