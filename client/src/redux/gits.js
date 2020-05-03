import * as ActionTypes from './actionTypes';

export const Gits = (state = {
    isLoading: true,
    errMess: null,
    gits: []
}, action) => {
    switch(action.type) {
        case ActionTypes.GET_GIT:
            return{...state, isLoading: false, errMess: null, gits: action.payload }
        case ActionTypes.GIT_LOADING:
            return{...state, isLoading: true, errMess: null, gits: [] };
        case ActionTypes.GIT_FAILED:
            return{...state, isLoading: false, errMess: action.payload, gits: []};
        default:
            return state;
    }
}