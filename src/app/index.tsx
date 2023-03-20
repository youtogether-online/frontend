import '@/shared/config/i18n'
import { useUnit } from 'effector-react'
import { useEffect } from 'react'
import { appMounted } from '@/entities/session'
import { Pages } from '@/pages'
import { styled } from '@/shared/config/stitches/stitches.config'
import { globalStyles } from './global-styles'
import { Provider } from './providers'

export const App = () => {
  globalStyles()

  const handleAppMount = useUnit(appMounted)

  useEffect(() => {
    handleAppMount()
  }, [])

  return (
    <Provider>
      <Root>
        <Pages />
      </Root>
    </Provider>
  )
}

const Root = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  overflowX: 'hidden',
})
