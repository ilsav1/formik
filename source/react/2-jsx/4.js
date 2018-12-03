// Core
import React from 'react';
import { render } from 'react-dom';

const getMessage = (year = 2018) => `Welcome in ${year}!`;

const element = <h1>{getMessage(2020)}</h1>;

render(element, document.getElementById('app'));
