import {fork} from 'redux-saga/effects';
import {pollFetchRates} from './rates/sagas';
import {watchExchange, watchInputChange} from './exchange/sagas';

export default function* () {
  yield fork(pollFetchRates);
  yield fork(watchInputChange);
  yield fork(watchExchange);
}