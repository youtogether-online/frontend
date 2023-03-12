import {
  chainRoute,
  redirect,
  RouteInstance,
  RouteParams,
  RouteParamsAndQuery,
} from 'atomic-router'
import { createRoutesView } from 'atomic-router-react'
import { createEvent, sample } from 'effector'
import { not } from 'patronum'
import { $isAuthenticated } from '@/entities/session'
import { CatalogPage } from '@/pages/catalog'
import { FriendsPage } from '@/pages/friends'
import { HomePage } from '@/pages/home'
import { NotFoundPage } from '@/pages/not-found'
import { ProfilePage } from '@/pages/profile'
import { SettingsPage } from '@/pages/settings'
import { SignInPage } from '@/pages/sign-in'
import { routes } from '@/shared/routes'
import { MainLayout } from '@/widgets/layouts/main-layout'
import { SignInLayout } from '@/widgets/layouts/sign-in-layout'

export const routesMap = [
  {
    path: '/',
    route: routes.home,
  },
  {
    path: '/catalog',
    route: routes.catalog,
  },
  {
    path: '/settings',
    route: routes.settings,
  },
  {
    path: '/sign-in',
    route: routes.signIn,
  },
  {
    path: '/:username',
    route: routes.profile,
  },
  {
    path: '/:username/friends',
    route: routes.friends,
  },
]

const chainAuthorized = <Params extends RouteParams>(
  route: RouteInstance<Params>
) => {
  const sessionCheckStarted = createEvent<RouteParamsAndQuery<Params>>()

  const alreadyAuthorized = sample({
    clock: sessionCheckStarted,
    filter: $isAuthenticated,
  })

  sample({
    clock: sessionCheckStarted,
    filter: not($isAuthenticated),
    target: redirect({
      route: routes.signIn,
    }),
  })

  return chainRoute({
    route,
    beforeOpen: sessionCheckStarted,
    openOn: alreadyAuthorized,
  })
}

export const Pages = createRoutesView({
  routes: [
    { route: routes.home, view: HomePage, layout: MainLayout },
    { route: routes.catalog, view: CatalogPage, layout: MainLayout },
    {
      route: chainAuthorized(routes.settings),
      view: SettingsPage,
      layout: MainLayout,
    },
    { route: routes.signIn, view: SignInPage, layout: SignInLayout },
    {
      route: chainAuthorized(routes.profile),
      view: ProfilePage,
      layout: MainLayout,
    },
    {
      route: chainAuthorized(routes.friends),
      view: FriendsPage,
      layout: MainLayout,
    },
  ],
  otherwise: () => {
    return <NotFoundPage />
  },
})
