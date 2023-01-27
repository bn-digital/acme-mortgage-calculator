import {FC, lazy, memo} from "react";
import { RouterProvider, RouteObject, useRoutes, BrowserRouter  } from 'react-router-dom'

import {DefaultLayout} from "../components/layout/DefaultLayout";

const NotFound = lazy<FC>(() => import('./not-found'))
const Home = lazy<FC>(() => import('./home/Home'))

const routes: RouteObject[] = [
    {
        path: '',
        element: <DefaultLayout />,
        children: [
            {
                element: <Home />,
                path: '/',
            },
            {
                element: <NotFound />,
                path: '*',
            },
        ],
    },
]

const Routes = () => useRoutes(routes)

const Router = () => <BrowserRouter basename={import.meta.env.PROD ? '/acme-financial-freedom/' : '/'}><Routes /></BrowserRouter>

export default memo(Router)
