// Core
import React, { Fragment } from 'react';
import { render } from 'react-dom';

const element = (
    <Fragment>
        <h1>Welcome!</h1>
        <p>Lorem ipsum dolor sit amet!</p>
    </Fragment>
);

render(element, document.getElementById('app'));
