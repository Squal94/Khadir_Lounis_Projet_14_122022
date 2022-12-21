import { createSlice, current } from "@reduxjs/toolkit";
import dataEmployee from "../Assets/Data.json";

const initialState = [...dataEmployee];
let toggle = true;
let arrow = true;
// console.log(initialState);
// current

export const employeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    newEmployee: (state = [...initialState], action) => {
      state.push(action.payload);
      console.log(current(state));
    },
    deleteEmployee: (state, action) => {},
    editEmployee: (state, action) => {},
    sortTest: (state, action) => {
      if (toggle) {
        // eslint-disable-next-line array-callback-return
        state.sort((a, b) => {
          switch (action.payload) {
            case "columnFirst":
              if (a.firstName > b.firstName) {
                return 1;
              } else if (b.firstName > a.firstName) {
                return -1;
              } else {
                return 0;
              }
            case "columnLast":
              if (a.lastName > b.lastName) {
                return 1;
              } else if (b.lastName > a.lastName) {
                return -1;
              } else {
                return 0;
              }
            case "columnStart":
              return (
                new Date(a.StartDate).valueOf() -
                new Date(b.StartDate).valueOf()
              );
            case "columnDepartement":
              return a.zipCode - b.zipCode;
            case "columnBirth":
              return (
                new Date(a.DateofBirth).valueOf() -
                new Date(b.DateofBirth).valueOf()
              );
            case "columnStreet":
              if (a.street > b.street) {
                return 1;
              } else if (b.street > a.street) {
                return -1;
              } else {
                return 0;
              }
            case "columnCity":
              if (a.city > b.city) {
                return 1;
              } else if (b.city > a.city) {
                return -1;
              } else {
                return 0;
              }
            case "columnState":
              return a.zipCode - b.zipCode;
            case "columnZip":
              return a.zipCode - b.zipCode;
            default:
          }
        });
        toggle = !toggle;
        arrow = !arrow;
        console.log(arrow);
      } else {
        // eslint-disable-next-line array-callback-return
        state.sort((a, b) => {
          switch (action.payload) {
            case "columnFirst":
              if (b.firstName > a.firstName) {
                return 1;
              } else if (a.firstName > b.firstName) {
                return -1;
              } else {
                return 0;
              }
            case "columnLast":
              if (b.lastName > a.lastName) {
                return 1;
              } else if (a.lastName > b.lastName) {
                return -1;
              } else {
                return 0;
              }
            case "columnStart":
              return (
                new Date(b.StartDate).valueOf() -
                new Date(a.StartDate).valueOf()
              );
            case "columnDepartement":
              return b.zipCode - a.zipCode;
            case "columnBirth":
              return (
                new Date(b.DateofBirth).valueOf() -
                new Date(a.DateofBirth).valueOf()
              );
            case "columnStreet":
              if (b.street > a.street) {
                return 1;
              } else if (a.street > b.street) {
                return -1;
              } else {
                return 0;
              }
            case "columnCity":
              if (b.city > a.city) {
                return 1;
              } else if (a.city > b.city) {
                return -1;
              } else {
                return 0;
              }
            case "columnState":
              return b.zipCode - a.zipCode;
            case "columnZip":
              return b.zipCode - a.zipCode;
            default:
          }
        });
        toggle = !toggle;
        arrow = !arrow;
        console.log(arrow);
      }
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

export const { newEmployee, sortTest } = employeeSlice.actions;

export default employeeSlice.reducer;
