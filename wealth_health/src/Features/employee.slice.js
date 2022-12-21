import { createSlice, current } from "@reduxjs/toolkit";
import dataEmployee from "../Assets/Data.json";

const initialState = [...dataEmployee];
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
      let toggle = true;
      let arrow = true;
      if (toggle === true) {
        state.sort(function (a, b) {
          toggle = !toggle;
          arrow = !arrow;
          console.log(arrow);
          console.log(toggle);
          return a.zipCode - b.zipCode;
        });
      }
      if (toggle === false) {
        state.sort(function (a, b) {
          toggle = !toggle;
          arrow = !arrow;
          console.log(arrow);
          console.log(toggle);
          return b.zipCode - a.zipCode;
        });
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
