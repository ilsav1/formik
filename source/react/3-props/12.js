// Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { string, number, shape, arrayOf } from 'prop-types';

class Child extends Component {
    static propTypes = {
        age:            number.isRequired,
        firstName:      string.isRequired,
        lastName:       string.isRequired,
        favoriteSpells: arrayOf(
            shape({
                id:          string.isRequired,
                description: shape({
                    type:  string.isRequired,
                    value: number.isRequired,
                }),
            }),
        ),
    };

    render() {
        const { firstName, lastName, age, favoriteSpells } = this.props;
        const favoriteSpellsJSX = favoriteSpells.map(
            ({ id, description: { type, value } }) => (
                <li key = { id }>
                    Type: <b>{type}</b>, value: <b>{value}</b>;
                </li>
            ),
        );

        return (
            <>
                <h1>
                    Hello! I am {firstName} {lastName}, and I am {age}.
                </h1>
                <ul>{favoriteSpellsJSX}</ul>
            </>
        );
    }
}

const data = {
    firstName:      'Gendalf',
    lastName:       'the White',
    age:            6000,
    favoriteSpells: [
        {
            id:          '123',
            description: { type: 'Fireball', value: 44 },
        },
        { id: '456', description: { type: 'Ice shard', value: 45 } },
    ],
};

render(<Child { ...data } />, document.getElementById('app'));
