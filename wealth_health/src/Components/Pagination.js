import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { paginationAffichageBtn } from "../Features/editArrayContent.slice";
import { paginationFunctionnality } from "../Features/editArrayContent.slice";

const Pagination = () => {
  //   const [currentPage, setCurrentPage] = useState("1");
  //   const numberLine = useSelector((state) => state.array.numberLine);
  //   const dataLength = useSelector((state) => state.array.length);
  //   const dispatch = useDispatch();
  const dataLength = useSelector((state) => state.employee.data);
  const currentLastItem = useSelector(
    (state) => state.employee.currentLastItem
  );
  const currentfirstItem = useSelector((state) => state.employee.firstItem);
  console.log(currentfirstItem);
  console.log(currentLastItem);
  console.log(dataLength.length);

  const dispatch = useDispatch();
  return (
    <div className="paginationContainer">
      <div className="paginationContainer__element">
        <p className="paginationContainer__element--value">
          Showing {currentfirstItem} to {currentLastItem} of {dataLength.length}{" "}
          entries
        </p>
        <div className="paginationContainer__element__btn">
          <p
            className="paginationContainer__element__btn--prev"
            id="navPrev"
            onClick={() => {
              dispatch(paginationFunctionnality("prev"));
              // dispatch(paginationAffichageBtn("prev"));
            }}
          >
            Previous
          </p>
          <p className="paginationContainer__element__btn--counter"></p>
          <p
            className="paginationContainer__element__btn--next"
            id="navNext"
            onClick={() => {
              dispatch(paginationFunctionnality("next"));
              // dispatch(paginationAffichageBtn("next"));
            }}
          >
            Next
          </p>
        </div>
      </div>
      <div className="paginationContainer--home">
        <NavLink className="paginationContainer--home--nav" to="/">
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default Pagination;
