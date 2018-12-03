// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Child extends Component {
    render() {
        const { children } = this.props;

        console.log('→ this.props', this.props);
        console.log('→ typeof children', typeof children);

        return children;
    }
}

class Parent extends Component {
    render() {
        return <Child>{null}</Child>;
    }
}

render(<Parent />, document.getElementById('app'));
