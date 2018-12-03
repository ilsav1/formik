// Core
import React, { Component, createRef } from 'react';
import { render } from 'react-dom';
import { Transition } from 'react-transition-group';
import TweenMax from 'gsap';

// Instruments
import './styles.css';

class Room extends Component {
    state = {
        show: true,
    };

    componentDidMount() {
        setInterval(() => {
            this.setState(({ show }) => ({
                show: !show,
            }));
        }, 2000);
    }

    ballRef = createRef();

    _handleBallEnter = () => {
        TweenMax.fromTo(
            this.ballRef.current,
            2,
            {
                x:     300,
                y:     300,
                scale: 1,
            },
            {
                x:     0,
                y:     0,
                scale: 0.3,
            },
        );
    };

    _handleBallExit = () => {
        TweenMax.fromTo(
            this.ballRef.current,
            2,
            {
                x:     0,
                y:     0,
                scale: 0.3,
            },
            {
                x:     300,
                y:     300,
                scale: 1,
            },
        );
    };

    render() {
        const { show } = this.state;

        return (
            <section className = 'room'>
                <Transition
                    in = { show }
                    timeout = { 2000 }
                    onEnter = { this._handleBallEnter }
                    onExit = { this._handleBallExit }>
                    <div
                        className = 'ball'
                        ref = { this.ballRef }
                    />
                </Transition>
            </section>
        );
    }
}

render(<Room />, document.getElementById('app'));
