// Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

// Instruments
import './styles';

class Animation extends Component {
    state = {
        isEntering: true,
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(({ isEntering }) => ({
                isEntering: !isEntering,
            }));
        }, 2500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    interval = null;

    render() {
        const { isEntering } = this.state;

        return (
            <section className = 'room'>
                <CSSTransition
                    classNames = {{
                        enter:       'enter',
                        enterActive: 'enterActive',
                        exit:        'exit',
                        exitActive:  'exitActive',
                    }}
                    in = { isEntering }
                    timeout = { 2500 }>
                    <div className = 'ball' />
                </CSSTransition>
            </section>
        );
    }
}

render(<Animation />, document.getElementById('app'));
