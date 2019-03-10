import {EXCHANGE} from '../exchange/actions';

const initialState = {
  'GBP': {
    currency: 'GBP',
    amount: 20,
  },
  'USD': {
    currency: 'USD',
    amount: 40,
  },
  'EUR': {
    currency: 'EUR',
    amount: 50,
  },
};

export const pockets = (state = initialState, action) => {
  switch (action.type) {
    case EXCHANGE:
      const {from, to} = action.payload;
      const fromPocket = state[from.currency];
      const toPocket = state[to.currency];

      return {
        ...state,
        [from.currency]: {
          ...fromPocket,
          amount: from.amount - from.value,
        },
        [to.currency]: {
          ...toPocket,
          amount: to.amount + to.value,
        },
      };
    default:
      return state;
  }
};
