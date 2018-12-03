// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Wizard extends Component {
    state = {
        name: 'Gendalf',
        age:  6000,
    };

    _setJourney = () => {
        this.setState({
            journey: 'To the Mountains!',
        });
    };

    render() {
        const { name, age, journey } = this.state;

        return (
            <>
                <h1>
                    Greetings. My name is {name} and I am {age} years old.
                </h1>
                <p>
                    My current journey is: <b>{journey}</b>
                </p>
                <button onClick = { this._setJourney }>Set journey!</button>
            </>
        );
    }
}

render(<Wizard />, document.getElementById('app'));
