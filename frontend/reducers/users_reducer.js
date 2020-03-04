import { RECEIVE_CURRENT_USER} from '../actions/session_actions'

import {RECEIVE_BOOKSHELF} from '../actions/bookshelf_action'

export default (state = {}, action) => {
    // debugger
    const newState = Object.assign({},state)
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger
            newState[action.user.info.id] = action.user.info
            return newState
        case RECEIVE_BOOKSHELF:
            debugger
            const curr_user_id = action.bookshelf.user_id
            if (!newState[curr_user_id].bookshelves.includes(action.bookshelf.title))
            {
                newState.bookshelves.push(action.bookshelf.title)
            }
            return newState
            
        default:
            return state
    }
}



   