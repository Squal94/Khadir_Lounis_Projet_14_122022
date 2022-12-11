import React, { useState } from "react";
import arrowDown from "./../Assets/img/angle-arrow-down.png";

const SelectItem = ({ props }) => {
  const list = document.querySelector(".selectItem__list");
  const [option, setOption] = useState("");
  const [selected, setSelected] = useState(false);
  const openList = () => {
    list.classList.toggle("hide");
  };

  // const selectText = document.getElementById("selectText");
  // let options = document.getElementsByClassName("selectItem__list--option");
  // for (option of options) {
  //   option.onclick();
  // }
  return (
    <div className="selectItem">
      <div
        id="selectField"
        className="selectItem__field"
        onClick={() => {
          openList();
        }}
      >
        <p id="selectText">
          {selected === false ? "Select your choice" : option}
        </p>
        <img
          className="selectItem__field--img"
          src={arrowDown}
          alt="Fleche ouverture du select"
        />
      </div>
      <ul className="selectItem__list hide">
        {props.map((unit) => (
          <li
            className="selectItem__list--option"
            onClick={() => {
              setOption(unit.name);
              setSelected(true);
            }}
            key={unit.abbreviation}
          >
            <p>{unit.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectItem;
