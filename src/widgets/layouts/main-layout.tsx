import { ReactNode } from 'react'
import { Content } from '@/shared/ui'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header navbar subheader search user />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
