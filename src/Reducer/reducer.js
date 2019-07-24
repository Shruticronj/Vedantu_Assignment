import * as actionType from "../Action/actionType";

const initialState = {
  repos: [],
  profile: {}
};

export const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_REPOS:
      return {
        ...state,
        repos: action.payload.data
      };

    case actionType.GET_PROFILE:
      return {
        ...state,
        profile: action.payload.data
      };

    default:
      return state;
  }
};

export default DataReducer;
