import { createSlice } from "@reduxjs/toolkit";
// import Store from "../app/Store";

// const reduxStore = store.getState();
// const array = reduxStore.employee;
const initialState = ["test", "test2"];

export const arraySlice = createSlice({
  name: "array",
  initialState: initialState,
  reducers: {
    test: (state = [...initialState]) => {
      // const reduxStore = Store.getState();
      // const array = reduxStore.employee;

      return state;
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
