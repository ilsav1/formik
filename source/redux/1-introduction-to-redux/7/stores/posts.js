// Core
import { EventEmitter } from 'events';

// Instruments
import { FETCH_POSTS_ASYNC } from '../actions/posts/types';
import Dispatcher from '../dispatcher';

export default new class PostsStore extends EventEmitter {
    constructor() {
        super();

        this.state = {
            posts:           [],
            isPostsFetching: false,
        };

        Dispatcher.register((action) => {
            switch (action.type) {
                case FETCH_POSTS_ASYNC:
                    this.fetchPosts();
                    break;

                default:
                    return false;
            }
        });
    }

    subscribe(callback) {
        this.on('change', callback);
    }

    unsubscribe(callback) {
        this.removeListener('change', callback);
    }

    update() {
        this.emit('change');
    }

    getState() {
        return this.state;
    }

    async fetchPosts() {
        this.state.isPostsFetching = true;
        this.update();

        const posts = await new Promise((resolve) => {
            setTimeout(
                () => resolve([
                    { id: '123', message: 'First post 🎉' },
                    { id: '456', message: 'Second post 🐈🌟' },
                ]),
                3000,
            );
        });

        this.state.posts = posts;
        this.state.isPostsFetching = false;
        this.update();
    }
}();
