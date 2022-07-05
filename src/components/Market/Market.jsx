import React from 'react';
import Container from '../Container/Container';

import styles from './Market.module.scss';

const Market = () => {
  return (
    <div className={styles.market}>
      <Container>
        <h2>Market Trend</h2>
        <ul className={styles.coin}>
          <li className={styles.coin__item}>

          </li>
        </ul>
      </Container>
    </div>
  )
}

export default Market;
