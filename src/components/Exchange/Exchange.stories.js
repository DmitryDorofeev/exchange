import React from 'react';
import {storiesOf} from '@storybook/react';
import {Exchange} from './Exchange';

const from = {
  value: 30,
  currency: 'GBP',
};

const to = {
  value: 50,
  currency: 'EUR',
};

const pockets = [
  {amount: 300, currency: 'EUR'},
  {amount: 3000, currency: 'GBP'},
];

storiesOf('Exchange', module)
  .add('default', () => <Exchange pockets={pockets} from={from} to={to}/>);