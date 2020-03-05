import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import logger from 'redux-logger'
import rootReducer from './reducers/root_reducer'
import Root from './components/root'


const configureStore = (preloadState = {}) => 
  createStore(rootReducer, preloadState, applyMiddleware(thunk, logger))


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store
    if (window.currentUser) {
      const preloadState = {
        entities: {
          users: {[window.currentUser.info.id]: window.currentUser.info},
          bookshelves: window.currentUser.bookshelves
        },
        session: {id: window.currentUser.info.id}
      }
      store = configureStore(preloadState);
    }
    else {
      store = configureStore();
      
    }
    window.getState = store.getState
    window.dispatch = store.dispatch


    ReactDOM.render(<Root store={store}/>, root);
});