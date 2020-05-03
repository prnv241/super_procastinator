import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Todos } from './todos';
import { News } from './news';
import { Gits } from './gits';
import { Reddits } from './reddits';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      todos: Todos,
      news: News,
      gits: Gits,
      reddits: Reddits,
      ...createForms({
        feedback: InitialFeedback
      })
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
}