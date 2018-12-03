// Core
import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement(
    'h1',
    null,
    'Hi, I am a React element. I was produced by «createElement» function.',
);

ReactDOM.render(element, document.getElementById('app'));
