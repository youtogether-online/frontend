import { useUnit } from 'effector-react'
import { useTranslation } from 'react-i18next'
import { $isAuthenticated, $session, signOutClicked } from '@/entities/session'
import { SearchBar } from '@/features/search-bar'
import { styled } from '@/shared/config/stitches/stitches.config'
import { routes } from '@/shared/routes'
import { Avatar, Button, NavLink } from '@/shared/ui'
import { SignIn } from '@/widgets/sign-in'
import { UserMenu } from '@/widgets/user-menu'
import { ReactComponent as Logo } from './horizontal-logo.svg'
import { Navbar } from './navbar'
import { Subheader } from './subheader'

interface HeaderProps {
  subheader?: boolean
  navbar?: boolean
  search?: boolean
  user?: boolean
  centerLogo?: boolean
}

export const Header = ({
  subheader,
  navbar,
  search,
  user,
  centerLogo,
}: HeaderProps) => {
  const { t } = useTranslation()

  const [isAuthenticated, session, clickSignOut] = useUnit([
    $isAuthenticated,
    $session,
    signOutClicked,
  ])

  return (
    <Root>
      {subheader && <Subheader />}
      <Main>
        <LinkLogo to={routes.home} centerLogo={centerLogo}>
          <Logo />
        </LinkLogo>
        {search && (
          <SearchBarContainer>
            <SearchBar />
          </SearchBarContainer>
        )}
        {user && (
          <User>
            {!isAuthenticated && <Button variant="text">{t('signIn')}</Button>}
            {isAuthenticated && session && (
              <Avatar
                url={session.avatar}
                alt={session.username}
                fallback={session.username.slice(0, 2)}
              />
            )}
            <HoverMenu>
              {!isAuthenticated && <SignIn />}
              {isAuthenticated && <UserMenu />}
            </HoverMenu>
          </User>
        )}
      </Main>
      {navbar && <Navbar />}
    </Root>
  )
}

const Main = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '12px 0',
  height: '65px',
})

const SearchBarContainer = styled('div', {
  marginRight: '28px',
  height: '100%',
  width: '100%',
  maxWidth: '400px',
})

const Root = styled('header', {
  maxWidth: '$containerLg',
  width: '100%',
  margin: '0 auto',
})

const LinkLogo = styled(NavLink, {
  margin: '0 auto 0 0',

  variants: {
    centerLogo: {
      true: {
        margin: '0 auto',
      },
    },
  },
})

const HoverMenu = styled('div', {
  display: 'flex',
  position: 'absolute',
  zIndex: 100,
  top: '-13px',
  right: '-13px',
  opacity: 0,
  padding: '12px',
  backgroundColor: '$backgroundContainer',
  minWidth: '280px',
  borderRadius: '$tertiary',
  boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.1)',
  transform: 'scale(0)',
  transformOrigin: '90% 10%',
  transition: 'opacity 0.3s, transform 0.3s',

  '&:focus-within': {
    opacity: 1,
    transform: 'scale(1)',
    transition: 'opacity 0.3s, transform 0.3s',
  },
})

const User = styled('div', {
  position: 'relative',

  [`&:hover ${HoverMenu}`]: {
    opacity: 1,
    transform: 'scale(1)',
    transition: 'opacity 0.3s, transform 0.3s',
  },
})
