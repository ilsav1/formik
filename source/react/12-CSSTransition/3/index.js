// Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import gsap from 'gsap';

// Instruments
import Styles from './styles.m.css';
import './styles.css';
import { log } from 'helpers';

class Animation extends Component {
    state = {
        isEntering: true,
        circles:    0,
    };

    _toggleAnimate = () => {
        this.setState(({ isEntering }) => ({
            isEntering: !isEntering,
        }));
    };

    _handleEnter = (circle) => {
        log('→ entering start (enter)', 'orange');

        gsap.fromTo(circle, 3, { opacity: 0 }, { opacity: 1 });
    };

    _handleExit = (circle) => {
        log('→ exiting start (exit)', 'skyblue');

        gsap.fromTo(circle, 3, { opacity: 1 }, { opacity: 0 });
    };

    // logs
    _handleEntering = () => {
        log('→ entering', 'orange');
    };

    _handleEntered = (circle) => {
        let start = null;

        const step = (timestamp) => {
            if (!start) {
                start = timestamp;
            }

            const progress = timestamp - start;

            circle.style.transform = `translateX(${Math.min(progress / 10)}px)`;

            if (progress < 2000) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);

        log('→ entered', 'orange');
    };

    _handleExiting = () => {
        log('→ exiting', 'skyblue');
    };

    _handleExited = () => {
        log('→ exited', 'skyblue');
    };

    _addCircle = () => {
        this.setState((state) => ({
            circles: state.circles + 1,
        }));
    };

    _removeCircle = () => {
        this.setState((state) => ({
            circles: state.circles - 1,
        }));
    };

    render() {
        const { isEntering, circles } = this.state;

        const circlesJSX = [ ...Array(circles).keys() ].map((circle) => {
            return (
                <CSSTransition
                    appear
                    mountOnEnter
                    classNames = 'example'
                    key = { circle }
                    timeout = { 3000 }
                    onEnter = { this._handleEnter }
                    onEntered = { this._handleEntered }
                    onEntering = { this._handleEntering }
                    onExit = { this._handleExit }
                    onExited = { this._handleExited }
                    onExiting = { this._handleExiting }>
                    <div onClick = { this._removeCircle } />
                </CSSTransition>
            );
        });

        return (
            <section className = { Styles.room }>
                <button onClick = { this._toggleAnimate }>Анимировать</button>
                <CSSTransition
                    classNames = 'example'
                    in = { isEntering }
                    timeout = { 3000 }
                    onEnter = { this._handleEnter }
                    onEntered = { this._handleEntered }
                    onEntering = { this._handleEntering }
                    onExit = { this._handleExit }
                    onExited = { this._handleExited }
                    onExiting = { this._handleExiting }>
                    <div />
                </CSSTransition>
                <button onClick = { this._addCircle }>Добавить кружок</button>
                <TransitionGroup component = 'span'>{circlesJSX}</TransitionGroup>
            </section>
        );
    }
}

render(<Animation />, document.getElementById('app'));
