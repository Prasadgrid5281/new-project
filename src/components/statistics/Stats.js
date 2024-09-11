import React from "react";
import "./stats.css";
import cardimage from "../../images/cardImage.png";
const Stats = () => {
  return (
    <div className="stats-category">
      <div className="stats-section">
        <div className="circle-content">
          <div className="outer-circle">
            <div className="inner-circle"></div>
          </div>
        </div>

        <div className="stats-main">
          <div className="card-section">
            <div className="card-stats">
              <img
                src={cardimage}
                height="80px"
                width="80px"
                alt="jenny-wilson"
              ></img>
              <div className="card-typo">
                <h3>Jenny Wilson</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing....</p>
              </div>
            </div>
            <div className="card-stats">
              <img
                src={cardimage}
                height="80px"
                width="80px"
                alt="jenny-wilson"
              ></img>
              <div className="card-typo">
                <h3>Jenny Wilson</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing....</p>
              </div>
            </div>
            <div className="card-stats">
              <img
                src={cardimage}
                height="80px"
                width="80px"
                alt="jenny-wilson"
              ></img>
              <div className="card-typo">
                <h3>Jenny Wilson</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing....</p>
              </div>
            </div>
          </div>
          <div className="stats-content">
            <h2>Tropical Adventure</h2>
            <h3>for Students</h3>
            <p>Student Tropical Vacation: Relax and Recharge</p>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Massa quis natoque site quam</li>
              <li>Eros non pellentaesque elit</li>
              <li>Tortor id quismod habitant</li>
              <li>Sed suspendisse id in ultrices</li>
            </ul>
            <button className="explore-btn">Explore more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
