import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default MainLayout
