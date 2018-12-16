// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';
import {withRouter} from "react-router-dom";

class BaseStarshipTile extends Component {
    _navigateToStarship = () => {
      const { name, crew, model, manufacturer, history } = this.props;
      const nameFormated = name.toLowerCase().replace(/ /g, '-');
      history.push({
        pathname: `panel/${nameFormated}`,
        state: { name, crew, model, manufacturer }
      })
    };
    render() {
        const { name, crew, model, manufacturer } = this.props;
        return (
            <section
              className = { Styles.starshipTile }
              onClick = { this._navigateToStarship }
            >
                <h1>🛸</h1>
                <div className = { Styles.description }>
                  <div>
                    <span>Имя: </span>
                    <span>{name}</span>
                  </div>
                  <div>
                    <span>Класс: </span>
                    <span>{model}</span>
                  </div>
                  <div>
                    <span>Производитель: </span>
                    <span>{manufacturer}</span>
                  </div>
                  <div>
                    <span>Команда: </span>
                    <span>{crew}</span>
                  </div>
                </div>
            </section>
        );
    }
}

export const StarshipTile = withRouter(BaseStarshipTile);