import {FC, lazy, memo} from "react";
import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import {DefaultLayout} from "../components/layout/DefaultLayout";

const NotFound = lazy<FC>(() => import('./not-found'))
const Form = lazy<FC>(() => import('./form/Form'))
const Home = lazy<FC>(() => import('./home/HomePage'))


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
                element: <NotFound />,
                path: '*',
            },
        ],
    },
]
const Router = () => <RouterProvider router={createBrowserRouter(routes)} />
export default memo(Router)