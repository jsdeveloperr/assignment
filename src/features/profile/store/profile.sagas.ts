import { SagaIterator } from '@redux-saga/core';
import { call, put, takeEvery } from 'redux-saga/effects';

import { getProfile } from '../api';
import { Profile } from '../types';
import { profileActions } from './profile.slice';

// Worker Sagas
export function* onGetProfile(): SagaIterator {
  try {
    const profile: Profile = yield call(getProfile);
    yield put(profileActions.fetchAllSucceeded(profile));
  } catch (error) {
    console.log('error:', error);
  }
}

// Watcher Saga
export function* profileWatcherSaga(): SagaIterator {
  yield takeEvery(profileActions.fetchAll.type, onGetProfile);
}

export default profileWatcherSaga;
