import React from "react";
import { useDispatch } from "react-redux";
import ArrayEmployee from "../Components/ArrayEmployee";
import { test } from "../Features/array.slice";
// import ModalSubmit from "../Components/ModalSubmit";
// import SelectItem from "../Components/SelectItem";
// import states from "../Assets/stateData";
// import DatePicker from "../Components/DatePicker";

const Employee = () => {
  const dispatch = useDispatch;

  dispatch(test());
  return (
    <div>
      {/* <h1>Je suis employee</h1>
      <SelectItem props={states} />
      <DatePicker title={"Date of Birth"} /> */}
      <ArrayEmployee />
    </div>
  );
};

export default Employee;
