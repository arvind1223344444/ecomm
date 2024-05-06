import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {product_image_path , product_fetch_api , product_fetch_by_category_api} from '../Api_path';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Category_product_wrap() {

    const { ctgy_id } = useParams();
   
  
    const [shopproducts , setshopProduct] = useState([]);

    useEffect(()=>{
        loadproduct(ctgy_id);
      
      },[ctgy_id]);


    const loadproduct = async(txt)=>{
        const res = await axios.get(`${product_fetch_by_category_api}${txt}`)
       // console.log(res.data);
        
        setshopProduct(res.data);
        
        }
      
        
  
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
                          {/* <div className="product-action">
                            <a href="#" className="wishlist">
                              <i className="icon-heart" />
                            </a>
                            <a href="#" className="add-to-cart">
                              <i className="icon-handbag" />
                            </a>
                            <a
                              href="#"
                              className="quick-view"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"
                            >
                              <i className="icon-shuffle" />
                            </a>
                          </div> */}
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

export default Category_product_wrap