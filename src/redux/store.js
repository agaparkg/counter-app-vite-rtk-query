import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { postsApiSlice } from "./postsApiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [postsApiSlice.reducerPath]: postsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(postsApiSlice.middleware);
  },
});
