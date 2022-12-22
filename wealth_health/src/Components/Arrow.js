import React from "react";
import arrow from "./../Assets/img/arrow.png";

const Arrow = () => {
  return (
    <div className="arrowContainer">
      <div className="arrowContainer__up">
        <img className="arrowContainer__up--img" src={arrow} alt="" />
      </div>
      <div className="arrowContainer__down"></div>
    </div>
  );
};

export default Arrow;
