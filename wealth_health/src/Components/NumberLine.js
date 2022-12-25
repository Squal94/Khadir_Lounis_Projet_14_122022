import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { numberChoice } from "./../Features/arrayOption.slice";
import { paginationLimitLine } from "../Features/editArrayContent.slice";

const NumberLine = () => {
  const employeeLength = useSelector(
    (state) => state.employee.filterEmployees.length
  );
  const [numberLine, setNumberLine] = useState("10");
  const dispatch = useDispatch();

  function handleChangeNumber(e) {
    let numberLineQuery = e.target.value;
    setNumberLine(numberLineQuery);
  }

  dispatch(numberChoice([employeeLength, numberLine]));
  dispatch(paginationLimitLine([employeeLength, numberLine]));

  return (
    <div className="containerNumber">
      <p>
        {" "}
        Show
        <select
          name="numberLine"
          id="numberLine"
          onChange={(e) => {
            handleChangeNumber(e);
          }}
        >
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
