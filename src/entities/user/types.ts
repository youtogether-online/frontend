export type themes = 'WHITE' | 'DARK' | 'SYSTEM'

export interface DetailedUser {
  username: string
  biography?: string
  avatar?: string
  userRole: 'USER' | 'ADMIN'
  email?: string
  language?: 'EN' | 'RU'
  theme?: themes
  firstName?: string
  lastName?: string
}