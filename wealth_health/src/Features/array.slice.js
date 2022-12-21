import { createSlice } from "@reduxjs/toolkit";
import Store from "./../app/Store";
import store from "./../app/Store";

// const reduxStore = store.getState();
// const array = reduxStore.employee;
const initialState = [];

export const arraySlice = createSlice({
  name: "array",
  initialState: initialState,
  reducers: {
    test: (state) => {
      // const reduxStore = store.getState();
      // const array = reduxStore.employee;
      // state.push(...array);
      console.log(Store);
    },
  },
});

export const { test } = arraySlice.actions;

export default arraySlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";

// const initialState = "";

// const newEmployeeStore = () => {

//   const dataStoreEmployee = useSelector((state) => state.employee);

// }
// // const initialState = useSelector((state) => state.employee);

// export const arraySlice = createSlice({
//   name: "array",
//   initialState: initialState,
//   reducers: {},
// });

// export const { action } = arraySlice.actions;

// export default arraySlice.reducer;
