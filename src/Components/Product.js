import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import {product_image_path , product_fetch_api} from '../Api_path';
function Product() {


  const [products , setProduct] = useState([]);
  const loadproduct = async()=>{
  const res = await axios.get(product_fetch_api)
  console.log(res.data);
  
  setProduct(res.data);
  
  }
  
  
  useEffect(()=>{
    loadproduct();
  },[]);
  

  return (
   <>
   <div className="product-area section-ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section-title start */}
            <div className="section-title">
              <h2>Featured Products</h2>
              <p>Our Featured products</p>
            </div>
            {/* section-title end */}
          </div>
        </div>
        {/* product-warpper start */}
        <div className="product-warpper">
          <div className="product-slider row">




  
          {
products.map((index , key)=>(

            <div className="col" key={key+1}>
            
              <div className="single-product-wrap">
                <div className="product-image">
                <Link to={`productdetails/${index.id}`}>
                    <img src={product_image_path+index.image} alt="" style={{
    'height': '330px'}}/>
                 </Link>
                </div>
                <div className="product-content">
                  <h3>
                  <Link to={`productdetails/${index.id}`}>{index.product_name}</Link>
                  </h3>
                  <div className="price-box">
                   
                    <span className="new-price">₹ {index.price} </span>
                  </div>
                </div>
              </div>
             
            </div>
))
}
          </div>
        </div>
        {/* product-warpper start */}
      </div>
    </div>
   </>
  )
}

export default Product