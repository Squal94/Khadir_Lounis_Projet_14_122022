import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  paginationArrayLine,
  paginationUtilValues,
} from "./../Features/editArrayContent.slice";

const NumberLine = () => {
  const employeeLength = useSelector(
    (state) => state.employee.filterEmployees.length
  );
  const [numberLine, setNumberLine] = useState("10");
  const dispatch = useDispatch();

  useEffect(() => {
    handleChangeNumber(numberLine);
  });

  function handleChangeNumber(value) {
    dispatch(paginationArrayLine(value));
    dispatch(paginationUtilValues([employeeLength, value]));
  }

  return (
    <div className="containerNumber">
      <p>
        {" "}
        Show
        <select
          name="numberLine"
          id="numberLine"
          onChange={(e) => {
            setNumberLine(e.target.value);
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
