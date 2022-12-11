import React from "react";
import arrowDown from "./../Assets/img/angle-arrow-down.png";

const SelectItem = ({ props }) => {
  return (
    <div className="selectItem">
      <div id="selectField" className="selectItem__field">
        <p>Select choice</p>
        <img
          className="selectItem__field--img"
          src={arrowDown}
          alt="Fleche ouverture du select"
        />
      </div>
      <ul className="selectItem__list">
        {props.map((unit) => (
          <li className="selectItem__list--option">
            <p key={unit.abbreviation}>{unit.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectItem;
