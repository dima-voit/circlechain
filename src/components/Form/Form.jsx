import React from 'react';
import { useState, useEffect } from 'react';

import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Textarea from '../UI/Textarea/Textarea';

import styles from './Form.module.scss';

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [fullNameDirty, setFullNameDirty] = useState("false");
  const [emailDirty, setEmailDirty] = useState("false");
  const [fullNameError, setFullNameError] = useState("The field cannot be empty");
  const [emailError, setEmailError] = useState("The field cannot be empty");
  const [message, setMessage] = useState("");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if(fullNameError || emailError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [fullNameError, emailError])

  const fullNameHandler = (e) => {
    setFullName(e.target.value)
    if(e.target.value.length < 2) {
      setFullNameError("The name is too short")
      if(!e.target.value) {
        setFullNameError("The field cannot be empty")
      }
    } else {
      setFullNameError("")
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Incorrect email')
    } else {
      setEmailError('')
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'fullName':
        setFullNameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      // no default
    }
  }

  return (
    <form className={styles.form}>
      <div className={styles.form__group}>
        <label htmlFor="fullName">Full name:</label>
        {(fullNameDirty && fullNameError) && <div className={styles.form__group__error}>{fullNameError}</div>}
        <Input
          type="text"
          id="fullName"
          name="fullName"
          value={fullName}
          onBlur={e => blurHandler(e)}
          onChange={e => fullNameHandler(e)}
          placeholder="John Doe"
        />
      </div>
      <div className={styles.form__group}>
        <label htmlFor="email">Email:</label>
        {(emailDirty && emailError) && <div className={styles.form__group__error}>{emailError}</div>}
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onBlur={e => blurHandler(e)}
          onChange={e => emailHandler(e)}
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
      <Button className={styles.form__button} disabled={!formValid}>Submit</Button>
    </form>
  );
};

export default Form;
