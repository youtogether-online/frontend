import {Route, Routes} from "react-router";

import {lazy} from 'react'

const IndexPage = lazy(() => import('./index/index'))

export const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<IndexPage/>}></Route>
        </Routes>
    )
}