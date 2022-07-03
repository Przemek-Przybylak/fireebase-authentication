import { configureStore } from "@reduxjs/toolkit";
import firebaseReducer from "../firebaseSlice";

const store = configureStore({
  reducer: {
    firebase: firebaseReducer,
  },
});

export default store;
