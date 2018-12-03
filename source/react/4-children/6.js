// Core
import React, { Component, Children } from 'react';
import { render } from 'react-dom';

class Child extends Component {
    render() {
        return Children.only(this.props.children);
    }
}

class Parent extends Component {
    render() {
        return (
            <Child>
                <h1>I am the one!</h1>
            </Child>
        );
    }
}

render(<Parent />, document.getElementById('app'));
