import { ReactNode } from 'react'
import { Content } from '@/shared/ui'
import { Header } from '@/widgets/header'

interface SignInLayoutProps {
  children: ReactNode
}

export const SignInLayout = ({ children }: SignInLayoutProps) => {
  return (
    <>
      <Header centerLogo />
      <Content>{children}</Content>
    </>
  )
}
