import {put, call} from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';
import {fetchRates} from './sagas';
import {fetchRatesApi} from '../../utils/rates';

describe('fetch rates succeeded', () => {
  const it = sagaHelper(fetchRates());

  it('should put fetch start action', (result) => {
    expect(result).toEqual(put({
      type: '@rates/FETCH_STARTED',
    }));
  });

  it('should call fetch func', (result) => {
    expect(result).toEqual(call(fetchRatesApi, ['EUR', 'GBP']));

    return {
      response: {
        'EUR': 1,
        'GBP': 2,
      },
    };
  });

  it('should put success action', (result) => {
    expect(result).toEqual(put({
      type: '@rates/FETCH_SUCCEEDED',
      payload: {
        'EUR': 1,
        'GBP': 2,
      },
    }));
  });
});

describe('fetch rates failed', () => {
  const it = sagaHelper(fetchRates());

  it('should put fetch start action', (result) => {
    expect(result).toEqual(put({
      type: '@rates/FETCH_STARTED',
    }));
  });

  it('should call fetch func', (result) => {
    expect(result).toEqual(call(fetchRatesApi, ['EUR', 'GBP']));

    return {
      error: 'cannot fetch',
    };
  });

  it('should put fail action', (result) => {
    expect(result).toEqual(put({
      type: '@rates/FETCH_FAILED',
      payload: 'cannot fetch',
    }));
  });
});