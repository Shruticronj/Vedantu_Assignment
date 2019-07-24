import * as actionType from './actionType';
import reposApi from '../Api/repos';

export function getUserDetails(){
    return (dispatch) => {
        reposApi.getUserDetails()
            .then(response => {
                dispatch(getUserDetailsAction(response));
            })
            .catch(err => {
                console.log("error occured ====>>>", err);
            })
    }
}

export function getRepos() {
    return (dispatch) => {
        reposApi.getRepos()
            .then(response => {
                dispatch(getReposAction(response));
            })
            .catch(err => {
                console.log("error while fetching repos")
            });
    }
}

export const getReposAction = item => {
   return  {
    type: actionType.GET_REPOS,
    payload: item
  } 
};

export const getUserDetailsAction = item => {
    return {
        type: actionType.GET_PROFILE,
        payload: item
    }
}