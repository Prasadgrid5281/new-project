import React from "react";
import "./hero.css";
import myHero from "../../images/myHero.png";
const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-content">
        <p>Discover the beauty of the tropies</p>
        <h1>
          Tropical
          <br /> Destinations
        </h1>
        <h2>For Students</h2>
        <p>
          Lorem ipsum dolor sit amet consetetur. Sit mattis donec mi bibendum
          integer rutrum nisi. A nec nisi vitae
        </p>
        <button>SIGN UP</button>
      </div>
      <div className="hero-image">
        <img src={myHero} height="400px" width="auto" alt="hero-image"></img>
      </div>
    </div>
  );
};

export default Hero;
