// Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Transition } from 'react-transition-group';
import TweenMax from 'gsap';

// Instruments
import './styles';

class Room extends Component {
    state = {
        show: true,
    };

    _showBall = () => {
        this.setState({
            show: true,
        });
    };

    _hideBall = () => {
        this.setState({
            show: false,
        });
    };

    _handleBallEnter = (ball) => {
        TweenMax.fromTo(
            ball,
            2,
            {
                opacity:   0,
                rotationY: 360,
            },
            {
                opacity:   1,
                rotationY: 0,
            },
        );
    };

    _handleBallExit = (ball) => {
        TweenMax.fromTo(
            ball,
            2,
            {
                opacity:   1,
                rotationY: 0,
            },
            {
                opacity:   0,
                rotationY: 360,
            },
        );
    };

    render() {
        const { show } = this.state;

        return (
            <section className = 'room'>
                <button onClick = { this._showBall }>Show</button>
                <button onClick = { this._hideBall }>Hide</button>
                <Transition
                    appear
                    in = { show }
                    timeout = { 2000 }
                    onEnter = { this._handleBallEnter }
                    onExit = { this._handleBallExit }>
                    <div className = 'ball'>λ</div>
                </Transition>
            </section>
        );
    }
}

render(<Room />, document.getElementById('app'));
