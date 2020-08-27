import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import './layout.css'


const Layout = props => {
  return (
    <div>
      <div> 
        <Navbar />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout