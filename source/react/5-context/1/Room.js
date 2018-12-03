// Core
import React, { Component } from 'react';

// Component
import { Bookshelf } from './Bookshelf';

export class Room extends Component {
    render() {
        return <Bookshelf { ...this.props } />;
    }
}
