import {CHANGE_VALUE, CHANGE_RESULT, SWITCH_CURRENCY} from './actions';
import {combineReducers} from 'redux';

const from = (state = 'USD', action) => {
  switch (action.type) {
    case SWITCH_CURRENCY:
      if (action.payload.direction === 'from') {
        return action.payload.currency;
      }

      return state;
    default:
      return state;
  }
};

const to = (state = 'GBP', action) => {
  switch (action.type) {
    case SWITCH_CURRENCY:
      if (action.payload.direction === 'to') {
        return action.payload.currency;
      }

      return state;
    default:
      return state;
  }
};

const value = (state = 0, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return action.payload;
    default:
      return state;
  }
};

const result = (state = 0, action) => {
  switch (action.type) {
    case CHANGE_RESULT:
      return action.payload;
    default:
      return state;
  }
};

export const exchange = combineReducers({from, to, value, result});
