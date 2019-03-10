import React from 'react';
import styles from './Button.module.css';
import classnames from 'classnames';

export const Button = ({children, onClick, disabled}) => {
  return (
    <button
      className={classnames(styles.button, {[styles.disabled]: disabled})}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
};