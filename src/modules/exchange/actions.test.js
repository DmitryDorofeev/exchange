import {startTransaction, completeTransaction} from './actions';

describe('pockets actions', () => {
  it('startTransaction should return action object', () => {
    const expected = {
      type: "@pockets/START_TRANSACTION",
      payload: {
        from: {},
        to: {},
        amount: 2
      },
    };

    expect(startTransaction({}, {}, 2)).toEqual(expected);
  });

  it('completeTransaction should return action object', () => {
    const expected = {
      type: "@pockets/COMPLETE_TRANSACTION",
      payload: {},
    };

    expect(completeTransaction({})).toEqual(expected);
  })
});