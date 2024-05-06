import React from 'react'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import ShopBanner from './ShopBanner'
import Product_detailspage from './Product_detailspage'

function Productdetails() {
  return (
    <>
  
<div className="main-wrapper">
  
<Header/>
<ShopBanner bannername="Product details"/>
<Product_detailspage/>
<Footer/>
    </div>
</>

  )
}

export default Productdetails