import { useState } from 'react'
import { SideBar } from './components/dashboard/sidebar'
import { Home } from './components/dashboard/home'
import { Footer } from './components/dashboard/footer'
import { Header } from './components/dashboard/header'



function Dashboard() {

  return <div >

      <Header />
      <SideBar />
      <Home />
      {/* <Footer /> */}

    </div>

  // return "Hello World"
}

export default Dashboard
