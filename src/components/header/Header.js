import React, { useState } from "react";
import "./header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

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
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to='/schedules'>Schedules</Link>
        </li>
        <li>
          <Link to='/membership'>Membership</Link>
        </li>
        <li>
          <Link to='/pricing'>Pricing</Link>
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
