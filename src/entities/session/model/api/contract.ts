import { zodContract } from '@farfetched/zod'
import { z } from 'zod'

export const UserDetailedContract = zodContract(
  z.object({
    username: z.string(),
    biography: z.string().optional(),
    avatar: z.string().optional(),
    role: z.union([z.literal('USER'), z.literal('ADMIN')]),
    isEmailVerified: z.boolean(),
    email: z.string().email(),
    language: z.union([z.literal('EN'), z.literal('RU')]),
    theme: z.union([
      z.literal('WHITE'),
      z.literal('DARK'),
      z.literal('SYSTEM'),
    ]),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
  })
)
