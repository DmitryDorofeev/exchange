import {put, select, call} from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';
import {calculateResult, makeTransaction} from './sagas';
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


describe('makeTransaction sagas test', () => {
  const it = sagaHelper(makeTransaction({from: 'EUR', to: 'USD', amount: 3}));

  it('should call calculate result', (result) => {
    expect(result).toEqual(call(calculateResult, {from: 'EUR', to: 'USD', amount: 3}));

    return 9;
  });

  it('should put action with calculated result', (result) => {
    expect(result).toEqual(put({
      type: "@pockets/COMPLETE_TRANSACTION",
      payload: {
        EUR: -3,
        USD: 9,
      }
    }));
  });

});