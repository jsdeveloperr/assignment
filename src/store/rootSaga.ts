import { fork } from 'redux-saga/effects';

import { productWatcherSaga } from '../features/product/store/product.sagas';
import { profileWatcherSaga } from '../features/profile/store/profile.sagas';
import { signinWatcherSaga } from '../features/signin/store/signin.sagas';

export function* rootSaga() {
  yield fork(signinWatcherSaga);
  yield fork(productWatcherSaga);
  yield fork(profileWatcherSaga);
}

export default rootSaga;
