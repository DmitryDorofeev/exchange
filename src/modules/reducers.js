import {combineReducers} from 'redux';
import {pockets} from './pockets/reducers';
import {rates} from './rates/reducers';
import {exchange} from './exchange/reducers';

export default combineReducers({
  pockets,
  rates,
  exchange,
});
