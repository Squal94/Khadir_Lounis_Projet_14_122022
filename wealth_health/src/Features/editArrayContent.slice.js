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
  numberPage: "",
  firstItem: 0,
  LastItem: "",
  currentLastItem: "",
  currentnumberAffichage: 10,
  borderValue: "",
  errorMaxArray: false,
  errorMinArray: false,
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
    paginationArrayLine: (state, action) => {
      state.currentnumberAffichage = action.payload;
      // console.log(state.currentnumberAffichage);
      state.filterEmployees = state.data.slice(
        state.firstItem,
        state.currentnumberAffichage
      );
      state.currentLastItem = state.currentnumberAffichage;
    },
    paginationFunctionnality: (state, action) => {
      // const SauvnumberAffichage = state.currentnumberAffichage;
      const nextValue =
        parseInt(state.currentLastItem) +
        parseInt(state.currentnumberAffichage);
      const prevValue =
        parseInt(state.currentLastItem) -
        parseInt(state.currentnumberAffichage);

      switch (action.payload) {
        case "prev":
          if (prevValue < 0) {
            console.log("Debut employee");
          } else {
            state.filterEmployees = state.data.slice(
              prevValue,
              state.currentLastItem
            );
            state.currentLastItem = prevValue;
          }
          break;
        case "next":
          // state.filterEmployees = state.data;
          if (nextValue > state.data.length) {
            state.borderValue = nextValue - state.data.length;
            state.filterEmployees = state.data.slice(
              state.currentLastItem,
              parseInt(state.currentLastItem) + parseInt(state.borderValue)
            );
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
    // paginationUtilValues: (state, action) => {
    //   const pageNumber = action.payload[0] / action.payload[1];
    //   if (Number.isInteger(pageNumber)) {
    //     state.numberPage = pageNumber;
    //   } else {
    //     state.numberPage = Math.ceil(pageNumber);
    //   }
    //   state.LastItem = action.payload[0];
    //   state.currentnumberAffichage = action.payload[1];
    // },
  },
});

export const {
  newEmployee,
  sortEmployee,
  searchEmployee,
  paginationFunctionnality,
  paginationArrayLine,
  // paginationUtilValues,
  // paginationAffichageLimit,
  // paginationAffichageBtn,
} = editArrayContent.actions;

export default editArrayContent.reducer;

// paginationUtilValues: (state, action) => {
//   const pageNumber = action.payload[0] / action.payload[1];
//   if (Number.isInteger(pageNumber)) {
//     state.numberPage = pageNumber;
//   } else {
//     state.numberPage = Math.ceil(pageNumber);
//   }
//   state.LastItem = action.payload[0];
//   state.currentnumberAffichage = action.payload[1];
// },
// paginationAffichageLimit: (state, action) => {
//   state.filterEmployees = state.data;
//   state.filterEmployees = state.filterEmployees.slice(
//     state.firstItem,
//     action.payload
//   );
//   state.currentLastItem = action.payload;
// },
// paginationAffichageBtn: (state, action) => {
//   if (action.payload === "next") {
//     state.filterEmployees = state.data;
//     state.filterEmployees = state.filterEmployees.slice(
//       state.currentLastItem,
//       parseInt(state.currentLastItem) +
//         parseInt(state.currentnumberAffichage)
//     );
//     state.currentLastItem =
//       parseInt(state.currentLastItem) +
//       parseInt(state.currentnumberAffichage);
//   }
//   if (
//     parseInt(state.currentLastItem) +
//       parseInt(state.currentnumberAffichage) >
//     state.data.length
//   ) {
//     const calcLastValueArray =
//       parseInt(state.currentLastItem) +
//       parseInt(state.currentnumberAffichage) -
//       state.data.length;
//     console.log(calcLastValueArray);
//     state.filterEmployees = state.data;
//     console.log(current(state.data));
//     console.log(state.currentLastItem);
//     state.filterEmployees = state.filterEmployees.slice(
//       state.currentLastItem + calcLastValueArray,
//       state.currentLastItem
//     );

//     state.currentLastItem = state.currentLastItem + calcLastValueArray;
//   }
//   if (action.payload === "prev" && state.currentLastItem > 0) {
//     console.log("je prev");
//     console.log(state.currentLastItem);
//     console.log(state.currentnumberAffichage);
//     state.filterEmployees = state.data;
//     state.filterEmployees = state.filterEmployees.slice(
//       parseInt(state.currentLastItem) -
//         parseInt(state.currentnumberAffichage),
//       state.currentLastItem
//     );
//     state.currentLastItem =
//       parseInt(state.currentLastItem) -
//       parseInt(state.currentnumberAffichage);
//   }
// else {
//   console.log("Pour les erreurs " + state.currentLastItem);
//   if (state.currentLastItem > state.data) {
//     console.log("Tableau fini");
//     state.errorMaxArray = true;
//   }
//   if (state.currentLastItem < 1) {
//     state.errorMinArray = true;
//     console.log("debut Tableau");
//   }
// }
