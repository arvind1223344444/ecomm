import React from 'react'
import Header from './Layout/Header'
import Footer from './Layout/Footer'

import { useParams } from 'react-router-dom'
import ShopBanner from './ShopBanner'
import ShopProduct from './ShopProduct'
import Category_shop_product from './Category_shop_product'
function Category_product() {

    const param = useParams();
  return (
    <>
  
<div className="main-wrapper">

<Header/>

<ShopBanner bannername="Shop"/>

<Category_shop_product/>
<Footer/>
    </div>
</>

  )
}

export default Category_product;