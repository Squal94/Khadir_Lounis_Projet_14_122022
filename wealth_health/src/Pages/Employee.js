import React from "react";
import SelectItem from "../Components/SelectItem";
import states from "../Assets/stateData";
import DatePicker from "../Components/DatePicker";

const Employee = () => {
  return (
    <div>
      <h1>Je suis employee</h1>
      <SelectItem props={states} />
      <DatePicker title={"Date of Birth"} />
    </div>
  );
};

export default Employee;
