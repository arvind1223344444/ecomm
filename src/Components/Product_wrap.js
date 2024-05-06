import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import {product_image_path , product_fetch_api } from '../Api_path';

import { Link } from 'react-router-dom';
function Product_wrap() {
    const [shopproducts , setshopProduct] = useState([]);
    const loadproduct = async()=>{
        const res = await axios.get(product_fetch_api)
        console.log(res.data);
        
        setshopProduct(res.data);
        
        }
        useEffect(()=>{
            loadproduct();
          },[]);
        
  
    return (
    <>

          <div className="shop-product-wrap">
                  <div className="row">
                  {
shopproducts.map((index , key)=>(
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      {/* single-product-wrap start */}


                      <div key={key+1} className="single-product-wrap">
                        <div className="product-image">
                          <Link to={`/productdetails/${index.id}`}>
                            <img src={product_image_path+index.image} alt="" style={{'height':'330px'}}/>
                          </Link>
                          <div className="product-action">
                           
                          
                            
                          </div>
                        </div>
                        <div className="product-content">
                          <h3>
                            <a href="product-details.html">{index.product_name}</a>
                          </h3>
                          <div className="price-box">
                          
                            <span className="new-price">₹ {index.price}</span>
                          </div>
                        </div>
                      </div>

                      {/* single-product-wrap end */}
                    </div>
                 ))
                }
                    
                  </div>
                </div>
    </>
  )
}

export default Product_wrap