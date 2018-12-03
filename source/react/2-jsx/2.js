// Core
import React from 'react';
import { render } from 'react-dom';

const message
    = 'Hi, I am a React element. I was produced by «createElement» function.';

const element = <h1>{message}</h1>;

render(element, document.getElementById('app'));
