// Core
import React, { Component } from 'react';

// Instruments
import { fetchPosts, removePost } from '../bus/posts/actions';
import { startFetching, stopFetching } from '../bus/ui/actions';
import { store } from '../init/store';
import { delay } from 'helpers';

export class Feed extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    postsMock = [
        { id: '123', message: '🏴 The black color is the best one!' },
        { id: '456', message: '🏳 No! The white color is the best one!' },
    ];

    unsubscribe = null;

    _fetchPosts = async () => {
        store.dispatch(startFetching());
        await delay(2000);
        store.dispatch(fetchPosts(this.postsMock));
        store.dispatch(stopFetching());
    };

    _removePost = (postId) => async () => {
        store.dispatch(startFetching());
        await delay(2000);
        store.dispatch(removePost(postId));
        store.dispatch(stopFetching());
    };

    render() {
        const { posts, ui } = store.getState();

        const postsJSX = posts.map(({ message, id }) => (
            <li
                key = { id }
                onClick = { this._removePost(id) }>
                {message}
            </li>
        ));

        const buttonText = ui.isPostsFetching ? 'Loading...' : 'Fetch posts ✓';

        return (
            <section className = 'example'>
                <h1>Feed</h1>
                <br />
                <button
                    disabled = { ui.isPostsFetching }
                    onClick = { this._fetchPosts }>
                    {buttonText}
                </button>
                <br />
                <ul>{postsJSX}</ul>
            </section>
        );
    }
}
