import React from 'react'

function ShopBanner(props) {
  return (
    <>
    <div className="breadcrumb-area section-ptb">
  <div className="container">
    <div className="row">
      <div className="col">
        <h2 className="breadcrumb-title">{props.bannername}</h2>
        {/* breadcrumb-list start */}
        <ul className="breadcrumb-list">
          <li className="breadcrumb-item">
            <a href="index-2.html">Home</a>
          </li>
          <li className="breadcrumb-item active">Shop</li>
        </ul>
        {/* breadcrumb-list end */}
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default ShopBanner