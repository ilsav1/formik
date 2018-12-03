// Core
import React, { Component } from 'react';

// Context
import { Consumer } from './context';

export class Page extends Component {
    render() {
        return (
            <Consumer
                children = { ({ title, page }) => {
                    return (
                        <>
                            <h1>{title}</h1>
                            <li>
                                Page: <code>{page}</code>
                            </li>
                        </>
                    );
                } }
            />
        );
    }
}
