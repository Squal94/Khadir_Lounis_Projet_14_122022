import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { paginationAffichageBtn } from "../Features/editArrayContent.slice";

const Pagination = () => {
  //   const [currentPage, setCurrentPage] = useState("1");
  //   const numberLine = useSelector((state) => state.array.numberLine);
  //   const dataLength = useSelector((state) => state.array.length);
  //   const dispatch = useDispatch();
  // const dataStoreEmployee = useSelector(
  //   (state) => state.employee.filterEmployees
  // );
  const dispatch = useDispatch();
  return (
    <div className="paginationContainer">
      <div className="paginationContainer__element">
        <p className="paginationContainer__element--value">
          Showing 0 to 0 of 0 entries
        </p>
        <div className="paginationContainer__element__btn">
          <p
            className="paginationContainer__element__btn--prev"
            id="navPrev"
            onClick={() => {
              dispatch(paginationAffichageBtn("prev"));
            }}
          >
            Previous
          </p>
          <p
            className="paginationContainer__element__btn--next"
            id="navNext"
            onClick={() => {
              dispatch(paginationAffichageBtn("next"));
            }}
          >
            Next
          </p>
        </div>
      </div>
      <div className="paginationContainer__element--home">
        <NavLink className="paginationContainer__element--home--nav" to="/">
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default Pagination;
