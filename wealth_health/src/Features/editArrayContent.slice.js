import { createSlice } from "@reduxjs/toolkit";
import dataEmployee from "../Assets/Data.json";
import { sortAZ, sortNumber, sortDate } from "./../Utils/sortUtils";

let toggle = true;
const keys = [
  "firstName",
  // "lastName",
  // "DateofBirth",
  // "StartDate",
  // "street",
  // "city",
  // "zipCode",
];
const initialState = {
  data: [...dataEmployee],
  filterEmployees: [...dataEmployee],
  searchTerm: "",
  arrow: true,
};

// console.log(initialState);
// current

export const editArrayContent = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    newEmployee: (state = [...initialState], action) => {
      state.data.push(action.payload);
      state.filterEmployees = state.data.filter((employee) =>
        keys.some((key) =>
          employee[key].toLowerCase().includes(state.searchTerm)
        )
      );

      // console.log(current(state));
    },
    deleteEmployee: (state, action) => {},
    editEmployee: (state, action) => {},
    searchEmployee: (state, action) => {
      // console.log(action.payload);
      // const backupState = state;
      state.searchTerm = action.payload;
      // const employeeData = [...dataEmployee];
      // const keys = [
      //   "firstName",
      //   // "lastName",
      //   // "DateofBirth",
      //   // "StartDate",
      //   // "street",
      //   // "city",
      //   // "zipCode",
      // ];
      state.filterEmployees = state.data.filter((employee) =>
        keys.some((key) => employee[key].toLowerCase().includes(action.payload))
      );

      return state;

      // state.data = [
      //   ...state.data.filter(
      //     (employee) =>
      //       keys.some((key) =>
      //         employee[key].toLowerCase().includes(action.payload)
      //       )
      //     // employee[key].toLowerCase().includes(action.payload)
      //   ),
      // ];
      // return state;

      // return void (state.data = [
      //   ...state.data.filter(
      //     (employee) =>
      //       keys.some((key) =>
      //         employee[key].toLowerCase().includes(action.payload)
      //       )
      //     // employee[key].toLowerCase().includes(action.payload)
      //   ),
      // ]);
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
          sortAZ(state.filterEmployees, toggle, "zipCode");
          break;
        case "columnZip":
          sortNumber(state.filterEmployees, toggle, "zipCode");
          break;
        default:
      }
      // if (toggle) {
      //   state.arrow = false;
      //   // eslint-disable-next-line array-callback-return
      //   state.filterEmployees.sort((a, b) => {
      //     switch (action.payload) {
      //       case "columnFirst":
      //         if (a.firstName > b.firstName) {
      //           return 1;
      //         } else if (b.firstName > a.firstName) {
      //           return -1;
      //         } else {
      //           return 0;
      //         }
      //       case "columnLast":
      //         if (a.lastName > b.lastName) {
      //           return 1;
      //         } else if (b.lastName > a.lastName) {
      //           return -1;
      //         } else {
      //           return 0;
      //         }
      //       case "columnStart":
      //         return (
      //           new Date(a.StartDate).valueOf() -
      //           new Date(b.StartDate).valueOf()
      //         );
      //       case "columnDepartement":
      //         return a.zipCode - b.zipCode;
      //       case "columnBirth":
      //         return (
      //           new Date(a.DateofBirth).valueOf() -
      //           new Date(b.DateofBirth).valueOf()
      //         );
      //       case "columnStreet":
      //         if (a.street > b.street) {
      //           return 1;
      //         } else if (b.street > a.street) {
      //           return -1;
      //         } else {
      //           return 0;
      //         }
      //       case "columnCity":
      //         if (a.city > b.city) {
      //           return 1;
      //         } else if (b.city > a.city) {
      //           return -1;
      //         } else {
      //           return 0;
      //         }
      //       case "columnState":
      //         return a.zipCode - b.zipCode;
      //       case "columnZip":
      //         return a.zipCode - b.zipCode;
      //       default:
      //     }
      //   });
      //   toggle = !toggle;
      //   // console.log(arrow);
      // } else {
      //   state.arrow = true;
      //   // eslint-disable-next-line array-callback-return
      //   state.filterEmployees.sort((a, b) => {
      //     switch (action.payload) {
      //       case "columnFirst":
      //         if (b.firstName > a.firstName) {
      //           return 1;
      //         } else if (a.firstName > b.firstName) {
      //           return -1;
      //         } else {
      //           return 0;
      //         }
      //       case "columnLast":
      //         if (b.lastName > a.lastName) {
      //           return 1;
      //         } else if (a.lastName > b.lastName) {
      //           return -1;
      //         } else {
      //           return 0;
      //         }
      //       case "columnStart":
      //         return (
      //           new Date(b.StartDate).valueOf() -
      //           new Date(a.StartDate).valueOf()
      //         );
      //       case "columnDepartement":
      //         return b.zipCode - a.zipCode;
      //       case "columnBirth":
      //         return (
      //           new Date(b.DateofBirth).valueOf() -
      //           new Date(a.DateofBirth).valueOf()
      //         );
      //       case "columnStreet":
      //         if (b.street > a.street) {
      //           return 1;
      //         } else if (a.street > b.street) {
      //           return -1;
      //         } else {
      //           return 0;
      //         }
      //       case "columnCity":
      //         if (b.city > a.city) {
      //           return 1;
      //         } else if (a.city > b.city) {
      //           return -1;
      //         } else {
      //           return 0;
      //         }
      //       case "columnState":
      //         return b.zipCode - a.zipCode;
      //       case "columnZip":
      //         return b.zipCode - a.zipCode;
      //       default:
      //     }
      //   });
      //   toggle = !toggle;
      // }
    },
    // logout: (state) => {
    //   // state.auth.Logged = !state.auth.Logged;
    //   state = initialState();
    //   return state;
    // },
    // infoUser: (state, action) => {
    //   state.firstName = action.payload[0];
    //   state.lastName = action.payload[1];
    // },
  },
});

export const { newEmployee, sortEmployee, searchEmployee } =
  editArrayContent.actions;

export default editArrayContent.reducer;
