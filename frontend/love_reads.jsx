import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import logger from 'redux-logger'
import rootReducer from './reducers/root_reducer'
import Root from './components/root'

import * as TAG from "./actions/tag_action"
const composedEnhancer = compose(applyMiddleware(thunk, logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const enhanser =  {
  development: composedEnhancer
  ,
  production: applyMiddleware(thunk)
  
}

const configureStore = (preloadState = {}) => 
  createStore(rootReducer, preloadState, enhanser[process.env.NODE_ENV])


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store
    if (window.currentUser) {
      const preloadState = {
        entities: {
          users: {[window.currentUser.info.id]: window.currentUser.info},
          bookshelves: window.currentUser.bookshelves,
          taggings:window.currentUser.taggings
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
    window.TAG = TAG


    ReactDOM.render(<Root store={store}/>, root);
});