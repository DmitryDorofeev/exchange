import {pockets} from './reducers';

describe('pockets reducer', () => {
  it('should return state on unknown action', () => {
    let state = {};
    expect(pockets(state, {type: "unknown"})).toBe(state);
  });

  it('should set new values to pocket on @exchange/EXCHANGE', () => {
    const state = {
      USD: {
        currency: 'USD',
        amount: 20,
      },
      GBP: {
        currency: 'GBP',
        amount: 10,
      }
    };
    const action = {
      type: '@exchange/EXCHANGE',
      payload: {
        from: {
          currency: 'USD',
          amount: 20,
          value: 10,
        },
        to: {
          currency: 'GBP',
          amount: 10,
          value: 7,
        }
      },
    };

    expect(pockets(state, action)).toEqual({
      USD: {
        currency: 'USD',
        amount: 10,
      },
      GBP: {
        currency: 'GBP',
        amount: 17,
      }
    });
  });
});