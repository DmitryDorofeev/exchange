import {CHANGE_VALUE, CHANGE_RESULT, SWITCH_CURRENCY} from './actions';
import {combineReducers} from 'redux';

export const from = (state = 'USD', action) => {
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

export const to = (state = 'GBP', action) => {
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

export const value = (state = 0, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return action.payload;
    default:
      return state;
  }
};

export const result = (state = 0, action) => {
  switch (action.type) {
    case CHANGE_RESULT:
      return action.payload;
    default:
      return state;
  }
};

export const exchange = combineReducers({from, to, value, result});
