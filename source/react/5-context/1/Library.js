// Core
import React, { Component } from 'react';

// Component
import { Room } from './Room';

export class Library extends Component {
    render() {
        return <Room { ...this.props } />;
    }
}
