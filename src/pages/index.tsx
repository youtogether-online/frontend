import { lazy } from 'react'
import { Route, Routes } from 'react-router'

const IndexPage = lazy(async () => await import('./index/index'))
export const Routing = () => (
	<Routes>
		<Route path='/' element={<IndexPage/>}></Route>
	</Routes>
)
