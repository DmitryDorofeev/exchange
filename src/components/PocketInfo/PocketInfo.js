import React from 'react';
import {getCurrencySymbol} from '../../utils/currency';
import styles from './PocketInfo.module.css';
import {Input} from '../Input/Input';

export const PocketInfo = ({currency, amount, editable, onInputChange, value}) => {
  return (
    <div className={styles.root}>
      <div>
        <div className={styles.currency}>{currency}</div>
        <div className={styles.amount}>
          You have {getCurrencySymbol(currency)}{amount.toFixed(2)}
        </div>
      </div>
      <div>
        {value > amount && editable ? (
          <div className={styles.error}>
            You don't have {getCurrencySymbol(currency)}{value}
          </div>
        ) : null}
        {editable ? <Input value={value.toFixed(2)} onChange={onInputChange}/> : value.toFixed(2)}
      </div>
    </div>
  );
};

PocketInfo.defaultProps = {
  onInputChange: () => null,
};
