import React from 'react';

import Container from '../Container/Container';

import technology from '../../img/technology.svg';

import styles from './Technology.module.scss';

const Technology = () => {
  return (
    <div className={styles.technology}>
      <Container className={styles.technology__container}>
        <div className={styles.technology__header}>
          <h2>Global Decentralize currency based on<br/> blockchain technology</h2>
          <h3>Web3 is the latest efficient technology</h3>
        </div>
        <div className={styles.technology__content}>
          <div className={styles.technology__img}>
            <img src={technology} alt="Technology" />
          </div>
          <div className={styles.technology__info}>
            <div className={styles.technology__info__wrap}>
              <div className={styles.technology__info__item}>
                <h4>Access Token Market</h4>
                <p>Buy and sell token anytime<br/> and anywhere</p>
              </div>
            </div>
            <div className={styles.technology__info__wrap}>
              <div className={styles.technology__info__item}>
                <h4>User Friendly Interface</h4>
                <p>Easy to navigate</p>
              </div>
            </div>
            <div className={styles.technology__info__wrap}>
              <div className={styles.technology__info__item}>
                <h4>Ownership Token control</h4>
                <p>Be in control and own as many<br/> asset as possible</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Technology;
