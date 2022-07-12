import React from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

const Button = ({ className, type, onClick, children, disabled }) => {
  return (
    <button className={clsx(styles["btn"], className)} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button;
