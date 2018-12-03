// Types
import { REMOVE_POST_ASYNC, REMOVE_POST } from './types';

export const removePostAsync = (postId) => ({
    type:    REMOVE_POST_ASYNC,
    payload: postId,
});

export const removePost = (postId) => ({
    type:    REMOVE_POST,
    payload: postId,
});

/* 1. call removePostAsync(postId) */
/* 2. do async work */
/* 3. call removePost(postId) */
