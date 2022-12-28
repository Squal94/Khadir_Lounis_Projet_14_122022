import React from "react";
import ArrayEmployee from "../Components/ArrayEmployee";
import NumberLine from "../Components/NumberLine";
import Pagination from "../Components/Pagination";
import SearchArray from "../Components/SearchArray";

const Employee = () => {
  return (
    <div>
      <h1>Current Employees</h1>
      {/* <DatePicker title={"Date of Birth"} />  */}
      <NumberLine />
      <SearchArray />
      <ArrayEmployee />
      <Pagination />
    </div>
  );
};

export default Employee;
