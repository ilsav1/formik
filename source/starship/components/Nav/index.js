// Core
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// Instruments
import Styles from './styles.m.css';

export class BaseNav extends Component {
  _handleClick = (e) => {
    const { history } = this.props;
    const { target } = e;
    if (target) {
      history.push(target.dataset.route);
    }
  };
  render() {
        const buttonTexts = {
          bridge: '🛰 Мостик',
          profile:  '👩🏼‍🚀 Профиль',
          panel:  '🖥 Панель',
        };
        const { location } = this.props;
        return <section className = { Styles.nav }>
          {
            (location.pathname === '/') ?
              null :
              <>
                <button data-route="/bridge" onClick={this._handleClick} className={Styles.bridge}>{buttonTexts.bridge}</button>
                <button data-route="/profile" onClick={this._handleClick}>{buttonTexts.profile}</button>
                <button data-route="/panel" onClick={this._handleClick}>{buttonTexts.panel}</button>
              </>
          }

        </section>;
    }
}

export const Nav = withRouter(BaseNav);