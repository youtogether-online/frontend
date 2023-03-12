import { RouterProvider } from 'atomic-router-react'
import { ReactNode } from 'react'
import { router } from '../router'

export const Provider = ({ children }: { children: ReactNode }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>
}
