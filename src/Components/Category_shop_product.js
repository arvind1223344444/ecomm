import React from 'react'

import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { product_category_api} from '../Api_path';

import { Link } from 'react-router-dom';
import Product_wrap from './Product_wrap';
import Category_product_wrap from './Category_product_wrap';
function Category_shop_product() {
  const [category , setcategory] = useState([]);




const product_ctgy = async ()=>{
const rest_ctg = await axios.get(product_category_api)

setcategory(rest_ctg.data);

}

  
  
  useEffect(()=>{
    
    product_ctgy();
  },[]);



  

  
  return (
   <>

   <div className="main-content-wrap shop-page section-ptb">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 order-lg-1 order-2">
        {/* shop-sidebar-wrap start */}
        <div className="shop-sidebar-wrap">
          {/* shop-sidebar start */}
          <div className="shop-sidebar mb--30">
            <h4 className="title">CATEGORIES</h4>
            <ul>

              {
                category.map((index , key)=>(
<li key={key+1}>
                <Link to={`/category_product/${index.id}`}>
                  {index.category_name} 
                </Link>
              </li>
                ))
              }
              
         
            </ul>
          </div>
          {/* shop-sidebar end */}
          {/* shop-sidebar start */}
          <div className="shop-sidebar mb--30">
            <h4 className="title">FILTER BY PRICE</h4>
            {/* filter-price-content start */}
            <div className="filter-price-content">
              <form action="#" method="post">
                <div
                  id="price-slider"
                  className="price-slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                >
                  <div
                    className="ui-slider-range ui-widget-header ui-corner-all"
                    style={{ left: "16.6667%", width: "79.1667%" }}
                  />
                  <span
                    className="ui-slider-handle ui-state-default ui-corner-all"
                    tabIndex={0}
                    style={{ left: "16.6667%" }}
                  />
                  <span
                    className="ui-slider-handle ui-state-default ui-corner-all"
                    tabIndex={0}
                    style={{ left: "95.8333%" }}
                  />
                </div>
                <div className="filter-price-wapper">
                  <div className="filter-price-cont">
                    <span>Price:</span>
                    <div className="input-type">
                      <input type="text" id="min-price" readOnly="" />
                    </div>
                    <span>—</span>
                    <div className="input-type">
                      <input type="text" id="max-price" readOnly="" />
                    </div>
                    <a className="add-to-cart-button" href="#">
                      <span>FILTER</span>
                    </a>
                  </div>
                </div>
              </form>
            </div>
            {/* filter-price-content end */}
          </div>
       
        </div>
      
      </div>
      <div className="col-lg-9 order-lg-2 order-1">
        {/* shop-product-wrapper start */}
        <div className="shop-product-wrapper">
          <div className="row">
            <div className="col">
              {/* shop-top-bar start */}
              <div className="shop-top-bar">
                {/* product-view-mode start */}
                <div className="product-view-mode">
                  {/* shop-item-filter-list start */}
                  <ul role="tablist" className="nav shop-item-filter-list">
                    <li role="presentation" className="active">
                      <a
                        href="#grid"
                        aria-controls="grid"
                        role="tab"
                        data-bs-toggle="tab"
                        className="active show"
                        aria-selected="true"
                      >
                        <i className="ion-ios-keypad-outline" />
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        href="#list"
                        aria-controls="list"
                        role="tab"
                        data-bs-toggle="tab"
                        aria-selected="false"
                        tabIndex={-1}
                      >
                        <i className="ion-ios-list-outline" />{" "}
                      </a>
                    </li>
                  </ul>
                  {/* shop-item-filter-list end */}
                </div>
                {/* product-view-mode end */}
                {/* product-short start */}
                <div className="product-short">
                  <p>Sort By:</p>
                  <select className="nice-select" name="sortby">
                    <option value="trending">Relevance</option>
                    <option value="sales">Name (A - Z)</option>
                    <option value="sales">Name (Z - A)</option>
                    <option value="rating">Price (Low &gt; High)</option>
                    <option value="date">Rating (Lowest)</option>
                    <option value="price-asc">Model (A - Z)</option>
                    <option value="price-asc">Model (Z - A)</option>
                  </select>
                </div>
                {/* product-short end */}
              </div>
              {/* shop-top-bar end */}
            </div>
          </div>
          {/* shop-products-wrap start */}
          <div className="shop-products-wrap">
            <div className="tab-content">
              <div
                id="grid"
                className="tab-pane fade active show"
                role="tabpanel"
              >
               <Category_product_wrap/>
              </div>
          
            </div>
          </div>
          {/* shop-products-wrap end */}
          {/* paginatoin-area start */}
          <div className="paginatoin-area">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <p>Showing 10-13 of 13 item(s) </p>
              </div>
              <div className="col-lg-6 col-md-6">
                <ul className="pagination-box">
                  <li>
                    <a className="Previous" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a className="Next" href="#">
                      {" "}
                      Next{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* paginatoin-area end */}
        </div>
        {/* shop-product-wrapper end */}
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default Category_shop_product