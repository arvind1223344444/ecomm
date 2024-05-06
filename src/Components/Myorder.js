import React from 'react'
import Header from './Layout/Header'
import Footer from './Layout/Footer'


import ShopBanner from './ShopBanner'

import Orderproduct from './Orderproduct'
function Myorder() {
  return (
    <>
  
<div className="main-wrapper">
  
<Header/>
<ShopBanner bannername="My Order"/>
<Orderproduct/>
<Footer/>
    </div>
</>

  )
}

export default Myorder