// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

const Child = ({ CURRENT_YEAR }) => {
    return (
        <h1>
            It is <code>{CURRENT_YEAR}</code>.
        </h1>
    );
};

class Parent extends Component {
    CURRENT_YEAR = new Date().getFullYear();

    render() {
        return <Child CURRENT_YEAR = { this.CURRENT_YEAR } />;
    }
}

render(<Parent />, document.getElementById('app'));
