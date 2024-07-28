import { useState } from 'react'
import { SideBar } from './components/dashboard/layouts/sidebar'
import { Home } from './components/dashboard/home'
import { Footer } from './components/dashboard/layouts/footer'
import { Header } from './components/dashboard/layouts/header'



function Dashboard() {

  return <div >

      <Header />
      <SideBar />
      <Home />
      <Footer />

    </div>

  // return "Hello World"
}

export default Dashboard
