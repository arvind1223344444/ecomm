import React from 'react'

function Footer() {
  return (
   <>
      <footer className="footer-area">
      <div className="footer-top pt--40 pb--100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="footer-info mt--60">
                <div className="footer-title">
                  <h3>My Account</h3>
                </div>
                <ul className="footer-info-list">
                  <li>
                    <i className="ion-ios-location-outline" /> 184 Main Rd E, St
                    Albans VIC 3021, Australia
                  </li>
                  <li>
                    <i className="ion-ios-email-outline" /> Mill Us :{" "}
                    <a href="#">yourmail@gmail.com</a>
                  </li>
                  <li>
                    <i className="ion-ios-telephone-outline" /> Phone: + 00 254
                    254565 54
                  </li>
                </ul>
                <div className="payment-cart">
                  <img src="assets/images/icon/1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="footer-info mt--60">
                <div className="footer-title">
                  <h3>Categories</h3>
                </div>
                <ul className="footer-list">
                  <li>
                    <a href="#">Ecommerce</a>
                  </li>
                  <li>
                    <a href="#">Shopify</a>
                  </li>
                  <li>
                    <a href="#">Prestashop</a>
                  </li>
                  <li>
                    <a href="#">Opencart</a>
                  </li>
                  <li>
                    <a href="#">Magento</a>
                  </li>
                  <li>
                    <a href="#">Jigoshop</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-4">
              <div className="footer-info mt--60">
                <div className="footer-title">
                  <h3>Information</h3>
                </div>
                <ul className="footer-list">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Returns &amp; Exchanges</a>
                  </li>
                  <li>
                    <a href="#">Shipping &amp; Delivery</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-4">
              <div className="footer-info mt--60">
                <div className="footer-title">
                  <h3>Quick Links</h3>
                </div>
                <ul className="footer-list">
                  <li>
                    <a href="#">Store Location</a>
                  </li>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Orders Tracking</a>
                  </li>
                  <li>
                    <a href="#">Size Guide</a>
                  </li>
                  <li>
                    <a href="#">Shopping Rates</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6  col-md-6">
              <div className="copyright">
                <p>Copyright ©All Right Reserved.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="footer-social">
                <ul>
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
            </div>
          </div>
        </div>
      </div>
    </footer>
   </>
  )
}

export default Footer