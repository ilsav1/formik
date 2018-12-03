// Core
import React, { Component, Children } from 'react';
import { render } from 'react-dom';

class Child extends Component {
    render() {
        const { children } = this.props;

        const childrenJSX = [];

        Children.forEach(children, (child, index) => {
            childrenJSX.push(<li key = { index }>{child}</li>);
        });

        return <ul>{childrenJSX}</ul>;
    }
}

class Parent extends Component {
    render() {
        return (
            <Child>
                <span>First child</span>
                <span>Second child</span>
                <span>Third child</span>
            </Child>
        );
    }
}

render(<Parent />, document.getElementById('app'));
