// Core
import React from 'react';
import { render } from 'react-dom';

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
    lastName:  'NO_LASTNAME',
};

const profile = {
    firstName: 'Hermione',
    lastName:  'Granger',
};

const Parent = () => {
    return (
        <>
            <Child
                visible
                { ...profile }
            />
            <Child />
        </>
    );
};

render(<Parent />, document.getElementById('app'));
