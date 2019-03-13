import React from 'react';
import styles from './Input.module.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Input = ({value, onChange, error}) => {
  return (
    <input
      type="text"
      className={classnames(styles.input, {[styles.error]: error})}
      value={[0, '0', ''].includes(value) ? '' : `-${value}`}
      onChange={({target: {value}}) => {
        value = value.replace('-', '');
        onChange(parseFloat(value))
      }}
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