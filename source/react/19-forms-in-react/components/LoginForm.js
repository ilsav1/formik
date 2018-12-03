// Core
import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { toggleErrorClass } from '../helpers/utils'

// Instruments
import Styles from './styles.m.css';
//
export class LoginForm extends Component {
    render() {
      const { delay } = this.props;
      return (
            <>
              <Formik
                onSubmit={(values, formikBag) => {
                  const { setSubmitting } = formikBag;
                  setSubmitting(true);
                  const { email, password, save } = values;
                  delay(3000).then(() => setSubmitting(false));
                  if (save) {
                    localStorage.setItem('email', email);
                    localStorage.setItem('password', password);
                    localStorage.setItem('save', save);
                  }
                }}
                initialValues={{
                  email: localStorage.getItem('email') || '',
                  password: localStorage.getItem('password') || '',
                  save: localStorage.getItem('save') || '',
                }}
                validationSchema={this.props.schema}
                render={ ( props ) =>  {
                  const { isSubmitting } = props;
                  return (
                    <Form>
                      {
                        console.log(props)
                      }
                      <Field type="email" name="email" className={toggleErrorClass(props.errors.email, Styles.invalidInput)} />
                      <Field type="password" name="password" className={toggleErrorClass(props.errors.password, Styles.invalidInput)} />
                      <label>
                        <Field type="checkbox" name="save" />
                        Запомнить меня
                      </label>
                      <button className={isSubmitting ? Styles.disabled : ''} type="submit" disabled={isSubmitting} >Войти</button>
                    </Form>
                  )}
                }
              />
              {/*SORRY, FORGOT WHAT SHOULD I ACTUALLY DO WITH THAT*/}
              {/*<div className={Styles.loginMessage}>*/}
                {/*loginMessage*/}
              {/*</div>*/}
            </>
        );
    }
}
