// Core
import React from 'react';
import { render } from 'react-dom';

const isPizzaOpen = true;

const element = isPizzaOpen ? (
    <h1>Welcome to Super Pizza!</h1>
) : (
    <h1>See you tomorrow!</h1>
);

render(element, document.getElementById('app'));
