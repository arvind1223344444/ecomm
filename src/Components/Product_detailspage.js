import React from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import {product_image_path , product_details_fetch_api , product_cart_add} from '../Api_path';
import { useState } from 'react';
import { useEffect } from 'react';
function Product_detailspage() {
const param = useParams();

const [prdt_dtl , set_prdt_tls] = useState({});

var usrr_iid= localStorage.getItem("userid");
const reslt = async ()=>{
  const redsd = await axios.get(`${product_details_fetch_api}${param.id}`)
  set_prdt_tls(redsd.data);

 // console.log(redsd.data);
}

const addcart = async(txt)=>{

  if(usrr_iid !==null)
  {
  const data = {
    product_id:txt,
    user_id:usrr_iid

  }
 const cart = await axios.postForm(product_cart_add,data)
if(cart.data.status===true && cart.data.add_status==="1")
{
 toast.success(cart.data.response); 
}
else if(cart.data.status===true && cart.data.add_status==="0")
{
  toast.warning(cart.data.response); 
}


  }
  else
  {
    toast.error('Please Login');
  }

}

useEffect(()=>{
  reslt();
},[]);


return ( 
<>
<div className="main-content-wrap section-ptb product-details-page">
  <div className="container">
    <div className="row">
      <div className="col-xl-6 col-lg-7 col-md-6">
        <div className="product-details-images slick-initialized slick-slider">
          <div className="slick-list draggable">
            <div
              className="slick-track"
              style={{
                opacity: 1,
                width: 576,
                transform: "translate3d(0px, 0px, 0px)"
              }}
            >
              <div
                className="product_details_container slick-slide slick-current slick-active"
                data-slick-index={0}
                aria-hidden="false"
                style={{ width: 576 }}
                tabIndex={0}
              >
                {/* product_big_images start */}
                <div className="portfolio-full-image product_big_images-right product-details-images-2 slick-initialized slick-slider">
                  <div className="slick-list draggable">
                    <div
                      className="slick-track"
                      style={{
                        opacity: 1,
                        width: 4906,
                        transform: "translate3d(-892px, 0px, 0px)"
                      }}
                    >
                   
                      
                     
                      
                     
                     
                   
                    
                      <div
                        className="product-image-position slick-slide slick-cloned"
                        data-slick-index={7}
                        id=""
                        aria-hidden="true"
                        style={{ width: 446 }}
                        tabIndex={-1}
                      >
                        <img
                          src="/assets/images/product-details/big-img/h3.jpg"
                          alt="#"
                        />
                      </div>
                      <div
                        className="product-image-position slick-slide slick-cloned"
                        data-slick-index={8}
                        id=""
                        aria-hidden="true"
                        style={{ width: 446 }}
                        tabIndex={-1}
                      >
                        <img
                          src="/assets/images/product-details/big-img/h4.jpg"
                          alt="#"
                        />
                      </div>
                      <div
                        className="product-image-position slick-slide slick-cloned"
                        data-slick-index={9}
                        id=""
                        aria-hidden="true"
                        style={{ width: 446 }}
                        tabIndex={-1}
                      >
                        <img
                          src={product_image_path+prdt_dtl.image}
                          alt="#"
                        />
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-5 col-md-6">
        {/* product_details_info start */}
        <div className="product_details_info">
          <h2>{prdt_dtl.product_name}</h2>
          {/* pro_rating start */}
          <div className="pro_rating d-flex">
            <ul className="product-rating d-flex">
              <li>
                <span className="icon-star" />
              </li>
              <li>
                <span className="icon-star" />
              </li>
              <li>
                <span className="icon-star" />
              </li>
              <li>
                <span className="icon-star" />
              </li>
              <li>
                <span className="icon-star" />
              </li>
            </ul>
            <span className="rat_qun"> (Based on 0 Ratings) </span>
          </div>
          {/* pro_rating end */}
          {/* pro_details start */}
          <div className="pro_details">
            <p>
            {prdt_dtl.description}
            </p>
          </div>
          {/* pro_details end */}
          {/* pro_dtl_prize start */}
          <ul className="pro_dtl_prize">
            <li> ₹ {prdt_dtl.price}</li>
            
          </ul>
         
          <div className="product-quantity-action">
            <div className="prodict-statas">
              <span>Quantity :</span>
            </div>
            <div className="product-quantity">
              <form action="#">
                <div className="product-quantity">
                  <div className="cart-plus-minus">
                    <input defaultValue={1} type="number" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* product-quantity-action end */}
          {/* pro_dtl_btn start */}

          <ToastContainer/>
          <ul className="pro_dtl_btn">
            <li>
              <a href="#" className="buy_now_btn">
                buy now
              </a>
            </li>
            <li>
              <a href="#" onClick={()=>{addcart(prdt_dtl.product_id)}}>
                <i className="icon-handbag" />
              </a>
            </li>
          </ul>
          {/* pro_dtl_btn end */}
          {/* pro_social_share start */}
          <div className="pro_social_share d-flex">
            <h2 className="title_2">Share :</h2>
            <ul className="pro_social_link">
              <li>
                <a href="#">
                  <i className="ion-social-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-social-tumblr" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-social-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-social-instagram-outline" />
                </a>
              </li>
            </ul>
          </div>
          {/* pro_social_share end */}
        </div>
        {/* product_details_info end */}
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="product-details-tab mt--60">
          <ul role="tablist" className="mb--50 nav">
            <li className="active" role="presentation">
              <a
                data-bs-toggle="tab"
                role="tab"
                href="#description"
                className="active"
                aria-selected="true"
              >
                Description
              </a>
            </li>
           
           
          </ul>
        </div>
      </div>
      <div className="col-12">
        <div className="product_details_tab_content tab-content">
          {/* Start Single Content */}
          <div
            className="product_tab_content tab-pane active show"
            id="description"
            role="tabpanel"
          >
            <div className="product_description_wrap">
              <div className="product_desc mb--30">
                <h2 className="title_3">Details</h2>
                <p>
      {prdt_dtl.description}
                </p>
              </div>
             
            </div>
          </div>
       
          <div
            className="product_tab_content tab-pane"
            id="reviews"
            role="tabpanel"
          >
            <div className="review_address_inner">
              {/* Start Single Review */}
              <div className="pro_review">
                <div className="review_thumb">
                  <img alt="review images" src="/assets/images/review/1.jpg" />
                </div>
                <div className="review_details">
                  <div className="review_info">
                    <h4>
                      <a href="#">Gerald Barnes</a>
                    </h4>
                    <ul className="product-rating d-flex">
                      <li>
                        <span className="icon-star" />
                      </li>
                      <li>
                        <span className="icon-star" />
                      </li>
                      <li>
                        <span className="icon-star" />
                      </li>
                      <li>
                        <span className="icon-star" />
                      </li>
                      <li>
                        <span className="icon-star" />
                      </li>
                    </ul>
                    <div className="rating_send">
                      <a href="#">
                        <i className="ion-reply" />
                      </a>
                    </div>
                  </div>
                  <div className="review_date">
                    <span>27 Jun, 2018 at 3:30pm</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer accumsan egestas elese ifend. Phasellus a felis at
                    estei to bibendum feugiat ut eget eni Praesent et messages
                    in con sectetur posuere dolor non.
                  </p>
                </div>
              </div>
              {/* End Single Review */}
              {/* Start Single Review */}
              <div className="pro_review ans">
                <div className="review_thumb">
                  <img alt="review images" src="/assets/images/review/2.jpg" />
                </div>
                <div className="review_details">
                  <div className="review_info">
                    <h4>
                      <a href="#">Gerald Barnes</a>
                    </h4>
                    <ul className="product-rating d-flex">
                      <li>
                        <span className="icon-star" />
                      </li>
                      <li>
                        <span className="icon-star" />
                      </li>
                      <li>
                        <span className="icon-star" />
                      </li>
                      <li>
                        <span className="icon-star" />
                      </li>
                      <li>
                        <span className="icon-star" />
                      </li>
                    </ul>
                    <div className="rating_send">
                      <a href="#">
                        <i className="ion-reply" />
                      </a>
                    </div>
                  </div>
                  <div className="review_date">
                    <span>27 Jun, 2018 at 4:32pm</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer accumsan egestas elese ifend. Phasellus a felis at
                    estei to bibendum feugiat ut eget eni Praesent et messages
                    in con sectetur posuere dolor non.
                  </p>
                </div>
              </div>
              {/* End Single Review */}
            </div>
            {/* Start RAting Area */}
            <div className="rating_wrap">
              <h2 className="rating-title">Write A review</h2>
              <h4 className="rating-title-2">Your Rating</h4>
              <div className="rating_list">
                <ul className="product-rating d-flex">
                  <li>
                    <span className="icon-star" />
                  </li>
                  <li>
                    <span className="icon-star" />
                  </li>
                  <li>
                    <span className="icon-star" />
                  </li>
                  <li>
                    <span className="icon-star" />
                  </li>
                  <li>
                    <span className="icon-star" />
                  </li>
                </ul>
              </div>
            </div>
            {/* End RAting Area */}
            <div className="comments-area comments-reply-area">
              <div className="row">
                <div className="col-lg-12">
                  <form action="#" className="comment-form-area">
                    <div className="comment-input">
                      <p className="comment-form-author">
                        <label>
                          Name <span className="required">*</span>
                        </label>
                        <input type="text" required="required" name="Name" />
                      </p>
                      <p className="comment-form-email">
                        <label>
                          Email <span className="required">*</span>
                        </label>
                        <input type="text" required="required" name="email" />
                      </p>
                    </div>
                    <p className="comment-form-comment">
                      <label>Comment</label>
                      <textarea
                        className="comment-notes"
                        required="required"
                        defaultValue={""}
                      />
                    </p>
                    <div className="comment-form-submit">
                      <input
                        type="submit"
                        defaultValue="Post Comment"
                        className="comment-submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Content */}
        </div>
      </div>
    </div>
  </div>
</div>

</>
  )
}

export default Product_detailspage