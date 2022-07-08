import React from 'react';
import clsx from 'clsx';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineYoutube } from 'react-icons/ai';

import styles from './Social.module.scss';

const Social = ({ className }) => {
  return (
    <ul className={clsx(styles["social"], className)}>
      <li className={styles.social__item}>
        <a className={styles.social__item_link} href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <AiOutlineFacebook />
        </a>
      </li>
      <li className={styles.social__item}>
        <a className={styles.social__item_link} href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <AiOutlineInstagram />
        </a>
      </li>
      <li className={styles.social__item}>
        <a className={styles.social__item_link} href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <AiOutlineLinkedin />
        </a>
      </li>
      <li className={styles.social__item}>
        <a className={styles.social__item_link} href="https://www.youtube.com" target="_blank" rel="noreferrer">
          <AiOutlineYoutube />
        </a>
      </li>
    </ul>
  )
}

export default Social;
