// Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { v4 } from 'uuid';
import { Transition, TransitionGroup } from 'react-transition-group';
import TweenMax from 'gsap';

// Instruments
import './styles';

class Room extends Component {
    state = {
        todos: [],
        todo:  '',
    };

    _updateTodo = (event) => {
        this.setState({
            todo: event.target.value,
        });
    };

    _submitTodo = () => {
        this.setState(({ todos, todo }) => ({
            todos: [
                ...todos,
                {
                    id: v4(),
                    todo,
                },
            ],
            todo: '',
        }));
    };

    _completeTodo = (id) => () => {
        this.setState(({ todos }) => ({
            todos: todos.filter(({ id: todoId }) => id !== todoId),
        }));
    };

    _handleBallEnter = (ball) => {
        TweenMax.fromTo(
            ball,
            2,
            {
                x:         300,
                y:         300,
                opacity:   0,
                rotationY: 360,
            },
            {
                x:         0,
                y:         0,
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
                x:         0,
                y:         0,
                opacity:   1,
                rotationY: 0,
            },
            {
                x:          -300,
                y:          300,
                opacity:    0,
                rotationY:  1440,
                onComplete: () => console.log('• animation completed •'),
            },
        );
    };

    render() {
        const { todos, todo: newTodo } = this.state;

        const todosList = todos.map(({ todo, id }) => (
            <Transition
                key = { id }
                timeout = { 2000 }
                onEnter = { this._handleBallEnter }
                onExit = { this._handleBallExit }>
                <li onClick = { this._completeTodo(id) }>{todo}</li>
            </Transition>
        ));

        return (
            <section className = 'room'>
                <input
                    placeholder = 'todo...'
                    type = 'text'
                    value = { newTodo }
                    onChange = { this._updateTodo }
                />
                <button onClick = { this._submitTodo }>Todo!</button>
                <ul>
                    <TransitionGroup>{todosList}</TransitionGroup>
                </ul>
            </section>
        );
    }
}

render(<Room />, document.getElementById('app'));
