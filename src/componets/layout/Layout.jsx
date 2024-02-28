import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/Footer'


const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <div>
        {props.children}
      </div>
      <Footer />

    </div>
  )
}

export default Layout
