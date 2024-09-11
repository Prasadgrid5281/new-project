import React from "react";
import "./destination.css";
import carouselImage from "../../images/carouselImage.png";
// import carouselImage1 from "../../images/carouselImage1.png";
import carouselImage2 from "../../images/carouselImage2.png";
import carouselImage3 from "../../images/carouselImage3.png";

import { HiDotsHorizontal } from "react-icons/hi";

const Destinations = () => {
  return (
    <div className="destination-category">
      <div className="destination-content">
        <h1>Our Destinations</h1>
        <div className="carousel">
          <div className="carousel-card">
            <img
              src={carouselImage}
              height="auto"
              width="auto"
              alt="carousel-image"
            ></img>
            <div className="card-footer-carousel">
              <h3>Harvard University</h3>
              <div className="card-footer">
                <p>Cambridge, Massachusetts, UK</p>
                <button className="card-footer-btn">
                  <HiDotsHorizontal />
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-card">
            <img
              src={carouselImage3}
              height="auto"
              width="auto"
              alt="carousel-image"
            ></img>
            <div className="card-footer-carousel">
              <h3>Oxford University</h3>
              <div className="card-footer">
                <p>Oxford, England</p>
                <button className="card-footer-btn">
                  <HiDotsHorizontal />
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-card">
            <img
              src={carouselImage2}
              height="auto"
              width="auto"
              alt="carousel-image"
            ></img>
            <div className="card-footer-carousel">
              <h3>Standford University</h3>
              <div className="card-footer">
                <p>Standford, California, UK</p>
                <button className="card-footer-btn">
                  <HiDotsHorizontal />
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-card">
            <img
              src={carouselImage}
              height="auto"
              width="auto"
              alt="carousel-image"
            ></img>
            <div className="card-footer-carousel">
              <h3>Nanyang University</h3>
              <div className="card-footer">
                <p>Cambridge, Massachusetts, UK</p>
                <button className="card-footer-btn">
                  <HiDotsHorizontal />
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Destinations;
