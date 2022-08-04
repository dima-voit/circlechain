import React from 'react';
import clsx from 'clsx';

import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';

const Navbar = ({ className, onClick }) => {
  return (
    <nav className={clsx(styles["nav"], className)}>
      <NavLink to="/" className={({isActive}) => isActive ? styles.active__link : ""} onClick={onClick}>Home</NavLink>
      <NavLink to="/blog" className={({isActive}) => isActive ? styles.active__link : ""} onClick={onClick}>Blog</NavLink>
      <NavLink to="/support" className={({isActive}) => isActive ? styles.active__link : ""} onClick={onClick}>Support</NavLink>
    </nav>
  )
}

export default Navbar;
