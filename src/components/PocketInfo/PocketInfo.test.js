import React from 'react';
import {shallow} from 'enzyme';
import {PocketInfo} from './PocketInfo';

describe('PocketInfo component', () => {
  it('matches snapshot', () => {
    const pocketInfo = shallow(<PocketInfo amount={2} value={3} currency={'GBP'} />);
    expect(pocketInfo).toMatchSnapshot();
  });

  it('renders input when editable', () => {
    const pocketInfo = shallow(<PocketInfo amount={2} value={3} currency={'GBP'} editable />);
    expect(pocketInfo).toMatchSnapshot();
  });
});