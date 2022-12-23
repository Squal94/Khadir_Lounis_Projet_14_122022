import React from "react";
import { useDispatch } from "react-redux";
import { searchEmployee } from "./../Features/editArrayContent.slice";

const SearchArray = () => {
  const dispatch = useDispatch();
  //   const searchId = document.getElementById("searchId").addEventListener("keyup",());
  //   searchId.addEventListener("keyup", () => {
  //     console.log(searchId);
  //   });
  //   console.log(searchId);
  return (
    <div className="searchContainer">
      <label> Search :</label>
      <input
        type="text"
        id="searchId"
        onChange={(e) => {
          dispatch(searchEmployee(e.target.value));
        }}
      />
    </div>
  );
};

export default SearchArray;
