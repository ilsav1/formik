// Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { log } from '../../helpers';

class Parent extends Component {
    _logOuterWheel = (event) => {
        log(`shiftKey: ${event.shiftKey}`, 'orange');
    };

    _logInnerWheel = (event) => {
        log(`ctrlKey: ${event.ctrlKey}`, 'wheat');
    };

    render() {
        return (
            <div
                style = {{
                    display:         'flex',
                    justifyContent:  'center',
                    alignItems:      'center',
                    height:          '100vh',
                    backgroundColor: '#070a13',
                }}
                onWheel = { this._logOuterWheel }>
                <div
                    style = {{
                        width:           170,
                        height:          170,
                        borderRadius:    '50%',
                        backgroundColor: 'orange',
                    }}
                    onWheel = { this._logInnerWheel }
                />
            </div>
        );
    }
}

render(<Parent />, document.getElementById('app'));
