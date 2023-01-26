import {FC, lazy, memo} from "react";
import { RouterProvider, RouteObject, useRoutes, BrowserRouter  } from 'react-router-dom'

import {DefaultLayout} from "../components/layout/DefaultLayout";

const NotFound = lazy<FC>(() => import('./not-found'))
const Form = lazy<FC>(() => import('./form/Form'))
const Home = lazy<FC>(() => import('./home/HomePage'))
const Report = lazy<FC>(() => import('./report/Report'))


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
                element: <Form />,
                path: 'form/:step',
            },
            {
                element: <Report />,
                path: 'report',
            },
            {
                element: <NotFound />,
                path: '*',
            },
        ],
    },
]

const Routes = () => useRoutes(routes)

const Router = () => <BrowserRouter basename={import.meta.env.PROD ? '/acme-mortgage-calculator/' : '/'}><Routes /></BrowserRouter>

export default memo(Router)
