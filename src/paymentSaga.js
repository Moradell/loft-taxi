import { takeEvery, call, put } from "@redux-saga/core/effects";
import { cardInfo, CARD_INFO } from "./actions";
import { paymentCard } from "./api";

export function* doPayment(action) {
  const { cardNumber, expireDate, cardName, cvc } = action.payload;
  const success = yield call(paymentCard, cardNumber, expireDate, cardName, cvc)
  if (success) {
    yield put(cardInfo())
  }
}

export function* paymentSaga() {
  yield takeEvery(CARD_INFO, doPayment)
}