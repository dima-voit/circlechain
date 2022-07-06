import React from 'react';

import Container from '../Container/Container';
import Button from '../UI/Button/Button';

import intro from '../../img/intro.png';
import styles from './Intro.module.scss';

const Intro = () => {
  return (
    <div className={styles.intro}>
      <Container className={styles.intro__container}>
        <div className={styles.intro__content}>
          <h1 className={styles.intro__title}>Save, Buy and Sell Your blockchain asset</h1>
          <div className={styles.intro__text}>
            <p>The easy to manage and trade<br/> your cryptocurency asset</p>
          </div>
          <div className={styles.intro__btns}>
            <Button className={styles.intro__btns__colored}>Connect Wallet</Button>
            <Button className={styles.intro__btns__light}>Start Trading</Button>
          </div>
        </div>
        <div className={styles.intro__img}>
          <img src={intro} alt="Intro" />
        </div>
      </Container>
    </div>
  )
}

export default Intro;
