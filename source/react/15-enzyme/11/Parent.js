// Core
import React from 'react';

// Components
import { Child } from './Child';

export const Parent = () => {
    return (
        <section>
            <h1>Welcome!</h1>
            <p>Lorem ipsum dolor sit amet!</p>
            <Child />
        </section>
    );
};
