import React from 'react'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import ShopBanner from './ShopBanner'
import Register_form from './Register_form'

function Register() {
  return (
    <>
  
<div className="main-wrapper">
  
<Header/>
<ShopBanner bannername="Register"/>
<Register_form/>
<Footer/>
    </div>
</>

  )
}

export default Register;