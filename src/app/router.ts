import { createHistoryRouter } from 'atomic-router'
import { createBrowserHistory } from 'history'
import { routesMap } from '@/pages'
import { controls } from '@/shared/routes'

export const router = createHistoryRouter({
  controls,
  routes: routesMap,
})

const history = createBrowserHistory()

router.setHistory(history)
