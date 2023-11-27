import { SagaIterator } from '@redux-saga/core';
import { call, put, takeEvery } from 'redux-saga/effects';

import { notificationsActions } from '../../../libs/stores/reducers/notifications.slice';
import { getProduct, addToCart, editProduct, getCartView } from '../api';
import { ProductResponse } from '../types';
import { productsActions } from './product.slice';

// Worker Sagas
export function* onGetProduct(): SagaIterator {
  const product: ProductResponse[] = yield call(getProduct);
  yield put(productsActions.fetchAllSucceeded(product));
}

function* onGetCart(): SagaIterator {
  const productData: ProductResponse[] = yield call(getCartView);
  yield put(productsActions.fetchAllCartSucceeded(productData));
}

function* onAddToCart({
  payload,
}: {
  type: typeof productsActions.addToCardId;
  payload: any;
}): SagaIterator {
  try {
    if (!payload.quantity) {
      const addToCarts: string = yield call(addToCart, payload.product.id);
      yield put(productsActions.fetchAddToCardSucceeded(addToCarts));
    }
  } catch (error) {
    yield put(
      notificationsActions.addNotification({
        message: 'Add cart was not found.',
        type: 'error',
      })
    );
  }
}

function* onEditProduct({
  payload,
}: {
  type: typeof productsActions.editProduct;
  payload: any;
}): SagaIterator {
  try {
    const editProducts: ProductResponse = yield call(editProduct, payload.id);
    yield put(productsActions.fetchEditProductSucceeded(editProducts));
  } catch (error) {
    yield put(
      notificationsActions.addNotification({
        message: 'Search was not found.',
        type: 'error',
      })
    );
  }
}

// Watcher Saga
export function* productWatcherSaga(): SagaIterator {
  yield takeEvery(productsActions.fetchAll.type, onGetProduct);
  yield takeEvery(productsActions.fetchAllCart.type, onGetCart);
  yield takeEvery(productsActions.editProduct.type, onEditProduct);
  yield takeEvery(productsActions.addToCardId.type, onAddToCart);
}

export default productWatcherSaga;
