import { modelFactory } from 'effector-factorio'
import { createByEmailModel } from '@/features/authentication/by-email'
import { createByPasswordModel } from '@/features/authentication/by-password'

export const createSignInModel = modelFactory(() => {
  const byPasswordModel = createByPasswordModel.createModel()
  const byEmailModel = createByEmailModel.createModel()

  return {
    byPasswordModel,
    byEmailModel,
  }
})
