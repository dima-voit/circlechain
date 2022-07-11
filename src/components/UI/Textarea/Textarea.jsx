import React from 'react';
import clsx from 'clsx';

import styles from './Textarea.module.scss';

const Textarea = ({ className, id, name, value, onChange, placeholder, rows }) => {
  return (
    <textarea
      className={clsx(styles["textarea"], className)}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
    ></textarea>
  )
}

export default Textarea;
