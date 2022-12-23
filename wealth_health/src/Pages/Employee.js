import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrayEmployee from "../Components/ArrayEmployee";
import Arrow from "../Components/Arrow";
// import array from "../Features/array.slice";
// import ModalSubmit from "../Components/ModalSubmit";
// import SelectItem from "../Components/SelectItem";
// import states from "../Assets/stateData";
// import DatePicker from "../Components/DatePicker";

const Employee = () => {
  // const dispatch = useDispatch;
  const testvalue = useSelector((state) => state.array);
  console.log(testvalue);

  return (
    <div>
      {/* <h1>Je suis employee</h1>
      <SelectItem props={states} />
      <DatePicker title={"Date of Birth"} /> */}
      <ArrayEmployee />
      {/* <Arrow /> */}
    </div>
  );
};

export default Employee;
