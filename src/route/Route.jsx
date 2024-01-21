import React from 'react'
import Home from '../pages/Home';
import Error from '../pages/Error';
import { createBrowserRouter } from 'react-router-dom';
import RoutesLayouts from '../components/RoutesLayouts';

const Route = createBrowserRouter([
    {
      path: "/",
      element: <RoutesLayouts />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
        path: "/*",
        element: <Error />
    }
    
  ]);

export default Route