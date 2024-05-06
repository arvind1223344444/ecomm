import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import {view_user_cart_api ,  product_image_path , delete_cart_api , update_cart_qty , subtotal_api , order_place_api} from '../Api_path';
import Raz from './Raz';


function Cartproduct() {
const [mehd, setmthd]=useState('');
const user_id = localStorage.getItem('userid');
const navigate = useNavigate();
    const [cart_product , setCart_product]=useState([]);
const [cart_totasl , setCart_total]= useState();
const loadcartproduct = async()=>{
const result = await axios.get(`${view_user_cart_api}${user_id}`)
//console.log(result.data);
setCart_product(result.data);
}

const loadcarttotoal = async()=>{
    const resdult = await axios.get(`${subtotal_api}${user_id}`)
  
    setCart_total(resdult.data.subtotal);
    }


    const orderplace = async(txt)=>{
      const datas = {
        user_id:txt
      }
const order_place = await axios.postForm(`${order_place_api}`,datas)
if(order_place.data.status===true && order_place.data.order_status==="1" )
{
  loadcartproduct();
  loadcarttotoal();
  toast.success(order_place.data.response); 
setTimeout(() => {
  navigate('/my_order');
}, 5000);

  
}
else{
  toast.warning(order_place.data.response); 

}
    }
    

useEffect(()=>{
    loadcartproduct();
},[])

useEffect(()=>{
  loadcarttotoal();
},[])


const update_cart = async (product_qtty ,caart_id)=>{
const data = {

    qty:product_qtty,
    cart_id:caart_id
};

const reslt = await axios.postForm(`${update_cart_qty}` , data)
if(reslt.data.status===true)
{
    loadcartproduct();
    loadcarttotoal();
}
}

const delete_cart = async(txt)=>{
  const result = await axios.get(`${delete_cart_api}${txt}`);

  if(result.data.status===true)
  {
    loadcartproduct();
    loadcarttotoal();
    toast.success(result.data.response); 
  }
}


const choose_method = ()=>{


}

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
                  <th className="plantmore-product-thumbnail">Images</th>
                  <th className="cart-product-name">Product</th>
                  <th className="plantmore-product-price">Unit Price</th>
                  <th className="plantmore-product-quantity">Quantity</th>
                  <th className="plantmore-product-subtotal">Total</th>
                  <th className="plantmore-product-remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                {
                    cart_product.map((index , key)=>(
<tr key={key+1}>
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
                    <input defaultValue={index.quantity} min="1" onChange={(e)=>{update_cart(e.target.value , index.cart_id)}} type="number" />
                  </td>
                  <td className="product-subtotal">
                    <span className="amount">₹ {index.price*index.quantity}</span>
                  </td>
                  <td className="plantmore-product-remove">
                    <button type="button" onClick={(e)=>{delete_cart(index.cart_id)}} className='btn btn-danger'>
                    Delete 
                    </button>
                  </td>
                </tr>

                    ))
                }
                
             
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="coupon-all">
                <div className="coupon2">
                  
                  <Link to="/shop" className="btn continue-btn">
                    Continue Shopping
                  </Link>
                </div>
                {/* <div className="coupon">
                  <h3>Coupon</h3>
                  <p>Enter your coupon code if you have one.</p>
                  <input
                    id="coupon_code"
                    className="input-text"
                    name="coupon_code"
                    defaultValue=""
                    placeholder="Coupon code"
                    type="text"
                  />
                  <input
                    className="button"
                    name="apply_coupon"
                    defaultValue="Apply coupon"
                    type="submit"
                  />
                </div> */}
              </div>
            </div>
            <div className="col-md-4 ml-auto">
              <div className="cart-page-total">
                <h2>Cart totals</h2>
                <ul>
                  <li>
                    Subtotal <span>₹ {cart_totasl}</span>
                  </li>
                  <li>
                    Total <span>₹ {cart_totasl}</span>
                  </li>
                </ul>



                <select class="form-control mt-5" onChange={(e)=>{(setmthd(e.target.value))}}>

<option value="">Choose payment Method</option>
<option value="online">Pay online</option>
<option value="cod">Cash on delivery</option>

                </select>

                {mehd ==='cod' ?(<button id="codd" type="button" onClick={()=>{orderplace(user_id)}} className="proceed-checkout-btn">
                 Order Now
                </button>): mehd ==="online" ?(<div id="onln"> <Raz amount={cart_totasl}/></div>):('')}
                

               
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Cartproduct