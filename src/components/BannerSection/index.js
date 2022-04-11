import React from "react";
import "./style.css";

const BannerSection = () => {
  return (
    <>
      <div className="last-section">
        <div className="img-section">
          <div className="img-1">
            <h1
              style={{
                color: "#fff",
                marginTop: "90%",
                fontSize: "35px",
                fontFamily: "Roboto, sans-serif",
                paddingLeft: "20px",
              }}
            >
              FIGHT LIKE A SPIDER
            </h1>
            <p
              style={{
                color: "gray",
                fontSize: "18px",
                fontFamily: "Roboto, sans-serif",
                padding: " 5px 0px",
                paddingLeft: "20px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Nam assumenda eveniet <br /> dolorem sit blanditiis minima
            </p>

            <a
              className="a_tag"
              style={{
                padding: "5px",
                color: "#fff",
                paddingLeft: "20px",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              READ MORE
            </a>
          </div>
          <div className="img-2">
            <h1
              style={{
                color: "#fff",
                marginTop: " 90%",
                fontSize: "35px",
                fontFamily: "Roboto, sans-serif",
                paddingLeft: "20px",
              }}
            >
              RUN LIKE A CHEETAH
            </h1>
            <p
              style={{
                color: "gray",
                fontSize: "18px",
                fontFamily: "Roboto, sans-serif",
                padding: "5px 0px",
                paddingLeft: "20px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Nam assumenda eveniet <b /> dolorem sit blanditiis minima
            </p>

            <a
              className="a_tag"
              style={{
                padding: "5px",
                color: "#fff",
                paddingLeft: "20px",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
