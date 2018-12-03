// Core
import React, { Component } from 'react';
import iconCat from '../assets/cat.png'

export class Cat extends Component {
  render() {
    const { x, y } = this.props;
    return (
      <div style={ {
        position: 'absolute',
        left: x - 100,
        top: y - 50,
      } }>
        <img src={iconCat} />
      </div>
    );
  }
}
