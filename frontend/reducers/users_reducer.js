import { RECEIVE_CURRENT_USER} from '../actions/session_actions'

import {RECEIVE_BOOKSHELF} from '../actions/bookshelf_action'
import { RECEIVE_REVIEW } from '../actions/review_actions'

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
            // debugger
            const curr_user_id = action.bookshelf.user_id
            if (!newState[curr_user_id].bookshelves.includes(action.bookshelf.title))
            {
                newState[curr_user_id].bookshelves.push(action.bookshelf.title)
            }
            return newState
        case RECEIVE_REVIEW:
                debugger
            const user_id = action.review.user_id
                if (!(Object.keys(newState[user_id].rate).includes(action.review.book_id)))
                {
                    newState[user_id].rate[action.review.book_id]= action.review.rate
                }
            return newState
        default:
            return state
    }
}



   