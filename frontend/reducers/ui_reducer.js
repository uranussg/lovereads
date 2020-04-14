import { START_LOADING_BOOKS } from '../actions/load_action'
import { RECEIVE_BOOK, RECEIVE_BOOKS } from '../actions/book_action'




export default (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch (action.type) {
        case START_LOADING_BOOKS:
            
            newState.load = action.load
            return newState
        case RECEIVE_BOOK:
            return {}
        case RECEIVE_BOOKS:
            return {}
        default:
            return state
    }
}
    