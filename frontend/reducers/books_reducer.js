import {RECEIVE_BOOKS, RECEIVE_BOOK} from '../actions/book_action'
import {RECEIVE_WRITER} from '../actions/writer_action'


export default (state = {}, action) => {
    

    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_BOOKS:
            return action.books
         
        case RECEIVE_BOOK:
            
            const newState = Object.assign({}, state)
            newState[action.book.id] = action.book            
            return newState
        case RECEIVE_WRITER:
                   
            return action.writer.books

        default:
            return state
    }
}