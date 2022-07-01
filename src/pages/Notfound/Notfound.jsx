import React from 'react';

import Container from '../../components/Container/Container';
import Error404 from '../../components/Error404/Error404';
import Main from '../../components/Main/Main';

import styles from './Notfound.module.scss';

const Notfound = () => {
  return (
    <Main className={styles.error__main}>
      <Container className={styles.error__main__container}>
        <Error404 />
      </Container>
    </Main>
  )
}

export default Notfound;
