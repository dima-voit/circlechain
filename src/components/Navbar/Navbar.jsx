import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">How It Works</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/support">Support</NavLink>
    </nav>
  )
}

export default Navbar;
