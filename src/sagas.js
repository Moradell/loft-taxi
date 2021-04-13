import { all, fork } from 'redux-saga/effects';
import { addressSaga } from './addressSaga';
import { authSaga } from './authSaga';
import { paymentSaga } from './paymentSaga';
import { regSaga } from './regSaga';

export function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(paymentSaga),
    fork(addressSaga),
    fork(regSaga),
  ]);
}