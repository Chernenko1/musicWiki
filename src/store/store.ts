import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import groupReducer from "./slices/groupSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    groups: groupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
