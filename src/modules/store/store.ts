import { configureStore } from "@reduxjs/toolkit";
import { tallySlice } from "./storeSlice/projectSlice";

export const store = configureStore({
    reducer: {
    projectRedux: tallySlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
