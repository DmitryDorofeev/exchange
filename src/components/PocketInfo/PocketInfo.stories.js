import React from 'react';
import {PocketInfo} from './CurrencyInput';
import {storiesOf} from '@storybook/react';

storiesOf('PocketInfo', module)
  .add('default', () => <PocketInfo currency={"GBP"} amount={30}/>);