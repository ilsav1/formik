// Core
import React from 'react';
import { render, createPortal } from 'react-dom';

const target = document.getElementById('spinner');

const portal = createPortal(
    <h1>I live outside of the main React component tree. 🛸 👽</h1>,
    target,
);

render(portal, document.getElementById('app'));
