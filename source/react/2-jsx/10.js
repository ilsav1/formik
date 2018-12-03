// Core
import React from 'react';
import { render } from 'react-dom';

const element = [
    <h1 key = '0'>Welcome!</h1>,
    <p key = '1'>Lorem ipsum dolor sit amet!</p>,
];

render(element, document.getElementById('app'));
