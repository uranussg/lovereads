import {RECEIVE_BOOKS, RECEIVE_BOOK} from '../actions/book_action'
import {RECEIVE_WRITER} from '../actions/writer_action'

import {REMOVE_TAGGING, RECEIVE_TAGGING} from '../actions/tag_action';
export default (state = {}, action) => {
    

    const newState = Object.assign({}, state)
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_BOOKS:
            return action.books
         
        case RECEIVE_BOOK:
            
            newState[action.book.id] = action.book            
            return newState
        case RECEIVE_WRITER:
                   
            return action.writer.books
            case REMOVE_TAGGING:

                newState[action.tagging.book_id].tags[action.tagging.tag_id][1] -= 1
                return newState
            case RECEIVE_TAGGING:

                
                newState[action.tagging.book_id].tags[action.tagging.tag_id]? 
                newState[action.tagging.book_id].tags[action.tagging.tag_id][1] = newState[action.tagging.book_id].tags[action.tagging.tag_id][1] + 1 || 1:
                newState[action.tagging.book_id].tags[action.tagging.tag_id] = [action.tagging.name, 1] 
                return newState

        default:
            return state
    }
}