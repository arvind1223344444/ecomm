import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css';
import {view_user_order_api ,  product_image_path } from '../Api_path';


function Orderproduct() {

const user_id = localStorage.getItem('userid');

    const [cart_product , setCart_product]=useState([]);
const [cart_totasl , setCart_total]= useState();
const loadorderproduct = async()=>{
const result = await axios.get(`${view_user_order_api}${user_id}`)
//console.log(result.data);
setCart_product(result.data);
}

useEffect(()=>{
    loadorderproduct();
},[])

  return (
    <>
    <ToastContainer/>
  
    <div className="main-content-wrap section-ptb cart-page">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <form action="#" className="cart-table">
          <div className="table-content table-responsive">
            <table className="table">
              <thead>
                <tr>
                <th className="plantmore-product-thumbnail">Sno</th>
                <th className="plantmore-product-thumbnail">Date</th>
                  <th className="plantmore-product-thumbnail">Images</th>
                  <th className="cart-product-name">Product</th>
                  <th className="plantmore-product-price">Unit Price</th>
                  <th className="plantmore-product-quantity">Quantity</th>
                  <th className="plantmore-product-subtotal">Total</th>
                  <th className=''>Order id</th>
               
                </tr>
              </thead>
              <tbody>
                {
                    cart_product.map((index , key)=>(
<tr key={key+1}>
                  <td>{key+1}</td>
                   <td className="plantmore-product-thumbnail">{index.order_date}</td>
                  <td className="plantmore-product-thumbnail">
                    <Link to={"/productdetails/"+index.product_id}>
                      <img src={product_image_path+index.image} alt="" style={{'height':'140px'}}/>
                    </Link>
                  </td>
                  <td className="plantmore-product-name">
                    <a href="#">{index.product_name}</a>
                  </td>
                  <td className="plantmore-product-price">
                    <span className="amount">₹ {index.price}</span>
                  </td>
                  <td className="plantmore-product-quantity">
                   {index.quantity}
                  </td>
                  <td className="product-subtotal">
                    <span className="amount">₹ {index.price*index.quantity}</span>
                  </td>
                  <td>{index.order_id}</td>
                 
                </tr>

                    ))
                }
                
             
              </tbody>
            </table>
          </div>
          
        </form>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Orderproduct;