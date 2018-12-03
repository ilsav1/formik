// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Child extends Component {
    render() {
        return <h1>{this.props.message}</h1>;
    }
}

class Parent extends Component {
    render() {
        return <Child message = 'Alohomora!' />;
    }
}

render(<Parent />, document.getElementById('app'));
