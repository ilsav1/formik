// Core
import React from 'react';
import { render } from 'react-dom';

const element = React.createElement(
    'h1',
    null,
    'Hi, I am a React element. I was produced by «createElement» function.',
);

render(element, document.getElementById('app'));
