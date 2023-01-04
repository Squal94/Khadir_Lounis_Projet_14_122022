import React, { useEffect, useRef, useState } from "react";
import arrowDown from "./../Assets/img/angle-arrow-down.png";

const SelectItemOriginal = ({ props }) => {
  const [option, setOption] = useState("");
  const [selected, setSelected] = useState(false);

  const toggleArrow = () => {
    const arrow = document.querySelector(".selectItem__field--img");
    arrow.classList.toggle("rotate");
  };

  const toggleList = () => {
    const list = document.querySelector(".selectItem__list");
    list.classList.toggle("hide");
    toggleArrow();
  };
  const refOutside = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!refOutside.current.contains(event.target)) {
        const list = document.querySelector(".selectItem__list");
        list.classList.add("hide");
        const arrow = document.querySelector(".selectItem__field--img");
        arrow.classList.remove("rotate");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  });

  return (
    <div className="selectItem" ref={refOutside}>
      <div
        id="selectField"
        className="selectItem__field"
        onClick={() => {
          toggleList();
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
        <div className="selectItem__list__container">
          {props.map((unit) => (
            <li
              className="selectItem__list--option"
              onClick={() => {
                setOption(unit.name);
                setSelected(true);
                toggleList();
              }}
              key={unit.abbreviation}
            >
              <p>{unit.name}</p>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export { SelectItemOriginal };
