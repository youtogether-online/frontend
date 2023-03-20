import { useUnit } from 'effector-react'
import { useTranslation } from 'react-i18next'
import { $session, signOutClicked } from '@/entities/session'
import { styled } from '@/shared/config/stitches/stitches.config'
import { routes } from '@/shared/routes'
import { Button } from '@/shared/ui/atoms/button'
import { NavLink } from '@/shared/ui/atoms/navLink'
import { Text } from '@/shared/ui/atoms/text'

export const UserMenu = () => {
  const [session, signOut] = useUnit([$session, signOutClicked])

  const { t, i18n } = useTranslation()

  const switchLanguage = () => {
    if (window.localStorage.getItem('i18nextLng') === 'ru') {
      void i18n.changeLanguage('en')
    } else {
      void i18n.changeLanguage('ru')
    }
  }

  if (!session) {
    return null
  }

  return (
    <Root>
      <Notifications>
        <Text variant="h5">{t('notifications')}</Text>
      </Notifications>
      <UserActions>
        <Username variant="h5">{session.username}</Username>
        <Actions>
          <Action>
            <NavLink
              to={routes.profile}
              params={{ username: session.username }}
            >
              {t('yourProfile')}
            </NavLink>
          </Action>
          <Action>
            <NavLink
              to={routes.friends}
              params={{ username: session.username }}
            >
              {t('friends')}
            </NavLink>
          </Action>
          <Action>
            <NavLink to={routes.home}>{t('favorites')}</NavLink>
          </Action>
          <Action>
            <NavLink to={routes.settings}>{t('settings')}</NavLink>
          </Action>
          <Action>
            <Button variant="link" onClick={signOut}>
              {t('exit')}
            </Button>
          </Action>
        </Actions>
      </UserActions>
    </Root>
  )
}

const Root = styled('div', {
  minHeight: '330px',
  display: 'flex',
})

const Notifications = styled('div', {
  backgroundColor: '$backgroundLayout',
  padding: '16px',
  minWidth: '240px',
  borderRadius: '$tertiary',
})

const UserActions = styled('div', {
  backgroundColor: '$backgroundContainer',
  padding: '16px 64px 16px 16px',
  width: 'max-content',
})

const Actions = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '10px',
  gap: '6px',
})

const Action = styled('li', {
  'width': '100%',
  'display': 'flex',
  'gap': '5px',

  '& span:hover': {
    color: '$primaryText',
  },
})

const Username = styled(Text, {
  textTransform: 'capitalize',
})
