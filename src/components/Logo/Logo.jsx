import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';

import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img src={logo} alt="Circlechain" />
      </Link>
    </div>
  )
}

export default Logo;
