// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Parent extends Component {
    _showEventType = (event) => console.log('→ event.type', event.type);

    render() {
        return (
            <>
                <input onChange = { this._showEventType } />
                <button onClick = { this._showEventType }>Click!</button>
            </>
        );
    }
}

render(<Parent />, document.getElementById('app'));
