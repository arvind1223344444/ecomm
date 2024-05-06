import React from 'react'
import { Link } from 'react-router-dom'
function Twobanner() {
  return (
<>
<div className="banner-area section-pb">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            {/* single-banner start */}
            <div className="single-banner">
              <div className="banner-bg">
                <Link to="/shop">
                  <img src="assets/images/banner/1.jpg" alt="" />
                </Link>
              </div>
              <div className="banner-contet">
                <p>30% Off</p>
                <h3>Chair Collection </h3>
                <a href="#" className="btn-3">
                  SHOP NOW
                </a>
              </div>
            </div>
            {/* single-banner end */}
          </div>
          <div className="col-lg-6  col-md-6">
            {/* single-banner start */}
            <div className="single-banner s-mt-30">
              <div className="banner-bg">
              <Link to="/shop">
                  <img src="assets/images/banner/2.jpg" alt="" />
               </Link>
              </div>
              <div className="banner-contet">
                <p>30% Off</p>
                <h3>Chair Collection </h3>
                <a href="#" className="btn-3">
                  SHOP NOW
                </a>
              </div>
            </div>
            {/* single-banner end */}
          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default Twobanner