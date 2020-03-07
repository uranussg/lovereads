import * as APIUtil from '../utils/bookshelf_util'
import {RECEIVE_BOOKS, receiveBooks} from '../actions/book_action'

// export const RECEIVE_BOOKSHELVES = "RECEIVE_BOOKSHELVES"
export const RECEIVE_BOOKSHELF = "RECEIVE_BOOKSHELF"
export const RECEIVE_BOOKSHELF_ERRORS = "RECEIVE_BOOKSHELF_ERRORS"
export const REMOVE_BOOKSHELF = "REMOVE_BOOKSHELF"


// export const receiveBookshelves = (bookshelves) => ({
//     type: RECEIVE_BOOKSHELVES,
//     bookshelves
// }) 

export const receiveBookshelf = (bookshelf) => ({
    type: RECEIVE_BOOKSHELF,
    bookshelf
}) 

export const removeBookshelf = (bookshelf) => ({
    type: REMOVE_BOOKSHELF,
    bookshelf
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_BOOKSHELF_ERRORS,
    errors
})

export const fetchBookshelves = () => dispatch => {
    
    return APIUtil.fetchBookshelves()
    .then(bookshelves => {
        
        return dispatch(receiveBooks(bookshelves))},
    errors => dispatch(receiveErrors(errors.responseJSON)) )
}

export const fetchBookshelf = (title) => dispatch => {
    
    return APIUtil.fetchBookshelf(title)
    .then(books => dispatch(receiveBooks(books)),
    errors => dispatch(receiveErrors(errors.responseJSON)) )
}



export const createBookshelf = (Bookshelf) => dispatch => {
    
    return APIUtil.createBookshelf(Bookshelf)
    .then((bookshelf) => dispatch(receiveBookshelf(bookshelf)),
    errors=> dispatch(receiveErrors(errors.responseJSON)))
}

export const editBookshelf = (bookshelfId, bookshelf) => dispatch => {

    return APIUtil.editBookshelf(bookshelfId, bookshelf)
    .then((bookshelf) => dispatch(receiveBookshelf(bookshelf)),
    errors=> dispatch(receiveErrors(errors.responseJSON)))
}

export const deleteBookFromShelf = (bookshelfId) => dispatch => {

    return APIUtil.deleteBookshelf(bookshelfId)
    .then((bookshelf) => dispatch(removeBookshelf(bookshelf)),
    errors=> dispatch(receiveErrors(errors.responseJSON)))
}