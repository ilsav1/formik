// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Child extends Component {
    render() {
        const { children } = this.props;

        console.log('→ this.props.children', this.props.children);
        console.log('→ Array.isArray(children)', Array.isArray(children));

        return children;
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
