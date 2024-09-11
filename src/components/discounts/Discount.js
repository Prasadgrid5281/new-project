import React from "react";
import "./discount.css";
import discountImage from '../../images/discountImage.png'
const Discount = () => {
  return (
    <div className="disount-category">
      <div className="discount-main">
        <div className="discount-content">
          <h3>Get 20% off for student</h3>
          <div>
            <h1>Student discounts available.</h1>
            <h1>Get ready for some fun in the sun!</h1>
          </div>

          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Massa quis natoque sit quam</li>
            <li>Eros non pellentesque elit</li>
            <li>tortor id euismod habitant</li>
            <li>Sed suspendisse id in ultrices</li>
          </ul>
          <button className="explore-more">Explore More</button>

        </div>
        <img src={discountImage} height='400px' width='auto' alt="discount-hero-image"></img>
      </div>
    </div>
  );
};

export default Discount;
