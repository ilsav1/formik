// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Child extends Component {
    render() {
        const { visible, firstName, lastName } = this.props;

        return visible ? (
            <ul>
                <li>
                    First name: <b>{firstName}</b>
                </li>
                <li>
                    Last name: <b>{lastName}</b>
                </li>
            </ul>
        ) : null;
    }
}

class Parent extends Component {
    profile = {
        firstName: 'Hermione',
        lastName:  'Granger',
    };

    render() {
        return (
            <>
                <Child
                    visible
                    { ...this.profile }
                />
                <Child
                    visible = { false }
                    { ...this.profile }
                />
            </>
        );
    }
}

render(<Parent />, document.getElementById('app'));
