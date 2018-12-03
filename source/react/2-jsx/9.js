// Core
import React from 'react';
import { render } from 'react-dom';

const items = [ 'a ball', 'a sword', 'a brush', 'a stick' ];

const list1 = items.map((item, index) => <li key = { index }>{item}</li>);
const list2 = items.map((item, index) => <li key = { index }>{item}</li>);

render(
    [ <ul key = { 0 }>{list1}</ul>, <ul key = { 1 }>{list2}</ul> ],
    document.getElementById('app'),
);
