import { modelFactory } from 'effector-factorio'
import { createFactory } from 'react'
import {
  createByEmailModel,
  createByPasswordModel,
} from '@/features/authentication'

export const createSignInModel = modelFactory(() => {
  const byPasswordModel = createByPasswordModel.createModel()
  const byEmailModel = createByEmailModel.createModel()

  return {
    byPasswordModel,
    byEmailModel,
  }
})
