/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../../store/store';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface SigninState {
  isLoggedIn?: boolean;
  logging?: boolean;
  currentSignIn?: LoginPayload;
}

const initialState: SigninState = {
  isLoggedIn: false,
  logging: false,
  currentSignIn: undefined,
};

const signinSlice = createSlice({
  name: 'signin',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
      state.currentSignIn = action.payload;
    },
    loginSuccess(state, action: PayloadAction<LoginPayload>) {
      state.isLoggedIn = true;
      state.logging = false;
      state.currentSignIn = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
      // eslint-disable-next-line no-console
      console.log(action.payload);
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentSignIn = undefined;
    },
  },
});

// Actions
export const signinActions = signinSlice.actions;

// Selectors
export const selectIsLoggedIn = (state: RootState) => state.signin.isLoggedIn;
export const selectIsLogging = (state: RootState) => state.signin.logging;
export const selectSignin = (state: RootState) => state.signin.currentSignIn;

// Reducer
export default signinSlice.reducer;
