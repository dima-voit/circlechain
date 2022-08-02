import React from 'react';

import styles from './Social.module.scss';

const Social = ({ link, icon }) => {
  return (
      <li className={styles.social__item}>
        <a className={styles.social__item_link} href={link} target="_blank" rel="noreferrer">
          {icon}
        </a>
      </li>
  )
}

export default Social;