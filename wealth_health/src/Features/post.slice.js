import { createSlice, current } from "@reduxjs/toolkit";
import dataEmployee from "./../Assets/Data.json";

const initialState = [...dataEmployee];
// console.log(initialState);

// // Reducers An action is a useful package of information that contains a type like login logout or infoUser. The actions are distributed from the components. It sends the data of your React component to your Redux store.

export const employeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    newEmployee: (state = [...initialState], action) => {
      console.log(action);
      state.push(action.payload);

      //   state.auth.Logged = !state.auth.Logged;
      //   state.auth.Token = action.payload[0];
      //   state.email = action.payload[1];
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
