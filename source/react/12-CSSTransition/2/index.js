// Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 } from 'uuid';

// Instruments
import Styles from './styles.m.css';

class Animation extends Component {
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

    render() {
        const { todos, todo: newTodo } = this.state;

        const todosList = todos.map(({ todo, id }) => (
            <CSSTransition
                classNames = {{
                    enter:       Styles.enter,
                    enterActive: Styles.enterActive,
                    exit:        Styles.exit,
                    exitActive:  Styles.exitActive,
                }}
                key = { id }
                timeout = {{ enter: 2500, exit: 1000 }}>
                <li onClick = { this._completeTodo(id) }>{todo}</li>
            </CSSTransition>
        ));

        return (
            <section className = { Styles.room }>
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

render(<Animation />, document.getElementById('app'));
