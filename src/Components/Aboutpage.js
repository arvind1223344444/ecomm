import React from 'react'
import Header from './Layout/Header'
import Footer from './Layout/Footer'


import ShopBanner from './ShopBanner'

import Aboutdetails from './Aboutdetails'
function Aboutpage() {
    const banner_namr="Blog";
  return (
    <>
  
<div className="main-wrapper">
  
<Header/>
<ShopBanner bannername="About us"/>
<Aboutdetails/>
<Footer/>
    </div>
</>

  )
}

export default Aboutpage;