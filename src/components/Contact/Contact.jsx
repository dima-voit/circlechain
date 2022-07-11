import React from 'react';
import { FcAssistant } from "react-icons/fc";

import Container from '../Container/Container';
import Form from '../Form/Form';

import styles from './Contact.module.scss';

const Contact = () => {

  return (
    <div className={styles.contact}>
      <Container className={styles.contact__container}>
        <div className={styles.contact__item}>
          <div className={styles.contact__icon}> 
            <FcAssistant />
          </div>
          <div className={styles.contact__descr}>
            <h5 className={styles.contact__title}>Reference center</h5>
            <div className={styles.contact__link}>
              <a href="tel:+380123456789" target="_self">
                <span>+38 (012) 345 67 89</span>
              </a>
            </div>
            <div className={styles.contact__text}>
              <p>If you have any questions about the services or recommendations to improve our work, call or write to us at any time convenient for you.</p>
            </div>
          </div>
        </div>
        <Form />
      </Container>
    </div>
  )
}

export default Contact;
