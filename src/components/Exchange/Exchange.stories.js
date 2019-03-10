import React from 'react';
import {storiesOf} from '@storybook/react';
import {Exchange} from './Exchange';

const buy = {
  amount: 30,
  currency: 'GBP',
};

const sell = {
  amount: 50,
  currency: 'EUR',
};

storiesOf('Exchange', module)
  .add('default', () => <Exchange buy={buy} sell={sell}/>);