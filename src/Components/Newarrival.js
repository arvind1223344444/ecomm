import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import {product_image_path , product_fetch_api} from '../Api_path';


function Newarrival() {

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
           
            <div className="section-title">
              <h2>New Arrivals</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
           
          </div>
        </div>
        {/* product-warpper start */}
        <div className="product-warpper">
          <div className="row">
            
            
            
            
            {
products.map((index , key)=>(
  <div key={key+1} className="col-lg-3 col-md-4 col-sm-6">
             
  <div className="single-product-wrap">
    <div className="product-image">
      <Link to={`productdetails/${index.id}`}>
        <img src={product_image_path+index.image} alt="" style={{
    'height': '330px'}}/>
      </Link>
      <div className="product-action">
       
        
      </div>
    </div>
    <div className="product-content">
      <h3>
        <a href="#">{index.product_name}</a>
      </h3>
      <div className="price-box">
      
        <span className="new-price">₹ {index.price} </span>
      </div>
    </div>
  </div>
  {/* single-product-wrap end */}
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

export default Newarrival