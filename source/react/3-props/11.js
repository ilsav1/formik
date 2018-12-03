// Core
import React from 'react';
import { render } from 'react-dom';
import { string, bool } from 'prop-types';

const Child = ({ visible, firstName, lastName }) => {
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
};

Child.defaultProps = {
    visible:   true,
    firstName: 'NO_FIRSTNAME',
    // lastName:  'NO_LASTNAME',
};

Child.propTypes = {
    visible:   bool.isRequired,
    firstName: string.isRequired,
    lastName:  string.isRequired,
};

render(<Child />, document.getElementById('app'));
