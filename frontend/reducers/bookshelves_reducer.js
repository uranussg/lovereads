
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_BOOKSHELF, RECEIVE_BOOKSHELVES } from '../actions/bookshelf_action'

export default (state = {}, action) => {
    // debugger

    Object.freeze(state)
    switch (action.type) {

        case RECEIVE_CURRENT_USER:
                return action.user.bookshelves || state
        case RECEIVE_BOOKSHELF:
            debugger
            const newState = Object.assign({}, state)
            newState[action.bookshelf.book_id] = action.bookshelf
            return newState
         
        case LOGOUT_CURRENT_USER:
            return {}

        default:
            return state
    }
}