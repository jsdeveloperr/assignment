/* eslint-disable @typescript-eslint/indent */
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import logger from 'redux-logger';

import { Env } from '../config/Env';
import productReducer from '../features/product/store/product.slice';
import profileReducer from '../features/profile/store/profile.slice';
import signinReducer from '../features/signin/store/signin.slice';
import notificationsReducer from '../libs/stores/reducers/notifications.slice';
import { rootSaga } from './rootSaga';

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
    reduxTravelling: Env.isDev(),
    savePreviousLocations: 1,
  });

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: {
      product: productReducer,
      signin: signinReducer,
      router: routerReducer,
      notifications: notificationsReducer,
      profile: profileReducer,
    },
    devTools: Env.isReduxLogger(),
    middleware: getDefaultMiddleware =>
      Env.isReduxLogger()
        ? getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: [''],
            },
            thunk: false,
          })
            .concat(sagaMiddleware)
            .concat(routerMiddleware)
            .concat(logger)
        : getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: [''],
            },
            thunk: false,
          })
            .concat(sagaMiddleware)
            .concat(routerMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export const store = makeStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const history = createReduxHistory(store);
