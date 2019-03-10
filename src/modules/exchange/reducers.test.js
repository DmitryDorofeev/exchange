import {pockets} from './reducers';

describe('pockets reducer', () => {
  it('should return state', () => {
    expect(pockets({}, {type: "ba"})).toEqual({})
  })
});