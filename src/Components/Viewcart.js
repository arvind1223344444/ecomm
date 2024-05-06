import React from 'react'
import Header from './Layout/Header'
import Footer from './Layout/Footer'


import ShopBanner from './ShopBanner'
import Cartproduct from './Cartproduct'
function Viewcart() {
  return (
    <>
  
<div className="main-wrapper">
  
<Header/>
<ShopBanner bannername="My cart"/>
<Cartproduct/>
<Footer/>
    </div>
</>

  )
}

export default Viewcart