import {from, to, value, result} from './reducers';

describe('exchange reducers', () => {

  describe('from reducer', () => {
    it('should return state on unknown action', () => {
      expect(from('USD', {type: 'unknown'})).toBe('USD');
    });

    it('should return new currency on @exchange/SWITCH_CURRENCY with direction = from', () => {
      const action = {type: '@exchange/SWITCH_CURRENCY', payload: {direction: 'from', currency: 'GBP'}};

      expect(from('USD', action)).toBe('GBP');
    });

    it('should return state on @exchange/SWITCH_CURRENCY with direction = to', () => {
      const action = {type: '@exchange/SWITCH_CURRENCY', payload: {direction: 'to', currency: 'GBP'}};

      expect(from('USD', action)).toBe('USD');
    });
  });

  describe('to reducer', () => {
    it('should return state on unknown action', () => {
      expect(to('USD', {type: 'unknown'})).toBe('USD');
    });

    it('should return new currency on @exchange/SWITCH_CURRENCY with direction = to', () => {
      const action = {type: '@exchange/SWITCH_CURRENCY', payload: {direction: 'to', currency: 'GBP'}};

      expect(to('USD', action)).toBe('GBP');
    });

    it('should return state on @exchange/SWITCH_CURRENCY with direction = to', () => {
      const action = {type: '@exchange/SWITCH_CURRENCY', payload: {direction: 'from', currency: 'GBP'}};

      expect(to('USD', action)).toBe('USD');
    });
  });

  describe('value reducer', () => {
    it('should return state on unknown action', () => {
      expect(value(0, {type: 'unknown'})).toBe(0);
    });

    it('should return new value on @exchange/CHANGE_VALUE', () => {
      const action = {type: '@exchange/CHANGE_VALUE', payload: 1};

      expect(value(0, action)).toBe(1);
    });

  });


  describe('result reducer', () => {
    it('should return state on unknown action', () => {
      expect(result(0, {type: 'unknown'})).toBe(0);
    });

    it('should return new result on @exchange/CHANGE_RESULT', () => {
      const action = {type: '@exchange/CHANGE_RESULT', payload: 1};

      expect(result(0, action)).toBe(1);
    });

  });

});