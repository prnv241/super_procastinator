import * as ActionTypes from './actionTypes';

export const Reddits = (state = {
    isLoading: true,
    errMess: null,
    reddits: []
}, action) => {
    switch(action.type) {
        case ActionTypes.GET_REDDITS:
            return{...state, isLoading: false, errMess: null, reddits: action.payload }
        case ActionTypes.REDDITS_LOADING:
            return{...state, isLoading: true, errMess: null, reddits: [] };
        case ActionTypes.REDDITS_FAILED:
            return{...state, isLoading: false, errMess: action.payload, reddits: []};
        default:
            return state;
    }
}