import { configureStore } from "@reduxjs/toolkit";
//import tallySlice from "./storeSlice/projectSlice";
import authReducer from './storeSlice/authSlice';
import { combineReducers } from 'redux';
import { loadState, saveState } from './storage';
import { tallySlice } from "./storeSlice/projectSlice";

const preloadedState = loadState();

const rootReducer = combineReducers({
  auth: authReducer,
  projectRedux: tallySlice
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});
// export const store = configureStore({
//     reducer: {
//       auth: authReducer,
//       projectRedux: tallySlice.reducer,    
//   },
//   preloadedState,
// })

// Persist to storage on every change
store.subscribe(() => {
  const { auth } = store.getState();
  saveState({ auth });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
