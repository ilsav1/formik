// Core
import React, { createRef } from 'react';
import { render } from 'react-dom';

const Parent = () => {
    const inputRef = createRef();

    const _focus = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <input
                defaultValue = 'Welcome'
                ref = { inputRef }
            />
            <button onClick = { _focus }>Focus</button>
        </>
    );
};

render(<Parent />, document.getElementById('app'));
