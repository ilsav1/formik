// Core
import React from 'react';
import { render } from 'react-dom';

const element = React.createElement('h1', null, [
    Function,
    Array,
    Object,
    4,
    (() => 5)(),
    // {},
]);

render(element, document.getElementById('app'));
