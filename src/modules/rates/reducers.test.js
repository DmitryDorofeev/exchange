import {list, loading} from './reducers';

describe('rates reducers', () => {

  describe('list reducer', () => {
    it('should return state with unknown action', () => {
      let state = {};

      expect(list(state, {type: 'unknown'})).toBe(state);
    });

    it('should return updated list on @rates/FETCH_SUCCEEDED', () => {
      const action = {type: '@rates/FETCH_SUCCEEDED', payload: {EUR: 1, GBP: 2}};

      expect(list({}, action)).toEqual({EUR: 1, GBP: 2, USD: 1});
    });
  });

  describe('loading reducer', () => {
    it('should return state with unknown action', () => {
      let state = {};

      expect(list(state, {type: 'unknown'})).toBe(state);
    });

    it('should return true on @rates/FETCH_STARTED', () => {
      const action = {type: '@rates/FETCH_STARTED'};

      expect(loading(false, action)).toBe(true);
    });

    it('should return false on @rates/FETCH_SUCCEEDED', () => {
      const action = {type: '@rates/FETCH_SUCCEEDED'};

      expect(loading(true, action)).toBe(false);
    });

    it('should return false on @rates/FETCH_FAILED', () => {
      const action = {type: '@rates/FETCH_FAILED'};

      expect(loading(true, action)).toBe(false);
    });
  });

});