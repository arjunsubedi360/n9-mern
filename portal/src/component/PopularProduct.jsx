import React from 'react'
import MyImage1 from "../Images/airdunk.png"
import MyImage2 from "../Images/adidas x spider.jpg"
import MyImage3 from "../Images/timberland.jpg"

function PopularProduct() {
  return (
  <>
  <section className="packages">
  <h1>Popular Products</h1>
  <div className="row">
    <div className="packages-col">
      <img src={MyImage1} alt='shoes' />
      <div className="layer">
        <h3>
          Nike Air Dunk
          <br />
          RS 4250
        </h3>
      </div>
    </div>
    <div className="packages-col">
      <img src={MyImage2} alt='shoes' />
      <div className="layer">
        <h3>
          Adidas X Spider
          <br />
          RS 8300
        </h3>
      </div>
    </div>
    <div className="packages-col">
      <img src={MyImage3} alt='shoes' />
      <div className="layer">
        <h3>
          TimberLand
          <br />
          RS 6600
        </h3>
      </div>
    </div>
  </div>
</section>

  </>
  )
}

export default PopularProduct