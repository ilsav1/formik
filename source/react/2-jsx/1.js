// Core
import React from 'react';
import { render } from 'react-dom';

const element = (
    <h1>
        Hi, I am a React element. I was produced by «createElement» function.
    </h1>
);

render(element, document.getElementById('app'), () => {
    console.log('→ callback');
});
