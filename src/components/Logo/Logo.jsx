import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.svg';

import styles from './Logo.module.scss';

const Logo = ({ className }) => {
  return (
    <div className={clsx(styles["logo"], className)}>
      <Link to="/">
        <img src={logo} alt="Circlechain" />
      </Link>
    </div>
  )
}

export default Logo;
