import * as actionType from './actionType';

export const getRepos = (item) => ({
    type: actionType.GET_REPOS,
    payload: item
});

export const getProfile = (item) => ({
    type: actionType.GET_PROFILE,
    payload: item
})