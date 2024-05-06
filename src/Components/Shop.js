import React from 'react'
import Header from './Layout/Header'
import Footer from './Layout/Footer'


import ShopBanner from './ShopBanner'
import ShopProduct from './ShopProduct'
function Shop() {
  return (
    <>
  
<div className="main-wrapper">
  
<Header/>
<ShopBanner bannername="Shop"/>
<ShopProduct/>
<Footer/>
    </div>
</>

  )
}

export default Shop;