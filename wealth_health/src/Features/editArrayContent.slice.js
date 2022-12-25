import { createSlice } from "@reduxjs/toolkit";
import dataEmployee from "../Assets/Data.json";
import { sortAZ, sortNumber, sortDate } from "./../Utils/sortUtils";
import { employeeFilter } from "./../Utils/filterUtils";

let toggle = true;
const initialState = {
  data: [...dataEmployee],
  filterEmployees: [...dataEmployee],
  searchTerm: "",
  arrow: true,
};

export const editArrayContent = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    newEmployee: (state = [...initialState], action) => {
      state.data.push(action.payload);
      state.filterEmployees = employeeFilter(state.data, state.searchTerm);
    },
    deleteEmployee: (state, action) => {},
    editEmployee: (state, action) => {},
    searchEmployee: (state, action) => {
      state.searchTerm = action.payload;
      state.filterEmployees = employeeFilter(state.data, action.payload);
      return state;
    },
    sortEmployee: (state, action) => {
      toggle = !toggle;
      toggle ? (state.arrow = true) : (state.arrow = false);
      switch (action.payload) {
        case "columnFirst":
          sortAZ(state.filterEmployees, toggle, "firstName");
          break;
        case "columnLast":
          sortAZ(state.filterEmployees, toggle, "lastName");
          break;
        case "columnStart":
          sortDate(state.filterEmployees, toggle, "StartDate");
          break;
        case "columnDepartement":
          sortAZ(state.filterEmployees, toggle, "street");
          break;
        case "columnBirth":
          sortDate(state.filterEmployees, toggle, "DateofBirth");
          break;
        case "columnStreet":
          sortAZ(state.filterEmployees, toggle, "street");
          break;
        case "columnCity":
          sortAZ(state.filterEmployees, toggle, "city");
          break;
        case "columnState":
          sortNumber(state.filterEmployees, toggle, "zipCode");
          break;
        case "columnZip":
          sortNumber(state.filterEmployees, toggle, "zipCode");
          break;
        default:
          return state.filterEmployees;
      }
    },
    paginationAction: (state, action) => {},
  },
});

export const { newEmployee, sortEmployee, searchEmployee, paginationAction } =
  editArrayContent.actions;

export default editArrayContent.reducer;
