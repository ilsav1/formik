// Core
import React from 'react';
import { render } from 'react-dom';

const element = React.createElement('h1', null, [
    ' ',
    0,
    1,
    ' ',
    2,
    3,
    4,
    '          ',
    5,
    6,
    null,
    false,
    undefined,
    void 0,
    7,
    ' ',
]);

render(element, document.getElementById('app'));
