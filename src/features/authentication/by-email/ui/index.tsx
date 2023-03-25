import { modelView } from 'effector-factorio'
import { useUnit } from 'effector-react'
import { createByEmailModel } from '../model'
import { CheckCode } from './check-code'
import { SendCode } from './send-code'

export const SignInByEmail = modelView(createByEmailModel, () => {
  const byEmailModel = createByEmailModel.useModel()

  const currentSignInStep = useUnit(byEmailModel.$currentSignInStep)

  if (currentSignInStep === 'checkCode') {
    return <CheckCode />
  }

  return <SendCode />
})
