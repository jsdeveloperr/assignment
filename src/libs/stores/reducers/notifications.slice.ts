import { AlertColor } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../../store/store';

export interface SnackbarOrigin {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

export interface NotificationState {
  open?: boolean;
  type?: AlertColor;
  vertical?: any;
  horizontal?: any;
  message?: string;
  timeout?: number | null;
}

const initialState: NotificationState = {
  open: false,
  type: 'info',
  vertical: 'top',
  horizontal: 'center',
  message: '',
  timeout: 2000,
};

// slice
export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (_state, action: PayloadAction<NotificationState>) => ({
      ...initialState,
      ...action.payload,
      open: true,
    }),
    clearNotification: state => ({ ...state, open: false }),
  },
});

// Actions
export const notificationsActions = notificationsSlice.actions;

// Selectors
export const selectNotifications = (state: RootState) => state.notifications;

// Reducer
export default notificationsSlice.reducer;
