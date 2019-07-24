import * as actionType from '../action/actionType';

const initialState = {
    arr: [],
    profile: []
}

export const DataReducer = (state=initialState,action)=>{
    
    switch(action.type){
        
    case actionType.GET_REPOS: 
        return {
              ...state,
            arr: action.payload.data
          }
          break;

    case actionType.GET_PROFILE:
        return {
            ...state,
            profile: action.payload.data
        }
        break;
          default:
            return state;
      }

    } 
export default DataReducer;
