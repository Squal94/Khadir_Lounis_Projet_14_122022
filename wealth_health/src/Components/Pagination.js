import React from "react";
import { NavLink } from "react-router-dom";

const Pagination = () => {
  return (
    <div className="paginationContainer">
      <div className="paginationContainer__element">
        <p className="paginationContainer__element--value">
          Showing 0 to 0 of 0 entries
        </p>
        <div className="paginationContainer__element__btn">
          <p className="paginationContainer__element__btn--prev">Previous</p>
          <p className="paginationContainer__element__btn--next">Next</p>
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
