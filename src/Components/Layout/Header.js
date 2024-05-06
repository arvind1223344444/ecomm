import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate= useNavigate();
  const session =  localStorage.getItem('userid');
  const usr_neme =  localStorage.getItem('username');


const [user_id , setuserid] = useState('');

const [user_mene , setuserneme] = useState('');
  
useEffect(()=>{
  setuserid(session);
  setuserneme(usr_neme);
},[]);


const logout =()=>{

localStorage.removeItem('userid');
localStorage.removeItem('username');
setuserid(null);
  setuserneme(null);
window.location.href="";
}

  return (
   <>
    <div className="header-area">
     
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <p>Default welcome msg! </p>
            </div>
            <div className="col-lg-6 col-md-6">
         
              <div className="language-currency-wrapper">
                <ul>
                  <li className="drodown-show">
                    <a href="#">
                      $ Dollar (US) <i className="ion-ios-arrow-down" />
                    </a>
                    <ul className="open-dropdown">
                      <li>
                        <a href="#">Euro €</a>
                      </li>
                      <li className="active">
                        <a href="#">USD $</a>
                      </li>
                    </ul>
                  </li>
                  <li className="drodown-show">
                    <a href="#">
                      <img src="/assets/images/icon/la-1.jpg" alt="" /> English
                      <i className="ion-ios-arrow-down" />
                    </a>
                    <ul className="open-dropdown">
                      <li className="active">
                        <a href="#">
                          <img src="/assets/images/icon/la-1.jpg" alt="" />
                          English{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/assets/images/icon/la-2.jpg" alt="" />
                          Français
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* language-currency-wrapper end */}
            </div>
          </div>
        </div>
      </div>
      {/* header-top end */}
      <div className="header-bottom-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-5 col-5">
              <div className="logo">
                <Link to="/">
                  <img src="/assets/images/logo/logo.jpg" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-8 d-none d-lg-block">
              <div className="main-menu-area text-center">
                <nav className="main-navigation">
                  <ul>
                    <li className="active">
                      <Link to="/">Home</Link>
                     
                    </li>
                    <li>
                      <Link to="/shop">Shop</Link>
                    
                    </li>
                
                    <li>
                      <Link to='/blog'>Blog</Link>
                     
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    
                    <li>
                      <Link to="/contact">Contact us</Link>
                    </li>
                    {user_id ?(
                    <li>
                      <Link to="/my_order"><b>My Order</b></Link>
                    </li>
                    ):(
                      <></>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-2 col-md-7 col-7">
              <div className="right-blok-box d-flex">
              {user_id ?(
                <div className="search-wrap">
                  <a href="#" className="trigger-search" style={{'fontSize': '18px',
    'fontWeight': 'bold'}}

>
                 {user_mene}
                  </a>
                </div>

              )
            :(
             <></>
            )
            }
                <div className="user-wrap">
                 
                 
                {user_id ?(
<>
<button type='button' onClick={logout} className='btn btn-warning'>Logout</button>

</>
                 ):(
                  <Link to="/register">
                  <i className="icon-user" />
                </Link>
                 )}
                 
                </div>
                <div className="shopping-cart-wrap">
                  <Link to="/viewcart">
                    <i className="icon-handbag" />

                    <span id="cart-total">2</span>
                  </Link>
                  {/* <ul className="mini-cart">
                    <li className="cart-item">
                      <div className="cart-image">
                        <a href="single-product.html">
                          <img alt="" src="/assets/images/product/1.jpg" />
                        </a>
                      </div>
                      <div className="cart-title">
                        <a href="single-product.html">
                          <h4>Product Name 01</h4>
                        </a>
                        <span className="quantity">1 ×</span>
                        <div className="price-box">
                          <span className="new-price">$130.00</span>
                        </div>
                        <a className="remove_from_cart" href="#">
                          <i className="icon-trash icons" />
                        </a>
                      </div>
                    </li>
                    <li className="cart-item">
                      <div className="cart-image">
                        <a href="single-product.html">
                          <img alt="" src="/assets/images/product/3.jpg" />
                        </a>
                      </div>
                      <div className="cart-title">
                        <a href="single-product.html">
                          <h4>Product Name 03</h4>
                        </a>
                        <span className="quantity">1 ×</span>
                        <div className="price-box">
                          <span className="new-price">$130.00</span>
                        </div>
                        <a className="remove_from_cart" href="#">
                          <i className="icon-trash icons" />
                        </a>
                      </div>
                    </li>
                    <li className="subtotal-titles">
                      <div className="subtotal-titles">
                        <h3>Sub-Total :</h3>
                        <span>$ 230.99</span>
                      </div>
                    </li>
                    <li className="mini-cart-btns">
                      <div className="cart-btns">
                        <a href="cart.html">View cart</a>
                        <a href="checkout.html">Checkout</a>
                      </div>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="mobile-menu d-block d-lg-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div className="main-search-active">
      <div className="sidebar-search-icon">
        <button className="search-close">
          <span className="icon-close" />
        </button>
      </div>
      <div className="sidebar-search-input">
        <form>
          <div className="form-search">
            <input
              id="search"
              className="input-text"
              defaultValue=""
              placeholder="Search entire store here ..."
              type="search"
            />
            <button className="search-btn" type="button">
              <i className="icon-magnifier" />
            </button>
          </div>
        </form>
      </div>
    </div>
   </>
  )
}

export default Header