import {put, call, delay} from 'redux-saga/effects';
import {fetchRatesApi} from '../../utils/rates';
import {fetchFailed, fetchStarted, fetchSucceeded} from './actions';

export const rateSelector = (store) => store.rates.list;

function* fetchRates() {
  yield put(fetchStarted());
  const {response, error} = yield call(fetchRatesApi, ['EUR', 'GBP']);
  if (error) {
    yield put(fetchFailed(error));
    return;
  }
  
  yield put(fetchSucceeded(response));
}

export function* pollFetchRates() {
  while (true) {
    yield fetchRates();
    yield delay(10000);
  }
}