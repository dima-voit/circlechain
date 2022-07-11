import React from 'react';
import { useState } from "react";

import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Textarea from '../UI/Textarea/Textarea';

import styles from './Form.module.scss';

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form>
      <div className={styles.form__group}>
        <label htmlFor="fullName">Full name:</label>
        <Input
          type="text"
          id="fullName"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="John Doe"
        />
      </div>
      <div className={styles.form__group}>
        <label htmlFor="email">Email:</label>
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@mail.com"
        />
      </div>
      <div className={styles.form__group}>
        <label htmlFor="message">Message:</label>
        <Textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          rows="8"
        ></Textarea>
      </div>
      <Button className={styles.form__button}>Submit</Button>
    </form>
  )
}

export default Form;
