import { FormHTMLAttributes, ReactNode } from 'react'
import { styled } from '@/shared/config/stitches/stitches.config'

type InternalFormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode
}
export const InternalForm = ({ children, ...formProps }: InternalFormProps) => {
  return <FormStyled {...formProps}>{children}</FormStyled>
}

const FormStyled = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})
