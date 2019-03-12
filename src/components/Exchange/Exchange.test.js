import React from 'react';
import {shallow} from 'enzyme';
import {Exchange} from './Exchange';

describe('Exchange component', () => {

  it('should match snapshot', () => {
    const pockets = [
      {amount: 3, currency: 'USD'},
      {amount: 3, currency: 'GBP'},
    ];
    const from = {value: 3, currency: 'USD'};
    const to = {value: 3, currency: 'GBP'};
    const exchange = shallow(<Exchange pockets={pockets} from={from} to={to}/>);

    expect(exchange).toMatchSnapshot();
  });

  it('should be disable when currencies are same', () => {
    const pockets = [
      {amount: 3, currency: 'USD'},
      {amount: 3, currency: 'GBP'},
    ];
    const from = {value: 3, currency: 'USD'};
    const to = {value: 3, currency: 'USD'};
    const exchange = shallow(<Exchange pockets={pockets} from={from} to={to}/>);

    expect(exchange).toMatchSnapshot();
  });

  it('should be disable when value is less then amount', () => {
    const pockets = [
      {value: 3, currency: 'USD'},
      {value: 3, currency: 'GBP'},
    ];
    const from = {value: 4, currency: 'USD'};
    const to = {value: 3, currency: 'GBP'};
    const exchange = shallow(<Exchange pockets={pockets} from={from} to={to}/>);

    expect(exchange).toMatchSnapshot();
  })
});