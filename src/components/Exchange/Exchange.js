import React from 'react';
import PropTypes from 'prop-types';
import {PocketInfo} from '../PocketInfo/PocketInfo';
import {Slider} from '../Slider/Slider';
import styles from './Exchange.module.css';
import {Button} from '../Button/Button';

export const Exchange = ({pockets, from, to, onExchange, onInputChange, onFromSwitch, onToSwitch}) => {
  return (
    <div className={styles.root}>
      <Slider
        onChange={(index) => onFromSwitch(pockets[index].currency)}
        active={pockets.findIndex((pocket) => pocket.currency === from.currency)}
      >
        {pockets.map((pocket, key) => (
          <PocketInfo
            amount={pocket.amount}
            currency={pocket.currency}
            onInputChange={onInputChange}
            value={from.value}
            editable
            key={key}
          />
        ))}
      </Slider>
      <Slider
        onChange={(index) => onToSwitch(pockets[index].currency)}
        active={pockets.findIndex((pocket) => pocket.currency === to.currency)}
      >
        {pockets.map((pocket, key) => (
          <PocketInfo
            amount={pocket.amount}
            currency={pocket.currency}
            value={to.value}
            key={key}
          />
        ))}
      </Slider>
      <div className={styles.button}>
        <Button
          disabled={from.currency === to.currency || from.value > from.amount}
          onClick={() => onExchange({from, to})}
        >
          Exchange
        </Button>
      </div>
    </div>
  )
};

Exchange.defaultProps = {
  onExchange: () => null,
  onInputChange: () => null,
  onFromSwitch: () => null,
  onToSwitch: () => null,
  pockets: [],
};

const PocketType = PropTypes.shape({
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
});

Exchange.propTypes = {
  from: PocketType.isRequired,
  to: PocketType.isRequired,
};
