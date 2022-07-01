import React from 'react';

import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import Social from '../Social/Social';

import styles from './Footer.module.scss';

const startYear = 2022;
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footer__container}>
        <div className={styles.footer__inner}>
          <div className={styles.footer__item}>
            <Logo className={styles.footer__logo} />
            <div>
              <p>
                Amet minim mollit non deserunt ullamco est aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit. Exercitation veniamconsequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className={styles.footer__item}>
            <h4 className={styles.footer__title}>Quick Link</h4>
            <Navbar className={styles.footer__nav} />
          </div>
          <div className={styles.footer__item}>
            <h4 className={styles.footer__title}>Social Media</h4>
            <Social />
          </div>
        </div>
        <small>
          © {startYear === currentYear ? startYear : startYear + "-" + currentYear} <span>Circlechain</span>
        </small>
      </Container>
    </footer>
  )
}

export default Footer;
