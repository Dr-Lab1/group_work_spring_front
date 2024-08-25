import { useState } from 'react'
import { SideBar } from './components/dashboard/layouts/sidebar'
import { Home } from './components/dashboard/home'
import { Footer } from './components/dashboard/layouts/footer'
import { Header } from './components/dashboard/layouts/header'
import { Profil } from './components/dashboard/user-profil'
import { Faq } from './components/dashboard/faq'
import { Contact } from './components/dashboard/contact'
import { ShowUsers } from './components/dashboard/users'
import { OffersList } from './components/dashboard/offers'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "/profil",
//     element: <Profil />
//   },
//   {
//     path: "/faq",
//     element: <Faq />
//   },
//   {
//     path: "/contact",
//     element: <Contact />
//   },
//   {
//     path: "/users",
//     element: <ShowUsers />
//   },
//   {
//     path: "/lists",
//     element: <OffersList />
//   },
// ])

const router = createBrowserRouter([
  {
    path:"/dashboard",
    element: <Dashboard/>,
    children: [
      {
            path: "",
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

function Dashboard() {

  return <div >

      <Header />
      <SideBar />
      {/* <RouterProvider router={router} /> */}
      <Outlet />
      {/* <Home /> */}
      {/* <Profil />  */}
      {/* <Faq />  */}
      {/* <Contact />  */}
      {/* <ShowUsers />  */}
      {/* <OffersList /> */}
      <Footer />

    </div>

}

export default Dashboard
