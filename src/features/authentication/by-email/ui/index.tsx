import { useUnit } from 'effector-react'
import { $currentSignInStep } from '../model'
import { CheckCode } from './check-code'
import { SendCode } from './send-code'

export const SignInByEmail = () => {
  const currentSignInStep = useUnit($currentSignInStep)

  if (currentSignInStep === 'checkCode') {
    return <CheckCode />
  }

  return <SendCode />
}
