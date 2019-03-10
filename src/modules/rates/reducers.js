import {combineReducers} from 'redux';
import {FETCH_FAILED, FETCH_STARTED, FETCH_SUCCEEDED} from './actions';

const base = {USD: 1};

const list = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SUCCEEDED:
      return {...base, ...action.payload};
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case FETCH_STARTED:
      return true;
    case FETCH_SUCCEEDED:
    case FETCH_FAILED:
      return false;
    default:
      return state;
  }
};

export const rates = combineReducers({list, loading});