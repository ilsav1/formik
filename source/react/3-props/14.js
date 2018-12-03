// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Child extends Component {
    constructor(props) {
        super(props);

        console.log('→ this.props', this.props);
    }

    render() {
        const { spell } = this.props;

        return spell;
    }
}

class Parent extends Component {
    render() {
        return (
            <h1>
                <Child spell = 'Crucio!' />
            </h1>
        );
    }
}

render(<Parent />, document.getElementById('app'));
