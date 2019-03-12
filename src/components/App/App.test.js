import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <App
      rates={{list: []}}
      pockets={[
        {
          currency: 'USD',
          amount: 2,
        },
        {
          currency: 'GBP',
          amount: 3,
        },
      ]}
      from={{
        currency: 'USD',
        amount: 2,
        value: 1,
      }}
      to={{
        currency: 'GBP',
        amount: 3,
        value: 1,
      }}
    />
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
