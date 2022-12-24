import React from "react";
import ArrayEmployee from "../Components/ArrayEmployee";
import SearchArray from "../Components/SearchArray";

const Employee = () => {
  return (
    <div>
      <h1>Current Employees</h1>
      {/* <SelectItem props={states} />
      <DatePicker title={"Date of Birth"} />  */}
      <SearchArray />
      <ArrayEmployee />
    </div>
  );
};

export default Employee;
