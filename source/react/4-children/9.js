// Core
import React, { Component, Children } from 'react';
import { render } from 'react-dom';

class Child extends Component {
    render() {
        const { children } = this.props;

        const childrenJSX = Children.toArray(children);

        return <ul>{childrenJSX}</ul>;
    }
}

class Parent extends Component {
    render() {
        return (
            <Child>
                <li>First child</li>
                <li>Second child</li>
                <li>Third child</li>
            </Child>
        );
    }
}

render(<Parent />, document.getElementById('app'));
