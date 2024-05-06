import React from 'react'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Slider from './Slider'
import About from './About'
import Newarrival from './Newarrival'
import Largebanner from './Largebanner'
import Product from './Product'
import Twobanner from './Twobanner'
import Testimonial from './Testimonial'
function Home() {
  return (
    <>
  
<div className="main-wrapper">
  
<Header/>
<Slider/>
<About/>
<Newarrival/>
<Largebanner/>
<Product/>
<Twobanner/>
<Testimonial/>
<Footer/>
    </div>
</>

  )
}

export default Home