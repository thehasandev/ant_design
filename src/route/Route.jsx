import React from 'react'
import Home from '../pages/Home';
import Error from '../pages/Error';
import { createBrowserRouter } from 'react-router-dom';
import RoutesLayouts from '../components/RoutesLayouts';
import From from '../pages/From';


const Route = createBrowserRouter([
    {
      path: "/",
      element: <RoutesLayouts />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/from",
          element: <From />,
        },
      ],
    },
    {
        path: "/*",
        element: <Error />
    }
    
  ]);

export default Route