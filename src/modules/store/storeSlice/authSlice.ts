// store/authSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: Array | null;
  userRole: string | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  userRole: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<AuthState>) {
      state.user = action.payload;
      state.userRole = action.payload.user;
      state.token = action.payload.token;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.userRole = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
