// Core
import React, { Component } from 'react';

export class Parent extends Component {
    state = {
        isMessageShown: false,
    };

    render() {
        return (
            <section>
                <h1>Welcome!</h1>
                {this.state.isMessageShown && <p>{this.props.message}</p>}
            </section>
        );
    }
}
