// store/authSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: Array<string>;
  userRole: string;
  token: string;
}

const initialState: AuthState = {
  user: [],
  token: '',
  userRole: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<AuthState>) {
      state.user = action.payload.user;
      state.userRole = action.payload.user[0]??"";
      state.token = action.payload.token;
    },
    logout(state) {
      state.user = [];
      state.token = "";
      state.userRole = "";
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
