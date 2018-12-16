// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// Instruments
import Styles from './styles.m.css';
import observatory from './observatory.jpg';

class Bridge extends Component {
    static defaultProps = {
        profile: {
            firstName: 'имя',
            lastName:  'фамилия',
        },
    };
    _handleClick = () => {
      const { history } = this.props;
      history.push('/panel');
    };
    render() {
        const { profile } = this.props;

        return (
            <section className = { Styles.bridge }>
                <h1>
                    Добро пожаловать на борт, {profile.firstName}
                    &nbsp;
                    {profile.lastName}!
                </h1>
                <img src = { observatory } />
                <button onClick={this._handleClick}>🖥 &nbsp;Контрольная панель</button>
            </section>
        );
    }
}

const mapState = state => {
  const { profile } = state;
  return {
    profile
}};

export const ConnectedBridge = withRouter(connect(mapState)(Bridge));