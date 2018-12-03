// types.js
export const DELETE_POST = 'DELETE_POST';

// actions.js
export const deletePost = (postId) => ({
    type:    DELETE_POST,
    payload: postId,
});
