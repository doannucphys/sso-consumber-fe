import './App.css'
import { routeUri } from '@routes/const'
import { Navigate, useRoutes } from "react-router-dom"
import { MainLayoutPrivate, MainLayoutPublic, AuthLayout } from '@views/layouts'
import { Error403, Error404 } from '@views/pages/errors'
import { Profile } from '@views/pages/private/Profile'
import { PushToken } from '@views/pages/push-token'

function App() {
 const routes = useRoutes([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        // page to get javascript postmessage
        {
          path: routeUri.PUSH_TOKEN,
          element: <MainLayoutPublic />,
          children: [{ path: "", element: <PushToken /> }]
        },
        // error route
        {
          path: routeUri.ERROR_404,
          element: <MainLayoutPublic />,
          children: [{ path: "", element: <Error404 /> }]
        },
        {
          path: routeUri.ERROR_403,
          element: <MainLayoutPublic />,
          children: [{ path: "", element: <Error403 /> }]
        },
        // require auth
        {
          path: '',
          element: <MainLayoutPrivate />,
          children: [{ path: "", element: <Profile /> }]
        }
      ]
    },
    // not found route
    {
      path: "*",
      element: <Navigate to={routeUri.ERROR_404} />
    }
  ])

  return routes
}

export default App
