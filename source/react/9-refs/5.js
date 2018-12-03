// Core
import React, { Component, createRef, forwardRef } from 'react';
import { render } from 'react-dom';

const Input = forwardRef((props, forwardedRef) => {
    return (
        <input
            disabled = { !props.isEditing }
            ref = { forwardedRef }
            value = { props.name }
            onChange = { props.onChange }
        />
    );
});

class Parent extends Component {
    state = {
        name:      'Santa',
        isEditing: true,
    };

    componentDidMount() {
        this.nameInputRef.current.focus();
    }

    componentDidUpdate(_, prevState) {
        if (prevState.isEditing === false) {
            this.nameInputRef.current.focus();
        }
    }

    nameInputRef = createRef();

    _updateName = (event) => this.setState({ name: event.target.value });
    _toggleEditingName = () => this.setState(({ isEditing }) => ({ isEditing: !isEditing }));

    render() {
        const { name, isEditing } = this.state;

        const buttonText = `Turn editing ${isEditing ? 'off' : 'on'}`;

        return (
            <>
                <Input
                    isEditing = { isEditing }
                    name = { name }
                    ref = { this.nameInputRef }
                    onChange = { this._updateName }
                />
                <button onClick = { this._toggleEditingName }>{buttonText}</button>
            </>
        );
    }
}

render(<Parent />, document.getElementById('app'));
