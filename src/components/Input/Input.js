import React from 'react';
import styles from './Input.module.css';
import PropTypes from 'prop-types';

export const Input = ({value, onChange}) => {
  return (
    <input
      type="number"
      className={styles.input}
      value={value}
      onChange={({target: {value}}) => onChange(parseInt(value, 10))}
    />
  );
};

Input.defaultProps = {
  onChange: () => null,
};

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
};