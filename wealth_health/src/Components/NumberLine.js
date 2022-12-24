import React from "react";

const NumberLine = () => {
  return (
    <div containerNumber>
      <p>
        {" "}
        Show
        <select name="numberLine " id="numberLine ">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        entries
      </p>
    </div>
  );
};

export default NumberLine;
