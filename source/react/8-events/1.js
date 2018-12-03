// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Parent extends Component {
    render() {
        return (
            <>
                <input
                    onChange = { (event) => console.log('→ event.type', event.type) }
                />
                <button
                    onClick = { (event) => console.log('→ event.type', event.type) }>
                    Click!
                </button>
            </>
        );
    }
}

render(<Parent />, document.getElementById('app'));
