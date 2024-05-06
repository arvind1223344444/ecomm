import React from 'react'

function Slider() {
  return (
    <>
    <div className="hero-slider hero-slider-one">
 
      <div
        className="single-slide"
        style={{ backgroundImage: "url(assets/images/slider/slide-bg-1.jpg)" }}
      >
        
        <div className="hero-content-one container">
          <div className="row">
            <div className="col-lg-6 col-md-8">
              <div className="slider-text-info">
                <h3 className="">Top Selling!</h3>
                <h1>New Collection</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="shop.html" className="btn slider-btn uppercase">
                  <span>SHOP NOW</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 slider_iimmg" >
              <div className="">
                <img src="assets/images/slider/slier-inner-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      
      </div>
   
    </div>
    </>
  )
}

export default Slider