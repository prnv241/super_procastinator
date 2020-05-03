import * as ActionTypes from './actionTypes';
import { baseUrl } from '../shared/baseUrl';
import { newsAPI } from '../shared/apikey';

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
  }, 1000);
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


export const fetchNews = (topicURI) => (dispatch) => {
  dispatch(newsLoading(true));

  setTimeout(() => {
    return fetch(topicURI + newsAPI)
      .then(response => {
        if(response.ok) {
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
      .then((news) => dispatch(getNews(news)))
      .catch((error) => dispatch(newsFailed(error.message)));
  }, 1000);
};

export const newsLoading = () => ({
  type: ActionTypes.NEWS_LOADING
});

export const newsFailed = (errmess) => ({
  type: ActionTypes.NEWS_FAILED,
  payload: errmess
});

export const getNews = (news) => ({
  type: ActionTypes.GET_NEWS,
  payload: news
});

export const fetchGits = (langURI) => (dispatch) => {
  dispatch(gitLoading(true));

  setTimeout(() => {
    return fetch(langURI)
      .then(response => {
        if(response.ok) {
          console.log("resok");
          return response;
        } else {
          var error = new Error('Error' + response.status + ' : ' + response.statusText);
          error.response = response;
          throw error;
        }
      },error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
      .then((response) => response.json())
      .then((gits) => dispatch(getGit(gits)))
      .catch((error) => dispatch(gitFailed(error.message)));
  }, 1000);
};

export const gitLoading = () => ({
  type: ActionTypes.GIT_LOADING
});

export const gitFailed = (errmess) => ({
  type: ActionTypes.GIT_FAILED,
  payload: errmess
});

export const getGit = (gits) => ({
  type: ActionTypes.GET_GIT,
  payload: gits
})

export const fetchReddits = (rURI) => (dispatch) => {
  dispatch(redditLoading(true));

  setTimeout(() => {
    return fetch(rURI)
      .then(response => {
        if(response.ok) {
          console.log("resok");
          return response;
        } else {
          var error = new Error('Error' + response.status + ' : ' + response.statusText);
          error.response = response;
          throw error;
        }
      },error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
      .then((response) => response.json())
      .then((reddits) => dispatch(getReddit(reddits)))
      .catch((error) => dispatch(redditFailed(error.message)));
  }, 1000);
};

export const redditLoading = () => ({
  type: ActionTypes.REDDITS_LOADING
});

export const redditFailed = (errmess) => ({
  type: ActionTypes.REDDITS_FAILED,
  payload: errmess
});

export const getReddit = (reddits) => ({
  type: ActionTypes.GET_REDDITS,
  payload: reddits
})