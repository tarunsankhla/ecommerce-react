import React from 'react'
import { Outlet } from 'react-router'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'

function Main() {
  console.log("Main");
  var token = localStorage.getItem("feetz");
  var userID = localStorage.getItem("feetzId");
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main