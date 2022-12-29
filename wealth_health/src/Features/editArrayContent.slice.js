import { createSlice } from "@reduxjs/toolkit";
import dataEmployee from "../Assets/Data.json";
import { sortAZ, sortNumber, sortDate } from "./../Utils/sortUtils";
import { employeeFilter } from "./../Utils/filterUtils";

const initialState = {
  data: [...dataEmployee],
  filterEmployees: [...dataEmployee],
  searchTerm: "",
  arrow: true,
  firstItem: 0,
  LastItem: "",
  numberPage: "",
  currentLastItem: "",
  currentnumberAffichage: 10,
  borderValue: "",
  errorMaxArray: false,
  errorMinArray: false,
};
let toggle = true;

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
    paginationArrayLine: (state, action) => {
      state.currentnumberAffichage = action.payload;
      state.filterEmployees = state.data.slice(
        state.firstItem,
        state.currentnumberAffichage
      );
      state.currentLastItem = state.currentnumberAffichage;
    },
    paginationUtilValues: (state, action) => {
      const pageNumber = action.payload[0] / action.payload[1];
      if (Number.isInteger(pageNumber)) {
        state.numberPage = pageNumber;
      } else {
        state.numberPage = Math.ceil(pageNumber);
      }
      state.LastItem = action.payload[0];
      state.currentnumberAffichage = action.payload[1];
    },
    paginationFunctionnality: (state, action) => {
      const nextValue =
        parseInt(state.currentLastItem) +
        parseInt(state.currentnumberAffichage);
      const prevValue =
        parseInt(state.currentLastItem) -
        parseInt(state.currentnumberAffichage);

      switch (action.payload) {
        case "prev":
          if (prevValue < 0) {
            state.errorMinArray = true;
          } else {
            state.errorMaxArray = false;
            state.filterEmployees = state.data.slice(
              prevValue,
              state.currentLastItem
            );
            state.currentLastItem = prevValue;
          }
          break;
        case "next":
          state.errorMinArray = false;
          if (nextValue > state.data.length) {
            state.borderValue = nextValue - state.data.length;
            state.filterEmployees = state.data.slice(
              state.currentLastItem,
              parseInt(state.currentLastItem) + parseInt(state.borderValue)
            );
            state.errorMaxArray = true;
          } else {
            state.filterEmployees = state.data.slice(
              state.currentLastItem,
              nextValue
            );
            state.currentLastItem = nextValue;
          }
          break;
        default:
          return state;
      }
    },
  },
});

export const {
  newEmployee,
  sortEmployee,
  searchEmployee,
  paginationUtilValues,
  paginationFunctionnality,
  paginationArrayLine,
} = editArrayContent.actions;

export default editArrayContent.reducer;
