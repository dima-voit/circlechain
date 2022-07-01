import React from 'react';
import clsx from 'clsx';

import styles from './Container.module.scss';

const Container = ({ children, className }) => {
  return (
    <div className={clsx(styles["container"], className)}>
      { children }
    </div>
  )
}

export default Container;
