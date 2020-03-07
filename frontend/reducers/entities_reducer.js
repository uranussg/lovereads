import {combineReducers} from "redux"
import usersReducer from './users_reducer'
import bookReducer from './books_reducer'
import bookshelvesReducer from './bookshelves_reducer'
import reviewReducer from './reviews_reducer'
import searchReducer from './search_reducer'
import writerReducer from './writer_reducer'
import tagReducer from './tags_reducer'
import taggingReducer from './tagging_reducer'

export default combineReducers ({
    users: usersReducer,
    bookshelves: bookshelvesReducer,
    books: bookReducer,
    reviews: reviewReducer,
    searchResults: searchReducer,
    writers: writerReducer,
    tags: tagReducer,
    taggings: taggingReducer


})