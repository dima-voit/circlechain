import React from 'react';
import { IoReorderThreeOutline, IoCloseOutline } from 'react-icons/io5';

import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import Social from '../Social/Social';
// import Button from '../UI/Button/Button';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Container className={styles.header__container}>
        <Logo />
        <Navbar />
        <Social />
        {/* <Button className={styles.header__toggle}>
          <IoReorderThreeOutline />
        </Button> */}
      </Container>
    </div>
  )
}

export default Header;
