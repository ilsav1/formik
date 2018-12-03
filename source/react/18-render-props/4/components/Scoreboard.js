// Core
import React, { Component } from 'react';

export class Scoreboard extends Component {
  render() {
    const { x, y } = this.props;
    return (
      <div style={{
        position: 'absolute',
        right: 0,
        bottom: 0,
      }}>
        <div>ClientX {x}</div>
        <div>ClientY {y}</div>
      </div>
    );
  }
}
