import { Children, useState } from 'react'
import { Login } from './components/user/login'
import { Register } from './components/user/register'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Home } from './components/dashboard/home'
import { Profil } from './components/dashboard/user-profil'
import { Faq } from './components/dashboard/faq'
import { Contact } from './components/dashboard/contact'
import { ShowUsers } from './components/dashboard/users'
import { OffersList } from './components/dashboard/offers'
import { Header } from './components/dashboard/layouts/header'
import { SideBar } from './components/dashboard/layouts/sidebar'
import { Footer } from './components/user/footer'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }]
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "profil",
        element: <Profil />
      },
      {
        path: "faq",
        element: <Faq />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "users",
        element: <ShowUsers />
      },
      {
        path: "lists",
        element: <OffersList />
      },
    ]
  }
])

function Auth() {
  return <main>
    <div class="container">

      <Outlet />

    </div>
  </main>
}

function Dashboard() {
  return <div >

    <Header />
    <SideBar />
    <Outlet />
    <Footer />

  </div>
}

function App() {

  return <main>
    <div className="container">

      <RouterProvider router={router} />

    </div>
  </main>

}

export default App
