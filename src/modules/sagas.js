import {fork} from 'redux-saga/effects';
import {pollFetchRates} from './rates/sagas';
import {watchInputChange} from './exchange/sagas';

export default function* () {
  yield fork(pollFetchRates);
  yield fork(watchInputChange);
}