import React from "react";
import "../App.css";
import imgage352 from "../images/image 352.png";

const Award = () => {
  return (
    <div className="award">
      <h1>Award and Recognition</h1>
      <div className="award-content">
        <div className="award-div">
          <img src={imgage352} alt="image1" />
          <p className="award-title">Awards title</p>
          <span>Description</span>
        </div>
        <div className="award-div">
          <img src={imgage352} alt="image1" />
          <p className="award-title">Awards title</p>
          <span>Description</span>
        </div>
        <div className="award-div">
          <img src={imgage352} alt="image1" />
          <p className="award-title">Awards title</p>
          <span>Description</span>
        </div>
      </div>
      <hr />
      <p className="pCen">See more</p>
    </div>
  );
};

export default Award;
