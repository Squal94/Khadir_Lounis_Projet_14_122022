import { createSlice } from "@reduxjs/toolkit";

const initialState = ["test", "test2"];

export const arraySlice = createSlice({
  name: "array",
  initialState: initialState,
  reducers: {},
});

export const { test } = arraySlice.actions;

export default arraySlice.reducer;
