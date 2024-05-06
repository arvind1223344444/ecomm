import React from 'react'
import Header from './Layout/Header'
import Footer from './Layout/Footer'


import ShopBanner from './ShopBanner'
import Blogdata from './Blogdata'
function Blog() {
    const banner_namr="Blog";
  return (
    <>
  
<div className="main-wrapper">
  
<Header/>
<ShopBanner bannername="Blog"/>
<Blogdata/>
<Footer/>
    </div>
</>

  )
}

export default Blog;