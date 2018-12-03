// Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Transition, animated } from 'react-spring';

// Instruments
import './styles.css';

class Room extends Component {
    state = { index: 0 };
    pages = [
        (style) => (
            <animated.div
                style = {{
                    ...style,
                    backgroundImage:
                        'linear-gradient(120deg, #0b486b, #f56217)',
                }}>
                A
            </animated.div>
        ),
        (style) => (
            <animated.div
                style = {{
                    ...style,
                    backgroundImage:
                        'linear-gradient(120deg, #000046, #1CB5E0)',
                }}>
                B
            </animated.div>
        ),
        (style) => (
            <animated.div
                style = {{
                    ...style,
                    backgroundImage:
                        'linear-gradient(120deg, #20002c, #cbb4d4)',
                }}>
                C
            </animated.div>
        ),
    ];

    _switchPage = () => {
        this.setState((state) => ({
            index: state.index === 2 ? 0 : state.index + 1,
        }));
    };

    render() {
        return (
            <div
                className = 'room'
                onClick = { this._switchPage }>
                <Transition
                    native
                    enter = {{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
                    from = {{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
                    leave = {{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}>
                    {this.pages[ this.state.index ]}
                </Transition>
            </div>
        );
    }
}

render(<Room />, document.getElementById('app'));
