import { createSlice } from "@reduxjs/toolkit";
import dataEmployee from "./../Assets/Data.json";

const initialState = dataEmployee;

// // Reducers An action is a useful package of information that contains a type like login logout or infoUser. The actions are distributed from the components. It sends the data of your React component to your Redux store.

export const usersSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    newEmployee: (state, action) => {
      console.log(action);
      state.auth.Logged = !state.auth.Logged;
      state.auth.Token = action.payload[0];
      state.email = action.payload[1];
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

export const { login, logout, infoUser } = usersSlice.actions;

export default usersSlice.reducer;
