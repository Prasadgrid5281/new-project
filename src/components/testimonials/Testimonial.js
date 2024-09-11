import React from "react";
import testimonial1 from "../../images/testimonial1.jpg";
import testimonial2 from '../../images/testimonial2.jpg'
import testimonial3 from '../../images/testimonial3.jpg'

import "./testimonial.css";
const Testimonial = () => {
  return (
    <div className="testimonial-category">
      <h1>Testimonials</h1>
      <div className="testimonial-content">
        <div className="testimonial-card">
          <div className="testimonial-card-body">
            <img
              src={testimonial1}
              width="100px"
              height="100px"
              alt="Corey-Korsgaard"
            ></img>
            <h3 className="testimonial-name">Corey Korsgaard</h3>
          </div>
          <div className="testimonial-card-body">
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-card-body">
            <img
              src={testimonial3}
              width="100px"
              height="100px"
              alt="Corey-Korsgaard"
            ></img>
            <h3 className="testimonial-name">Jakob Aminoff</h3>
          </div>
          <div className="testimonial-card-body">
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-card-body">
            <img
              src={testimonial2}
              width="100px"
              height="100px"
              alt="Corey-Korsgaard"
            ></img>
            <h3 className="testimonial-name">Carla Press</h3>
          </div>
          <div className="testimonial-card-body">
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
