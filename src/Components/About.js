import React from 'react'

function About() {
  return (
  <>
  <div className="about-area section-pt">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-image">
              <a href="#">
                <img src="assets/images/about/about-1.jpg" alt="" />
              </a>
              <span className="text_left">Welcome To Furniture</span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-contents">
              <h3>Dining Table Set</h3>
              <div className="price-box">
                <span className="old-price">$330.00</span>-
                <span className="new-price"> $230.00</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eius tem incidid ut labore et dolore mag aliqua. Ut enim ad
                minim veniam, quis nostrud exercitati ullamco laboris nisi ut
                aliquip ex ea commodo consequ. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepte sint occaecat cupidatat non proident,
                sunt in culpa qui.
              </p>
              <button className="btn shop-btn-two">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default About