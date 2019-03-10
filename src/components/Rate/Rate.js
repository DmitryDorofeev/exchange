import React from 'react';
import {getCurrencySymbol} from '../../utils/currency';
import styles from './Rate.module.css';
import {Loader} from '../Loader/Loader';

export const Rate = ({from, to, rates, loading}) => {
  const rate = rates[from.currency] / rates[to.currency];
  const rateLine = `1${getCurrencySymbol(to.currency)} = ${rate.toFixed(2)}${getCurrencySymbol(from.currency)}`;

  return (
    <div className={styles.root}>
      {loading ? <Loader/> : rateLine}
    </div>
  )
};