// Core
import { createElement } from 'react';
import { render } from 'react-dom';

const element = createElement(
    'a',
    {
        href:   'https://www.google.com',
        title:  'Google!',
        rel:    'noopener noreferrer',
        target: '_blank',
    },
    'Google it!',
);

render(element, document.getElementById('app'));
