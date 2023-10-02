import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./Events/eventSlice";

const store = configureStore({
  reducer: {
    events: eventReducer,
  },
});

export default store;
