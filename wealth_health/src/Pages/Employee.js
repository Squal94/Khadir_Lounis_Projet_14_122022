import React from "react";
import ArrayEmployee from "../Components/ArrayEmployee";
import NumberLine from "../Components/NumberLine";
import Pagination from "../Components/Pagination";
import SearchArray from "../Components/SearchArray";
import SelectItem from "../Components/SelectItem";
import states from "../Assets/stateData";

const Employee = () => {
  return (
    <div>
      <h1>Current Employees</h1>
      <SelectItem props={states} />
      {/* <DatePicker title={"Date of Birth"} />  */}
      <NumberLine />
      <SearchArray />
      <ArrayEmployee />
      <Pagination />
    </div>
  );
};

export default Employee;
