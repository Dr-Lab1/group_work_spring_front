import { useState } from 'react'
import { SideBar } from './components/dashboard/layouts/sidebar'
import { Home } from './components/dashboard/home'
import { Footer } from './components/dashboard/layouts/footer'
import { Header } from './components/dashboard/layouts/header'
import { Profil } from './components/dashboard/user-profil'
import { Faq } from './components/dashboard/faq'
import { Contact } from './components/dashboard/contact'
import { ShowUsers } from './components/dashboard/users'



function Dashboard() {

  return <div >

      <Header />
      <SideBar />
      {/* <Home />
      <Profil /> 
      <Faq /> 
      <Contact /> */}
      <ShowUsers />
      <Footer />

    </div>

}

export default Dashboard
