// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Parent extends Component {
    state = {
        name:      'Santa',
        isEditing: true,
    };

    componentDidMount() {
        this.nameInputRef.focus();
    }

    componentDidUpdate(_, prevState) {
        if (prevState.isEditing === false) {
            this.nameInputRef.focus();
        }
    }

    nameInputRef = null;

    _updateName = (event) => this.setState({ name: event.target.value });

    _toggleEditingName = () => {
        this.setState(({ isEditing }) => ({
            isEditing: !isEditing,
        }));
    };

    render() {
        const { name, isEditing } = this.state;

        const buttonText = `Turn editing ${isEditing ? 'off' : 'on'}`;

        return (
            <>
                <h1>Enter your name: {name}</h1>
                <input
                    disabled = { !isEditing }
                    ref = { (input) => {
                        this.nameInputRef = input;
                    } }
                    value = { name }
                    onChange = { this._updateName }
                />
                <button onClick = { this._toggleEditingName }>{buttonText}</button>
            </>
        );
    }
}

render(<Parent />, document.getElementById('app'));
