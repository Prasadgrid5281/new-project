import React, { useState } from "react";
import "./header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Header = () => {
    const[isOpen,setIsOpen]=useState(false)
    const[openIcon,setOpenIcon]=useState(true)
    const handleClick=()=>{
        setIsOpen(!isOpen)
        setOpenIcon(!openIcon)
    }
  return (
    <header className="header-section">
      <button className="hamburger" onClick={handleClick}>
        <div>
            {openIcon? <RxHamburgerMenu  className="icon-menu"/>:<IoClose className="icon-menu" /> }
        </div>
      </button>

      <ul className={isOpen?"open":"close"}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Schedules</a>
        </li>
        <li>
          <a href="#">Membership</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
      </ul>
      <div className="header-btn">
        <button className="offer-btn">Offers</button>
        <button className="courses-btn">Courses</button>
      </div>
    </header>
  );
};

export default Header;
