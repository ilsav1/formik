// Core
import React, { Component } from 'react';

// Component
import { Book } from './Book';

export class Bookshelf extends Component {
    render() {
        return <Book { ...this.props } />;
    }
}
