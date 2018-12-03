// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

const Child = (props) => {
    return <h1>{props.message}</h1>;
};

class Parent extends Component {
    render() {
        return <Child message = 'Lumus!' />;
    }
}

render(<Parent />, document.getElementById('app'));
