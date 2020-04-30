import * as ActionTypes from './actionTypes';

export const Todos = (state = {
  isLoading: true,
  errMess: null,
  todos: []
}, action) => {
  switch (action.type) {
    case ActionTypes.GET_TODOS:
      return { ...state, isLoading: false, errMess: null, todos: action.payload };
    case ActionTypes.TODOS_LOADING:
      return { ...state, isLoading: true, errMess: null, todos: [] };
    case ActionTypes.TODOS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload, todos: [] };
    case ActionTypes.ADD_TODOS:
      var todo = action.payload;
      return { ...state, todos: state.todos.concat(todo) };
    case ActionTypes.DELETE_TODOS:
      return { ...state, todos: state.todos.filter((todo) => todo._id !== action.payload) }
    default:
      return state;
  }
}