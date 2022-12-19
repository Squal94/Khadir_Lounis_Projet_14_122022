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

export const { newEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
