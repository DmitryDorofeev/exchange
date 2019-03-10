import React, { Component } from 'react';
import styles from './App.module.css';
import {Exchange} from '../Exchange/Exchange';
import {connect} from 'react-redux';
import {changeValue, switchFromCurrency, switchToCurrency, exchange} from '../../modules/exchange/actions';

export class App extends Component {
  render() {
    const {
      pockets,
      from,
      to,
      exchange,
      changeValue,
      switchFromCurrency,
      switchToCurrency,
    } = this.props;

    return (
      <div className={styles.app}>
        <Exchange
          pockets={pockets}
          from={from}
          to={to}
          onInputChange={changeValue}
          onExchange={exchange}
          onFromSwitch={switchFromCurrency}
          onToSwitch={switchToCurrency}
        />
      </div>
    );
  }
}

const mapStateToProps = ({pockets, rates, exchange}) => ({
  from: {
    currency: exchange.from,
    amount: pockets[exchange.from].amount,
    value: exchange.value,
  },
  to: {
    currency: exchange.to,
    amount: pockets[exchange.to].amount,
    value: exchange.result,
  },
  pockets: Object.values(pockets),
});

const mapDispatchToProps = {
  exchange,
  changeValue,
  switchFromCurrency,
  switchToCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
