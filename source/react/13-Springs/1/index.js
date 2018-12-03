// Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Spring } from 'react-spring';

// Instruments
import './styles.css';

class Room extends Component {
    state = {
        show: false,
    };

    _toggleCircle = () => {
        this.setState(({ show }) => ({
            show: !show,
        }));
    };

    render() {
        const { show } = this.state;

        return (
            <section className = 'room'>
                <button onClick = { this._toggleCircle }>
                    {show ? 'Hide' : 'Show'}
                </button>
                {show ? (
                    <Spring
                        from = {{
                            opacity:      0,
                            borderRadius: '0%',
                            width:        10,
                            height:       10,
                        }}
                        to = {{
                            opacity:      1,
                            borderRadius: '50%',
                            width:        300,
                            height:       300,
                        }}>
                        {(props) => <div style = { props } />}
                    </Spring>
                ) : null}
            </section>
        );
    }
}

render(<Room />, document.getElementById('app'));
