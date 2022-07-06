import React from 'react';
import clsx from 'clsx';

import styles from './Input.module.scss';

const Input = ({ className, type }) => {
  return (
    <input className={clsx(styles["input"], className)} type={type}/>
  )
}

export default Input;
