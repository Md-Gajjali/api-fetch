import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBer from './components/NavBer';
import Footer from './components/Footer';


const RootLayout = () => {
  return (
    <div>
      <NavBer />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout
