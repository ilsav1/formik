// Core
import React, { Component } from 'react';

// Context
import { Context } from './context';

export class Page extends Component {
    static contextType = Context.Consumer;

    render() {
        const { title, page } = this.context;

        return (
            <>
                <h1>{title}</h1>
                <li>
                    Page: <code>{page}</code>
                </li>
            </>
        );
    }
}
