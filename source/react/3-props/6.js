// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

const data = {
    firstName: 'Ron',
};

const profile = {
    firstName: 'Hermione',
    lastName:  'Granger',
};

const Child = ({ firstName, lastName }) => {
    return (
        <h1>
            Hi, {firstName} {lastName}!
        </h1>
    );
};

class Parent extends Component {
    render() {
        return (
            <Child
                { ...data }
                { ...profile }
            />
        );
    }
}

render(<Parent />, document.getElementById('app'));
