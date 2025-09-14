
// import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import AIChatbot from '../components/AIChatbot'
import React from 'react'
import "../index.css"


function PublicLayout() {
  return (
    <div className='sm:px-2 md:px-8 lg:px-16 xl:px-32 '>
      <Header/>
      <Outlet></Outlet>
      <Footer></Footer>
      <AIChatbot />
    </div>
  )
}

export default PublicLayout;

