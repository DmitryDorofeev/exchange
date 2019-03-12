import React from 'react';
import {shallow} from 'enzyme';
import {Rate} from './Rate';

describe('Rate component', () => {
  const rates = {
    USD: 1,
    GBP: 0.756179,
  };
  const from = {
    currency: 'GBP',
  };
  const to = {
    currency: 'USD',
  };
  const rate = shallow(<Rate rates={rates} from={from} to={to}/>);

  it('should match snapshot', () => {
    expect(rate).toMatchSnapshot();
  });
});