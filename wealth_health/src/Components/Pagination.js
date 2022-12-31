import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  paginationFunctionnality,
  paginationBtn,
} from "../Features/editArrayContent.slice";

const Pagination = () => {
  const dispatch = useDispatch();
  const dataLength = useSelector((state) => state.employee.data);
  const currentfirstItem = useSelector((state) => state.employee.firstItem);
  const currentLastItem = useSelector((state) => state.employee.LastItem);
  const totalPages = useSelector((state) => state.employee.totalPages);
  let arrayPages = [];
  for (let i = 1; i <= totalPages; i++) {
    arrayPages.push(i);
  }

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
            }}
          >
            Previous
          </p>
          <ul className="paginationContainer__element__btn--list">
            {arrayPages.map((item) => (
              <li
                key={item}
                className="paginationContainer__element__btn--list--item"
                onClick={() => {
                  dispatch(paginationBtn(item));
                }}
              >
                {item}
              </li>
            ))}
          </ul>
          <p
            className="paginationContainer__element__btn--next"
            id="navNext"
            onClick={() => {
              dispatch(paginationFunctionnality("next"));
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
