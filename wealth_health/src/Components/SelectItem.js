import React from "react";
import arrowDown from "./../Assets/img/angle-arrow-down.png";

const SelectItem = () => {
  return (
    <div className="selectItem">
      <div id="selectField">
        <p>Select choice</p>
        <img src={arrowDown} alt="Fleche ouverture du select" />
      </div>
    </div>
  );
};

export default SelectItem;
