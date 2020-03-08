
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_BOOKSHELF, REMOVE_BOOKSHELF } from '../actions/bookshelf_action'   


export default (state = {}, action) => {
    

    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch (action.type) {

        case RECEIVE_CURRENT_USER:
            
                return action.user.bookshelves || state
        case RECEIVE_BOOKSHELF:
            newState[action.bookshelf.book_id] = action.bookshelf
            return newState
         
        case REMOVE_BOOKSHELF:

            newState[action.bookshelf.book_id] = undefined
            return newState


        case LOGOUT_CURRENT_USER:
            return {}

        default:
            return state
    }
}