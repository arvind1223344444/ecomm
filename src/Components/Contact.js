import React from 'react'
import Header from './Layout/Header'
import Footer from './Layout/Footer'


import ShopBanner from './ShopBanner'

import Aboutdetails from './Aboutdetails'
import Contactdetails from './Contactdetails'
function Contact() {
    const banner_namr="Blog";
  return (
    <>
  
<div className="main-wrapper">
  
<Header/>
<ShopBanner bannername="Contact us"/>
<Contactdetails/>
<Footer/>
    </div>
</>

  )
}

export default Contact;