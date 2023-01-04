import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../Features/editArrayContent.slice";
import modalReducer from "../Features/modal.slice";

export default configureStore({
  reducer: {
    employee: employeeReducer,
    modal: modalReducer,
  },
});
