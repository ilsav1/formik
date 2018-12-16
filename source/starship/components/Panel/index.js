// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';
import { fetchStarshipsAsync } from "../../bus/feed/actions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {StarshipTile} from "../StarshipTile";

class BasePanel extends Component {
    static defaultProps = {
        isFetching: false,
        starships: [],
    };

    render() {
        const { isFetching, starships, fetchStarshipsAsync } = this.props;

        const buttonMessage = isFetching
            ? '⏳ Вызываю...'
            : '📲 Вызвать корабли';

        return (
            <section className = { Styles.panel }>
              <h1>🖥</h1>
              <button onClick={fetchStarshipsAsync} disabled = { isFetching }>{buttonMessage}</button>
              <ul>
                {
                  starships.map(starship => (
                    <StarshipTile
                      key={starship.name}
                      history={history}
                      {...starship}
                    />
                  ))
                }
              </ul>
            </section>
        );
    }
}

const mapState = state => {
  const { feed } = state;
  console.log(feed)
  return {
    starships: feed.starships,
    isFetching: feed.isFetching,
  }};

const mapDispatch = {
  fetchStarshipsAsync,
};

export const Panel = withRouter(connect(mapState, mapDispatch)(BasePanel));
