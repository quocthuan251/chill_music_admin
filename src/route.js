import React, { lazy } from 'react'
import BlankLayout from './layouts/BlankLayout'
import SecurityLayout from './layouts/SecurityLayout'

const DashBoardPage = lazy(() => import('./pages/DashBoard'))

const SigninPage = lazy(() => import('./pages/Signin'))

// const Error403 = lazy(() => import('./pages/Exception/403'))
const Error404 = lazy(() => import('./pages/Exception/404'))
// const Error500 = lazy(() => import('./pages/Exception/500'))

const route = [
    {
        path: '/',
        exact: true,
        auth: false,
        layout: SecurityLayout,
        main: (props) => <DashBoardPage router={props} />,
    },
    {
        path: '/signin',
        exact: true,
        auth: false,
        layout: BlankLayout,
        main: (props) => <SigninPage router={props} />,
    },
    {
        path: '/filenotfoud',
        exact: true,
        auth: false,
        layout: BlankLayout,
        main: (props) => <Error404 router={props} />,
    },
    {
        layout: BlankLayout,
        main: (props) => <Error404 router={props} />,
    },
]

export default route
