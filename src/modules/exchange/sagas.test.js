import {put, select, call} from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';
import {calculateResult, selectExchange, updateResult} from './sagas';
import {rateSelector} from '../rates/sagas';

describe('calculateResult', () => {
  const it = sagaHelper(calculateResult({from: 'EUR', to: 'USD', amount: 3}));

  it('should select rates from state', (result) => {
    expect(result).toEqual(select(rateSelector));

    return {
      USD: 1,
      EUR: 3,
      GBP: 4,
    };
  });
});


describe('updateResult saga test', () => {
  const it = sagaHelper(updateResult());

  it('should select exchange info from state', (result) => {
    expect(result).toEqual(select(selectExchange));

    return {
      from: 'USD',
      to: 'GBP',
      value: 3,
    }
  });

  it('should call calculate result', (result) => {
    expect(result).toEqual(call(calculateResult, {from: 'USD', to: 'GBP', amount: 3}));

    return 9;
  });

  it('should put action with calculated result', (result) => {
    expect(result).toEqual(put({
      type: '@exchange/CHANGE_RESULT',
      payload: 9,
    }));
  });

});