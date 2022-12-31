import { createSlice } from "@reduxjs/toolkit";
import dataEmployee from "../Assets/Data.json";
import { sortAZ, sortNumber, sortDate } from "./../Utils/sortUtils";
import { paginationPrev, paginationNext } from "./../Utils/paginationUtils";
import { employeeFilter } from "./../Utils/filterUtils";

const initialState = {
  data: [...dataEmployee],
  filterEmployees: [...dataEmployee],
  searchTerm: "",
  arrow: true,
  firstItem: 0,
  LastItem: "",
  numberPage: 1,
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
      // state.currentnumberAffichage = state.filterEmployees.length;
    },
    deleteEmployee: (state, action) => {},
    editEmployee: (state, action) => {},
    searchEmployee: (state, action) => {
      state.searchTerm = action.payload;
      state.filterEmployees = employeeFilter(state.data, action.payload).slice(
        state.firstItem,
        state.currentnumberAffichage
      );
      return state;
    },
    sortEmployee: (state, action) => {
      toggle = !toggle;
      toggle ? (state.arrow = true) : (state.arrow = false);
      switch (action.payload) {
        case "columnFirst":
          state.filterEmployees = sortAZ(state, toggle, "firstName").slice(
            state.firstItem,
            state.currentnumberAffichage
          );
          break;
        case "columnLast":
          state.filterEmployees = sortAZ(state, toggle, "lastName").slice(
            state.firstItem,
            state.currentnumberAffichage
          );
          break;
        case "columnStart":
          state.filterEmployees = sortDate(state, toggle, "StartDate").slice(
            state.firstItem,
            state.currentnumberAffichage
          );

          break;
        case "columnDepartement":
          state.filterEmployees = sortAZ(state, toggle, "departement").slice(
            state.firstItem,
            state.currentnumberAffichage
          );
          break;
        case "columnBirth":
          state.filterEmployees = sortDate(state, toggle, "DateofBirth").slice(
            state.firstItem,
            state.currentnumberAffichage
          );

          break;
        case "columnStreet":
          state.filterEmployees = sortAZ(state, toggle, "street").slice(
            state.firstItem,
            state.currentnumberAffichage
          );
          break;
        case "columnCity":
          state.filterEmployees = sortAZ(state, toggle, "city").slice(
            state.firstItem,
            state.currentnumberAffichage
          );
          break;
        case "columnState":
          state.filterEmployees = sortNumber(state, toggle, "zipCode").slice(
            state.firstItem,
            state.currentnumberAffichage
          );
          break;
        case "columnZip":
          state.filterEmployees = sortNumber(state, toggle, "zipCode").slice(
            state.firstItem,
            state.currentnumberAffichage
          );
          break;
        default:
          return;
      }
    },
    paginationArrayLine: (state, action) => {
      state.firstItem = 0;
      state.currentnumberAffichage = action.payload;
      state.filterEmployees = state.data.slice(
        state.firstItem,
        state.currentnumberAffichage
      );
      state.currentLastItem = state.currentnumberAffichage;
      state.LastItem = state.currentLastItem;
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
          paginationPrev(state, prevValue);
          break;
        case "next":
          paginationNext(state, nextValue);
          break;
        default:
      }
    },
  },
});

export const {
  newEmployee,
  sortEmployee,
  searchEmployee,
  paginationFunctionnality,
  paginationArrayLine,
} = editArrayContent.actions;

export default editArrayContent.reducer;

// if (Math.sign(prevValue - state.currentnumberAffichage) === -1) {
//   state.firstItem = 0;
//   state.numberPage = 1;
// } else {
//   state.firstItem = prevValue - state.currentnumberAffichage;
//   state.numberPage--;
// }

// paginationFunctionnality: (state, action) => {
//   const nextValue =
//     parseInt(state.currentLastItem) +
//     parseInt(state.currentnumberAffichage);
//   const prevValue =
//     parseInt(state.currentLastItem) -
//     parseInt(state.currentnumberAffichage);

//   switch (action.payload) {
//     case "prev":
//       if (prevValue < 1) {
//         state.firstItem = 0;
//         state.numberPage = 1;
//         state.currentLastItem = state.currentnumberAffichage;
//         state.LastItem = state.currentLastItem;
//         state.errorMinArray = true;
//         state.filterEmployees = state.data.slice(
//           state.firstItem,
//           state.currentLastItem
//         );
//       } else {
//         state.numberPage--;
//         state.errorMaxArray = false;
//         state.filterEmployees = state.data.slice(
//           prevValue,
//           state.currentLastItem
//         );
//         state.currentLastItem = prevValue;
//         state.firstItem = prevValue;
//         state.LastItem = prevValue + state.currentLastItem;
//       }
//       break;
//     case "next":
//       state.errorMinArray = false;
//       state.firstItem = state.currentLastItem;
//       if (nextValue > state.data.length) {
//         state.numberPage = Math.ceil(
//           state.data.length / state.currentnumberAffichage
//         );
//         state.borderValue = nextValue - state.data.length;
//         state.filterEmployees = state.data.slice(
//           state.currentLastItem,
//           parseInt(state.currentLastItem) + parseInt(state.borderValue)
//         );
//         state.LastItem =
//           parseInt(state.currentLastItem) + parseInt(state.borderValue);
//         state.errorMaxArray = true;
//       } else {
//         state.numberPage++;
//         state.filterEmployees = state.data.slice(
//           state.currentLastItem,
//           nextValue
//         );
//         state.currentLastItem = nextValue;
//         state.LastItem = state.currentLastItem;
//       }
//       break;
//     default:
//   }
// },
