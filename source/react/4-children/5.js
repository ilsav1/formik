// Core
import React, { Component, Children } from 'react';
import { render } from 'react-dom';

class Child extends Component {
    render() {
        const { children } = this.props;
        const childrenCount = Children.count(children);

        return <h1>You have {childrenCount} children.</h1>;
    }
}

class Parent extends Component {
    render() {
        return (
            <Child>
                <p>Lorem ipsum</p>
                <p>dolor</p>
                <p>sit amet!</p>
            </Child>
        );
    }
}

render(<Parent />, document.getElementById('app'));
