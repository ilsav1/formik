// Core
import React, { Component } from 'react';
import iconMouse from '../assets/mouse.png'

export class Mouse extends Component {
  render() {
    const { x, y } = this.props;
    return (
      <div style={ {
        position: 'absolute',
        left: x + 20,
        top: y - 50,
      } }>
        <img src={iconMouse} />
      </div>
    );
  }
}
