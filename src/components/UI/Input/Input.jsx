import React from 'react';
import clsx from 'clsx';

import styles from './Input.module.scss';

const Input = ({ className, type, id, name, value, onChange, placeholder }) => {
  return (
    <input 
      className={clsx(styles["input"], className)} 
      type={type} 
      id={id} 
      name={name} 
      value={value} 
      onChange={onChange}
      placeholder={placeholder} />
  )
}

export default Input;
