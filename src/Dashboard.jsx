import { useState } from 'react'
import { sideBar } from './components/dashboard/sidebar'
import { Home } from './components/dashboard/home'
import { Footer } from './components/dashboard/footer'
import { Header } from './components/dashboard/header'



function Dashboard() {

  return <div >

      <Header />
      <sideBar />
      {/* <Home />
      <Footer /> */}

    </div>

  // return "Hello World"
}

export default Dashboard
