import React from 'react';

import Container from '../Container/Container';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import styles from './Subscribe.module.scss';

const Subscribe = () => {
  return (
    <div className={styles.subscribe}>
      <Container>
        <div className={styles.subscribe__wrap}>
          <h2>Want to be aware of all update</h2>
          <form className={styles.subscribe__form}>
            <Input className={styles.subscribe__form__input} type="email"/>
            <Button className={styles.subscribe__form__button} type="submit">Subscribe</Button>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default Subscribe;
