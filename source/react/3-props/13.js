// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Parent extends Component {
    render() {
        const {
            profile: { firstName, lastName },
        } = this.props;

        // this.props.test = 'error!';
        // this.props.profile.deepTest = 'no error :(';

        console.log('props:', this.props);

        return (
            <h1>
                Hello, {firstName} {lastName}!
            </h1>
        );
    }
}

render(
    <Parent
        profile = {{
            firstName: 'Hermione',
            lastName:  'Granger',
        }}
    />,
    document.getElementById('app'),
);
