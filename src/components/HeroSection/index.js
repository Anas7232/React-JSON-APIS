import React, { useState } from "react";
import "./style.css";
import data from "../../Data/API/index";

const HeroSection = () => {
  const [filter, setFilter] = useState("");

  const searchText = (e) => {
    setFilter(e.target.value);
  };

  let searchData = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  return (
    <>
      <br />
      <br /> <br /> <br />
      <br />
      <div className="search-bar">
        <div className="searchbox">
          <input
            type="text"
            placeholder="Search Products...."
            className="search-input"
            value={filter}
            onChange={searchText.bind(this)}
          />
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="cards" id="cards">
        {searchData.map((item, index) => {
          return (
            <div className="card">
              <img
                src={item.image}
                style={{ width: "350px", height: "300px" }}
                alt=""
              />
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  padding: "20px",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HeroSection;
