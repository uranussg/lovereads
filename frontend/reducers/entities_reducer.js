import {combineReducers} from "redux"
import usersReducer from './users_reducer'
import bookReducer from './books_reducer'
import bookshelvesReducer from './bookshelves_reducer'

export default combineReducers ({
    users: usersReducer,
    bookshelves: bookshelvesReducer,
    books: bookReducer,

})