import * as ActionTypes from './actionTypes';
import { baseUrl } from '../shared/baseUrl';

export const postTodo = (todo) => ({
  type: ActionTypes.ADD_TODOS,
  payload: todo
});

export const deleteTodo = (id) => ({
  type: ActionTypes.DELETE_TODOS,
  payload: id
})

export const addTodo = (todo) => (dispatch) => {
  const newTodo = {
    name: todo
  };

  return fetch(baseUrl + 'api/todos', {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(postTodo(response)))
    .catch(error => { console.log('post comments', error.message); alert('Your comment could not be posted\nError: ' + error.message); });
};

export const delTodo = (todoid) => (dispatch) => {
  return fetch(baseUrl + 'api/todos/' + todoid, {
    method: "DELETE"
  })
    .then(response => {
      if (response.ok) {
        return todoid;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        throw error;
      })
    // .then(response => response.json())
    .then(response => dispatch(deleteTodo(response)))
    .catch(error => { console.log('post comments', error.message); alert('Your comment could not be posted\nError: ' + error.message); });
};



export const fetchTodos = () => (dispatch) => {
  dispatch(todosLoading(true));
  setTimeout(() => {
    return fetch(baseUrl + 'api/todos')
      .then(response => {
        if (response.ok) {
          console.log("res : " + response);
          return response;
        } else {
          var error = new Error('Error' + response.status + ' : ' + response.statusText);
          error.response = response;
          throw error;
        }
      }, error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
      .then((response) => response.json())
      .then((todos) => dispatch(getTodos(todos)))
      .catch((error) => dispatch(todosFailed(error.message)));
  }, 2000);
};

export const todosLoading = () => ({
  type: ActionTypes.TODOS_LOADING
});

export const todosFailed = (errmess) => ({
  type: ActionTypes.TODOS_FAILED,
  payload: errmess
})

export const getTodos = (todos) => ({
  type: ActionTypes.GET_TODOS,
  payload: todos
})