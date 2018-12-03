// Core
import { createElement, cloneElement } from 'react';
import { render } from 'react-dom';

const element1 = createElement(
    'h1',
    {
        style: {
            color:      'firebrick',
            userSelect: 'none',
            cursor:     'pointer',
            textAlign:  'center',
        },
    },
    'Hi, I am a React element. I was produced by «createElement» function.',
);

const element2 = createElement(
    'div',
    {
        title: 'A title!',
    },
    element1,
);

const element3 = cloneElement(element2, {
    style: {
        backgroundColor: 'black',
        padding:         7,
    },
});

render(element3, document.getElementById('app'));
