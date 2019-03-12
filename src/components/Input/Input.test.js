import React from 'react';
import {shallow} from 'enzyme';
import {Input} from './Input';

describe('Input component', () => {
  const input = shallow(<Input/>);

  it('matches snapshot', () => {
    expect(input).toMatchSnapshot();
  });

  it('runs onChange on input', () => {
    const mock = jest.fn();

    input.setProps({
      onChange: mock,
    });

    input.simulate('change', {target: {value: '1'}});

    expect(mock).toBeCalledWith(1);
  });
});