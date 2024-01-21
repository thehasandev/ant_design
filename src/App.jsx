import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import { Router, RouterProvider } from 'react-router-dom'

import Route from './route/Route'

function App() {

  return (
    <RouterProvider router={Route} />
  )
}

export default App