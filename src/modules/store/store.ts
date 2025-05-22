import { configureStore } from "@reduxjs/toolkit";
import { tallySlice } from "./storeSlice/projectSlice";
import authReducer from './storeSlice/authSlice';
import { loadState, saveState } from './storage';

const preloadedState = loadState();

export const store = configureStore({
    reducer: {
    projectRedux: tallySlice.reducer,
    auth: authReducer,
  },
  preloadedState,
})

// Persist to storage on every change
store.subscribe(() => {
  const { auth } = store.getState();
  saveState({ auth });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
