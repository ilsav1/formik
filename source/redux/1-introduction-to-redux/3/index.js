// AC − is an abbreviation of 'Action Creator'
export const removePostAC = (postId) => ({
    type:    'REMOVE_POST',
    payload: postId,
});
