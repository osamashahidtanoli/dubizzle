// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import rootReducer from './reducers'; // Create this file
import gistUserSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

function* rootSaga() {
  // Add your sagas here
  yield all([
    fork(gistUserSaga),
  ]);
}

sagaMiddleware.run(rootSaga);

export default store;
