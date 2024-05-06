import React from 'react'

function Blogdata() {
  return (
<>

<div className="main-content-wrap blog-page section-ptb">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 order-lg-1 order-2">
        {/* shop-sidebar-wrap start */}
        <div className="shop-sidebar-wrap">
          {/* shop-sidebar start */}
          <div className="shop-sidebar mb--30">
            <h4 className="title">Search</h4>
            <div className="search-post">
              <form action="#">
                <input type="text" placeholder="Enter Keywords..." />
                <button className=" btn-search" type="submit">
                  <i className="ion-ios-search-strong" />
                </button>
              </form>
            </div>
          </div>
          {/* shop-sidebar end */}
          {/* shop-sidebar start */}
          <div className="shop-sidebar mb--30">
            <h4 className="title">CATEGORIES</h4>
            <ul>
              <li>
                <a href="shop.html">
                  Accessories <span>(18)</span>
                </a>
              </li>
              <li>
                <a href="shop.html">
                  Kids <span>(16)</span>
                </a>
              </li>
              <li>
                <a href="shop.html">
                  Men <span>(6)</span>
                </a>
              </li>
              <li>
                <a href="shop.html">
                  Women <span>(11)</span>
                </a>
              </li>
            </ul>
          </div>
          {/* shop-sidebar end */}
          {/* shop-sidebar start */}
          <div className="sidbar-product mb--30">
            {/* sidbar-product-inner start */}
            <div className="sidbar-product-inner">
              <div className="product-image">
                <a href="product-details.html">
                  <img src="assets/images/product/10.jpg" alt="" />
                </a>
              </div>
              <div className="product-content text-start">
                <h3>
                  <a href="product-details.html">Products Name 003</a>
                </h3>
                <div className="price-box">
                  <span className="new-price">120.00</span>
                  <span className="old-price">130.00</span>
                </div>
              </div>
            </div>
            {/* sidbar-product-inner end */}
            {/* sidbar-product-inner start */}
            <div className="sidbar-product-inner">
              <div className="product-image">
                <a href="product-details.html">
                  <img src="assets/images/product/11.jpg" alt="" />
                </a>
              </div>
              <div className="product-content text-start">
                <h3>
                  <a href="product-details.html">Products Name 011</a>
                </h3>
                <div className="price-box">
                  <span className="new-price">140.00</span>
                  <span className="old-price">103.00</span>
                </div>
              </div>
            </div>
            {/* sidbar-product-inner end */}
            {/* sidbar-product-inner start */}
            <div className="sidbar-product-inner">
              <div className="product-image">
                <a href="product-details.html">
                  <img src="assets/images/product/5.jpg" alt="" />
                </a>
              </div>
              <div className="product-content text-start">
                <h3>
                  <a href="product-details.html">Products Name 008</a>
                </h3>
                <div className="price-box">
                  <span className="new-price">160.00</span>
                  <span className="old-price">121.00</span>
                </div>
              </div>
            </div>
            {/* sidbar-product-inner end */}
          </div>
          {/* shop-sidebar end */}
          {/* shop-sidebar start */}
          <div className="shop-sidebar mb--30">
            <h4 className="title">SIZE</h4>
            <ul>
              <li>
                <a href="shop.html">
                  S <span>(11)</span>
                </a>
              </li>
              <li>
                <a href="shop.html">
                  M <span>(13)</span>
                </a>
              </li>
              <li>
                <a href="shop.html">
                  L <span>(6)</span>
                </a>
              </li>
              <li>
                <a href="shop.html">
                  XLL <span>(51)</span>
                </a>
              </li>
              <li>
                <a href="shop.html">
                  XXL <span>(3)</span>
                </a>
              </li>
            </ul>
          </div>
          {/* shop-sidebar end */}
          {/* shop-sidebar start */}
          <div className="shop-sidebar">
            <h4 className="title">Hot Tags</h4>
            <div className="sidebar-tag">
              <a href="#">Women</a>
              <a href="#">Bags</a>
              <a href="#">Man</a>
              <a href="#">Hot</a>
              <a href="#">fashion</a>
              <a href="#">digital</a>
            </div>
          </div>
          {/* shop-sidebar end */}
        </div>
        {/* shop-sidebar-wrap end */}
      </div>
      <div className="col-lg-9 order-lg-2 order-1">
        {/* blog-wrapper start */}
        <div className="blog-wrapper">
          {/* blog-wrap start */}
          <div className="blog-wrap">
            {/* single-blog-area start */}
            <div className="single-blog-area">
              <div className="blog-image">
                <a href="blog-details.html">
                  <img src="assets/images/blog/2.jpg" alt="" />
                </a>
              </div>
              <div className="blog-contend">
                <h3>
                  <a href="#">Blog image post</a>
                </h3>
                <div className="blog-date-categori">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="ion-ios-person" /> Admin{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-ios-pricetags" /> Comments{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adip elit, sed do
                  eiusmod tempor incididunt labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercit ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.{" "}
                </p>
                <div className="mt-30 blog-more-area">
                  <a href="blog-details.html" className="blog-btn btn">
                    Read more
                  </a>
                  <ul className="social-icons">
                    <li>
                      <a href="#">
                        <i className="ion-social-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-social-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-social-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-social-googleplus" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* single-blog-area end */}
            {/* single-blog-area start */}
            <div className="single-blog-area">
              <div className="blog-image-slider slick-initialized slick-slider">
                <button
                  type="button"
                  className="slick-prev slick-arrow"
                  style={{}}
                >
                  {" "}
                  <i className="icon-arrow-left" />{" "}
                </button>
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 6132,
                      transform: "translate3d(-876px, 0px, 0px)"
                    }}
                  >
                    <a
                      href="blog-details.html"
                      className="slick-slide slick-cloned"
                      data-slick-index={-1}
                      id=""
                      aria-hidden="true"
                      style={{ width: 876 }}
                      tabIndex={-1}
                    >
                      <img src="assets/images/blog/4.jpg" alt="" />
                    </a>
                    <a
                      href="blog-details.html"
                      className="slick-slide slick-current slick-active"
                      data-slick-index={0}
                      aria-hidden="false"
                      style={{ width: 876 }}
                      tabIndex={0}
                    >
                      <img src="assets/images/blog/3.jpg" alt="" />
                    </a>
                    <a
                      href="blog-details.html"
                      className="slick-slide"
                      data-slick-index={1}
                      aria-hidden="true"
                      style={{ width: 876 }}
                      tabIndex={-1}
                    >
                      <img src="assets/images/blog/1.jpg" alt="" />
                    </a>
                    <a
                      href="blog-details.html"
                      className="slick-slide"
                      data-slick-index={2}
                      aria-hidden="true"
                      style={{ width: 876 }}
                      tabIndex={-1}
                    >
                      <img src="assets/images/blog/4.jpg" alt="" />
                    </a>
                    <a
                      href="blog-details.html"
                      className="slick-slide slick-cloned"
                      data-slick-index={3}
                      id=""
                      aria-hidden="true"
                      style={{ width: 876 }}
                      tabIndex={-1}
                    >
                      <img src="assets/images/blog/3.jpg" alt="" />
                    </a>
                    <a
                      href="blog-details.html"
                      className="slick-slide slick-cloned"
                      data-slick-index={4}
                      id=""
                      aria-hidden="true"
                      style={{ width: 876 }}
                      tabIndex={-1}
                    >
                      <img src="assets/images/blog/1.jpg" alt="" />
                    </a>
                    <a
                      href="blog-details.html"
                      className="slick-slide slick-cloned"
                      data-slick-index={5}
                      id=""
                      aria-hidden="true"
                      style={{ width: 876 }}
                      tabIndex={-1}
                    >
                      <img src="assets/images/blog/4.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  className="slick-next slick-arrow"
                  style={{}}
                >
                  <i className="icon-arrow-right" />
                </button>
              </div>
              <div className="blog-contend">
                <h3>
                  <a href="#">Post with Gallery </a>
                </h3>
                <div className="blog-date-categori">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="ion-ios-person" /> Admin{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-ios-pricetags" /> Comments{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adip elit, sed do
                  eiusmod tempor incididunt labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercit ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.{" "}
                </p>
                <div className="mt-30 blog-more-area">
                  <a href="blog-details.html" className="blog-btn btn">
                    Read more
                  </a>
                  <ul className="social-icons">
                    <li>
                      <a href="#">
                        <i className="ion-social-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-social-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-social-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-social-googleplus" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* single-blog-area end */}
            {/* single-blog-area start */}
            <div className="single-blog-area">
              <div className="blog-image">
                <div className="blog-audio embed-responsive embed-responsive-16by9">
                  <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/244702956&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true" />
                </div>
              </div>
              <div className="blog-contend">
                <h3>
                  <a href="#">Post With Audio</a>
                </h3>
                <div className="blog-date-categori">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="ion-ios-person" /> Admin{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-ios-pricetags" /> Comments{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adip elit, sed do
                  eiusmod tempor incididunt labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercit ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.{" "}
                </p>
                <div className="mt-30 blog-more-area">
                  <a href="blog-details.html" className="blog-btn btn">
                    Read more
                  </a>
                  <ul className="social-icons">
                    <li>
                      <a href="#">
                        <i className="ion-social-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-social-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-social-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-social-googleplus" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* single-blog-area end */}
            {/* single-blog-area start */}
            <div className="single-blog-area">
              <div className="blog-image">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    width={600}
                    height={400}
                    frameBorder={0}
                    allowFullScreen="true"
                    src="https://www.youtube.com/embed/5T-_dYz8Uvw"
                  />
                </div>
              </div>
              <div className="blog-contend">
                <h3>
                  <a href="#">Post with Video</a>
                </h3>
                <div className="blog-date-categori">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="ion-ios-person" /> Admin{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-ios-pricetags" /> Comments{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adip elit, sed do
                  eiusmod tempor incididunt labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercit ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.{" "}
                </p>
                <div className="mt-30 blog-more-area">
                  <a href="blog-details.html" className="blog-btn btn">
                    Read more
                  </a>
                  <ul className="social-icons">
                    <li>
                      <a href="#">
                        <i className="ion-social-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-social-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-social-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-social-googleplus" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* single-blog-area end */}
          </div>
          {/* blog-wrap end */}
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
        {/* blog-wrapper end */}
      </div>
    </div>
  </div>
</div>

</>
  )
}

export default Blogdata