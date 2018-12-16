// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';
import {connect} from "react-redux";
import { Formik, Form, Field } from 'formik';
import { fillProfile } from '../../bus/profile/actions';
import { delay } from '../../../react/helpers/index';

class Profile extends Component {
    static defaultProps = {
        profile: {
            firstName: 'имя',
            lastName:  'фамилия',
        },
    };

    render() {
        const {
            profile: { firstName, lastName },
          fillProfile
        } = this.props;
        console.log('render', firstName)
        return (
            <section className = { Styles.profile }>
                <h1>
                    👩🏼‍🚀 {firstName} {lastName}
                </h1>
                <Formik
                    initialValues={{
                      firstName,
                      lastName,
                    }}
                    onSubmit={(values, actions) => {
                      const { setSubmitting } = actions;
                      delay(1000)
                        .then(() => {
                          fillProfile(values);
                          setSubmitting(false);
                          this.forceUpdate();
                        })
                    }}
                    render={({isSubmitting}) => {
                        const isDisabledClass = isSubmitting ? Styles.disabled : '';
                        return (
                          <Form>
                            <Field disabled={isSubmitting} className={isDisabledClass} name="firstName" />
                            <Field disabled={isSubmitting} className={isDisabledClass} name="lastName" />
                            <button type="submit" disabled={isSubmitting} className={isDisabledClass}>✅ Обновить</button>
                          </Form>
                        )
                    }}
                />
            </section>
        );
    }
}

const mapState = state => {
  console.log(state.profile.firstName)
 return {
    profile: state.profile,
  }
};

const mapDispatch = {
  fillProfile,
};

export const ConnectedProfile = connect(mapState, mapDispatch)(Profile);