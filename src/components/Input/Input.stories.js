import React from 'react';
import {storiesOf} from '@storybook/react';
import {Input} from './Input';

storiesOf('Input', module)
  .add('default', () => <Input value="50.00"/>)
  .add('error', () => <Input value="50.00" error/>);