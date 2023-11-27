import { SagaIterator } from '@redux-saga/core';
import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { call, put, take, fork } from 'redux-saga/effects';

import { notificationsActions } from '../../../libs/stores/reducers/notifications.slice';
import { createSignin } from '../api';
import { signinActions, LoginPayload } from './signin.slice';

function* handleLogin(payload: LoginPayload) {
  try {
    yield call(createSignin, payload);
    yield put(signinActions.loginSuccess(payload));
    yield put(
      notificationsActions.addNotification({
        message: 'Login success redirecting to products',
        type: 'success',
      })
    );
    // Redirect to products page
    yield put(push('/product'));
    window.location.reload();
  } catch (error: any) {
    yield put(signinActions.loginFailed(error.message));
    yield put(
      notificationsActions.addNotification({
        message:
          error && error.response
            ? error.response.data.detail
            : 'No active account found with the given credentials',
        type: 'error',
      })
    );
    window.location.reload();
  }
}

function* handleLogout() {
  yield put(
    notificationsActions.addNotification({
      message: 'Your logout was successfully',
      type: 'success',
    })
  );
  localStorage.removeItem('session_Id');
  // yield put(push('/signin'));
  window.location.reload();
}

// Watcher Saga
export function* signinWatcherSaga(): SagaIterator {
  try {
    while (true) {
      const isLoggedIn = Boolean(localStorage.getItem('session_Id'));

      if (!isLoggedIn) {
        const action: PayloadAction<LoginPayload> = yield take(
          signinActions.login.type
        );
        yield fork(handleLogin, action.payload);
      }

      yield take(signinActions.logout.type);
      yield call(handleLogout);
    }
  } catch (error) {
    console.log('error:', error);
  }
}

export default signinWatcherSaga;
