// Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { string, bool } from 'prop-types';

class Child extends Component {
    static defaultProps = {
        visible:   true,
        firstName: 'NO_FIRSTNAME',
        // lastName:  'NO_LASTNAME',
    };

    static propTypes = {
        visible:   bool.isRequired,
        firstName: string.isRequired,
        lastName:  string.isRequired,
    };

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

render(<Child />, document.getElementById('app'));
