import { createHistoryRouter } from 'atomic-router'
import { createBrowserHistory } from 'history'
import { routesMap } from '@/pages'

export const history = createBrowserHistory()
export const router = createHistoryRouter({
  routes: routesMap,
})

router.setHistory(history)
