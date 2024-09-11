import React, { useState } from "react";
import cardImage from "../../images/cardImage.png";
import "./contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    city: "",
    arrival: "",
    departure: "",
  });
  const [count, setCount] = useState(4);
  const [roomCount, setRoomCount] = useState(1);
  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const hanldeDecrement = () => {
    if (count <= 0) {
      alert("Stars can not be negative");
    } else {
      setCount(count - 1);
    }
  };
  const hanldeIncrement = () => {
    if (count >= 5) {
      alert("Maximum stars will be 5");
    } else {
      setCount(count + 1);
    }
  };
  const hanldeRoomDecrement = () => {
    if (roomCount <= 0) {
      alert("Rooms can not be null");
    } else {
      setRoomCount(roomCount - 1);
    }
  };
  const hanldeRoomIncrement = () => {
    if (roomCount >= 10) {
      alert("Maximum rooms per person will be 10");
    } else {
      setRoomCount(roomCount + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.city===""){
        alert("Please enter the city")
    }
    if(formData.arrival===""){
        alert("Please enter the arrival")
    }
    if(formData.departure===""){
        alert("Please enter departure")
    }
    console.log(formData)
  };
  return (
    <div className="contact-category">
      <div className="contact-content">
        <img
          src={cardImage}
          height="400px"
          width="auto"
          alt="contact-image"
        ></img>
        <div className="booknow-card">
          <h1>Book now</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <label>CITY</label>
              <input
                onChange={hanldeChange}
                type="text"
                name="city"
                value={formData.city}
                placeholder="Enter city.."
              />
            </div>
            <div className="input-combo">
              <div className="input-box">
                <label>ARRIVAL</label>
                <input
                  onChange={hanldeChange}
                  type="text"
                  name="arrival"
                  value={formData.arrival}
                  placeholder="10 October"
                />
              </div>
              <div className="input-box">
                <label>DEPARTURE</label>
                <input
                  onChange={hanldeChange}
                  type="text"
                  name="departure"
                  value={formData.departure}
                  placeholder="11 October"
                />
              </div>
            </div>
            <div className="input-combo">
              <div className="input-box">
                <label>STAR</label>
                <div className="star-btn-group">
                  <button onClick={hanldeDecrement} className="star-btn">
                    -
                  </button>
                  <p className="counter">{count}</p>
                  <button onClick={hanldeIncrement} className="star-btn">
                    +
                  </button>
                </div>
              </div>
              <div className="input-box">
                <label>ROOM</label>
                <div className="star-btn-group">
                  <button onClick={hanldeRoomDecrement} className="star-btn">
                    -
                  </button>
                  <p className="counter">{roomCount}</p>
                  <button onClick={hanldeRoomIncrement} className="star-btn">
                    +
                  </button>
                </div>
              </div>
            </div>
            <button className="book-now">BOOK NOW</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
