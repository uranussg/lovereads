import {RECEIVE_LIVE_SEARCH, CLEAR_SEARCH} from '../actions/search_action'
import { RECEIVE_BOOKS } from '../actions/book_action'

export default (state = {}, action) => {
    const newState = Object.assign({}, state)
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_LIVE_SEARCH:
            
            return action.books
        case RECEIVE_BOOKS:
            return {}
        case CLEAR_SEARCH:
            
            return {}

        default:
            return state
    }
}
