import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../Features/employee.slice";
import modalReducer from "../Features/modal.slice";
import arrayReducer from "../Features/array.slice";

export default configureStore({
  reducer: {
    employee: employeeReducer,
    modal: modalReducer,
    array: arrayReducer,
  },
});
