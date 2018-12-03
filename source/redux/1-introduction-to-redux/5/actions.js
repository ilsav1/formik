// Types
import { REMOVE_POST, REMOVE_POST_SUCCESS, REMOVE_POST_FAIL } from './types';

/* FSA — Flux Standard Action */

export const removePost = (postId /* post id to be deleted... */) => ({
    type:    REMOVE_POST,
    payload: postId,
});

export const removePostSuccess = (
    postId /* post id to be deleted... */,
    meta /* additional info... */,
) => ({
    type:    REMOVE_POST_SUCCESS,
    payload: postId,
    meta,
});

export const removePostFail = (error /* error object... */) => ({
    type:    REMOVE_POST_FAIL,
    payload: error,
    error:   true,
});

/* 1. call removePost(postId) */
/* 2. do async work */
/* 3. call removePostSuccess(postId, meta) or removePostFail(error) */
