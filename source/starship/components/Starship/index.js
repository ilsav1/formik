// Core
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


// Instruments
import Styles from './styles.m.css';

export class Starship extends Component {
    render() {
      const { state } = this.props.location;
      if (!state) {
        return <Redirect to='/' />
      }
      const { name, crew, model, manufacturer } = state;
      return (
            <section
                className = { Styles.starship }>
                <h1>🛸</h1>
              {console.log(this.props)}
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
