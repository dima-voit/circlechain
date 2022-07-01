import React from 'react';
import clsx from 'clsx';

import styles from './Main.module.scss';

const Main = ({ children, className }) => {
  return (
    <main className={clsx(styles["main"], className)}>
      { children }
    </main>
  )
}

export default Main;
