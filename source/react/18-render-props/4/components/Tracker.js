// Core
import React, { Component } from 'react';

export class Tracker extends Component {
    state = {
        x: 0,
        y: 0,
    };


    _handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY,
        });
    };

    render() {
      let content = null;
      const checkContentExist = element => {
          if (content) {
            throw new Error('you shall not pass');
          }
          return element;
      };

      const { children, render, component } = this.props;
      if (children) {
        content = checkContentExist(children(this.state));
      }
      if (render) {
        content = checkContentExist(render(this.state));
      }
      if (component) {
        content = checkContentExist(component);
      }

      return (
        <div
            className = 'tracker'
            onMouseMove = { this._handleMouseMove }
        >
            {content}
        </div>);
    }
}
