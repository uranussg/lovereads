import *  as APIUtil from "../utils/book_util"

export const RECEIVE_BOOKS = "RECEIVE_BOOKS"
export const RECEIVE_BOOK = "RECEIVE_BOOK"
export const RECEIVE_BOOK_ERRORS = "RECEIVE_BOOK_ERRORS"


export const receiveBooks = (books) => ({
    type: RECEIVE_BOOKS,
    books
}) 

export const receiveBook = (book) => ({
    type: RECEIVE_BOOK,
    book
}) 

export const receiveErrors = (errors) => ({
    type: RECEIVE_BOOK_ERRORS,
    errors
})

export const fetchBooks = (user) => dispatch => {
    
    return APIUtil.fetchBooks(user)
    .then(books => dispatch(receiveBooks(books)),
    errors => dispatch(receiveErrors(errors.responseJSON)) )
}


export const fetchBook = (bookId) => dispatch => {
    
    return APIUtil.fetchBook(bookId)
    .then(book => dispatch(receiveBook(book)),
    errors => dispatch(receiveErrors(errors.responseJSON)) )
}


export const browseBooks = (type) => dispatch => {
    
    return APIUtil.browseBooks(type)
    .then(books => dispatch(receiveBooks(books)),
    errors => dispatch(receiveErrors(errors.responseJSON)) )
}