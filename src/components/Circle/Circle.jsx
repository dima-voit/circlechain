import React from 'react';
import clsx from 'clsx';

import styles from './Circle.module.scss';

const Circle = ({ className }) => {
  return (
    <div className={clsx(styles["circle"], className)}></div>
  )
}

export default Circle;
