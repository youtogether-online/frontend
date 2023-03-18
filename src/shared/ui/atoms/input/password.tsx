import { useState } from 'react'
import { IconEyeNone, IconEyeOpen } from '@/shared/ui'
import { InternalInput } from '@/shared/ui/atoms/input/input'

export const Password = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const handleChangePasswordShownMode = () => {
    setIsPasswordShown((prevState) => !prevState)
  }

  return (
    <InternalInput
      type={isPasswordShown ? 'text' : 'password'}
      postfix={
        <button type="button" onClick={handleChangePasswordShownMode}>
          {isPasswordShown ? <IconEyeOpen /> : <IconEyeNone />}
        </button>
      }
    />
  )
}
