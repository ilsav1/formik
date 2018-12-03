// Core
import React, { Component } from 'react';

// Context
import { Context } from './context';

export class Page extends Component {
    render() {
        return (
            <Context.Consumer>
                {(contextData) => {
                    return (
                        <>
                            <h1>{contextData.title}</h1>
                            <li>
                                Page: <code>{contextData.page}</code>
                            </li>
                        </>
                    );
                }}
            </Context.Consumer>
        );
    }
}
