// Core
import React from 'react';
import { render } from 'react-dom';

const node1 = React.createElement(
    'h1',
    null,
    'Hi, I am a React element. I was produced by «createElement» function.',
);

const node2 = 'Welcome in ';
const node3 = 2018;
const node4 = '!';

render([ node1, node2, node3, node4 ], document.getElementById('app'));
