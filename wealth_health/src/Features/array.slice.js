import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const arraySlice = createSlice({
  name: "array",
  initialState: initialState,
  reducers: {},
});

export const { action } = arraySlice.actions;

export default arraySlice.reducer;
