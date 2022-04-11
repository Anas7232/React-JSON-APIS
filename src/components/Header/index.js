import React, { useState } from "react";
import "./style.css";
import { Carousel } from "react-bootstrap";
import slider1 from "../../Images/slide1.php";
import slider2 from "../../Images/slide2.php";
import slider3 from "../../Images/slide3.php";

const Header = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <header>
        <nav>
          <div className="logo">SPORTSHOES.COM</div>
          <input type="checkbox" id="click" />
          <label for="click" className="menu-btn">
            <i className="fas fa-bars"></i>
          </label>
          <ul>
            <li>
              <a href="#"> MEN </a>
              {/* Your Drop Down Mneu here */}
              <ul>
                <li>
                  <a>  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#"> WOMEN </a>
               {/* Your Drop Down Mneu here */}
               <ul>
                <li>
                  <a>  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="sliderimages" src={slider1} alt="First slide" />
          <Carousel.Caption
            style={{
              display: "flex",
              top: "61%",
              bottom: "31%",
              left: "20%",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <a
              className="firstbtn"
              style={{
                position: "absolute",
                left: "0",
                display: "flex",
                textAlign: "center",
                border: "1px solid #fff",
                padding: "4px 15px",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "300",
                cursor: "pointer",
                background: "#fff",
                color: "black",
              }}
            >
              BUY NOW
            </a>

            <a
              style={{
                position: "absolute",
                left: "",
                display: "flex",
                marginLeft: "110px",
                border: "1px solid #fff",
                padding: " 5px 15px",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "300",
                cursor: "pointer",
              }}
            >
              LERN MORE
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="sliderimages" src={slider2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="sliderimages" src={slider3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Header;
