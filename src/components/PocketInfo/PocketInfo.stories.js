import React from 'react';
import {PocketInfo} from './PocketInfo';
import {storiesOf} from '@storybook/react';

storiesOf('PocketInfo', module)
  .add('default', () => <PocketInfo currency={"GBP"} amount={30}/>);