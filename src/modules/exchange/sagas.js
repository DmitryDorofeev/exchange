import {take, put, call, select} from 'redux-saga/effects';
import {changeResult, CHANGE_VALUE, SWITCH_CURRENCY, EXCHANGE, changeValue} from './actions';
import {rateSelector} from '../rates/sagas';
import {FETCH_SUCCEEDED} from '../rates/actions';

export const selectExchange = (state) => state.exchange;

export function* calculateResult({from, to, amount}) {
  const rates = yield select(rateSelector);

  return amount * rates[to] / rates[from];
}

export function* updateResult() {
  const {from, to, value} = yield select(selectExchange);
  const result = yield call(calculateResult, {from, to, amount: value});

  yield put(changeResult(result));
}

export function* watchInputChange() {
  while (true) {
    yield take([CHANGE_VALUE, SWITCH_CURRENCY, FETCH_SUCCEEDED]);

    yield call(updateResult);
  }
}

export function* watchExchange() {
  while (true) {
    yield take([EXCHANGE]);

    yield put(changeValue(0));
  }
}