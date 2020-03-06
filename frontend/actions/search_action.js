import * as APIUtil from '../utils/search_util'

import  {RECEIVE_BOOKS, receiveBooks } from './book_action'

export const RECEIVE_LIVE_SEARCH = 'RECEIVE_LIVE_SEARCH'
export const CLEAR_SEARCH ="CLEAR_SEARCH"

export const receiveLiveSearch =(books) => ({
    type: RECEIVE_LIVE_SEARCH,
    books
})


export const receiveErrors = (errors) => ({
    type: RECEIVE_SEARCH_ERRORS,
    errors
})

export const clearSearch =()  =>({
    type:CLEAR_SEARCH
})

export const liveSearch = (body) => dispatch => {
    
    return APIUtil.searchBooks(body)
    .then(searchResults => dispatch(receiveLiveSearch(searchResults)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const search = (body) => dispatch => {
    
    return APIUtil.searchBooks(body)
    .then( books => {
        
        return dispatch(receiveBooks(books)
    )},
    errors => dispatch(receiveErrors(errors.responseJSON)))
}