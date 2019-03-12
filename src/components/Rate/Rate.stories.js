import React from 'react';
import {Rate} from './Rate';
import {storiesOf} from '@storybook/react';

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

storiesOf('Rate', module)
  .add('default', () => <Rate rates={rates} from={from} to={to}/>);