import { configureStore } from "@reduxjs/toolkit";
import Reducer from "../Features/post.slice";

export default configureStore({
  reducer: {
    employee: Reducer,
  },
});
