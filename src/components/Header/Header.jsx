import React, { useState } from 'react';
import { IoReorderThreeOutline, IoCloseOutline } from 'react-icons/io5';

import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import Social from '../Social/Social';

import styles from './Header.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);
  return (
    <header className={styles.header}>
      <Container className={styles.header__container}>
        <Logo />
        <Navbar className={`${styles.header__nav} ${menuOpen ? styles[`header__nav-open`] : {}}`} />
        <Social className={styles.header__social} />
        <div className={styles.header__toggle} onClick={menuToggler}>
          {!menuOpen ? <IoReorderThreeOutline /> : <IoCloseOutline />}
        </div>
      </Container>
    </header>
  )
}

export default Header;
