import React from 'react'
import { Outlet } from 'react-router'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'

function Main() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main