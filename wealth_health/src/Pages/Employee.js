import React from "react";
import SelectItem from "../Components/SelectItem";
import states from "../Assets/State";

const Employee = () => {
  return (
    <div>
      <h1>Je suis employee</h1>
      <SelectItem props={states} />
    </div>
  );
};

export default Employee;
