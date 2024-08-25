import { useState } from 'react'
import { Login } from './components/user/login'
import { Register } from './components/user/register'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])


function App() {

  return <main>
    <div class="container">

      <RouterProvider router={router} />

    </div>
  </main>

}

export default App
