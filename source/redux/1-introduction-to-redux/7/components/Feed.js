// Core
import React, { Component } from 'react';

// Instruments
import { fetchPostsAsync } from '../actions/posts';
import dispatcher from '../dispatcher';
import PostsStore from '../stores/posts';

export class Feed extends Component {
    state = PostsStore.getState();

    componentDidMount() {
        PostsStore.subscribe(this._refreshState);
    }

    componentWillUnmount() {
        PostsStore.unsubscribe(this._refreshState);
    }

    _refreshState = () => {
        this.setState(PostsStore.getState());
    };

    _fetchPosts = () => {
        dispatcher.dispatch(fetchPostsAsync());
    };

    render() {
        const { posts, isPostsFetching } = this.state;

        const postsJSX = posts.map(({ message, id }) => (
            <li key = { id }>{message}</li>
        ));

        const buttonText = isPostsFetching ? 'Loading...' : 'Fetch posts';

        return (
            <section className = 'example'>
                <h1>Feed</h1>
                <br />
                <button
                    disabled = { isPostsFetching }
                    onClick = { this._fetchPosts }>
                    {buttonText}
                </button>
                <br />
                <ul>{postsJSX}</ul>
            </section>
        );
    }
}
