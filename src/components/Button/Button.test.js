import React from 'react';
import {shallow} from 'enzyme';
import {Button} from './Button';

describe('Button component', () => {
  const button = shallow(<Button/>);

  it('matches snapshot', () => {
    expect(button).toMatchSnapshot();
  });

  it('runs onClick function', () => {
    const mock = jest.fn();

    button.setProps({
      onClick: mock,
    });

    button.simulate('click');

    expect(mock).toBeCalled();
  });
});

describe('Button component disabled', () => {
  const button = shallow(<Button disabled/>);

  it('matches snapshot', () => {
    expect(button).toMatchSnapshot();
  });

});