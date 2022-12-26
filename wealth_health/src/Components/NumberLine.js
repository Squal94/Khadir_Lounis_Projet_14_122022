import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { numberChoice } from "./../Features/arrayOption.slice";
// import // paginationUtilValues,
// paginationAffichageLimit,
// "../Features/editArrayContent.slice";
import { paginationArrayLine } from "./../Features/editArrayContent.slice";

const NumberLine = () => {
  // const employeeLength = useSelector(
  //   (state) => state.employee.filterEmployees.length
  // );
  // const [numberLine, setNumberLine] = useState("10");
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   handleChangeNumber(numberLine);
  // });

  // function handleChangeNumber(value) {
  //   // dispatch(numberChoice([employeeLength, value]));
  //   dispatch(paginationUtilValues([employeeLength, value]));
  //   dispatch(paginationAffichageLimit(value));
  // }
  const dispatch = useDispatch();
  // const currentnumberAffichage = useSelector(
  //   (state) => state.employee.currentnumberAffichage
  // );

  return (
    <div className="containerNumber">
      <p>
        {" "}
        Show
        <select
          name="numberLine"
          id="numberLine"
          onChange={(e) => {
            dispatch(paginationArrayLine(e.target.value));
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
