// Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Transition } from 'react-transition-group';
import gsap from 'gsap';

// Instruments
import './styles.css';
import { log } from '../../../helpers';

class Animation extends Component {
    state = {
        isEntering: true,
    };

    _toggleAnimate = () => {
        this.setState(({ isEntering }) => ({
            isEntering: !isEntering,
        }));
    };

    _handleEnter = (circle) => {
        log('→ entering start (enter)', 'orange');
        gsap.fromTo(circle, 1, { opacity: 0 }, { opacity: 1 });
    };

    _handleExit = (circle) => {
        log('→ exiting start (exit)', 'skyblue');
        gsap.fromTo(circle, 1, { opacity: 1 }, { opacity: 0 });
    };

    _handleEntering = () => {
        log('→ entering', 'orange');
    };

    _handleEntered = () => {
        log('→ entered', 'orange');
    };

    _handleExiting = () => {
        log('→ exiting', 'skyblue');
    };

    _handleExited = () => {
        log('→ exited', 'skyblue');
    };

    render() {
        const { isEntering } = this.state;

        return (
            <section className = 'container'>
                <button onClick = { this._toggleAnimate }>Анимировать</button>
                <Transition
                    appear
                    mountOnEnter
                    unmountOnExit
                    in = { isEntering }
                    timeout = { 1000 }
                    onEnter = { this._handleEnter }
                    onEntered = { this._handleEntered }
                    onEntering = { this._handleEntering }
                    onExit = { this._handleExit }
                    onExited = { this._handleExited }
                    onExiting = { this._handleExiting }>
                    <div />
                </Transition>
                <div />
            </section>
        );
    }
}

render(<Animation />, document.getElementById('app'));
