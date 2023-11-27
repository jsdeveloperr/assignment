/* eslint-disable no-param-reassign */
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../../store/store';
import { Profile } from '../types';

export interface ProfileState {
  profile: Profile;
}

const initialState: ProfileState = {
  profile: {} as Profile,
};

// slice
export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    fetchAllSucceeded(state, action: PayloadAction<Profile>) {
      state.profile = action.payload;
    },
  },
});

// Actions
export const profileActions = {
  fetchAll: createAction(`${profileSlice.name}/fetchAll`),
  fetchAllSucceeded: profileSlice.actions.fetchAllSucceeded,
};

// Selectors
export const selectProfile = (state: RootState) => state.profile.profile;

// Reducer
export default profileSlice.reducer;
