// Core
import React, { Component } from 'react';

export class Page extends Component {
    render() {
        const { title, page } = this.props;

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
